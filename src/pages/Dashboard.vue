<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue'
import { useRouter } from 'vue-router'

const router = useRouter()
const observer = ref<IntersectionObserver | null>(null)
const activeIndex = ref(0)

const domains = [
  { id: 'political', name: '政治', desc: '政权安全和制度安全是核心，坚持党的领导，捍卫根本制度。', img: 'https://images.unsplash.com/photo-1541872703-74c5e443d1f9?auto=format&fit=crop&q=80&w=1600' },
  { id: 'homeland', name: '国土', desc: '国家统一、边境领空领海不受侵犯，是生存与发展的基本底线。', img: 'https://images.unsplash.com/photo-1501785888041-af3ef285b470?auto=format&fit=crop&q=80&w=1600' },
  { id: 'military', name: '军事', desc: '强军兴军，铸就捍卫主权与和平的坚固钢铁长城。', img: 'https://images.unsplash.com/photo-1508103501740-8456f4d85e78?auto=format&fit=crop&q=80&w=1600' },
  { id: 'economic', name: '经济', desc: '国计民生所在，保障产业链与金融体系的自主可控。', img: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=1600' },
  { id: 'cultural', name: '文化', desc: '坚定文化自信，弘扬优秀传统文化，抵御不良侵蚀。', img: 'https://images.unsplash.com/photo-1518709268805-4e9042af9f23?auto=format&fit=crop&q=80&w=1600' },
  { id: 'social', name: '社会', desc: '防范化解重大风险，打击犯罪，维护和谐稳定。', img: 'https://images.unsplash.com/photo-1517048676732-d65bc937f952?auto=format&fit=crop&q=80&w=1600' },
  { id: 'tech', name: '科技', desc: '实现高水平自立自强，把关键技术掌握在自己手中。', img: 'https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&q=80&w=1600' },
  { id: 'cyber', name: '网络', desc: '构筑清朗安全的数字空间防线。', img: 'https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&q=80&w=1600' },
  { id: 'ecology', name: '生态', desc: '绿水青山就是金山银山，构筑尊崇自然的生态屏障。', img: 'https://images.unsplash.com/photo-1441974231531-c6227db76b6e?auto=format&fit=crop&q=80&w=1600' },
  { id: 'resource', name: '资源', desc: '保障能源、水、粮食等战略资源的可持续供应。', img: 'https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?auto=format&fit=crop&q=80&w=1600' },
  { id: 'nuclear', name: '核安', desc: '坚持最高安全标准，确保和平开发利用万无一失。', img: 'https://images.unsplash.com/photo-1517420812313-8001a889944c?auto=format&fit=crop&q=80&w=1600' },
  { id: 'overseas', name: '海外', desc: '中国脚步走到哪里，安全保护就跟到哪里。', img: 'https://images.unsplash.com/photo-1436450412740-6b988f486c6b?auto=format&fit=crop&q=80&w=1600' },
  { id: 'bio', name: '生物', desc: '防范重大传染病和物种入侵，守护生命健康底线。', img: 'https://images.unsplash.com/photo-1584036561566-baf8f5f1b144?auto=format&fit=crop&q=80&w=1600' },
  { id: 'space', name: '太空', desc: '和平探索与利用太空资源，捍卫战略权益。', img: 'https://images.unsplash.com/photo-1454789548928-9efd52dc4031?auto=format&fit=crop&q=80&w=1600' },
  { id: 'deepsea', name: '深海', desc: '提升进入与探测能力，科学开发海洋，维护权益。', img: 'https://images.unsplash.com/photo-1551244072-5d12893278ab?auto=format&fit=crop&q=80&w=1600' },
  { id: 'polar', name: '极地', desc: '参与国际治理，和平开展科考，守护极地生态。', img: 'https://images.unsplash.com/photo-1473081556163-2a17de81fc97?auto=format&fit=crop&q=80&w=1600' },
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
  }, { threshold: 0.4 })

  const sections = document.querySelectorAll('.obs-section')
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
  <!-- 极致简约的整体容器 -->
  <main class="minimal-scroller">
    
    <!-- Hero Section -->
    <section class="obs-section hero" data-index="0">
      <div class="hero-inner fade-up delay-1">
        <h1 class="hero-title serif">总体<br/>国家安全观</h1>
        <p class="hero-subtitle">以人民为宗旨 · 以政治为根本</p>
      </div>
      <div class="hero-image fade-up delay-2">
        <img src="https://images.unsplash.com/photo-1541872703-74c5e443d1f9?auto=format&fit=crop&q=80&w=1600" alt="Hero" />
      </div>
    </section>

    <!-- 领域列表：采用高级的大量留白排版 -->
    <section 
      v-for="(item, index) in domains" 
      :key="item.id" 
      class="obs-section domain-block"
      :data-index="index + 1"
    >
      <div class="domain-grid">
        <div class="domain-text">
          <span class="domain-num fade-up delay-1">0{{ index + 1 }}</span>
          <h2 class="domain-name serif fade-up delay-1">{{ item.name }}</h2>
          <p class="domain-desc fade-up delay-2">{{ item.desc }}</p>
          <div class="fade-up delay-3 mt-8">
            <button class="btn-minimal" @click="navigateToDomain(item.id)">
              探索详情 <el-icon><Right /></el-icon>
            </button>
          </div>
        </div>
        <div class="domain-visual fade-up delay-2">
          <div class="img-container">
            <img :src="item.img" :alt="item.name" />
          </div>
        </div>
      </div>
    </section>

    <!-- Footer -->
    <section class="obs-section footer" :data-index="domains.length + 1">
      <div class="footer-inner fade-up delay-1">
        <h2 class="serif">居安思危，大国重器</h2>
        <div class="hotline">
          <span>国家安全机关举报热线</span>
          <strong>12339</strong>
        </div>
        <button class="btn-minimal mt-8" @click="$router.push('/knowledge')">
          阅读官方档案
        </button>
      </div>
    </section>

  </main>
</template>

<style scoped>
.minimal-scroller {
  background-color: var(--bg-color);
  color: var(--text-primary);
}

.serif {
  font-family: var(--font-serif);
}

.mt-8 { margin-top: 40px; }

/* ======== Hero Section ====== */
.hero {
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 120px 20px;
  text-align: center;
  position: relative;
}

.hero-inner {
  z-index: 10;
  max-width: 800px;
}

.hero-title {
  font-size: clamp(3rem, 10vw, 6rem);
  line-height: 1.1;
  font-weight: 300;
  letter-spacing: 0.1em;
  margin: 0 0 20px 0;
}

.hero-subtitle {
  font-size: 0.9rem;
  letter-spacing: 0.3em;
  color: var(--text-secondary);
  text-transform: uppercase;
}

.hero-image {
  margin-top: 60px;
  width: 100%;
  max-width: 1000px;
  height: 50vh;
  overflow: hidden;
  border-radius: 4px; /* 极小的圆角，克制的高级感 */
}

.hero-image img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  filter: grayscale(80%) contrast(1.2);
}

/* ======== Domain Block ====== */
.domain-block {
  min-height: 100vh;
  display: flex;
  align-items: center;
  padding: 100px 40px;
  border-top: 1px solid var(--border-color);
}

.domain-grid {
  display: grid;
  grid-template-columns: 1fr 1.5fr;
  gap: 100px;
  align-items: center;
  max-width: 1400px;
  margin: 0 auto;
  width: 100%;
}

/* 偶数行左右交替，打破视觉疲劳 */
.domain-block:nth-child(even) .domain-grid {
  grid-template-columns: 1.5fr 1fr;
}
.domain-block:nth-child(even) .domain-text {
  order: 2;
}

.domain-text {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
}

.domain-num {
  font-size: 0.8rem;
  letter-spacing: 0.2em;
  color: var(--text-secondary);
  margin-bottom: 20px;
}

.domain-name {
  font-size: 3.5rem;
  font-weight: 400;
  letter-spacing: 0.1em;
  margin: 0 0 30px 0;
  line-height: 1.2;
}

.domain-desc {
  font-size: 1rem;
  line-height: 1.8;
  color: var(--text-secondary);
  max-width: 400px;
}

.domain-visual .img-container {
  width: 100%;
  height: 70vh;
  overflow: hidden;
  border-radius: 4px;
}

.domain-visual img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  filter: grayscale(40%) contrast(1.1);
  transition: transform 1.5s var(--ease-slow);
}

/* hover时的微小缩放，不浮夸 */
.domain-visual:hover img {
  transform: scale(1.03);
}

/* ======== Footer ======== */
.footer {
  min-height: 80vh;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  border-top: 1px solid var(--border-color);
}

.footer h2 {
  font-size: clamp(2rem, 5vw, 4rem);
  font-weight: 300;
  letter-spacing: 0.1em;
  margin-bottom: 60px;
}

.hotline {
  display: flex;
  flex-direction: column;
  gap: 15px;
}

.hotline span {
  font-size: 0.85rem;
  letter-spacing: 0.2em;
  color: var(--text-secondary);
}

.hotline strong {
  font-size: 3rem;
  font-weight: 400;
  letter-spacing: 0.1em;
}

/* ======== Mobile ======== */
@media (max-width: 900px) {
  .domain-block { padding: 60px 20px; }
  .domain-grid, .domain-block:nth-child(even) .domain-grid {
    grid-template-columns: 1fr;
    gap: 40px;
  }
  .domain-block:nth-child(even) .domain-text { order: unset; }
  .domain-name { font-size: 2.5rem; }
  .domain-visual .img-container { height: 50vh; }
  .hero-image { height: 40vh; }
}
</style>