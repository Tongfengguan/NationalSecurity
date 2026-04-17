<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue'
import { useRouter } from 'vue-router'

const router = useRouter()
const observer = ref<IntersectionObserver | null>(null)
const activeIndex = ref(0) // 侧边进度追踪

// 获取基准路径
const base = import.meta.env.BASE_URL

const domains = [
  { id: 'political', name: '政治安全', en: 'POLITICAL', desc: '政权安全和制度安全是核心，坚持党的领导，捍卫国家根本制度。', img: 'https://images.weserv.nl/?url=https://images.unsplash.com/photo-1508062878650-88b52897f298?w=1600' },
  { id: 'homeland', name: '国土安全', en: 'HOMELAND', desc: '国家统一、边境领空领海不受侵犯，是生存与发展的基本底线。', img: 'https://images.weserv.nl/?url=https://images.unsplash.com/photo-1508804185872-d7badad00f7d?w=1600' },
  { id: 'military', name: '军事安全', en: 'MILITARY', desc: '强军兴军，铸就捍卫国家主权与和平的坚固钢铁长城。', img: `${base}static/military.jpg` },
  { id: 'economic', name: '经济安全', en: 'ECONOMIC', desc: '国计民生所在，保障产业链供应链与金融体系的自主可控。', img: `${base}static/economic.jpg` },
  { id: 'cultural', name: '文化安全', en: 'CULTURAL', desc: '坚定文化自信，弘扬中华优秀传统文化，抵御不良侵蚀。', img: `${base}static/cultural.jpg` },
  { id: 'social', name: '社会安全', en: 'SOCIAL', desc: '防范化解重大风险，打击违法犯罪，维护社会和谐稳定。', img: 'https://images.weserv.nl/?url=https://images.unsplash.com/photo-1517486808906-6ca8b3f04846?w=1600' },
  { id: 'tech', name: '科技安全', en: 'TECHNOLOGY', desc: '实现高水平科技自立自强，把关键核心技术牢牢掌握在自己手中。', img: 'https://images.weserv.nl/?url=https://images.unsplash.com/photo-1518770660439-4636190af475?w=1600' },
  { id: 'cyber', name: '网络安全', en: 'CYBERSPACE', desc: '没有网络安全就没有国家安全，构筑清朗安全的数字空间防线。', img: 'https://images.weserv.nl/?url=https://images.unsplash.com/photo-1563986768609-322da13575f3?w=1600' },
  { id: 'ecology', name: '生态安全', en: 'ECOLOGICAL', desc: '绿水青山就是金山银山，构筑尊崇自然、绿色发展的生态屏障。', img: 'https://images.weserv.nl/?url=https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=1600' },
  { id: 'resource', name: '资源安全', en: 'RESOURCES', desc: '保障能源、水、粮食等核心战略资源的可持续与稳定供应。', img: 'https://images.weserv.nl/?url=https://images.unsplash.com/photo-1523348837708-15d4a09cfac2?w=1600' },
  { id: 'nuclear', name: '核安全', en: 'NUCLEAR', desc: '坚持最高安全标准，确保核能和平开发利用万无一失。', img: `${base}static/nuclear.jpg` },
  { id: 'overseas', name: '海外利益安全', en: 'OVERSEAS', desc: '中国脚步走到哪里，安全保护就跟到哪里，维护侨胞与资产安全。', img: 'https://images.weserv.nl/?url=https://images.unsplash.com/photo-1524661135-423995f22d0b?w=1600' },
  { id: 'bio', name: '生物安全', en: 'BIOLOGICAL', desc: '防范重大传染病和外来物种入侵，守护人民生命健康底线。', img: 'https://images.weserv.nl/?url=https://images.unsplash.com/photo-1579154236594-c148f179fa7a?w=1600' },
  { id: 'space', name: '太空安全', en: 'OUTER SPACE', desc: '和平探索与利用太空资源，捍卫国家在外太空的战略权益。', img: 'https://images.weserv.nl/?url=https://images.unsplash.com/photo-1446776811953-b23d57bd21aa?w=1600' },
  { id: 'deepsea', name: '深海安全', en: 'DEEP SEA', desc: '提升深海进入与探测能力，科学开发海洋，维护海洋强国利益。', img: 'https://images.weserv.nl/?url=https://images.unsplash.com/photo-1439246854758-f686a415d9da?w=1600' },
  { id: 'polar', name: '极地安全', en: 'POLAR REGIONS', desc: '积极参与极地国际治理，和平开展科考，守护极地生态环境。', img: 'https://images.weserv.nl/?url=https://images.unsplash.com/photo-1473081556163-2a17de81fc97?w=1600' },
]

onMounted(() => {
  observer.value = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('is-visible')
        const index = parseInt(entry.target.getAttribute('data-index') || '0')
        activeIndex.value = index
      }
    })
  }, { threshold: 0.5 })

  const sections = document.querySelectorAll('.editorial-section')
  sections.forEach(s => observer.value?.observe(s))
})

onUnmounted(() => {
  observer.value?.disconnect()
})

const navigateToDomain = (id: string) => {
  router.push(`/domain/${id}`)
}

const scrollToSection = (index: number) => {
  const sections = document.querySelectorAll('.editorial-section')
  sections[index]?.scrollIntoView({ behavior: 'smooth' })
}
</script>

<template>
  <div class="scroller-container">
    
    <!-- 侧边极简进度导航 -->
    <div class="side-indicator">
      <div 
        v-for="(_, i) in (domains.length + 2)" 
        :key="i"
        class="nav-dot"
        :class="{ active: activeIndex === i }"
        @click="scrollToSection(i)"
      >
        <span class="dot-num" v-if="activeIndex === i">{{ i < 10 ? '0' + i : i }}</span>
      </div>
    </div>

    <!-- 序幕：极简全屏电影级海报 -->
    <section class="editorial-section hero-section" data-index="0">
      <div class="cinematic-bg"></div>
      <div class="ambient-glow"></div>
      
      <div class="hero-content">
        <div class="reveal-mask"><div class="top-tag delay-1">NATIONAL SECURITY · 2026</div></div>
        <div class="reveal-mask"><h1 class="hero-title delay-2 font-serif">总体国家安全观</h1></div>
        <div class="expand-line delay-3"></div>
        <div class="reveal-mask">
          <p class="hero-desc delay-4">坚持以人民安全为宗旨，以政治安全为根本。<br/>居安思危，大国重器。</p>
        </div>
      </div>
      
      <div class="scroll-down-hint">
        <span class="vertical-text">向下划动</span>
        <div class="line-indicator"></div>
      </div>
    </section>

    <!-- 16个领域：全屏 PPT 滑动级排版 -->
    <section 
      v-for="(item, index) in domains" 
      :key="item.id" 
      class="editorial-section domain-section"
      :data-index="index + 1"
      @click="navigateToDomain(item.id)"
    >
      <!-- 背景动效增加沉浸感 -->
      <div class="image-wrapper">
        <div class="bg-image" :style="{ backgroundImage: `url(${item.img})` }"></div>
        <div class="bg-gradient-mask"></div>
      </div>
      
      <!-- 背景水印数字 -->
      <div class="watermark-num">{{ index + 1 < 10 ? '0'+(index+1) : index+1 }}</div>
      
      <!-- 核心内容区 -->
      <div class="domain-content">
        <div class="reveal-mask"><div class="domain-en-tag delay-1">{{ item.en }}</div></div>
        <div class="reveal-mask"><h2 class="domain-title delay-2 font-serif">{{ item.name }}</h2></div>
        <div class="expand-line delay-3 line-gold"></div>
        <div class="reveal-mask">
          <div class="domain-desc-box delay-4">
            <p>{{ item.desc }}</p>
          </div>
        </div>
        <div class="reveal-mask">
          <div class="action-btn delay-4">
            <div class="magnetic-btn">
              <span class="btn-text">查看详情</span>
              <div class="btn-circle"><el-icon><Right /></el-icon></div>
            </div>
          </div>
        </div>
      </div>
    </section>
    
    <!-- 终章 -->
    <section class="editorial-section footer-section" :data-index="domains.length + 1">
      <div class="footer-content">
        <div class="reveal-mask"><h2 class="hero-title delay-1"><span class="font-serif">安而不忘危</span></h2></div>
        <div class="expand-line delay-2" style="width: 100px; margin: 30px auto;"></div>
        <div class="reveal-mask"><p class="delay-3" style="color: #666; letter-spacing: 4px;">国家安全机关举报受理热线</p></div>
        <div class="reveal-mask"><h3 class="giant-num delay-4">12339</h3></div>
        <div class="reveal-mask delay-4 mt-10">
          <button class="premium-link-btn" @click.stop="$router.push('/knowledge')">
            <span>进入档案库</span>
            <el-icon><Collection /></el-icon>
          </button>
        </div>
      </div>
    </section>
  </div>
</template>

<style scoped>
/* 全屏滚动容器 */
.scroller-container {
  height: 100vh;
  overflow-y: scroll;
  scroll-snap-type: y mandatory;
  scroll-behavior: smooth;
  background-color: #050505;
  color: #fff;
  /* 抵消上层可能的 padding */
  margin: -20px -15px; 
}

/* 隐藏滚动条 */
.scroller-container::-webkit-scrollbar {
  display: none;
}

/* 每一屏强制占满 100vh */
.editorial-section {
  height: 100vh;
  width: 100%;
  position: relative;
  scroll-snap-align: start;
  scroll-snap-stop: always;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
  cursor: pointer;
}

.font-serif {
  font-family: 'Noto Serif SC', serif;
}

/* ======== 高级遮罩动效 ======== */
.reveal-mask {
  overflow: hidden;
  display: inline-block;
  vertical-align: top;
}

.reveal-mask > * {
  display: inline-block;
  transform: translateY(110%);
  transition: transform 1.2s cubic-bezier(0.16, 1, 0.3, 1);
  will-change: transform;
}

.is-visible .reveal-mask > * {
  transform: translateY(0);
}

.delay-1 > * { transition-delay: 0.1s; }
.delay-2 > * { transition-delay: 0.2s; }
.delay-3 > * { transition-delay: 0.3s; }
.delay-4 > * { transition-delay: 0.4s; }

.expand-line {
  width: 0;
  height: 1px;
  background: #c5a059;
  transition: width 1.5s cubic-bezier(0.16, 1, 0.3, 1) 0.3s;
}

.is-visible .expand-line {
  width: 100%;
}

/* ======== 侧边进度导航 ======== */
.side-indicator {
  position: fixed;
  right: 40px;
  top: 50%;
  transform: translateY(-50%);
  z-index: 1001;
  display: flex;
  flex-direction: column;
  gap: 15px;
  align-items: center;
}

.nav-dot {
  width: 2px;
  height: 20px;
  background: rgba(255,255,255,0.15);
  cursor: pointer;
  transition: all 0.4s cubic-bezier(0.16, 1, 0.3, 1);
  position: relative;
}

.nav-dot.active {
  background: #c5a059;
  height: 40px;
}

.dot-num {
  position: absolute;
  right: 15px;
  top: 50%;
  transform: translateY(-50%);
  color: #c5a059;
  font-size: 0.7rem;
  font-weight: bold;
  letter-spacing: 1px;
}

/* ======== Hero 屏 ======== */
.hero-section {
  background: #050505;
  cursor: default;
}

.cinematic-bg {
  position: absolute;
  top: 0; left: 0; width: 100%; height: 100%;
  background: radial-gradient(circle at center, rgba(138, 11, 11, 0.2) 0%, #050505 80%);
}

.ambient-glow {
  position: absolute;
  width: 50vw; height: 50vw;
  background: radial-gradient(circle, rgba(138, 11, 11, 0.15) 0%, transparent 70%);
  border-radius: 50%;
  pointer-events: none;
  z-index: 1;
  animation: pulse-glow 8s infinite alternate ease-in-out;
}

@keyframes pulse-glow {
  0% { transform: scale(1) translate(0, 0); opacity: 0.5; }
  100% { transform: scale(1.2) translate(5%, 5%); opacity: 1; }
}

.hero-content {
  position: relative;
  z-index: 10;
  text-align: center;
  color: #fff;
  padding: 0 30px;
}

.top-tag {
  font-size: 0.8rem;
  letter-spacing: 8px;
  color: #c5a059;
  margin-bottom: 20px;
}

.hero-title {
  font-size: 4.5rem;
  font-weight: 600;
  letter-spacing: 12px;
  margin: 0;
  color: #fff;
  text-shadow: 0 10px 30px rgba(0,0,0,0.5);
}

.hero-section .expand-line {
  margin: 30px auto;
  max-width: 400px;
}

.hero-desc {
  font-size: 1rem;
  letter-spacing: 4px;
  line-height: 2;
  color: #a0a0a0;
}

.scroll-down-hint {
  position: absolute;
  bottom: 0; left: 50%;
  transform: translateX(-50%);
  display: flex;
  flex-direction: column;
  align-items: center;
  opacity: 0.6;
  z-index: 10;
}

.vertical-text {
  writing-mode: vertical-rl;
  text-orientation: mixed;
  font-size: 0.7rem;
  letter-spacing: 4px;
  margin-bottom: 15px;
}

.line-indicator {
  width: 1px;
  height: 60px;
  background: linear-gradient(to bottom, #fff 50%, transparent);
  animation: slide-down 2s ease-in-out infinite;
}

@keyframes slide-down {
  0% { transform: translateY(-20px); opacity: 0; }
  50% { opacity: 1; }
  100% { transform: translateY(20px); opacity: 0; }
}

/* ======== 领域屏 ======== */
.image-wrapper {
  position: absolute;
  top: 0; left: 0; width: 100%; height: 100%;
  overflow: hidden;
}

.bg-image {
  width: 100%; height: 100%;
  background-size: cover;
  background-position: center;
  transform: scale(1.15);
  transition: transform 12s cubic-bezier(0.65, 0, 0.35, 1);
}

.is-visible .bg-image { transform: scale(1); }

.bg-gradient-mask {
  position: absolute;
  top: 0; left: 0; width: 100%; height: 100%;
  background: linear-gradient(135deg, rgba(5,5,5,0.95) 0%, rgba(5,5,5,0.4) 50%, rgba(5,5,5,0.8) 100%);
}

.domain-content {
  position: absolute;
  left: 10%;
  bottom: 12%;
  z-index: 10;
  max-width: 600px;
  transition: transform 0.8s cubic-bezier(0.16, 1, 0.3, 1);
}

.is-visible .domain-content {
  transform: translateY(-10px);
}

.watermark-num {
  position: absolute;
  right: -5%;
  bottom: -5%;
  font-size: 30vw;
  font-weight: 900;
  color: transparent;
  -webkit-text-stroke: 1px rgba(255,255,255,0.03);
  pointer-events: none;
  z-index: 1;
  transition: transform 1.5s cubic-bezier(0.16, 1, 0.3, 1);
  transform: translateX(50px);
}

.is-visible .watermark-num { transform: translateX(0); }

.domain-en-tag {
  font-size: 0.75rem;
  letter-spacing: 6px;
  color: #c5a059;
  margin-bottom: 10px;
}

.domain-title {
  font-size: 4rem;
  margin: 0;
  letter-spacing: 8px;
  text-shadow: 0 4px 20px rgba(0,0,0,0.8);
}

.line-gold {
  margin: 20px 0;
  max-width: 80%;
}

.domain-desc-box {
  margin-bottom: 40px;
}

.domain-desc-box p {
  font-size: 1rem;
  line-height: 1.8;
  letter-spacing: 1px;
  color: #cccccc;
}

/* 按钮交互 */
.action-btn { display: inline-block; }

.magnetic-btn {
  display: flex;
  align-items: center;
  gap: 15px;
  cursor: pointer;
  transition: transform 0.3s cubic-bezier(0.16, 1, 0.3, 1);
}

.magnetic-btn:hover {
  transform: translateX(10px);
}

.btn-text {
  font-size: 0.85rem;
  letter-spacing: 3px;
  font-weight: 600;
  text-transform: uppercase;
}

.btn-circle {
  width: 50px; height: 50px;
  border-radius: 50%;
  border: 1px solid rgba(255,255,255,0.2);
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.4s cubic-bezier(0.16, 1, 0.3, 1);
}

.magnetic-btn:hover .btn-circle {
  background: #a80000;
  border-color: #a80000;
  transform: rotate(-45deg);
}

/* ======== 终章 ======== */
.footer-section {
  background: #050505;
  text-align: center;
  cursor: default;
}

.footer-content {
  position: relative;
  z-index: 10;
}

.giant-num {
  font-size: 8rem;
  font-weight: 900;
  color: #a80000;
  letter-spacing: 15px;
  margin: 0;
  text-shadow: 0 0 40px rgba(138, 11, 11, 0.4);
}

.premium-link-btn {
  background: #a80000;
  border: none;
  color: white;
  padding: 15px 40px;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 15px;
  font-size: 0.9rem;
  letter-spacing: 4px;
  cursor: pointer;
  transition: all 0.4s;
  border-radius: 4px;
  margin: 0 auto;
}

.premium-link-btn:hover {
  background: white;
  color: #050505;
}

.mt-10 { margin-top: 40px; }

/* ======== 移动端适配 ======== */
@media (max-width: 768px) {
  .hero-title { font-size: 2.8rem; letter-spacing: 6px; }
  .hero-desc { font-size: 0.85rem; }
  
  .side-indicator { right: 10px; }
  .nav-dot { height: 10px; }
  .nav-dot.active { height: 25px; }
  
  .domain-content {
    left: 20px; right: 20px;
    bottom: 10%;
  }
  
  .domain-title { font-size: 2.5rem; letter-spacing: 4px; }
  .domain-desc-box p { font-size: 0.9rem; }
  
  .watermark-num {
    top: 15%; bottom: auto;
    right: 5%;
    font-size: 40vw;
  }
  
  .giant-num { font-size: 4rem; letter-spacing: 5px; }
}
</style>