<script setup lang="ts">
import { onMounted } from 'vue'
import { useRouter } from 'vue-router'

const router = useRouter()

const domainSections = [
  {
    title: '核心支柱',
    items: [
      { id: 'political', name: '政治安全', en: 'Political', img: 'https://images.unsplash.com/photo-1541872703-74c5e443d1f9?auto=format&fit=crop&w=1200', size: 'large' },
      { id: 'homeland', name: '国土安全', en: 'Homeland', img: 'https://images.unsplash.com/photo-1501785888041-af3ef285b470?auto=format&fit=crop&w=800', size: 'medium' },
      { id: 'military', name: '军事安全', en: 'Military', img: 'https://images.unsplash.com/photo-1534067783941-51c9c23ecefd?auto=format&fit=crop&w=800', size: 'small' }
    ]
  },
  {
    title: '民生防线',
    items: [
      { id: 'economic', name: '经济安全', en: 'Economic', img: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=800', size: 'medium' },
      { id: 'cultural', name: '文化安全', en: 'Cultural', img: 'https://images.unsplash.com/photo-1518709268805-4e9042af9f23?auto=format&fit=crop&w=800', size: 'small' },
      { id: 'social', name: '社会安全', en: 'Social', img: 'https://images.unsplash.com/photo-1517048676732-d65bc937f952?auto=format&fit=crop&w=800', size: 'medium' },
      { id: 'tech', name: '科技安全', en: 'Technology', img: 'https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=800', size: 'large' }
    ]
  },
  {
    title: '前沿阵地',
    items: [
      { id: 'cyber', name: '网络安全', en: 'Cyber', img: 'https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&w=1200', size: 'large' },
      { id: 'ecology', name: '生态安全', en: 'Ecology', img: 'https://images.unsplash.com/photo-1441974231531-c6227db76b6e?auto=format&fit=crop&w=800', size: 'small' },
      { id: 'resource', name: '资源安全', en: 'Resource', img: 'https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?auto=format&fit=crop&w=800', size: 'medium' },
      { id: 'nuclear', name: '核安全', en: 'Nuclear', img: 'https://images.unsplash.com/photo-1510444317180-28105072049e?auto=format&fit=crop&w=1200', size: 'medium' }
    ]
  },
  {
    title: '新型新疆域',
    items: [
      { id: 'overseas', name: '海外利益', en: 'Overseas', img: 'https://images.unsplash.com/photo-1436450412740-6b988f486c6b?auto=format&fit=crop&w=800', size: 'medium' },
      { id: 'bio', name: '生物安全', en: 'Biological', img: 'https://images.unsplash.com/photo-1584036561566-baf8f5f1b144?auto=format&fit=crop&w=800', size: 'small' },
      { id: 'space', name: '太空安全', en: 'Space', img: 'https://images.unsplash.com/photo-1454789548928-9efd52dc4031?auto=format&fit=crop&w=1200', size: 'large' },
      { id: 'deepsea', name: '深海安全', en: 'Deep Sea', img: 'https://images.unsplash.com/photo-1551244072-5d12893278ab?auto=format&fit=crop&w=800', size: 'medium' },
      { id: 'polar', name: '极地安全', en: 'Polar', img: 'https://images.unsplash.com/photo-1473081556163-2a17de81fc97?auto=format&fit=crop&w=800', size: 'small' }
    ]
  }
]

onMounted(() => {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('is-visible')
      }
    })
  }, { threshold: 0.15 })

  document.querySelectorAll('.reveal').forEach(el => observer.observe(el))
})

const navigateToDomain = (id: string) => {
  router.push(`/domain/${id}`)
}
</script>

<template>
  <div class="dashboard-root">
    
    <!-- Hero Header: 电影开篇感 -->
    <header class="hero-header reveal">
      <div class="header-content">
        <h1 class="hero-title serif">总体国家安全观</h1>
        <div class="subtitle-wrap">
          <span class="en">NATIONAL SECURITY STRATEGY</span>
          <p class="cn">统筹发展与安全 · 铸就大国防线</p>
        </div>
      </div>
      <div class="hero-decoration"></div>
    </header>

    <!-- 叙事化流式布局 -->
    <div class="narrative-flow">
      <div v-for="section in domainSections" :key="section.title" class="flow-section">
        
        <div class="section-heading reveal">
          <h2 class="serif">{{ section.title }}</h2>
          <div class="accent-line"></div>
        </div>

        <div class="asym-grid">
          <div 
            v-for="item in section.items" 
            :key="item.id"
            :class="['domain-card', `card-${item.size}`, 'reveal']"
            @click="navigateToDomain(item.id)"
          >
            <div class="card-image-box">
              <img :src="item.img" :alt="item.name" loading="lazy" />
              <div class="card-overlay"></div>
            </div>
            <div class="card-info">
              <span class="card-en">{{ item.en }}</span>
              <h3 class="card-name">{{ item.name }}</h3>
              <div class="card-arrow"><el-icon><Right /></el-icon></div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- 举报入口：权威庄重 -->
    <footer class="footer-cta reveal">
      <div class="cta-inner">
        <h2 class="serif">安而不忘危</h2>
        <div class="hotline-premium">
          <span class="label">国家安全机关举报受理热线</span>
          <span class="number">12339</span>
        </div>
        <button class="dossier-btn" @click="$router.push('/knowledge')">
          阅读官方档案库
        </button>
      </div>
    </footer>

  </div>
</template>

<style scoped>
.dashboard-root {
  max-width: 100%;
  padding-bottom: 80px;
}

.serif { font-family: var(--font-serif); }

/* ======== Hero Header ======== */
.hero-header {
  height: 80vh;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  text-align: center;
  overflow: hidden;
  background: white;
}

.hero-title {
  font-size: clamp(3rem, 12vw, 7rem);
  font-weight: 900;
  color: var(--ink-black);
  line-height: 1.1;
  letter-spacing: 0.1em;
  margin: 0;
}

.subtitle-wrap {
  margin-top: 30px;
}

.subtitle-wrap .en {
  font-size: 0.8rem;
  letter-spacing: 0.4em;
  color: var(--gold-dust);
  display: block;
  margin-bottom: 10px;
}

.subtitle-wrap .cn {
  font-size: 1.1rem;
  color: #666;
  letter-spacing: 0.2em;
}

/* ======== Narrative Flow ======== */
.narrative-flow {
  max-width: 1400px;
  margin: 0 auto;
  padding: 0 20px;
}

.flow-section {
  margin-bottom: 120px;
}

.section-heading {
  margin-bottom: 50px;
}

.section-heading h2 {
  font-size: 2.2rem;
  margin: 0;
  font-weight: 700;
}

.accent-line {
  width: 40px; height: 3px;
  background: var(--cinnabar-red);
  margin-top: 15px;
}

/* 非对称网格核心 */
.asym-grid {
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
}

.domain-card {
  position: relative;
  border-radius: 12px;
  overflow: hidden;
  cursor: pointer;
  background: #f0f0f0;
  transition: all 0.6s var(--transition-fluid);
}

.card-image-box {
  width: 100%; height: 100%;
}

.card-image-box img {
  width: 100%; height: 100%;
  object-fit: cover;
  transition: transform 1s var(--transition-fluid);
}

.card-overlay {
  position: absolute;
  top: 0; left: 0; width: 100%; height: 100%;
  background: linear-gradient(to top, rgba(0,0,0,0.7) 0%, transparent 60%);
}

.card-info {
  position: absolute;
  bottom: 25px; left: 25px;
  color: white;
  z-index: 5;
}

.card-en {
  font-size: 0.7rem;
  letter-spacing: 2px;
  text-transform: uppercase;
  opacity: 0.7;
}

.card-name {
  font-size: 1.6rem;
  margin: 5px 0 0 0;
  font-weight: 700;
}

.card-arrow {
  margin-top: 10px;
  font-size: 1.2rem;
  opacity: 0;
  transform: translateX(-10px);
  transition: all 0.4s var(--transition-fluid);
}

.domain-card:hover .card-arrow {
  opacity: 1; transform: translateX(0);
}

.domain-card:hover .card-image-box img {
  transform: scale(1.05);
}

/* 尺寸差异实现非对称 */
.card-large { flex: 1 1 60%; height: 450px; }
.card-medium { flex: 1 1 35%; height: 350px; }
.card-small { flex: 1 1 30%; height: 280px; }

/* ======== Footer ======== */
.footer-cta {
  background: #fff;
  border-top: 1px solid #eee;
  padding: 100px 20px;
  text-align: center;
}

.cta-inner h2 {
  font-size: 2.8rem;
  margin-bottom: 40px;
}

.hotline-premium .label {
  display: block; font-size: 0.9rem; color: #888;
}

.hotline-premium .number {
  font-size: 4rem;
  font-weight: 900;
  color: var(--cinnabar-red);
  letter-spacing: 10px;
}

.dossier-btn {
  margin-top: 40px;
  background: var(--cinnabar-red);
  color: white;
  border: none;
  padding: 18px 45px;
  border-radius: 4px;
  font-size: 1rem;
  font-weight: 600;
  cursor: pointer;
  letter-spacing: 2px;
}

/* ======== 手机端极致优化 ======== */
@media (max-width: 768px) {
  .hero-header { height: 60vh; }
  .hero-title { font-size: 3rem; letter-spacing: 0.05em; }
  
  .asym-grid { gap: 15px; }
  
  /* 手机端取消大尺寸，改为瀑布流感 */
  .card-large, .card-medium, .card-small {
    flex: 1 1 100%;
    height: 220px;
  }
  
  /* 这种“错位”才是高级感的来源 */
  .domain-card:nth-child(even) {
    margin-top: -10px;
    margin-left: 20px;
  }
  
  .card-name { font-size: 1.4rem; }
  .hotline-premium .number { font-size: 2.5rem; letter-spacing: 5px; }
}
</style>