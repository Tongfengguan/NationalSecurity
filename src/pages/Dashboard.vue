<script setup lang="ts">
import { ref } from 'vue'

const domains = [
  { name: '政治安全', icon: 'UserFilled', desc: '根本' },
  { name: '国土安全', icon: 'MapLocation', desc: '基础' },
  { name: '军事安全', icon: 'Promotion', desc: '保障' },
  { name: '经济安全', icon: 'TrendCharts', desc: '基础' },
  { name: '文化安全', icon: 'Collection', desc: '支撑' },
  { name: '社会安全', icon: 'Management', desc: '依托' },
  { name: '科技安全', icon: 'Monitor', desc: '关键' },
  { name: '网络安全', icon: 'Lock', desc: '阵地' },
  { name: '生态安全', icon: 'Sunny', desc: '底线' },
  { name: '资源安全', icon: 'Operation', desc: '要素' },
  { name: '核安全', icon: 'Warning', desc: '特殊' },
  { name: '海外利益安全', icon: 'Ship', desc: '拓展' },
  { name: '太空安全', icon: 'Compass', desc: '新型' },
  { name: '深海安全', icon: 'Odometer', desc: '新型' },
  { name: '极地安全', icon: 'Place', desc: '新型' },
  { name: '生物安全', icon: 'FirstAidKit', desc: '新型' },
]
</script>

<template>
  <div class="dashboard">
    <div class="hero-section">
      <h1 class="main-title">总体国家安全观</h1>
      <p class="subtitle">坚持以人民安全为宗旨，以政治安全为根本，以经济安全为基础</p>
    </div>
    
    <div class="domain-grid">
      <h2 class="section-title">国家安全 16 个重点领域</h2>
      <el-row :gutter="20">
        <el-col :xs="12" :sm="8" :md="6" :lg="4" v-for="item in domains" :key="item.name" class="domain-col">
          <el-card shadow="hover" class="domain-card">
            <el-icon :size="32" color="#c00000">
              <component :is="item.icon" />
            </el-icon>
            <div class="domain-name">{{ item.name }}</div>
            <div class="domain-tag">{{ item.desc }}</div>
          </el-card>
        </el-col>
      </el-row>
    </div>

    <el-row :gutter="20" class="mt-30">
      <el-col :md="12">
        <el-card class="concept-card">
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
      <el-col :md="12">
        <el-card class="concept-card">
          <template #header><div class="card-header"><b>核心要义</b></div></template>
          <p class="concept-text">
            国家安全是国家生存发展的基本前提。维护国家安全是每个公民的神圣职责。我们要增强忧患意识，做到居安思危，全面践行总体国家安全观。
          </p>
          <el-divider />
          <div class="date-info">每年 4 月 15 日为全民国家安全教育日</div>
        </el-card>
      </el-col>
    </el-row>
  </div>
</template>

<style scoped>
.dashboard {
  max-width: 1300px;
  margin: 0 auto;
}

.hero-section {
  text-align: center;
  padding: 40px 0;
  background: linear-gradient(to bottom, #fff, #f9f9f9);
  border-radius: 12px;
  margin-bottom: 40px;
  border: 1px solid #ebeef5;
}

.main-title {
  font-size: 3rem;
  color: #c00000;
  margin: 0;
  font-weight: 900;
  letter-spacing: 4px;
}

.subtitle {
  font-size: 1.2rem;
  color: #606266;
  margin-top: 15px;
}

.section-title {
  font-size: 1.5rem;
  color: #303133;
  margin-bottom: 25px;
  border-left: 6px solid #c00000;
  padding-left: 15px;
}

.domain-col {
  margin-bottom: 20px;
}

.domain-card {
  text-align: center;
  padding: 20px 0;
  transition: all 0.3s;
  border: 1px solid #ebeef5;
}

.domain-card:hover {
  transform: translateY(-5px);
  border-color: #c00000;
  background: rgba(192, 0, 0, 0.02);
}

.domain-name {
  margin-top: 12px;
  font-weight: bold;
  font-size: 1.1rem;
}

.domain-tag {
  font-size: 0.8rem;
  color: #909399;
  margin-top: 5px;
}

.mt-30 {
  margin-top: 30px;
}

.concept-card {
  height: 100%;
  border-top: 3px solid #c00000;
}

.concept-list {
  padding-left: 20px;
  line-height: 2;
  color: #606266;
}

.concept-text {
  line-height: 1.8;
  color: #606266;
}

.date-info {
  text-align: center;
  font-weight: bold;
  color: #c00000;
}
</style>