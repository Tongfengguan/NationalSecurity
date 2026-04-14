<script setup lang="ts">
import { ref } from 'vue'

const statData = ref([
  { title: 'Political Security', value: 'Stable', color: '#3b82f6', icon: 'Location' },
  { title: 'Cyber Security', value: 'Active Defense', color: '#10b981', icon: 'Monitor' },
  { title: 'Economic Security', value: 'Growing', color: '#f59e0b', icon: 'TrendCharts' },
  { title: 'Social Security', value: 'Harmonious', color: '#8b5cf6', icon: 'UserFilled' },
])
</script>

<template>
  <div class="dashboard">
    <h1 class="page-title">Overall Security Status</h1>
    
    <el-row :gutter="20">
      <el-col :xs="24" :sm="12" :md="6" v-for="item in statData" :key="item.title" class="stat-col">
        <el-card shadow="hover" class="stat-card" :style="{ borderTop: `4px solid ${item.color}` }">
          <div class="stat-header">
            <el-icon :size="24" :color="item.color">
              <component :is="item.icon" />
            </el-icon>
            <span class="stat-title">{{ item.title }}</span>
          </div>
          <div class="stat-value" :style="{ color: item.color }">{{ item.value }}</div>
        </el-card>
      </el-col>
    </el-row>

    <el-row :gutter="20" class="mt-20">
      <el-col :span="24">
        <el-card shadow="never" class="info-card">
          <template #header>
            <div class="card-header">
              <span>Latest Threat Intelligence</span>
              <el-tag type="danger" effect="dark" round>Live Updates</el-tag>
            </div>
          </template>
          <el-timeline>
            <el-timeline-item timestamp="Just now" placement="top" type="success">
              Routine network sweep completed. No anomalies detected.
            </el-timeline-item>
            <el-timeline-item timestamp="1 hour ago" placement="top" type="warning">
              Suspicious login attempt blocked from foreign IP.
            </el-timeline-item>
            <el-timeline-item timestamp="1 day ago" placement="top" type="primary">
              System updated with latest security patches.
            </el-timeline-item>
          </el-timeline>
        </el-card>
      </el-col>
    </el-row>
  </div>
</template>

<style scoped>
.dashboard {
  max-width: 1200px;
  margin: 0 auto;
}

.page-title {
  margin-bottom: 24px;
  font-size: 1.8rem;
  color: #f8fafc;
}

.stat-col {
  margin-bottom: 20px;
}

.stat-card {
  background: rgba(30, 41, 59, 0.7);
  border: 1px solid rgba(255, 255, 255, 0.05);
  transition: transform 0.3s;
}

.stat-card:hover {
  transform: translateY(-5px);
}

.stat-header {
  display: flex;
  align-items: center;
  gap: 12px;
  margin-bottom: 16px;
}

.stat-title {
  font-size: 1.1rem;
  color: #94a3b8;
}

.stat-value {
  font-size: 1.6rem;
  font-weight: bold;
}

.mt-20 {
  margin-top: 20px;
}

.info-card {
  background: rgba(30, 41, 59, 0.7);
  border: 1px solid rgba(255, 255, 255, 0.05);
}

.card-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
}
</style>