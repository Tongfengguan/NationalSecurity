<script setup lang="ts">
import { useRouter } from 'vue-router'

const router = useRouter()

const domains = [
  { id: 'political', name: '政治安全', icon: 'UserFilled', desc: '国家安全的根本', img: 'https://images.unsplash.com/photo-1541872703-74c5e443d1f9?auto=format&fit=crop&q=80&w=1200' },
  { id: 'homeland', name: '国土安全', icon: 'MapLocation', desc: '生存发展的底线', img: 'https://images.unsplash.com/photo-1501785888041-af3ef285b470?auto=format&fit=crop&q=80&w=1200' },
  { id: 'military', name: '军事安全', icon: 'Promotion', desc: '国家安全的保障', img: 'https://images.unsplash.com/photo-1508103501740-8456f4d85e78?auto=format&fit=crop&q=80&w=1200' },
  { id: 'economic', name: '经济安全', icon: 'TrendCharts', desc: '发展的物质基础', img: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=1200' },
  { id: 'cultural', name: '文化安全', icon: 'Collection', desc: '民族生存的灵魂', img: 'https://images.unsplash.com/photo-1518709268805-4e9042af9f23?auto=format&fit=crop&q=80&w=1200' },
  { id: 'social', name: '社会安全', icon: 'Management', desc: '和谐稳定的依托', img: 'https://images.unsplash.com/photo-1517048676732-d65bc937f952?auto=format&fit=crop&q=80&w=1200' },
  { id: 'tech', name: '科技安全', icon: 'Monitor', desc: '支撑发展的关键', img: 'https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&q=80&w=1200' },
  { id: 'cyber', name: '网络安全', icon: 'Lock', desc: '网络空间的主权', img: 'https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&q=80&w=1200' },
  { id: 'ecology', name: '生态安全', icon: 'Sunny', desc: '可持续发展底线', img: 'https://images.unsplash.com/photo-1441974231531-c6227db76b6e?auto=format&fit=crop&q=80&w=1200' },
  { id: 'resource', name: '资源安全', icon: 'Operation', desc: '发展的核心要素', img: 'https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?auto=format&fit=crop&q=80&w=1200' },
  { id: 'nuclear', name: '核安全', icon: 'Warning', desc: '和平利用核能', img: 'https://images.unsplash.com/photo-1517420812313-8001a889944c?auto=format&fit=crop&q=80&w=1200' },
  { id: 'overseas', name: '海外利益安全', icon: 'Ship', desc: '利益拓展的保障', img: 'https://images.unsplash.com/photo-1436450412740-6b988f486c6b?auto=format&fit=crop&q=80&w=1200' },
  { id: 'bio', name: '生物安全', icon: 'FirstAidKit', desc: '生命健康的保障', img: 'https://images.unsplash.com/photo-1584036561566-baf8f5f1b144?auto=format&fit=crop&q=80&w=1200' },
  { id: 'space', name: '太空安全', icon: 'Compass', desc: '新型安全领域', img: 'https://images.unsplash.com/photo-1454789548928-9efd52dc4031?auto=format&fit=crop&q=80&w=1200' },
  { id: 'deepsea', name: '深海安全', icon: 'Odometer', desc: '海洋强国利益', img: 'https://images.unsplash.com/photo-1551244072-5d12893278ab?auto=format&fit=crop&q=80&w=1200' },
  { id: 'polar', name: '极地安全', icon: 'Place', desc: '科研与航行权利', img: 'https://images.unsplash.com/photo-1473081556163-2a17de81fc97?auto=format&fit=crop&q=80&w=1200' },
]

const navigateToDomain = (id: string) => {
  router.push(`/domain/${id}`)
}
</script>

<template>
  <div class="fullpage-container">
    <!-- 引导屏 -->
    <section class="page-section hero-page">
      <div class="hero-bg"></div>
      <div class="page-content">
        <h1 class="main-title">总体国家安全观</h1>
        <p class="main-subtitle">坚持以人民安全为宗旨</p>
        <div class="scroll-indicator">
          <span>向下划动探索领域</span>
          <el-icon class="ani-bounce"><ArrowDownBold /></el-icon>
        </div>
      </div>
    </section>

    <!-- 16个领域屏 -->
    <section 
      v-for="item in domains" 
      :key="item.id" 
      class="page-section domain-page"
      :style="{ backgroundImage: `url(${item.img})` }"
      @click="navigateToDomain(item.id)"
    >
      <div class="page-overlay"></div>
      <div class="page-content">
        <div class="domain-info">
          <el-icon :size="64" color="#fff" class="domain-icon">
            <component :is="item.icon" />
          </el-icon>
          <h2 class="domain-name">{{ item.name }}</h2>
          <p class="domain-desc">{{ item.desc }}</p>
          <div class="detail-btn">
            点击了解详情 <el-icon><Right /></el-icon>
          </div>
        </div>
      </div>
    </section>

    <!-- 结尾屏 -->
    <section class="page-section footer-page">
      <div class="page-content">
        <h2 class="footer-title">国家安全 · 人人有责</h2>
        <p>每年 4 月 15 日为全民国家安全教育日</p>
        <div class="hotline-mini">举报电话：12339</div>
        <el-button type="danger" round @click="$router.push('/knowledge')" class="mt-4">查看知识库</el-button>
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
  margin: -20px -15px; /* Offset main padding */
  background: #000;
}

.fullpage-container::-webkit-scrollbar {
  display: none;
}

.page-section {
  height: 100vh;
  width: 100%;
  scroll-snap-align: start;
  scroll-snap-stop: always;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
  background-size: cover;
  background-position: center;
}

.page-overlay {
  position: absolute;
  top: 0; left: 0; right: 0; bottom: 0;
  background: linear-gradient(180deg, rgba(0,0,0,0.2) 0%, rgba(192, 0, 0, 0.4) 100%);
}

.page-content {
  position: relative;
  z-index: 10;
  color: white;
  text-align: center;
  padding: 0 30px;
}

/* 英雄屏样式 */
.hero-page {
  background: #c00000;
}
.hero-bg {
  position: absolute;
  width: 100%;
  height: 100%;
  background-image: radial-gradient(circle at center, rgba(255,255,255,0.2) 0%, transparent 70%);
}

.main-title {
  font-size: 2.5rem;
  font-weight: 900;
  letter-spacing: 4px;
  margin-bottom: 10px;
}

.main-subtitle {
  font-size: 1.2rem;
  opacity: 0.9;
}

.scroll-indicator {
  position: absolute;
  bottom: 40px;
  left: 50%;
  transform: translateX(-50%);
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;
  font-size: 0.9rem;
  opacity: 0.7;
}

.ani-bounce {
  animation: bounce 2s infinite;
}

@keyframes bounce {
  0%, 20%, 50%, 80%, 100% {transform: translateY(0);}
  40% {transform: translateY(-10px);}
  60% {transform: translateY(-5px);}
}

/* 领域屏样式 */
.domain-info {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 15px;
}

.domain-icon {
  filter: drop-shadow(0 4px 10px rgba(0,0,0,0.3));
}

.domain-name {
  font-size: 2.2rem;
  font-weight: 900;
  margin: 0;
  text-shadow: 0 2px 15px rgba(0,0,0,0.5);
}

.domain-desc {
  font-size: 1.1rem;
  opacity: 0.9;
  max-width: 250px;
  line-height: 1.4;
}

.detail-btn {
  margin-top: 20px;
  background: rgba(255,255,255,0.2);
  backdrop-filter: blur(10px);
  padding: 10px 25px;
  border-radius: 30px;
  font-size: 0.9rem;
  border: 1px solid rgba(255,255,255,0.3);
}

/* 结尾屏样式 */
.footer-page {
  background: #f5f7fa;
  color: #303133;
}

.footer-title {
  color: #c00000;
  font-size: 2rem;
  font-weight: 900;
  margin-bottom: 10px;
}

.hotline-mini {
  margin-top: 20px;
  font-weight: bold;
  color: #c00000;
  font-size: 1.2rem;
}

.mt-4 {
  margin-top: 30px;
}

/* PC端微调 */
@media (min-width: 768px) {
  .main-title { font-size: 4rem; }
  .domain-name { font-size: 3.5rem; }
  .domain-desc { font-size: 1.5rem; max-width: 500px; }
}
</style>