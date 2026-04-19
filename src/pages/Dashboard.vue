<script setup lang="ts">
import { ref, onMounted, onUnmounted, nextTick } from 'vue'
import { useRouter, useRoute } from 'vue-router'

const router = useRouter()
const route = useRoute()
const activeIndex = ref(0)
const observer = ref<IntersectionObserver | null>(null)
const base = import.meta.env.BASE_URL

// 🚀 文本解密函数
const scrambleText = (targetText: string, duration = 800) => {
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
      if (Math.random() < frame / totalFrames) {
        result += targetText[i]
      } else {
        result += chars[Math.floor(Math.random() * chars.length)]
      }
    }
    text.value = result
    frame++
    requestAnimationFrame(update)
  }
  update()
  return text
}

const domains = [
  { id: 'political', name: '政治安全', en: 'POLITICAL_SEC', desc: 'CORE_SYSTEM / 政权安全和制度安全是核心，坚持党的领导。', img: 'https://images.weserv.nl/?url=https://images.unsplash.com/photo-1508062878650-88b52897f298?w=1600' },
  { id: 'homeland', name: '国土安全', en: 'TERRITORY_SEC', desc: 'BORDER_CONTROL / 国家统一、边境领空领海不受侵犯。', img: 'https://images.weserv.nl/?url=https://images.unsplash.com/photo-1508804185872-d7badad00f7d?w=1600' },
  { id: 'military', name: '军事安全', en: 'MILITARY_FORCE', desc: 'IRON_WALL / 强军兴军，铸就捍卫主权与和平的坚固长城。', img: `${base}static/military.jpg` },
  { id: 'economic', name: '经济安全', en: 'ECON_STABILITY', desc: 'MARKET_BASE / 国计民生所在，保障产业链与金融体系自主。', img: `${base}static/economic.jpg` },
  { id: 'cultural', name: '文化安全', en: 'CULTURAL_HERITAGE', desc: 'SOUL_DEFENSE / 坚定文化自信，弘扬优秀传统文化。', img: `${base}static/cultural.jpg` },
  { id: 'social', name: '社会安全', en: 'SOCIAL_ORDER', desc: 'CIVIL_STABILITY / 防范化解重大风险，维护社会和谐。', img: 'https://images.weserv.nl/?url=https://images.unsplash.com/photo-1517486808906-6ca8b3f04846?w=1600' },
  { id: 'tech', name: '科技安全', en: 'TECH_FRONTIER', desc: 'INNOVATION_CORE / 实现高水平科技自立自强。', img: 'https://images.weserv.nl/?url=https://images.unsplash.com/photo-1518770660439-4636190af475?w=1600' },
  { id: 'cyber', name: '网络安全', en: 'CYBER_SHIELD', desc: 'NET_SOVEREIGNTY / 构筑清朗安全的数字空间防线。', img: 'https://images.weserv.nl/?url=https://images.unsplash.com/photo-1563986768609-322da13575f3?w=1200' },
  { id: 'ecology', name: '生态安全', en: 'ECOLOGY_VITAL', desc: 'GREEN_BARRIER / 绿水青山就是金山银山。', img: 'https://images.weserv.nl/?url=https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=1600' },
  { id: 'resource', name: '资源安全', en: 'RESOURCE_STRAT', desc: 'STRATEGIC_SUPPLY / 保障能源、水、粮食等核心战略资源。', img: 'https://images.unsplash.com/photo-1523348837708-15d4a09cfac2?w=1600' },
  { id: 'nuclear', name: '核安全', en: 'NUCLEAR_CONTROL', desc: 'SAFE_ENERGY / 坚持最高安全标准，确保万无一失。', img: `${base}static/nuclear.jpg` },
  { id: 'overseas', name: '海外利益', en: 'OVERSEAS_INTEREST', desc: 'GLOBAL_PROTECT / 中国脚步走到哪里，安全保护就跟到哪里。', img: 'https://images.weserv.nl/?url=https://images.unsplash.com/photo-1524661135-423995f22d0b?w=1200' },
  { id: 'bio', name: '生物安全', en: 'BIO_DEFENSE', desc: 'LIFE_SECURITY / 防范重大传染病和物种入侵。', img: 'https://images.weserv.nl/?url=https://images.unsplash.com/photo-1532187875605-1ef6c237ddc4?w=1600' },
  { id: 'space', name: '太空安全', en: 'SPACE_STRAT', desc: 'ORBIT_SOVEREIGNTY / 和平探索与利用太空资源，捍卫战略权益。', img: 'https://images.unsplash.com/photo-1446776811953-b23d57bd21aa?w=1600' },
  { id: 'deepsea', name: '深海安全', en: 'DEEP_SEA_MISSION', desc: 'ABYSS_EXPLORE / 提升深海进入与探测能力。', img: 'https://images.weserv.nl/?url=https://images.unsplash.com/photo-1439246854758-f686a415d9da?w=1600' },
  { id: 'polar', name: '极地安全', en: 'POLAR_SECURITY', desc: 'ICE_GOVERNANCE / 积极参与极地国际治理，和平开展科考。', img: 'https://images.weserv.nl/?url=https://images.unsplash.com/photo-1473081556163-2a17de81fc97?w=1600' },
]

// 存储解密状态
const decodedTitles = ref<Record<number, any>>({})

onMounted(async () => {
  const returnIdx = route.query.fromIndex
  if (returnIdx !== undefined) {
    await nextTick()
    setTimeout(() => scrollToSection(Number(returnIdx)), 100)
  }

  observer.value = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      const index = parseInt(entry.target.getAttribute('data-index') || '0')
      if (entry.isIntersecting) {
        entry.target.classList.add('is-visible')
        activeIndex.value = index
        if (index > 0 && index <= domains.length && !decodedTitles.value[index]) {
          decodedTitles.value[index] = scrambleText(domains[index - 1].name)
        }
      } else {
        entry.target.classList.remove('is-visible')
      }
    })
  }, { threshold: 0.5 })

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
      <!-- 🚀 修正：侧边导航仅对应现有页面 -->
      <div v-for="(_, i) in (domains.length + 1)" :key="i" class="hud-nav-item" :class="{ active: activeIndex === i }" @click="scrollToSection(i)">
        <span class="mono">{{ i < 10 ? '0'+i : i }}</span>
      </div>
    </div>

    <!-- Hero HUD -->
    <section class="ppt-section hero" data-index="0">
      <div class="perspective-grid"></div>
      <div class="content">
        <div class="reveal-snappy mono alert-tag">>> AUTH_SEC_LEVEL_04_ACCEPTED</div>
        <h1 class="hero-title serif reveal-snappy">总体国家安全观</h1>
        <div class="hero-line reveal-snappy"></div>
        <div class="scroll-arrow mono reveal-snappy">
          INIT_SYSTEM_SCAN
          <div class="arrow-icon">v</div>
        </div>
      </div>
    </section>

    <!-- 16 Domain HUDs -->
    <section 
      v-for="(item, index) in domains" 
      :key="item.id" 
      class="ppt-section domain-page"
      :data-index="index + 1"
      @click="navigateToDomain(item.id, index + 1)"
    >
      <div class="hud-bg">
        <div class="bg-img" :style="{ backgroundImage: `url(${item.img})` }"></div>
        <div class="red-tint"></div>
      </div>
      
      <div class="hud-corner top-left"></div>
      <div class="hud-corner bottom-right"></div>

      <div class="watermark mono">{{ index + 1 }}</div>
      
      <div class="content-box">
        <div class="status-header mono reveal-snappy">
          <span class="pulse"></span> NODE_ACTIVE: 0x{{ (index + 100).toString(16) }}
        </div>
        <div class="text-group">
          <div class="en-code mono reveal-snappy">> {{ item.en }}</div>
          <h2 class="title serif">{{ decodedTitles[index+1]?.value || item.name }}</h2>
          <div class="divider-hard reveal-snappy"></div>
          <p class="description mono reveal-snappy">{{ item.desc }}</p>
          <button class="access-btn mono btn-active-effect">
            > OPEN_ENCRYPTED_FILE
          </button>
        </div>
      </div>
    </section>

  </div>
</template>

<style scoped>
.command-container {
  height: 100vh; overflow-y: scroll;
  scroll-snap-type: y mandatory;
  background: #000; margin: -60px 0 0 0;
  perspective: 1000px;
}

.perspective-grid {
  position: absolute; bottom: 0; left: 0; width: 100%; height: 60%;
  background-image: 
    linear-gradient(rgba(255,0,60,0.1) 1px, transparent 1px),
    linear-gradient(90deg, rgba(255,0,60,0.1) 1px, transparent 1px);
  background-size: 50px 50px;
  transform: rotateX(60deg) scale(2);
  transform-origin: bottom;
  opacity: 0.5;
  mask-image: linear-gradient(to top, black, transparent);
}

.hud-side-nav {
  position: fixed; left: 15px; top: 50%;
  transform: translateY(-50%); z-index: 1001;
  display: flex; flex-direction: column; gap: 12px;
}
.hud-nav-item { font-size: 0.55rem; color: #222; padding: 5px; cursor: pointer; transition: 0.3s; }
.hud-nav-item.active { color: var(--alert-red); font-weight: bold; transform: scale(1.2); }

.ppt-section {
  height: 100vh; width: 100%;
  position: relative; scroll-snap-align: start; scroll-snap-stop: always;
  display: flex; align-items: center; justify-content: center;
}

.hud-corner { position: absolute; width: 15px; height: 15px; border-color: var(--alert-red); border-style: solid; z-index: 11; }
.top-left { top: 30px; left: 30px; border-width: 2px 0 0 2px; }
.bottom-right { bottom: 30px; right: 30px; border-width: 0 2px 2px 0; }

.hud-bg { position: absolute; inset: 0; z-index: 0; }
.bg-img { width: 100%; height: 100%; background-size: cover; background-position: center; filter: grayscale(1) brightness(0.3); }
.red-tint { position: absolute; inset: 0; background: rgba(255,0,60,0.05); mix-blend-mode: color; }

.content-box { position: relative; z-index: 10; width: 100%; max-width: 1100px; padding: 0 100px; }

.hero-title { font-size: clamp(2.5rem, 10vw, 6.5rem); font-weight: 900; margin: 0; letter-spacing: 0.1em; }
.hero-line { width: 60px; height: 2px; background: var(--alert-red); margin: 30px auto; }
.alert-tag { color: var(--alert-red); font-size: 0.75rem; letter-spacing: 2px; margin-bottom: 15px; }

.scroll-arrow { margin-top: 50px; font-size: 0.7rem; color: #444; letter-spacing: 3px; }
.arrow-icon { animation: bounce 2s infinite; margin-top: 10px; font-size: 1.2rem; }
@keyframes bounce { 0%, 20%, 50%, 80%, 100% {transform: translateY(0);} 40% {transform: translateY(-5px);} 60% {transform: translateY(-3px);} }

.status-header { font-size: 0.65rem; color: var(--alert-red); margin-bottom: 20px; display: flex; align-items: center; gap: 8px; }
.pulse { width: 6px; height: 6px; background: var(--alert-red); border-radius: 50%; animation: pulse 1.5s infinite; }
@keyframes pulse { 0% { opacity: 1; box-shadow: 0 0 2px var(--alert-red); } 50% { opacity: 0.4; box-shadow: 0 0 10px var(--alert-red); } 100% { opacity: 1; box-shadow: 0 0 2px var(--alert-red); } }

.title { font-size: clamp(2.5rem, 8vw, 5.5rem); color: #fff; line-height: 1.1; margin: 0; }
.divider-hard { width: 80px; height: 2px; background: #fff; margin: 30px 0; }
.divider-hard.centered { margin: 30px auto; }
.description { font-size: 1rem; color: #888; max-width: 450px; line-height: 1.8; margin-bottom: 40px; }

.access-btn { 
  background: transparent; border: 1px solid rgba(255,255,255,0.3); color: #fff; 
  padding: 16px 32px; font-size: 0.8rem; letter-spacing: 2px; cursor: pointer;
  min-height: 48px;
}
.access-btn:hover { background: var(--alert-red); border-color: var(--alert-red); }

.watermark { position: absolute; right: 30px; bottom: 30px; font-size: 15vw; font-weight: 900; color: #080808; pointer-events: none; }

@media (max-width: 768px) {
  .hud-corner { display: none; }
  .hud-side-nav { left: 8px; }
  .content-box { padding: 0 25px; }
  .title { font-size: 2.5rem; }
  .description { font-size: 0.9rem; max-width: 100%; }
  .access-btn { width: 100%; }
}
</style>