<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue'
import { useRouter } from 'vue-router'

const router = useRouter()
const observer = ref<IntersectionObserver | null>(null)

const domains = [
  { id: 'political', name: '政治安全', icon: 'UserFilled', desc: '治国理政 根本保障', img: 'https://images.unsplash.com/photo-1541872703-74c5e443d1f9?auto=format&fit=crop&q=80&w=1200' },
  { id: 'homeland', name: '国土安全', icon: 'MapLocation', desc: '江山无恙 领土神圣', img: 'https://images.unsplash.com/photo-1501785888041-af3ef285b470?auto=format&fit=crop&q=80&w=1200' },
  { id: 'military', name: '军事安全', icon: 'Promotion', desc: '强军兴军 钢铁长城', img: 'https://images.unsplash.com/photo-1508103501740-8456f4d85e78?auto=format&fit=crop&q=80&w=1200' },
  { id: 'economic', name: '经济安全', icon: 'TrendCharts', desc: '国计民生 繁荣基石', img: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=1200' },
  { id: 'cultural', name: '文化安全', icon: 'Collection', desc: '文化自信 灵魂守护', img: 'https://images.unsplash.com/photo-1518709268805-4e9042af9f23?auto=format&fit=crop&q=80&w=1200' },
  { id: 'social', name: '社会安全', icon: 'Management', desc: '民生安稳 社会和谐', img: 'https://images.unsplash.com/photo-1517048676732-d65bc937f952?auto=format&fit=crop&q=80&w=1200' },
  { id: 'tech', name: '科技安全', icon: 'Monitor', desc: '创新策源 科技自立', img: 'https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&q=80&w=1200' },
  { id: 'cyber', name: '网络安全', icon: 'Lock', desc: '清朗空间 数智之盾', img: 'https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&q=80&w=1200' },
  { id: 'ecology', name: '生态安全', icon: 'Sunny', desc: '绿水青山 永续自然', img: 'https://images.unsplash.com/photo-1441974231531-c6227db76b6e?auto=format&fit=crop&q=80&w=1200' },
  { id: 'resource', name: '资源安全', icon: 'Operation', desc: '战略储备 资源基命', img: 'https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?auto=format&fit=crop&q=80&w=1200' },
  { id: 'nuclear', name: '核安全', icon: 'Warning', desc: '核能利民 严密管控', img: 'https://images.unsplash.com/photo-1517420812313-8001a889944c?auto=format&fit=crop&q=80&w=1200' },
  { id: 'overseas', name: '海外利益安全', icon: 'Ship', desc: '丝绸之路 跨洋保护', img: 'https://images.unsplash.com/photo-1436450412740-6b988f486c6b?auto=format&fit=crop&q=80&w=1200' },
  { id: 'bio', name: '生物安全', icon: 'FirstAidKit', desc: '守护生命 生物安防', img: 'https://images.unsplash.com/photo-1584036561566-baf8f5f1b144?auto=format&fit=crop&q=80&w=1200' },
  { id: 'space', name: '太空安全', icon: 'Compass', desc: '星辰大海 空间权益', img: 'https://images.unsplash.com/photo-1454789548928-9efd52dc4031?auto=format&fit=crop&q=80&w=1200' },
  { id: 'deepsea', name: '深海安全', icon: 'Odometer', desc: '九万余里 深蓝使命', img: 'https://images.unsplash.com/photo-1551244072-5d12893278ab?auto=format&fit=crop&q=80&w=1200' },
  { id: 'polar', name: '极地安全', icon: 'Place', desc: '纯净之境 科考权责', img: 'https://images.unsplash.com/photo-1473081556163-2a17de81fc97?auto=format&fit=crop&q=80&w=1200' },
]

onMounted(() => {
  observer.value = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('is-visible')
      }
    })
  }, { threshold: 0.2 })

  const sections = document.querySelectorAll('.page-section')
  sections.forEach(s => observer.value?.observe(s))
})

onUnmounted(() => {
  observer.value?.disconnect()
})

const navigateToDomain = (id: string) => {
  router.push(`/domain/${id}`)
}
</script>

<template>
  <div class="fullpage-container" ref="container">
    <div class="dynamic-grid-bg"></div>

    <!-- 极简引导屏 -->
    <section class="page-section hero-page">
      <div class="hero-mask"></div>
      <div class="content reveal-text">
        <h1 class="premium-title">总体国家安全观</h1>
        <div class="ornament-line"></div>
        <p class="premium-subtitle">坚持以人民安全为宗旨 · 走中国特色国家安全道路</p>
        <div class="scroll-prompt">
          <div class="mouse-icon"></div>
          <span>探索领域</span>
        </div>
      </div>
    </section>

    <!-- 领域屏：竖版书法感交互 -->
    <section 
      v-for="item in domains" 
      :key="item.id" 
      class="page-section domain-page"
      @click="navigateToDomain(item.id)"
    >
      <div class="parallax-bg" :style="{ backgroundImage: `url(${item.img})` }"></div>
      <div class="overlay"></div>
      
      <div class="content domain-flex">
        <div class="vertical-title reveal-text">
          <span class="v-name">{{ item.name }}</span>
          <span class="v-dot"></span>
          <span class="v-desc">{{ item.desc }}</span>
        </div>
        
        <div class="explore-hint reveal-text">
          <button class="btn-premium">点击档案 <el-icon><Right /></el-icon></button>
        </div>
      </div>
    </section>

    <!-- 结尾屏 -->
    <section class="page-section footer-page">
      <div class="content reveal-text">
        <h2 class="final-title">国家安全 · 命脉所系</h2>
        <div class="hotline-card-premium">
          <span class="label">全国举报受理热线</span>
          <span class="num">12339</span>
        </div>
        <el-button class="btn-premium mt-6" @click="$router.push('/knowledge')">进 入 知 识 库</el-button>
      </div>
    </section>
  </div>
</template>

<style scoped>
.fullpage-container {
  height: 100vh;
  overflow-y: scroll;
  scroll-snap-type: y mandatory;
  scroll-behavior: smooth;
  margin: -20px -15px;
}

.fullpage-container::-webkit-scrollbar { display: none; }

.page-section {
  height: 100vh;
  width: 100%;
  scroll-snap-align: start;
  scroll-snap-stop: always;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
}

/* 视差背景 - 炫技点3 */
.parallax-bg {
  position: absolute;
  top: -10%; left: 0; width: 100%; height: 120%;
  background-size: cover;
  background-position: center;
  z-index: 0;
  transition: transform 0.6s var(--transition-smooth);
}

.is-visible .parallax-bg {
  transform: translateY(5%);
}

.overlay {
  position: absolute;
  top: 0; left: 0; width: 100%; height: 100%;
  background: linear-gradient(to right, rgba(0,0,0,0.6) 0%, transparent 70%, rgba(0,0,0,0.4) 100%);
  z-index: 1;
}

.content {
  position: relative;
  z-index: 10;
  color: white;
  width: 100%;
  max-width: 1200px;
  padding: 0 40px;
}

/* 竖向排版 - 高级感 */
.domain-flex {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.vertical-title {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  border-left: 2px solid var(--primary-red);
  padding-left: 30px;
}

.v-name {
  font-size: 4rem;
  font-weight: 800;
  letter-spacing: 10px;
  writing-mode: vertical-rl;
  text-orientation: upright;
}

.v-dot {
  width: 6px; height: 6px;
  background: var(--gold-accent);
  margin: 20px 0;
  border-radius: 50%;
}

.v-desc {
  font-size: 1.2rem;
  letter-spacing: 4px;
  opacity: 0.8;
  writing-mode: vertical-rl;
  text-orientation: upright;
}

/* 英雄屏排版 */
.hero-page { background-color: var(--primary-red); }
.hero-mask {
  position: absolute;
  width: 100%; height: 100%;
  background: radial-gradient(circle at center, transparent 0%, rgba(0,0,0,0.4) 100%);
}

.premium-title {
  font-size: 4.5rem;
  font-weight: 900;
  letter-spacing: 15px;
  margin: 0;
  text-shadow: 0 10px 30px rgba(0,0,0,0.3);
}

.ornament-line {
  width: 100px; height: 2px;
  background: var(--gold-accent);
  margin: 30px 0;
}

.premium-subtitle {
  font-size: 1.2rem;
  letter-spacing: 6px;
  text-transform: uppercase;
  opacity: 0.9;
}

.scroll-prompt {
  position: absolute;
  bottom: 50px; left: 40px;
  display: flex;
  align-items: center;
  gap: 15px;
  font-size: 0.8rem;
  letter-spacing: 2px;
}

.mouse-icon {
  width: 20px; height: 35px;
  border: 1px solid white;
  border-radius: 10px;
  position: relative;
}

.mouse-icon::after {
  content: '';
  width: 2px; height: 6px;
  background: white;
  position: absolute;
  top: 5px; left: 50%;
  transform: translateX(-50%);
  animation: scroll-ani 2s infinite;
}

@keyframes scroll-ani {
  0% { transform: translate(-50%, 0); opacity: 1; }
  100% { transform: translate(-50%, 15px); opacity: 0; }
}

.hotline-card-premium {
  display: flex;
  flex-direction: column;
  margin-top: 40px;
}

.hotline-card-premium .label { font-size: 1rem; opacity: 0.6; }
.hotline-card-premium .num { 
  font-size: 4rem; font-weight: 900; 
  color: var(--primary-red);
}

.mt-6 { margin-top: 40px; }

/* 移动端特殊优化 - 炫技点4：响应式微调 */
@media (max-width: 768px) {
  .premium-title { font-size: 2.2rem; letter-spacing: 8px; }
  .v-name { font-size: 2.5rem; letter-spacing: 6px; }
  .v-desc { font-size: 1rem; }
  .content { padding: 0 25px; }
  .scroll-prompt { left: 25px; }
  .hotline-card-premium .num { font-size: 2.5rem; }
}
</style>