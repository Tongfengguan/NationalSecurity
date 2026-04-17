<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue'
import { useRouter } from 'vue-router'

const router = useRouter()
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
  { id: 'cyber', name: '网络安全', en: 'CYBERSPACE', desc: '没有网络安全就没有国家安全，构筑清朗安全的数字空间防线。', img: 'https://images.weserv.nl/?url=https://images.unsplash.com/photo-1550751827-4bd374c3f58b?w=1600' },
  { id: 'ecology', name: '生态安全', en: 'ECOLOGICAL', desc: '绿水青山就是金山银山，构筑尊崇自然、绿色发展的生态屏障。', img: 'https://images.weserv.nl/?url=https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=1600' },
  { id: 'resource', name: '资源安全', en: 'RESOURCES', desc: '保障能源、水、粮食等核心战略资源的可持续与稳定供应。', img: 'https://images.unsplash.com/photo-1523348837708-15d4a09cfac2?w=1600' },
  { id: 'nuclear', name: '核安全', en: 'NUCLEAR', desc: '坚持最高安全标准，确保核能和平开发利用万无一失。', img: `${base}static/nuclear.jpg` },
  { id: 'overseas', name: '海外利益安全', en: 'OVERSEAS', desc: '中国脚步走到哪里，安全保护就跟到哪里，维护侨胞与资产安全。', img: 'https://images.weserv.nl/?url=https://images.unsplash.com/photo-1436450412740-6b988f486c6b?w=1200' },
  { id: 'bio', name: '生物安全', en: 'BIOLOGICAL', desc: '防范重大传染病和外来物种入侵，守护人民生命健康底线。', img: 'https://images.weserv.nl/?url=https://images.unsplash.com/photo-1532187875605-1ef6c237ddc4?w=1600' },
  { id: 'space', name: '太空安全', en: 'OUTER SPACE', desc: '和平探索与利用太空资源，捍卫国家在外太空的战略权益。', img: 'https://images.weserv.nl/?url=https://images.unsplash.com/photo-1446776811953-b23d57bd21aa?w=1600' },
  { id: 'deepsea', name: '深海安全', en: 'DEEP SEA', desc: '提升深海进入与探测能力，科学开发海洋，维护海洋强国利益。', img: 'https://images.weserv.nl/?url=https://images.unsplash.com/photo-1439246854758-f686a415d9da?w=1600' },
  { id: 'polar', name: '极地安全', en: 'POLAR REGIONS', desc: '积极参与极地国际治理，和平开展科考，守护极地生态环境。', img: 'https://images.weserv.nl/?url=https://images.unsplash.com/photo-1473081556163-2a17de81fc97?w=1600' },
]

onMounted(() => {
  observer.value = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('is-visible')
        activeIndex.value = parseInt(entry.target.getAttribute('data-index') || '0')
      } else {
        // 当离开视口时移除类，实现往返滑动都有动画
        entry.target.classList.remove('is-visible')
      }
    })
  }, { threshold: 0.5 })

  document.querySelectorAll('.ppt-section').forEach(s => observer.value?.observe(s))
})

onUnmounted(() => {
  observer.value?.disconnect()
})

const navigateToDomain = (id: string) => {
  router.push(`/domain/${id}`)
}

const scrollToSection = (index: number) => {
  const sections = document.querySelectorAll('.ppt-section')
  sections[index]?.scrollIntoView({ behavior: 'smooth' })
}
</script>

<template>
  <div class="ppt-container">
    
    <!-- 侧边导航：PPT 页码感 -->
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
        <h1 class="hero-title serif split-reveal">总体国家安全观</h1>
        <div class="hero-line reveal-item delay-1"></div>
        <p class="hero-subtitle reveal-item delay-2">居安思危 · 大国重器</p>
        <div class="scroll-indicator reveal-item delay-3">
          <div class="mouse"></div>
          <span>SCROLL</span>
        </div>
      </div>
    </section>

    <!-- 16个领域 PPT -->
    <section 
      v-for="(item, index) in domains" 
      :key="item.id" 
      class="ppt-section domain-page"
      :data-index="index + 1"
      @click="navigateToDomain(item.id)"
    >
      <div class="bg-wrapper">
        <div class="bg-image" :style="{ backgroundImage: `url(${item.img})` }"></div>
        <div class="bg-overlay"></div>
      </div>
      
      <div class="content-box">
        <div class="index-tag reveal-item">0{{ index + 1 }} / 16</div>
        <div class="text-group">
          <div class="en-tag reveal-item delay-1">{{ item.en }}</div>
          <h2 class="title serif reveal-item delay-2">{{ item.name }}</h2>
          <div class="accent-bar reveal-item delay-2"></div>
          <p class="description reveal-item delay-3">{{ item.desc }}</p>
          <div class="action-hint reveal-item delay-4">
            <span>了解档案详情</span>
            <el-icon><Right /></el-icon>
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
          <span class="l">举报受理热线</span>
          <span class="n serif">12339</span>
        </div>
        <button class="footer-btn" @click.stop="$router.push('/knowledge')">进入官方知识库</button>
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
  background: #000;
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
}

/* ======== PPT 导航 ======== */
.ppt-nav {
  position: fixed;
  right: 30px; top: 50%;
  transform: translateY(-50%);
  z-index: 1000;
  display: flex; flex-direction: column; gap: 20px;
}

.nav-point {
  width: 6px; height: 6px;
  background: rgba(255,255,255,0.3);
  border-radius: 50%;
  cursor: pointer;
  position: relative;
  transition: all 0.4s cubic-bezier(0.16, 1, 0.3, 1);
}

.nav-point.active {
  background: var(--cinnabar-red);
  transform: scale(2);
}

.nav-label {
  position: absolute;
  right: 20px; top: 50%;
  transform: translateY(-50%);
  color: #fff; font-size: 0.75rem;
  white-space: nowrap;
  opacity: 0; pointer-events: none;
  transition: all 0.3s;
  letter-spacing: 1px;
}

.nav-point:hover .nav-label { opacity: 0.7; transform: translateY(-50%) translateX(-5px); }

/* ======== 进场动画系统 ======== */
.reveal-item {
  opacity: 0;
  transform: translateY(20px);
  transition: all 0.8s cubic-bezier(0.16, 1, 0.3, 1);
}

.is-visible .reveal-item {
  opacity: 1; transform: translateY(0);
}

.delay-1 { transition-delay: 0.1s; }
.delay-2 { transition-delay: 0.2s; }
.delay-3 { transition-delay: 0.3s; }
.delay-4 { transition-delay: 0.4s; }

/* ======== 页面样式 ======== */
.bg-wrapper { position: absolute; inset: 0; z-index: 0; }
.bg-image { 
  width: 100%; height: 100%; 
  background-size: cover; background-position: center;
  transition: transform 1.5s cubic-bezier(0.16, 1, 0.3, 1);
}
.is-visible .bg-image { transform: scale(1.05); }

.bg-overlay {
  position: absolute; inset: 0;
  background: linear-gradient(135deg, rgba(0,0,0,0.9) 0%, rgba(0,0,0,0.5) 50%, rgba(0,0,0,0.8) 100%);
}

.content-box {
  position: relative; z-index: 10;
  width: 100%; max-width: 1000px;
  padding: 0 50px;
}

.index-tag {
  font-size: 0.8rem; letter-spacing: 4px; color: var(--gold-dust);
  margin-bottom: 40px;
}

.en-tag { font-size: 1rem; letter-spacing: 8px; opacity: 0.5; margin-bottom: 10px; color: #fff; }
.title { font-size: clamp(3rem, 10vw, 6rem); margin: 0; color: #fff; }
.accent-bar { width: 80px; height: 4px; background: var(--cinnabar-red); margin: 30px 0; }
.description { font-size: 1.2rem; line-height: 1.8; color: #ddd; max-width: 500px; margin-bottom: 50px; }

.action-hint {
  display: flex; align-items: center; gap: 15px;
  font-weight: bold; letter-spacing: 2px; color: #fff;
  cursor: pointer;
}

/* ======== Hero 特殊样式 ======== */
.hero-bg {
  position: absolute; inset: 0;
  background: radial-gradient(circle at center, #1a1a1a 0%, #000 100%);
}
.hero-title { font-size: clamp(3.5rem, 12vw, 8rem); margin: 0; }
.hero-line { width: 100px; height: 2px; background: var(--gold-dust); margin: 40px auto; }
.hero-subtitle { font-size: 1.5rem; letter-spacing: 0.3em; color: #888; }

/* ======== Footer 特殊样式 ======== */
.footer-page { background: #000; }
.final-title { font-size: 4rem; color: #fff; }
.final-divider { width: 60px; height: 4px; background: var(--cinnabar-red); margin: 40px auto; }
.hotline-card { margin-bottom: 60px; }
.hotline-card .l { display: block; font-size: 1rem; color: #666; margin-bottom: 10px; }
.hotline-card .n { font-size: 6rem; color: var(--cinnabar-red); }

.footer-btn {
  background: var(--cinnabar-red); color: #fff; border: none;
  padding: 18px 50px; border-radius: 4px; font-size: 1rem;
  font-weight: bold; cursor: pointer; transition: 0.3s;
}
.footer-btn:hover { background: #fff; color: #000; }

@media (max-width: 768px) {
  .ppt-nav { display: none; }
  .content-box { padding: 0 30px; }
  .title { font-size: 2.8rem; }
  .description { font-size: 1rem; }
  .hotline-card .n { font-size: 3.5rem; }
  .hero-title { font-size: 3.5rem; }
}
</style>