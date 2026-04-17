<script setup lang="ts">
import { onMounted } from 'vue'
import { useRouter } from 'vue-router'

const router = useRouter()

// 核心修正：使用 public 目录下的绝对路径
const domainSections = [
  {
    title: '核心支柱',
    items: [
      { id: 'political', name: '政治安全', en: 'Political', img: 'https://images.weserv.nl/?url=https://images.unsplash.com/photo-1508062878650-88b52897f298?w=1200', size: 'large' },
      { id: 'homeland', name: '国土安全', en: 'Homeland', img: 'https://images.weserv.nl/?url=https://images.unsplash.com/photo-1508804185872-d7badad00f7d?w=800', size: 'medium' },
      { id: 'military', name: '军事安全', en: 'Military', img: '/static/军事安全.jpg', size: 'small' }
    ]
  },
  {
    title: '民生防线',
    items: [
      { id: 'economic', name: '经济安全', en: 'Economic', img: '/static/经济安全.jpg', size: 'medium' },
      { id: 'cultural', name: '文化安全', en: 'Cultural', img: '/static/文化安全.jpg', size: 'small' },
      { id: 'social', name: '社会安全', en: 'Social', img: 'https://images.weserv.nl/?url=https://images.unsplash.com/photo-1517048676732-d65bc937f952?w=800', size: 'medium' },
      { id: 'tech', name: '科技安全', en: 'Technology', img: 'https://images.weserv.nl/?url=https://images.unsplash.com/photo-1518770660439-4636190af475?w=800', size: 'large' }
    ]
  },
  {
    title: '前沿阵地',
    items: [
      { id: 'cyber', name: '网络安全', en: 'Cyber', img: 'https://images.weserv.nl/?url=https://images.unsplash.com/photo-1550751827-4bd374c3f58b?w=1200', size: 'large' },
      { id: 'ecology', name: '生态安全', en: 'Ecology', img: 'https://images.weserv.nl/?url=https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=800', size: 'small' },
      { id: 'resource', name: '资源安全', en: 'Resource', img: 'https://images.weserv.nl/?url=https://images.unsplash.com/photo-1523348837708-15d4a09cfac2?w=800', size: 'medium' },
      { id: 'nuclear', name: '核安全', en: 'Nuclear', img: '/static/核安全.jpg', size: 'medium' }
    ]
  },
  {
    title: '新型新疆域',
    items: [
      { id: 'overseas', name: '海外利益', en: 'Overseas', img: 'https://images.weserv.nl/?url=https://images.unsplash.com/photo-1524661135-423995f22d0b?w=800', size: 'medium' },
      { id: 'bio', name: '生物安全', en: 'Biological', img: 'https://images.weserv.nl/?url=https://images.unsplash.com/photo-1584036561566-baf8f5f1b144?w=800', size: 'small' },
      { id: 'space', name: '太空安全', en: 'Space', img: 'https://images.weserv.nl/?url=https://images.unsplash.com/photo-1446776811953-b23d57bd21aa?w=1200', size: 'large' },
      { id: 'deepsea', name: '深海安全', en: 'Deep Sea', img: 'https://images.weserv.nl/?url=https://images.unsplash.com/photo-1439246854758-f686a415d9da?w=800', size: 'medium' },
      { id: 'polar', name: '极地安全', en: 'Polar', img: 'https://images.weserv.nl/?url=https://images.unsplash.com/photo-1473081556163-2a17de81fc97?w=800', size: 'small' }
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
  }, { threshold: 0.1 })

  document.querySelectorAll('.reveal').forEach(el => observer.observe(el))
})

const navigateToDomain = (id: string) => {
  router.push(`/domain/${id}`)
}
</script>

<template>
  <div class="dashboard-root">
    
    <!-- Hero Header -->
    <header class="hero-header reveal">
      <div class="header-content">
        <h1 class="hero-title serif">总体国家安全观</h1>
        <div class="subtitle-wrap">
          <span class="en">NATIONAL SECURITY STRATEGY</span>
          <p class="cn">统筹发展与安全 · 铸就大国防线</p>
        </div>
      </div>
    </header>

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
              <!-- 显式详情文字，针对移动端常驻 -->
              <div class="card-details-label">
                <span>查看详情</span>
                <el-icon><Right /></el-icon>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

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

.hero-header {
  height: 70vh;
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
  background: linear-gradient(to top, rgba(0,0,0,0.85) 0%, transparent 60%);
}

.card-info {
  position: absolute;
  bottom: 25px; left: 25px;
  right: 25px;
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
  margin: 5px 0 10px 0;
  font-weight: 700;
}

/* 核心修复：详情字样样式 */
.card-details-label {
  display: flex;
  align-items: center;
  gap: 8px;
  font-size: 0.85rem;
  font-weight: 600;
  color: var(--gold-dust);
  opacity: 1; /* 默认可见 */
  transition: all 0.3s;
}

.domain-card:hover .card-details-label {
  transform: translateX(5px);
  color: white;
}

.domain-card:hover .card-image-box img {
  transform: scale(1.05);
}

.card-large { flex: 1 1 60%; height: 450px; }
.card-medium { flex: 1 1 35%; height: 350px; }
.card-small { flex: 1 1 30%; height: 280px; }

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

@media (max-width: 768px) {
  .hero-header { height: 50vh; }
  .hero-title { font-size: 2.8rem; letter-spacing: 0.05em; }
  
  .asym-grid { gap: 15px; }
  
  .card-large, .card-medium, .card-small {
    flex: 1 1 100%;
    height: 240px;
  }
  
  .domain-card:nth-child(even) {
    margin-top: 0;
    margin-left: 0;
  }
  
  .card-name { font-size: 1.4rem; }
  .hotline-premium .number { font-size: 2.5rem; letter-spacing: 5px; }
}
</style>