<script setup lang="ts">
import { useRouter } from 'vue-router'

const router = useRouter()

const domains = [
  { id: 'political', name: '政治安全', icon: 'UserFilled', desc: '根本' },
  { id: 'homeland', name: '国土安全', icon: 'MapLocation', desc: '基础' },
  { id: 'military', name: '军事安全', icon: 'Promotion', desc: '保障' },
  { id: 'economic', name: '经济安全', icon: 'TrendCharts', desc: '基础' },
  { id: 'cultural', name: '文化安全', icon: 'Collection', desc: '支撑' },
  { id: 'social', name: '社会安全', icon: 'Management', desc: '依托' },
  { id: 'tech', name: '科技安全', icon: 'Monitor', desc: '关键' },
  { id: 'cyber', name: '网络安全', icon: 'Lock', desc: '阵地' },
  { id: 'ecology', name: '生态安全', icon: 'Sunny', desc: '底线' },
  { id: 'resource', name: '资源安全', icon: 'Operation', desc: '要素' },
  { id: 'nuclear', name: '核安全', icon: 'Warning', desc: '特殊' },
  { id: 'overseas', name: '海外利益安全', icon: 'Ship', desc: '拓展' },
  { id: 'bio', name: '生物安全', icon: 'FirstAidKit', desc: '新型' },
  { id: 'space', name: '太空安全', icon: 'Compass', desc: '新型' },
  { id: 'deepsea', name: '深海安全', icon: 'Odometer', desc: '新型' },
  { id: 'polar', name: '极地安全', icon: 'Place', desc: '新型' },
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
        <p class="subtitle">以人民安全为宗旨，以政治安全为根本</p>
      </div>
    </div>
    
    <div class="content-wrapper">
      <div class="domain-grid">
        <h2 class="section-title">16 个重点领域</h2>
        <el-row :gutter="12">
          <el-col :xs="12" :sm="8" :md="6" :lg="4" v-for="item in domains" :key="item.id" class="domain-col">
            <el-card shadow="never" class="domain-card" @click="navigateToDomain(item.id)">
              <el-icon :size="28" color="#c00000">
                <component :is="item.icon" />
              </el-icon>
              <div class="domain-name">{{ item.name }}</div>
              <div class="domain-tag">{{ item.desc }}</div>
            </el-card>
          </el-col>
        </el-row>
      </div>

      <el-row :gutter="20" class="mt-20">
        <el-col :xs="24" :md="12">
          <el-card class="concept-card" shadow="never">
            <template #header><div class="card-header"><b>“五对关系”</b></div></template>
            <ul class="concept-list">
              <li>既重视外部安全，又重视内部安全</li>
              <li>既重视国土安全，又重视国民安全</li>
              <li>既重视传统安全，又重视非传统安全</li>
              <li>既重视发展问题，又重视安全问题</li>
              <li>既重视自身安全，又重视共同安全</li>
            </ul>
          </el-card>
        </el-col>
        <el-col :xs="24" :md="12" class="mobile-mt-20">
          <el-card class="concept-card" shadow="never">
            <template #header><div class="card-header"><b>核心要义</b></div></template>
            <p class="concept-text">
              国家安全是国家生存发展的基本前提。维护国家安全是每个公民的神圣职责。我们要增强忧患意识，做到居安思危。
            </p>
            <el-divider />
            <div class="date-info">每年 4 月 15 日<br/>全民国家安全教育日</div>
          </el-card>
        </el-col>
      </el-row>
    </div>
  </div>
</template>

<style scoped>
.dashboard {
  max-width: 100%;
}

.hero-section {
  position: relative;
  height: 220px;
  background-image: url('https://images.unsplash.com/photo-1555939594-58d7cb561ad1?auto=format&fit=crop&q=80&w=1200');
  background-size: cover;
  background-position: center;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 0 0 20px 20px;
  margin: -30px -30px 30px -30px; /* Offset the main padding */
  overflow: hidden;
}

.hero-overlay {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: linear-gradient(to bottom, rgba(192, 0, 0, 0.7), rgba(0, 0, 0, 0.5));
}

.hero-content {
  position: relative;
  z-index: 1;
  text-align: center;
  color: white;
  padding: 0 20px;
}

.main-title {
  font-size: 2.2rem;
  margin: 0;
  font-weight: 900;
  letter-spacing: 2px;
  text-shadow: 0 2px 10px rgba(0,0,0,0.3);
}

.subtitle {
  font-size: 1rem;
  margin-top: 10px;
  opacity: 0.9;
}

.content-wrapper {
  max-width: 1200px;
  margin: 0 auto;
}

.section-title {
  font-size: 1.3rem;
  color: #303133;
  margin-bottom: 20px;
  border-left: 4px solid #c00000;
  padding-left: 12px;
}

.domain-col {
  margin-bottom: 12px;
}

.domain-card {
  text-align: center;
  padding: 15px 5px;
  cursor: pointer;
  border: 1px solid #f0f0f0;
  border-radius: 12px;
}

.domain-card:active {
  background: #fdfafb;
  transform: scale(0.98);
}

.domain-name {
  margin-top: 8px;
  font-weight: bold;
  font-size: 0.95rem;
  color: #303133;
}

.domain-tag {
  font-size: 0.75rem;
  color: #909399;
  margin-top: 3px;
}

.mt-20 {
  margin-top: 20px;
}

.mobile-mt-20 {
  margin-top: 15px;
}

.concept-card {
  border-radius: 12px;
}

.concept-list {
  padding-left: 18px;
  line-height: 1.8;
  color: #606266;
  font-size: 0.9rem;
}

.concept-text {
  line-height: 1.6;
  color: #606266;
  font-size: 0.9rem;
}

.date-info {
  text-align: center;
  font-weight: bold;
  color: #c00000;
  font-size: 0.95rem;
  line-height: 1.4;
}

@media (min-width: 768px) {
  .hero-section {
    height: 350px;
    margin: -30px -30px 40px -30px;
  }
  .main-title {
    font-size: 3.5rem;
  }
  .subtitle {
    font-size: 1.4rem;
  }
  .mobile-mt-20 {
    margin-top: 0;
  }
}
</style>