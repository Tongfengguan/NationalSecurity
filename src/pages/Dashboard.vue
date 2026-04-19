<script setup lang="ts">
import { ref, onMounted, onUnmounted, nextTick } from 'vue'
import { useRouter, useRoute } from 'vue-router'

const router = useRouter()
const route = useRoute()
const activeIndex = ref(0)
const observer = ref<IntersectionObserver | null>(null)
const base = import.meta.env.BASE_URL

const domains = [
  { id: 'political', name: '政治安全', en: 'POLITICAL', desc: '政权安全和制度安全是核心，坚持党的领导，捍卫国家根本制度。', img: 'https://images.weserv.nl/?url=https://images.unsplash.com/photo-1508062878650-88b52897f298?w=1600' },
  { id: 'homeland', name: '国土安全', en: 'HOMELAND', desc: '国家统一、边境领空领海不受侵犯，是生存与发展的基本底线。', img: 'https://images.weserv.nl/?url=https://images.unsplash.com/photo-1508804185872-d7badad00f7d?w=1600' },
  { id: 'military', name: '军事安全', en: 'MILITARY', desc: '强军兴军，铸就捍卫国家主权与和平的坚固钢铁长城。', img: `${base}static/military.jpg` },
  { id: 'economic', name: '经济安全', en: 'ECONOMIC', desc: '国计民生所在，保障产业链供应链与金融体系的自主可控。', img: `${base}static/economic.jpg` },
  { id: 'cultural', name: '文化安全', en: 'CULTURAL', desc: '坚定文化自信，弘扬中华优秀传统文化，抵御不良侵蚀。', img: `${base}static/cultural.jpg` },
  { id: 'social', name: '社会安全', en: 'SOCIAL', desc: '防范化解重大风险，打击违法犯罪，维护社会和谐稳定。', img: 'https://images.weserv.nl/?url=https://images.unsplash.com/photo-1517048676732-d65bc937f952?w=1600' },
  { id: 'tech', name: '科技安全', en: 'TECHNOLOGY', desc: '实现高水平科技自立自强，把关键核心技术牢牢掌握在自己手中。', img: 'https://images.weserv.nl/?url=https://images.unsplash.com/photo-1518770660439-4636190af475?w=1600' },
  { id: 'cyber', name: '网络安全', en: 'CYBERSPACE', desc: '没有网络安全就没有国家安全，构筑清朗安全的数字空间防线。', img: 'https://images.weserv.nl/?url=https://images.unsplash.com/photo-1563986768609-322da13575f3?w=1200' },
  { id: 'ecology', name: '生态安全', en: 'ECOLOGICAL', desc: '绿水青山就是金山银山，构筑尊崇自然、绿色发展的生态屏障。', img: 'https://images.weserv.nl/?url=https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=1600' },
  { id: 'resource', name: '资源安全', en: 'RESOURCES', desc: '保障能源、水、粮食等核心战略资源的可持续与稳定供应。', img: 'https://images.unsplash.com/photo-1523348837708-15d4a09cfac2?w=1600' },
  { id: 'nuclear', name: '核安全', en: 'NUCLEAR', desc: '坚持最高安全标准，确保核能和平开发利用万无一失。', img: `${base}static/nuclear.jpg` },
  { id: 'overseas', name: '海外利益安全', en: 'OVERSEAS', desc: '中国脚步走到哪里，安全保护就跟到哪里，维护侨胞与资产安全。', img: 'https://images.weserv.nl/?url=https://images.unsplash.com/photo-1524661135-423995f22d0b?w=1200' },
  { id: 'bio', name: '生物安全', en: 'BIOLOGICAL', desc: '防范重大传染病和外来物种入侵，守护人民生命健康底线。', img: 'https://images.weserv.nl/?url=https://images.unsplash.com/photo-1532187875605-1ef6c237ddc4?w=1600' },
  { id: 'space', name: '太空安全', en: 'OUTER SPACE', desc: '和平探索与利用太空资源，捍卫国家在外太空的战略权益。', img: 'https://images.unsplash.com/photo-1446776811953-b23d57bd21aa?w=1600' },
  { id: 'deepsea', name: '深海安全', en: 'DEEP SEA', desc: '提升深海进入与探测能力，科学开发海洋，维护海洋强国利益。', img: 'https://images.unsplash.com/photo-1439246854758-f686a415d9da?w=1600' },
  { id: 'polar', name: '极地安全', en: 'POLAR REGIONS', desc: '积极参与极地国际治理，和平开展科考，守护极地生态环境。', img: 'https://images.unsplash.com/photo-1473081556163-2a17de81fc97?w=1600' },
]

onMounted(async () => {
  // 🚀 核心优化：如果带有返回参数，自动定位到对应 PPT 页
  const returnIdx = route.query.fromIndex
  if (returnIdx !== undefined) {
    await nextTick()
    setTimeout(() => {
      scrollToSection(Number(returnIdx))
    }, 100)
  }

  observer.value = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('is-visible')
        activeIndex.value = parseInt(entry.target.getAttribute('data-index') || '0')
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
  // 将当前的屏数索引传给详情页
  router.push({
    path: `/domain/${id}`,
    query: { backIndex: index }
  })
}

const scrollToSection = (index: number) => {
  const sections = document.querySelectorAll('.ppt-section')
  sections[index]?.scrollIntoView({ behavior: 'auto' }) // 返回时使用 auto 避免和页面转场冲突
}
</script>

<template>
  <div class="ppt-container">
    
    <nav class="ppt-nav">
      <div 
        v-for="(_, i) in (domains.length + 2)" 
        :key="i"
        class="nav-point"
        :class="{ active: activeIndex === i }"
        @click="scrollToSection(i)"
      >
        <span class="nav-label" v-if="i > 0 && i <= domains.length">{{ domains[i-1].name }}</span>
      </div>
    </nav>

    <!-- 序幕 -->
    <section class="ppt-section hero" data-index="0">
      <div class="hero-bg"></div>
      <div class="content">
        <div class="reveal-item"><span class="top-tag">OFFICIAL DOSSIER 2026</span></div>
        <h1 class="hero-title serif reveal-item delay-1">总体国家安全观</h1>
        <div class="hero-line reveal-item delay-2"></div>
        <p class="hero-subtitle reveal-item delay-3">以人民安全为宗旨 · 以政治安全为根本</p>
        <div class="scroll-indicator reveal-item delay-4">
          <div class="scroll-line"></div>
          <span class="scroll-text">向下滚动</span>
        </div>
      </div>
    </section>

    <!-- 16个领域 PPT -->
    <section 
      v-for="(item, index) in domains" 
      :key="item.id" 
      class="ppt-section domain-page"
      :data-index="index + 1"
      @click="navigateToDomain(item.id, index + 1)"
    >
      <div class="bg-wrapper">
        <div class="bg-image" :style="{ backgroundImage: `url(${item.img})` }"></div>
        <div class="bg-overlay"></div>
      </div>
      
      <div class="watermark-num">{{ index + 1 }}</div>
      
      <div class="content-box">
        <div class="index-tag reveal-item">SECTION / 0{{ index + 1 }}</div>
        <div class="text-group">
          <div class="en-tag reveal-item delay-1">{{ item.en }}</div>
          <h2 class="title serif reveal-item delay-2">{{ item.name }}</h2>
          <div class="accent-bar reveal-item delay-2"></div>
          <p class="description reveal-item delay-3">{{ item.desc }}</p>
          <div class="action-hint reveal-item delay-4">
            <span class="view-label">查看详情</span>
            <div class="view-btn"><el-icon><Right /></el-icon></div>
          </div>
        </div>
      </div>
    </section>
    
    <!-- 结尾 -->
    <section class="ppt-section footer-page" :data-index="domains.length + 1">
      <div class="content text-center reveal-item">
        <h2 class="final-title serif">安而不忘危</h2>
        <div class="final-divider"></div>
        <div class="hotline-card">
          <span class="l">NATIONAL HOTLINE</span>
          <span class="n serif">12339</span>
        </div>
        <button class="premium-button" @click.stop="$router.push('/knowledge')">进入知识库</button>
      </div>
    </section>

  </div>
</template>

<style scoped>
.ppt-container {
  height: 100vh;
  overflow-y: scroll;
  scroll-snap-type: y mandatory;
  scroll-behavior: smooth;
  background: var(--ink-black);
  margin: -60px 0 0 0;
}

.ppt-container::-webkit-scrollbar { display: none; }

.ppt-section {
  height: 100vh; width: 100%;
  position: relative;
  scroll-snap-align: start;
  scroll-snap-stop: always;
  display: flex; align-items: center; justify-content: center;
  overflow: hidden;
  transform: translateZ(0);
}

.ppt-nav {
  position: fixed;
  right: 30px; top: 50%;
  transform: translateY(-50%);
  z-index: 1000;
  display: flex; flex-direction: column; gap: 24px;
}

.nav-point {
  width: 2px; height: 12px;
  background: rgba(255,255,255,0.1);
  cursor: pointer;
  position: relative;
  transition: all 0.4s var(--transition-smooth);
}

.nav-point.active { background: var(--cinnabar-red); height: 40px; }

.nav-label {
  position: absolute;
  right: 30px; top: 50%;
  transform: translateY(-50%);
  color: #fff; font-size: 0.7rem;
  white-space: nowrap; opacity: 0; pointer-events: none;
  transition: all 0.4s var(--transition-smooth);
  letter-spacing: 3px;
  text-transform: uppercase;
}

.nav-point:hover .nav-label { opacity: 0.5; transform: translateY(-50%) translateX(-10px); }

.reveal-item {
  opacity: 0;
  transform: translate3d(0, 20px, 0);
  transition: all 0.8s var(--transition-smooth);
}

.is-visible .reveal-item { opacity: 1; transform: translate3d(0, 0, 0); }

.delay-1 { transition-delay: 0.1s; }
.delay-2 { transition-delay: 0.2s; }
.delay-3 { transition-delay: 0.3s; }
.delay-4 { transition-delay: 0.4s; }

.bg-wrapper { position: absolute; inset: 0; z-index: 0; }
.bg-image { 
  width: 100%; height: 100%; 
  background-size: cover; background-position: center;
}

.bg-overlay {
  position: absolute; inset: 0;
  background: radial-gradient(circle at 30% 50%, rgba(0,0,0,0.4) 0%, rgba(0,0,0,0.95) 80%);
}

.content-box {
  position: relative; z-index: 10;
  width: 100%; max-width: 1200px;
  padding: 0 80px;
}

.index-tag { font-size: 0.75rem; letter-spacing: 5px; color: var(--gold-dust); margin-bottom: 40px; opacity: 0.6; }
.en-tag { font-size: 0.9rem; letter-spacing: 10px; opacity: 0.3; margin-bottom: 12px; color: #fff; }
.title { font-size: clamp(2.5rem, 10vw, 6rem); margin: 0; color: #fff; font-weight: 700; line-height: 1; }
.accent-bar { width: 80px; height: 2px; background: var(--cinnabar-red); margin: 30px 0; }
.description { font-size: 1.1rem; line-height: 1.8; color: #aaa; max-width: 500px; margin-bottom: 40px; font-weight: 300; }

.action-hint { display: flex; align-items: center; gap: 20px; cursor: pointer; }
.view-label { font-size: 0.8rem; letter-spacing: 4px; font-weight: 600; opacity: 0.4; }
.view-btn {
  width: 50px; height: 50px; border-radius: 50%;
  border: 1px solid rgba(255,255,255,0.1);
  display: flex; align-items: center; justify-content: center;
  font-size: 1.1rem; transition: all 0.4s var(--transition-smooth);
}

.watermark-num {
  position: absolute; right: 5%; bottom: -5%;
  font-size: 35vw; font-weight: 900;
  color: transparent; -webkit-text-stroke: 1px rgba(255,255,255,0.03);
  pointer-events: none; z-index: 1;
}

.hero-bg { position: absolute; inset: 0; background: radial-gradient(circle at center, #111 0%, #000 100%); }
.top-tag { font-size: 0.8rem; letter-spacing: 8px; color: var(--gold-dust); margin-bottom: 30px; }
.hero-title { font-size: clamp(3rem, 12vw, 8rem); font-weight: 900; margin: 0; color: #fff; letter-spacing: 0.2em; }
.hero-line { width: 100px; height: 1px; background: rgba(255,255,255,0.2); margin: 40px auto; }
.hero-subtitle { font-size: 1.2rem; letter-spacing: 0.4em; color: #666; font-weight: 300; }

.scroll-prompt { position: absolute; bottom: 60px; left: 50%; transform: translateX(-50%); display: flex; flex-direction: column; align-items: center; gap: 15px; }
.scroll-line { width: 1px; height: 60px; background: linear-gradient(to bottom, var(--cinnabar-red), transparent); animation: scroll-ani 2s infinite ease-in-out; }
.scroll-text { font-size: 0.7rem; letter-spacing: 4px; opacity: 0.3; }

@keyframes scroll-ani { 0%, 100% { transform: scaleY(0.5); } 50% { transform: scaleY(1); } }

.final-title { font-size: clamp(2.5rem, 8vw, 5rem); color: #fff; letter-spacing: 0.1em; }
.final-divider { width: 60px; height: 1px; background: var(--gold-dust); margin: 35px auto; }
.hotline-card .l { display: block; font-size: 0.8rem; color: #444; letter-spacing: 4px; margin-bottom: 12px; }
.hotline-card .n { font-size: clamp(3.5rem, 10vw, 7rem); color: var(--cinnabar-red); line-height: 1; letter-spacing: 10px; }

.premium-button {
  background: transparent; border: 1px solid rgba(255,255,255,0.1);
  color: #fff; padding: 18px 40px; font-size: 0.8rem;
  letter-spacing: 4px; font-weight: 600; cursor: pointer;
  transition: all 0.4s var(--transition-smooth);
}
.premium-button:hover { background: #fff; color: #000; border-color: #fff; }

@media (max-width: 768px) {
  .ppt-nav { display: none; }
  .content-box { padding: 0 40px; }
  .title { font-size: 3rem; }
  .description { font-size: 1rem; line-height: 1.6; }
}
</style>