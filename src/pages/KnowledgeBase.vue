<script setup lang="ts">
import { ref } from 'vue'

const activeNames = ref(['1'])
</script>

<template>
  <div class="knowledge-base">
    <div class="page-header">
      <h1 class="page-title">国家安全知识百科</h1>
      <p class="desc">学习国家安全知识，增强国家安全意识</p>
    </div>
    
    <el-collapse v-model="activeNames" class="custom-collapse">
      <el-collapse-item name="1">
        <template #title>
          <div class="collapse-title"><el-icon><Flag /></el-icon> 什么是国家安全？</div>
        </template>
        <div class="content">
          根据《中华人民共和国国家安全法》，国家安全是指国家政权、主权、统一和领土完整、人民福祉、经济社会可持续发展和国家其他重大利益相对处于没有危险和不受内外威胁的状态，以及保障持续安全状态的能力。
        </div>
      </el-collapse-item>

      <el-collapse-item name="2">
        <template #title>
          <div class="collapse-title"><el-icon><Promotion /></el-icon> 总体国家安全观</div>
        </template>
        <div class="content">
          总体国家安全观由习近平总书记在2014年4月15日提出。强调以人民安全为宗旨，以政治安全为根本，以经济安全为基础，以军事、文化、社会安全为保障，以促进国际安全为依托，走出一条中国特色国家安全道路。
        </div>
      </el-collapse-item>

      <el-collapse-item name="3">
        <template #title>
          <div class="collapse-title"><el-icon><Stamp /></el-icon> 公民的义务</div>
        </template>
        <div class="content">
          <ul class="duty-list">
            <li>遵守宪法、法律法规关于国家安全的有关规定；</li>
            <li>及时报告危害国家安全活动的线索；</li>
            <li>如实提供所知悉的涉及危害国家安全活动的证据；</li>
            <li>为国家安全工作提供便利条件或者其他协助；</li>
            <li>向国家安全机关、公安机关和有关军事机关提供必要的支持和协助；</li>
            <li>保守所知悉的国家秘密。</li>
          </ul>
        </div>
      </el-collapse-item>
    </el-collapse>

    <div class="hotline-card">
      <el-icon :size="40"><PhoneFilled /></el-icon>
      <div class="hotline-text">
        <div class="label">国家安全机关举报受理电话</div>
        <div class="number">12339</div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.knowledge-base {
  max-width: 900px;
  margin: 0 auto;
}

.page-header {
  text-align: center;
  margin-bottom: 40px;
}

.page-title {
  color: #c00000;
  font-size: 2.2rem;
  margin-bottom: 10px;
}

.desc {
  color: #909399;
}

.custom-collapse {
  border: 1px solid #ebeef5;
  border-radius: 8px;
  overflow: hidden;
  background: #fff;
}

.collapse-title {
  padding-left: 20px;
  font-size: 1.1rem;
  font-weight: bold;
  color: #303133;
  display: flex;
  align-items: center;
  gap: 10px;
}

.content {
  padding: 20px 40px;
  line-height: 1.8;
  color: #606266;
  font-size: 1.05rem;
}

.duty-list {
  padding-left: 20px;
}

.hotline-card {
  margin-top: 40px;
  background: #c00000;
  color: #fff;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 20px;
  padding: 30px;
  border-radius: 12px;
  box-shadow: 0 4px 15px rgba(192, 0, 0, 0.2);
}

.hotline-text .label {
  font-size: 1.1rem;
  opacity: 0.9;
}

.hotline-text .number {
  font-size: 2.4rem;
  font-weight: 900;
}

:deep(.el-collapse-item__header.is-active) {
  color: #c00000;
}
</style>