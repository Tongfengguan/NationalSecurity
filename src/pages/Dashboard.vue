<script setup lang="ts">
import { useRouter } from 'vue-router'

const router = useRouter()

const domainGroups = [
  {
    title: '传统安全领域',
    items: [
      { id: 'political', name: '政治安全', img: 'https://images.unsplash.com/photo-1541872703-74c5e443d1f9?auto=format&fit=crop&q=80&w=800' },
      { id: 'homeland', name: '国土安全', img: 'https://images.unsplash.com/photo-1501785888041-af3ef285b470?auto=format&fit=crop&q=80&w=800' },
      { id: 'military', name: '军事安全', img: 'https://images.unsplash.com/photo-1508103501740-8456f4d85e78?auto=format&fit=crop&q=80&w=800' }
    ]
  },
  {
    title: '非传统安全领域',
    items: [
      { id: 'economic', name: '经济安全', img: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=800' },
      { id: 'cultural', name: '文化安全', img: 'https://images.unsplash.com/photo-1518709268805-4e9042af9f23?auto=format&fit=crop&q=80&w=800' },
      { id: 'social', name: '社会安全', img: 'https://images.unsplash.com/photo-1517048676732-d65bc937f952?auto=format&fit=crop&q=80&w=800' },
      { id: 'tech', name: '科技安全', img: 'https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&q=80&w=800' },
      { id: 'cyber', name: '网络安全', img: 'https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&q=80&w=800' },
      { id: 'ecology', name: '生态安全', img: 'https://images.unsplash.com/photo-1441974231531-c6227db76b6e?auto=format&fit=crop&q=80&w=800' },
      { id: 'resource', name: '资源安全', img: 'https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?auto=format&fit=crop&q=80&w=800' },
      { id: 'nuclear', name: '核安全', img: 'https://images.unsplash.com/photo-1517420812313-8001a889944c?auto=format&fit=crop&q=80&w=800' },
      { id: 'overseas', name: '海外利益', img: 'https://images.unsplash.com/photo-1436450412740-6b988f486c6b?auto=format&fit=crop&q=80&w=800' }
    ]
  },
  {
    title: '新型安全领域',
    items: [
      { id: 'bio', name: '生物安全', img: 'https://images.unsplash.com/photo-1584036561566-baf8f5f1b144?auto=format&fit=crop&q=80&w=800' },
      { id: 'space', name: '太空安全', img: 'https://images.unsplash.com/photo-1454789548928-9efd52dc4031?auto=format&fit=crop&q=80&w=800' },
      { id: 'deepsea', name: '深海安全', img: 'https://images.unsplash.com/photo-1551244072-5d12893278ab?auto=format&fit=crop&q=80&w=800' },
      { id: 'polar', name: '极地安全', img: 'https://images.unsplash.com/photo-1473081556163-2a17de81fc97?auto=format&fit=crop&q=80&w=800' }
    ]
  }
]

const navigateToDomain = (id: string) => {
  router.push(`/domain/${id}`)
}
</script>

<template>
  <div class="dashboard-container">
    
    <!-- Hero Header -->
    <header class="hero-header reveal">
      <span class="top-label">NATIONAL SECURITY</span>
      <h1 class="hero-title serif">总体国家安全观</h1>
      <p class="hero-subtitle">坚持以人民安全为宗旨，以政治安全为根本</p>
      <div class="header-divider"></div>
    </header>

    <!-- Bento Sections -->
    <div class="bento-wrapper">
      <section v-for="group in domainGroups" :key="group.title" class="group-section">
        <h2 class="group-title reveal delay-1">{{ group.title }}</h2>
        
        <div class="bento-grid">
          <div 
            v-for="item in group.items" 
            :key="item.id" 
            class="bento-item premium-shadow reveal delay-2"
            @click="navigateToDomain(item.id)"
          >
            <div class="card-image">
              <img :src="item.img" :alt="item.name" loading="lazy" />
            </div>
            <div class="card-content">
              <h3 class="card-name">{{ item.name }}</h3>
              <div class="card-btn">详情 <el-icon><Right /></el-icon></div>
            </div>
          </div>
        </div>
      </section>
    </div>

    <!-- Final Footer Card -->
    <section class="final-cta reveal delay-3">
      <div class="cta-inner">
        <h2 class="serif">安而不忘危</h2>
        <div class="hotline-box">
          <span class="label">国家安全机关举报受理电话</span>
          <span class="number">12339</span>
        </div>
        <button class="cta-btn" @click="$router.push('/knowledge')">查阅官方档案</button>
      </div>
    </section>

  </div>
</template>

<style scoped>
.dashboard-container {
  max-width: 1400px;
  margin: 0 auto;
  padding: 140px 40px 100px 40px;
}

.serif { font-family: var(--font-serif); }

.hero-header {
  text-align: center;
  margin-bottom: 100px;
}

.top-label {
  font-size: 0.85rem;
  letter-spacing: 0.3em;
  color: var(--primary-red);
  font-weight: 600;
}

.hero-title {
  font-size: clamp(2.5rem, 6vw, 4.5rem);
  margin: 20px 0;
  color: var(--text-main);
  letter-spacing: 0.1em;
}

.hero-subtitle {
  color: var(--text-sub);
  font-size: 1.1rem;
  letter-spacing: 0.1em;
}

.header-divider {
  width: 60px;
  height: 4px;
  background: var(--primary-red);
  margin: 40px auto 0 auto;
}

.group-section {
  margin-bottom: 80px;
}

.group-title {
  font-size: 1.4rem;
  margin-bottom: 30px;
  padding-left: 15px;
  border-left: 4px solid var(--primary-red);
  color: var(--text-main);
}

/* Bento Grid 核心布局 */
.bento-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  gap: 25px;
}

.bento-item {
  background: var(--card-bg);
  border-radius: 16px;
  overflow: hidden;
  cursor: pointer;
  display: flex;
  flex-direction: column;
  border: 1px solid #f0f0f0;
}

.card-image {
  height: 200px;
  overflow: hidden;
  background: #eee;
}

.card-image img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.6s var(--transition-premium);
}

.bento-item:hover .card-image img {
  transform: scale(1.08);
}

.card-content {
  padding: 25px;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.card-name {
  font-size: 1.25rem;
  margin: 0;
  font-weight: 600;
}

.card-btn {
  font-size: 0.9rem;
  color: var(--primary-red);
  font-weight: 600;
  display: flex;
  align-items: center;
  gap: 5px;
}

/* Footer Section */
.final-cta {
  margin-top: 100px;
  background: white;
  border-radius: 24px;
  padding: 80px 40px;
  text-align: center;
  border: 1px solid #f0f0f0;
}

.cta-inner h2 {
  font-size: 2.5rem;
  margin-bottom: 40px;
}

.hotline-box {
  display: flex;
  flex-direction: column;
  margin-bottom: 40px;
}

.hotline-box .label {
  font-size: 1rem;
  color: var(--text-sub);
  margin-bottom: 10px;
}

.hotline-box .number {
  font-size: 4rem;
  font-weight: 900;
  color: var(--primary-red);
  letter-spacing: 0.1em;
}

.cta-btn {
  background: var(--primary-red);
  color: white;
  border: none;
  padding: 18px 50px;
  font-size: 1rem;
  border-radius: 50px;
  cursor: pointer;
  font-weight: 600;
  transition: all 0.3s;
}

.cta-btn:hover {
  background: #d40000;
  box-shadow: 0 10px 30px rgba(168, 0, 0, 0.2);
}

@media (max-width: 768px) {
  .dashboard-container { padding: 120px 20px 60px 20px; }
  .bento-grid { grid-template-columns: 1fr 1fr; gap: 15px; }
  .card-name { font-size: 1rem; }
  .card-content { padding: 15px; }
  .card-image { height: 140px; }
  .hotline-box .number { font-size: 2.5rem; }
}

@media (max-width: 480px) {
  .bento-grid { grid-template-columns: 1fr; }
}
</style>