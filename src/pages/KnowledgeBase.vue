<script setup lang="ts">
import { ref } from 'vue'

const activeName = ref('1')
</script>

<template>
  <div class="knowledge-base">
    <h1 class="page-title">National Security Law Knowledge Base</h1>
    
    <el-card class="content-card" shadow="never">
      <el-collapse v-model="activeName" accordion>
        <el-collapse-item name="1">
          <template #title>
            <div class="collapse-title">
              <el-icon><Reading /></el-icon>
              <span>National Security Law Overview</span>
            </div>
          </template>
          <div class="collapse-content">
            National security is the paramount interest of the state. It refers to a status in which the regime, sovereignty, unity, territorial integrity, welfare of the people, sustainable economic and social development, and other major interests of the state are relatively not in danger and not threatened internally or externally.
          </div>
        </el-collapse-item>
        
        <el-collapse-item name="2">
          <template #title>
            <div class="collapse-title">
              <el-icon><Lock /></el-icon>
              <span>Cyber Security Law</span>
            </div>
          </template>
          <div class="collapse-content">
            Enacted to ensure cyber security, safeguard cyberspace sovereignty and national security, protect the lawful rights and interests of citizens, legal persons and other organizations. It emphasizes the protection of critical information infrastructure and personal information.
          </div>
        </el-collapse-item>
        
        <el-collapse-item name="3">
          <template #title>
            <div class="collapse-title">
              <el-icon><WarnTriangleFilled /></el-icon>
              <span>Anti-Espionage Law</span>
            </div>
          </template>
          <div class="collapse-content">
            Focuses on preventing, frustrating and punishing espionage conduct to safeguard national security. It outlines the duties of citizens and organizations to support and assist in anti-espionage efforts.
          </div>
        </el-collapse-item>
      </el-collapse>
    </el-card>
  </div>
</template>

<style scoped>
.knowledge-base {
  max-width: 900px;
  margin: 0 auto;
}

.page-title {
  margin-bottom: 24px;
  font-size: 1.8rem;
  color: #f8fafc;
}

.content-card {
  background: rgba(30, 41, 59, 0.7);
  border: 1px solid rgba(255, 255, 255, 0.05);
  border-radius: 8px;
}

.collapse-title {
  display: flex;
  align-items: center;
  gap: 8px;
  font-size: 1.1rem;
  font-weight: 500;
}

.collapse-content {
  line-height: 1.6;
  color: #cbd5e1;
  font-size: 1rem;
}

:deep(.el-collapse-item__header) {
  background-color: transparent;
  color: #f8fafc;
  border-bottom: 1px solid rgba(255, 255, 255, 0.1);
}

:deep(.el-collapse-item__wrap) {
  background-color: transparent;
  border-bottom: none;
}
</style>