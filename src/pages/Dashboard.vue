<script setup lang="ts">
import { ref, onMounted, onUnmounted, nextTick, shallowRef } from 'vue'
import { useRouter, useRoute } from 'vue-router'

const router = useRouter()
const route = useRoute()
const activeIndex = ref(0)
const observer = ref<IntersectionObserver | null>(null)
const base = import.meta.env.BASE_URL

// 🚀 性能优化：使用 shallowRef 存储配置数据，并确保 16 张图片完全唯一
const domains = shallowRef([
  { id: 'political', name: '政治安全', en: 'POLITICAL_SEC', desc: 'CORE_SYSTEM / 政权安全和制度安全是核心，坚持党的领导。', img: 'https://images.weserv.nl/?url=https://images.unsplash.com/photo-1508062878650-88b52897f298?w=1600' },
  { id: 'homeland', name: '国土安全', en: 'TERRITORY_SEC', desc: 'BORDER_CONTROL / 国家统一、边境领空领海不受侵犯。', img: 'https://images.weserv.nl/?url=https://images.unsplash.com/photo-1508804185872-d7badad00f7d?w=1600' },
  { id: 'military', name: '军事安全', en: 'MILITARY_FORCE', desc: 'IRON_WALL / 强军兴军，铸就捍卫主权与和平的坚固长城。', img: `${base}static/military.jpg` },
  { id: 'economic', name: '经济安全', en: 'ECON_STABILITY', desc: 'MARKET_BASE / 国计民生所在，保障产业链与金融体系自主。', img: `${base}static/economic.jpg` },
  { id: 'cultural', name: '文化安全', en: 'CULTURAL_HERITAGE', desc: 'SOUL_DEFENSE / 坚定文化自信，弘扬优秀传统文化。', img: `${base}static/cultural.jpg` },
  { id: 'social', name: '社会安全', en: 'SOCIAL_ORDER', desc: 'CIVIL_STABILITY / 防范化解重大风险，维护社会和谐。', img: 'https://images.weserv.nl/?url=https://images.unsplash.com/photo-1517486808906-6ca8b3f04846?w=1600' },
  { id: 'tech', name: '科技安全', en: 'TECH_FRONTIER', desc: 'INNOVATION_CORE / 实现高水平科技自立自强。', img: 'https://images.weserv.nl/?url=https://images.unsplash.com/photo-1518770660439-4636190af475?w=1600' },
  { id: 'cyber', name: '网络安全', en: 'CYBER_SHIELD', desc: 'NET_SOVEREIGNTY / 构筑清朗安全的数字空间防线。', img: 'https://images.weserv.nl/?url=https://images.unsplash.com/photo-1550751827-4bd374c3f58b?w=1600' },
  { id: 'ecology', name: '生态安全', en: 'ECOLOGY_VITAL', desc: 'GREEN_BARRIER / 绿水青山就是金山银山。', img: 'https://images.weserv.nl/?url=https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=1600' },
  { id: 'resource', name: '资源安全', en: 'RESOURCE_STRAT', desc: 'STRATEGIC_SUPPLY / 保障能源、水、粮食等核心战略资源。', img: 'https://images.weserv.nl/?url=https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?w=1600' },
  { id: 'nuclear', name: '核安全', en: 'NUCLEAR_CONTROL', desc: 'SAFE_ENERGY / 坚持最高安全标准，确保万无一失。', img: `${base}static/nuclear.jpg` },
  { id: 'overseas', name: '海外利益', en: 'OVERSEAS_INTEREST', desc: 'GLOBAL_PROTECT / 中国脚步走到哪里，安全保护就跟到哪里。', img: 'https://images.weserv.nl/?url=https://images.unsplash.com/photo-1436450412740-6b988f486c6b?w=1600' },
  { id: 'bio', name: '生物安全', en: 'BIO_DEFENSE', desc: 'LIFE_SECURITY / 防范重大传染病和物种入侵。', img: 'https://images.weserv.nl/?url=https://images.unsplash.com/photo-1532187875605-1ef6c237ddc4?w=1600' },
  { id: 'space', name: '太空安全', en: 'SPACE_STRAT', desc: 'ORBIT_SOVEREIGNTY / 和平探索与利用太空资源，捍卫战略权益。', img: 'https://images.unsplash.com/photo-1446776811953-b23d57bd21aa?w=1600' },
  { id: 'deepsea', name: '深海安全', en: 'DEEP_SEA_MISSION', desc: 'ABYSS_EXPLORE / 提升深海进入与探测能力。', img: 'https://images.weserv.nl/?url=https://images.unsplash.com/photo-1439246854758-f686a415d9da?w=1600' },
  { id: 'polar', name: '极地安全', en: 'POLAR_SECURITY', desc: 'ICE_GOVERNANCE / 积极参与极地国际治理，和平开展科考。', img: 'https://images.weserv.nl/?url=https://images.unsplash.com/photo-1473081556163-2a17de81fc97?w=1600' },
])

const decodedTitles = ref<Record<number, any>>({})
const typingIndex = ref<Record<number, number>>({})
const loadedImages = ref<Record<number, boolean>>({})

const scrambleText = (targetText: string, duration = 600) => {
  const chars = '!<>-_\\/[]{}—=+*^?#________'
  const text = ref('')
  let frame = 0
  const totalFrames = duration / 16
  const update = () => {
    if (frame >= totalFrames) {
      text.value = targetText
      return
    }
    let result = ''
    for (let i = 0; i < targetText.length; i++) {
      if (Math.random() < frame / totalFrames) result += targetText[i]
      else result += chars[Math.floor(Math.random() * chars.length)]
    }
    text.value = result
    frame++
    requestAnimationFrame(update)
  }
  update()
  return text
}

onMounted(async () => {
  const returnIdx = route.query.fromIndex
  if (returnIdx !== undefined) {
    await nextTick()
    setTimeout(() => scrollToSection(Number(returnIdx)), 50)
  }

  observer.value = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      const index = parseInt(entry.target.getAttribute('data-index') || '0')
      if (entry.isIntersecting) {
        entry.target.classList.add('is-visible')
        activeIndex.value = index
        if (index > 0) loadedImages.value[index] = true
        if (index > 0 && index <= domains.value.length && !decodedTitles.value[index]) {
          decodedTitles.value[index] = scrambleText(domains.value[index - 1].name)
          let charIdx = 0
          const desc = domains.value[index - 1].desc
          const timer = setInterval(() => {
            typingIndex.value[index] = charIdx
            if (charIdx >= desc.length) clearInterval(timer)
            charIdx++
          }, 16)
        }
      } else {
        entry.target.classList.remove('is-visible')
      }
    })
  }, { threshold: 0.15, rootMargin: '200px' })

  document.querySelectorAll('.ppt-section').forEach(s => observer.value?.observe(s))
})

onUnmounted(() => {
  observer.value?.disconnect()
})

const navigateToDomain = (id: string, index: number) => {
  router.push({ path: `/domain/${id}`, query: { backIndex: index } })
}

const scrollToSection = (index: number) => {
  const sections = document.querySelectorAll('.ppt-section')
  sections[index]?.scrollIntoView({ behavior: 'auto' })
}
</script>

<template>
  <div class="command-container">
    <div class="hud-side-nav">
      <div v-for="(_, i) in (domains.length + 1)" :key="i" class="hud-nav-item" :class="{ active: activeIndex === i }" @click="scrollToSection(i)">
        <span class="mono">{{ i < 10 ? '0'+i : i }}</span>
      </div>
    </div>

    <section class="ppt-section hero" data-index="0">
      <div class="perspective-grid"></div>
      <div class="content">
        <div class="alert-tag mono">>> STATUS_OK_ROOT@TERMINAL</div>
        <h1 class="hero-title serif">总体国家安全观</h1>
        <div class="hero-line"></div>
        <div class="scroll-arrow mono">SWIPE_TO_EXPLORE<div class="arrow-icon">v</div></div>
      </div>
    </section>

    <section v-for="(item, index) in domains" :key="item.id" class="ppt-section domain-page" :data-index="index + 1" @click="navigateToDomain(item.id, index + 1)">
      <div class="hud-bg">
        <div class="bg-img" :style="{ backgroundImage: loadedImages[index + 1] ? `url(${item.img})` : 'none', opacity: loadedImages[index + 1] ? 1 : 0 }"></div>
        <div class="red-tint"></div>
      </div>
      <div class="hud-corner top-left"></div>
      <div class="hud-corner bottom-right"></div>
      <div class="watermark mono">{{ index + 1 }}</div>
      <div class="content-box">
        <div class="status-header mono"><span class="pulse"></span> [ SECURITY_NODE: 0x{{ (index + 100).toString(16) }} ]</div>
        <div class="text-group">
          <div class="en-code mono">> {{ item.en }}</div>
          <h2 class="title serif">{{ decodedTitles[index+1]?.value || item.name }}</h2>
          <div class="tactical-divider"><span class="line"></span><span class="tag mono">DATA_STREAM</span></div>
          <p class="description mono">{{ item.desc.substring(0, typingIndex[index+1] || 0) }}<span class="blink-cursor">|</span></p>
          <button class="access-btn mono">> OPEN_ENCRYPTED_ARCHIVE</button>
        </div>
      </div>
    </section>
  </div>
</template>

<style scoped>
.command-container { height: 100vh; overflow-y: scroll; scroll-snap-type: y mandatory; background: #000; margin: -60px 0 0 0; perspective: 1200px; -webkit-overflow-scrolling: touch; }
.perspective-grid { position: absolute; bottom: 0; left: 0; width: 100%; height: 60%; background-image: linear-gradient(rgba(255,0,60,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,0,60,0.1) 1px, transparent 1px); background-size: 50px 50px; transform: rotateX(60deg) scale(2.5); transform-origin: bottom; opacity: 0.4; will-change: transform; }
.hud-side-nav { position: fixed; left: 15px; top: 50%; transform: translateY(-50%); z-index: 1001; display: flex; flex-direction: column; gap: 12px; }
.hud-nav-item { font-size: 0.55rem; color: #222; padding: 5px; cursor: pointer; transition: 0.3s; }
.hud-nav-item.active { color: var(--alert-red); font-weight: bold; transform: scale(1.2); }
.ppt-section { height: 100vh; width: 100%; position: relative; scroll-snap-align: start; display: flex; align-items: center; justify-content: center; contain: layout; }
.hud-bg { position: absolute; inset: 0; z-index: 0; overflow: hidden; background: #000; }
.bg-img { width: 100%; height: 100%; background-size: cover; background-position: center; filter: grayscale(1) brightness(0.3); transition: opacity 1s ease-in; will-change: opacity; }
.red-tint { position: absolute; inset: 0; background: rgba(255,0,60,0.05); mix-blend-mode: color; pointer-events: none; }
.content-box { position: relative; z-index: 10; width: 100%; max-width: 1100px; padding: 0 100px; }
.hero-title { font-size: clamp(2.5rem, 10vw, 6.5rem); font-weight: 900; margin: 0; letter-spacing: 0.1em; color: #fff; }
.hero-line { width: 60px; height: 2px; background: var(--alert-red); margin: 30px auto; }
.alert-tag { color: var(--alert-red); font-size: 0.75rem; letter-spacing: 2px; margin-bottom: 15px; text-align: center; width: 100%; }
.scroll-arrow { margin-top: 50px; font-size: 0.7rem; color: #444; letter-spacing: 3px; text-align: center; }
.arrow-icon { animation: bounce 2s infinite; margin-top: 10px; font-size: 1.2rem; }
@keyframes bounce { 0%, 20%, 50%, 80%, 100% {transform: translateY(0);} 40% {transform: translateY(-5px);} 60% {transform: translateY(-3px);} }
.status-header { font-size: 0.65rem; color: var(--alert-red); margin-bottom: 20px; display: flex; align-items: center; gap: 8px; }
.pulse { width: 6px; height: 6px; background: var(--alert-red); border-radius: 50%; animation: pulse 1.5s infinite; will-change: opacity; }
@keyframes pulse { 0% { opacity: 1; box-shadow: 0 0 2px var(--alert-red); } 50% { opacity: 0.4; box-shadow: 0 0 10px var(--alert-red); } 100% { opacity: 1; box-shadow: 0 0 2px var(--alert-red); } }
.title { font-size: clamp(2.5rem, 8vw, 5.5rem); color: #fff; line-height: 1.1; margin: 0; min-height: 1.2em; }
.tactical-divider { display: flex; align-items: center; gap: 15px; margin: 30px 0; }
.tactical-divider .line { width: 100px; height: 1px; background: rgba(255,255,255,0.2); }
.tactical-divider .tag { font-size: 0.6rem; color: #444; letter-spacing: 2px; border: 1px solid #1a1a1a; padding: 2px 8px; }
.description { font-size: 1rem; color: #888; max-width: 450px; line-height: 1.8; margin-bottom: 40px; min-height: 4em; }
.blink-cursor { color: var(--alert-red); animation: blink 1s infinite; font-weight: bold; }
@keyframes blink { 0%, 100% { opacity: 1; } 50% { opacity: 0; } }
.access-btn { background: transparent; border: 1px solid rgba(255,255,255,0.3); color: #fff; padding: 16px 32px; font-size: 0.8rem; letter-spacing: 2px; cursor: pointer; transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1); }
.access-btn:hover { background: var(--alert-red); border-color: var(--alert-red); transform: translateX(5px); }
.watermark { position: absolute; right: 30px; bottom: 30px; font-size: 15vw; font-weight: 900; color: #080808; pointer-events: none; opacity: 0.2; }
@media (max-width: 768px) { .hud-side-nav { left: 8px; } .content-box { padding: 0 25px; } .title { font-size: 2.2rem; } .description { font-size: 0.9rem; max-width: 100%; min-height: auto; } .access-btn { width: 100%; } }
</style>