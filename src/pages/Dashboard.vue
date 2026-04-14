<script setup lang="ts">
import { useRouter } from 'vue-router'

const router = useRouter()

const domains = [
  { id: 'political', name: '政治安全', icon: 'UserFilled', desc: '国家安全的根本' },
  { id: 'homeland', name: '国土安全', icon: 'MapLocation', desc: '生存发展的底线' },
  { id: 'military', name: '军事安全', icon: 'Promotion', desc: '国家安全的保障' },
  { id: 'economic', name: '经济安全', icon: 'TrendCharts', desc: '发展的物质基础' },
  { id: 'cultural', name: '文化安全', icon: 'Collection', desc: '民族生存的灵魂' },
  { id: 'social', name: '社会安全', icon: 'Management', desc: '和谐稳定的依托' },
  { id: 'tech', name: '科技安全', icon: 'Monitor', desc: '支撑发展的关键' },
  { id: 'cyber', name: '网络安全', icon: 'Lock', desc: '网络空间的主权' },
  { id: 'ecology', name: '生态安全', icon: 'Sunny', desc: '可持续发展底线' },
  { id: 'resource', name: '资源安全', icon: 'Operation', desc: '发展的核心要素' },
  { id: 'nuclear', name: '核安全', icon: 'Warning', desc: '和平利用核能' },
  { id: 'overseas', name: '海外利益安全', icon: 'Ship', desc: '利益拓展的保障' },
  { id: 'bio', name: '生物安全', icon: 'FirstAidKit', desc: '生命健康的保障' },
  { id: 'space', name: '太空安全', icon: 'Compass', desc: '新型安全领域' },
  { id: 'deepsea', name: '深海安全', icon: 'Odometer', desc: '海洋强国利益' },
  { id: 'polar', name: '极地安全', icon: 'Place', desc: '科研与航行权利' },
]

const navigateToDomain = (id: string) => {
  router.push(`/domain/${id}`)
}
</script>

<template>
  <div class="dashboard">
    <div class="hero-section">
      <div class="hero-overlay"></div>
      <div class="hero-content">
        <h1 class="main-title">总体国家安全观</h1>
        <p class="subtitle">居安思危 · 统筹发展与安全</p>
      </div>
    </div>
    
    <div class="content-wrapper">
      <div class="domain-section">
        <div class="section-header">
          <h2 class="section-title">16 个重点领域</h2>
          <span class="scroll-hint">左右滑动查看全部 <el-icon><Right /></el-icon></span>
        </div>
        
        <!-- 丝滑横向滑动容器 -->
        <div class="swipe-container">
          <div 
            v-for="item in domains" 
            :key="item.id" 
            class="swipe-item"
            @click="navigateToDomain(item.id)"
          >
            <el-card shadow="never" class="domain-card">
              <div class="card-inner">
                <el-icon :size="40" color="#c00000">
                  <component :is="item.icon" />
                </el-icon>
                <div class="domain-name">{{ item.name }}</div>
                <div class="domain-tag">{{ item.desc }}</div>
                <div class="click-more">点击进入 <el-icon><ArrowRight /></el-icon></div>
              </div>
            </el-card>
          </div>
        </div>
      </div>

      <div class="info-section">
        <el-card class="concept-card" shadow="never">
          <template #header><div class="card-header"><el-icon color="#c00000"><Management /></el-icon> <b>“五对关系”</b></div></template>
          <div class="concept-grid">
            <div class="concept-item">外部安全 & 内部安全</div>
            <div class="concept-item">国土安全 & 国民安全</div>
            <div class="concept-item">传统安全 & 非传统安全</div>
            <div class="concept-item">发展问题 & 安全问题</div>
            <div class="concept-item">自身安全 & 共同安全</div>
          </div>
        </el-card>
      </div>

      <div class="footer-note">
        <p>每年 4 月 15 日为全民国家安全教育日</p>
      </div>
    </div>
  </div>
</template>

<style scoped>
.dashboard {
  max-width: 100%;
  overflow-x: hidden;
}

.hero-section {
  position: relative;
  height: 200px;
  background-image: url('https://images.unsplash.com/photo-1555939594-58d7cb561ad1?auto=format&fit=crop&q=80&w=1200');
  background-size: cover;
  background-position: center;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 0 0 30px 30px;
  margin: -20px -15px 30px -15px;
  overflow: hidden;
}

.hero-overlay {
  position: absolute;
  top: 0; left: 0; right: 0; bottom: 0;
  background: linear-gradient(180deg, rgba(192, 0, 0, 0.8) 0%, rgba(0, 0, 0, 0.4) 100%);
}

.hero-content {
  position: relative;
  z-index: 1;
  text-align: center;
  color: white;
}

.main-title {
  font-size: 1.8rem;
  margin: 0;
  font-weight: 900;
  letter-spacing: 2px;
}

.subtitle {
  font-size: 0.9rem;
  margin-top: 8px;
  opacity: 0.9;
}

.section-header {
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
  margin-bottom: 15px;
  padding: 0 5px;
}

.section-title {
  font-size: 1.2rem;
  color: #303133;
  margin: 0;
  border-left: 4px solid #c00000;
  padding-left: 10px;
}

.scroll-hint {
  font-size: 0.75rem;
  color: #909399;
  display: flex;
  align-items: center;
  gap: 4px;
}

/* 核心滑动容器样式 */
.swipe-container {
  display: flex;
  overflow-x: auto;
  scroll-snap-type: x mandatory;
  scroll-behavior: smooth;
  -webkit-overflow-scrolling: touch;
  gap: 15px;
  padding: 10px 5px 20px 5px;
  margin: 0 -15px;
  padding-left: 15px;
  padding-right: 15px;
}

.swipe-container::-webkit-scrollbar {
  display: none; /* 隐藏滚动条 */
}

.swipe-item {
  flex: 0 0 75%; /* 移动端显示大部分卡片，露出一部分提示后面还有 */
  scroll-snap-align: center;
  transition: transform 0.3s;
}

.swipe-item:active {
  transform: scale(0.96);
}

.domain-card {
  height: 220px;
  border-radius: 20px;
  border: 1px solid #f0f0f0;
  background: #fff;
  box-shadow: 0 10px 20px rgba(0,0,0,0.03);
  display: flex;
  align-items: center;
  justify-content: center;
}

.card-inner {
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;
}

.domain-name {
  font-size: 1.3rem;
  font-weight: 800;
  color: #303133;
  margin-top: 10px;
}

.domain-tag {
  font-size: 0.85rem;
  color: #909399;
  max-width: 180px;
}

.click-more {
  margin-top: 15px;
  font-size: 0.8rem;
  color: #c00000;
  display: flex;
  align-items: center;
  gap: 4px;
  font-weight: bold;
}

.info-section {
  margin-top: 30px;
}

.concept-card {
  border-radius: 20px;
  border: none;
  background: #fdfdfd;
}

.concept-grid {
  display: grid;
  grid-template-columns: 1fr;
  gap: 10px;
}

.concept-item {
  padding: 12px;
  background: #fff;
  border-left: 3px solid #f5c2c2;
  font-size: 0.9rem;
  color: #606266;
  border-radius: 0 8px 8px 0;
}

.footer-note {
  text-align: center;
  margin-top: 30px;
  padding-bottom: 20px;
}

.footer-note p {
  color: #c00000;
  font-weight: bold;
  font-size: 0.9rem;
}

/* 桌面端适配 */
@media (min-width: 768px) {
  .hero-section {
    height: 300px;
    margin: -30px -40px 40px -40px;
  }
  .main-title {
    font-size: 3rem;
  }
  .swipe-item {
    flex: 0 0 250px;
  }
  .concept-grid {
    grid-template-columns: 1fr 1fr;
  }
}
</style>