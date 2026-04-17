<script setup lang="ts">
import { ref, onMounted } from 'vue'

const activeNames = ref(['1'])

onMounted(() => {
  window.scrollTo(0, 0)
})
</script>

<template>
  <div class="knowledge-container">
    <div class="dynamic-grid-bg"></div>
    
    <div class="knowledge-content">
      <header class="page-header reveal-text is-visible">
        <span class="category-label">国家安全 · 官方档案</span>
        <h1 class="main-title">国家安全知识百科</h1>
        <div class="ornament-line"></div>
      </header>

      <div class="dossier-list">
        <section class="dossier-item reveal-text is-visible" style="transition-delay: 0.1s">
          <div class="item-header">
            <el-icon><Flag /></el-icon>
            <h3>国家安全定义</h3>
          </div>
          <div class="item-body">
            根据《中华人民共和国国家安全法》，国家安全是指国家政权、主权、统一和领土完整、人民福祉、经济社会可持续发展和国家其他重大利益相对处于没有危险和不受内外威胁的状态，以及保障持续安全状态的能力。
          </div>
        </section>

        <section class="dossier-item reveal-text is-visible" style="transition-delay: 0.2s">
          <div class="item-header">
            <el-icon><Promotion /></el-icon>
            <h3>总体国家安全观</h3>
          </div>
          <div class="item-body">
            由习近平总书记在2014年4月15日首次提出。其核心是以人民安全为宗旨，以政治安全为根本，以经济安全为基础，以军事、文化、社会安全为保障，以促进国际安全为依托，走出一条中国特色国家安全道路。
          </div>
        </section>

        <section class="dossier-item reveal-text is-visible" style="transition-delay: 0.3s">
          <div class="item-header">
            <el-icon><Stamp /></el-icon>
            <h3>公民法定义务</h3>
          </div>
          <div class="item-body">
            <ul class="premium-list">
              <li>遵守宪法、法律法规关于国家安全的规定</li>
              <li>及时报告危害国家安全活动的线索</li>
              <li>如实提供所知悉的涉及危害国家安全活动的证据</li>
              <li>为国家安全工作提供便利条件或者其他协助</li>
              <li>向国家安全机关、公安机关提供必要的支持</li>
              <li>保守所知悉的国家秘密</li>
            </ul>
          </div>
        </section>
      </div>

      <div class="report-section reveal-text is-visible" style="transition-delay: 0.4s">
        <div class="report-card">
          <div class="report-label">国家安全机关受理举报热线</div>
          <div class="report-number">12339</div>
          <p class="report-hint">维护国家安全 · 人人有责</p>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.knowledge-container {
  min-height: 100vh;
  background-color: var(--bg-cream);
  padding-top: 100px; /* 修复导航栏遮挡 */
}

.knowledge-content {
  max-width: 900px;
  margin: 0 auto;
  padding: 0 40px 100px 40px;
}

.page-header {
  margin-bottom: 60px;
  text-align: center;
}

.category-label {
  font-size: 0.8rem;
  letter-spacing: 4px;
  color: var(--primary-red);
  opacity: 0.7;
}

.main-title {
  font-size: 3rem;
  font-weight: 900;
  margin: 15px 0;
  letter-spacing: 8px;
  color: #1a1a1a;
}

.ornament-line {
  width: 60px;
  height: 3px;
  background: var(--gold-accent);
  margin: 0 auto;
}

.dossier-list {
  display: flex;
  flex-direction: column;
  gap: 40px;
}

.dossier-item {
  background: white;
  padding: 40px;
  box-shadow: 0 20px 50px rgba(0,0,0,0.03);
  border-left: 4px solid var(--primary-red);
}

.item-header {
  display: flex;
  align-items: center;
  gap: 15px;
  margin-bottom: 20px;
  color: var(--primary-red);
}

.item-header h3 {
  margin: 0;
  font-size: 1.4rem;
  letter-spacing: 2px;
  color: #1a1a1a;
}

.item-body {
  font-size: 1.1rem;
  line-height: 1.8;
  color: #444;
  text-align: justify;
}

.premium-list {
  padding-left: 20px;
  list-style: none;
}

.premium-list li {
  margin-bottom: 12px;
  position: relative;
}

.premium-list li::before {
  content: '·';
  position: absolute;
  left: -15px;
  color: var(--gold-accent);
  font-weight: bold;
}

.report-section {
  margin-top: 80px;
}

.report-card {
  background: var(--primary-red);
  color: white;
  padding: 50px;
  text-align: center;
  position: relative;
  overflow: hidden;
}

.report-card::after {
  content: '12339';
  position: absolute;
  font-size: 12rem;
  font-weight: 900;
  bottom: -40px;
  right: -20px;
  opacity: 0.05;
}

.report-label {
  font-size: 1.1rem;
  letter-spacing: 4px;
  opacity: 0.8;
}

.report-number {
  font-size: 5rem;
  font-weight: 900;
  margin: 10px 0;
  letter-spacing: 10px;
}

.report-hint {
  font-size: 0.9rem;
  letter-spacing: 2px;
  opacity: 0.7;
}

@media (max-width: 768px) {
  .knowledge-content { padding: 0 20px 60px 20px; }
  .main-title { font-size: 1.8rem; letter-spacing: 4px; }
  .dossier-item { padding: 25px; }
  .report-number { font-size: 3rem; }
  .report-card { padding: 30px; }
}
</style>