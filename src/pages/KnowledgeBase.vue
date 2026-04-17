<script setup lang="ts">
import { onMounted } from 'vue'

onMounted(() => {
  window.scrollTo(0, 0)
  
  // 简单的进场动画触发
  setTimeout(() => {
    const reveals = document.querySelectorAll('.fade-up')
    reveals.forEach(el => el.classList.add('is-visible'))
  }, 100)
})
</script>

<template>
  <div class="knowledge-wrapper">
    <main class="knowledge-main">
      
      <header class="page-header fade-up delay-1">
        <h1 class="main-title serif">知识档案</h1>
        <p class="subtitle">国家安全法律体系与核心概览</p>
      </header>

      <div class="dossier-list">
        
        <section class="dossier-item fade-up delay-1">
          <div class="item-header">
            <span class="item-num">01</span>
            <h3 class="serif">基本定义</h3>
          </div>
          <div class="item-body">
            <p>根据《中华人民共和国国家安全法》，国家安全是指国家政权、主权、统一和领土完整、人民福祉、经济社会可持续发展和国家其他重大利益相对处于没有危险和不受内外威胁的状态，以及保障持续安全状态的能力。</p>
          </div>
        </section>

        <section class="dossier-item fade-up delay-2">
          <div class="item-header">
            <span class="item-num">02</span>
            <h3 class="serif">总体国家安全观</h3>
          </div>
          <div class="item-body">
            <p>2014年4月15日首次提出。强调坚持以<b>人民安全</b>为宗旨，以<b>政治安全</b>为根本，以<b>经济安全</b>为基础，以<b>军事、文化、社会安全</b>为保障，以<b>促进国际安全</b>为依托。</p>
          </div>
        </section>

        <section class="dossier-item fade-up delay-3">
          <div class="item-header">
            <span class="item-num">03</span>
            <h3 class="serif">法律体系</h3>
          </div>
          <div class="item-body">
            <p>中国已构建起以《宪法》为根本，以《国家安全法》为骨干，涵盖《反间谍法》、《网络安全法》、《生物安全法》、《数据安全法》、《反外国制裁法》等一系列专项法律的完备体系。</p>
          </div>
        </section>

        <section class="dossier-item fade-up delay-1">
          <div class="item-header">
            <span class="item-num">04</span>
            <h3 class="serif">公民义务</h3>
          </div>
          <div class="item-body">
            <ul class="minimal-list">
              <li>遵守宪法、法律法规关于国家安全的有关规定</li>
              <li>及时报告危害国家安全活动的线索</li>
              <li>如实提供所知悉的涉及危害国家安全活动的证据</li>
              <li>为国家安全工作提供便利条件或者其他协助</li>
              <li>向国家安全机关、公安机关提供必要的支持和协助</li>
              <li>保守所知悉的国家秘密</li>
            </ul>
          </div>
        </section>

      </div>

      <div class="report-section fade-up delay-2">
        <div class="report-inner">
          <div class="report-label">国家安全机关举报受理平台</div>
          <div class="report-number serif">12339</div>
          <a href="https://www.12339.gov.cn" target="_blank" class="report-link">www.12339.gov.cn</a>
        </div>
      </div>

    </main>
  </div>
</template>

<style scoped>
.knowledge-wrapper {
  min-height: 100vh;
  background-color: var(--bg-color);
  color: var(--text-primary);
  padding: 150px 40px 100px 40px;
}

.knowledge-main {
  max-width: 800px;
  margin: 0 auto;
}

.serif { font-family: var(--font-serif); }

.page-header {
  margin-bottom: 100px;
}

.main-title {
  font-size: clamp(3rem, 6vw, 5rem);
  font-weight: 300;
  margin: 0 0 15px 0;
  letter-spacing: 0.1em;
}

.subtitle {
  font-size: 0.85rem;
  letter-spacing: 0.2em;
  color: var(--text-secondary);
  text-transform: uppercase;
}

.dossier-list {
  display: flex;
  flex-direction: column;
  gap: 0;
}

.dossier-item {
  border-top: 1px solid var(--border-color);
  padding: 40px 0;
  display: grid;
  grid-template-columns: 200px 1fr;
  gap: 40px;
}

.item-header {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 15px;
}

.item-num {
  font-size: 0.75rem;
  color: var(--text-secondary);
  letter-spacing: 0.2em;
}

.item-header h3 {
  margin: 0;
  font-size: 1.5rem;
  font-weight: 400;
  letter-spacing: 0.1em;
}

.item-body {
  font-size: 1.05rem;
  line-height: 1.8;
  color: #cccccc;
}

.item-body p {
  margin: 0;
}

.minimal-list {
  list-style: none;
  padding: 0;
  margin: 0;
}

.minimal-list li {
  margin-bottom: 12px;
  position: relative;
  padding-left: 15px;
}

.minimal-list li::before {
  content: '';
  position: absolute;
  left: 0;
  top: 12px;
  width: 4px;
  height: 4px;
  background-color: var(--text-secondary);
  border-radius: 50%;
}

.report-section {
  margin-top: 100px;
  border-top: 1px solid var(--border-color);
  padding-top: 60px;
  text-align: center;
}

.report-label {
  font-size: 0.85rem;
  letter-spacing: 0.2em;
  color: var(--text-secondary);
  margin-bottom: 20px;
}

.report-number {
  font-size: clamp(4rem, 8vw, 6rem);
  font-weight: 300;
  letter-spacing: 0.1em;
  margin: 0 0 20px 0;
}

.report-link {
  color: var(--text-primary);
  text-decoration: none;
  font-size: 0.9rem;
  letter-spacing: 0.1em;
  border-bottom: 1px solid var(--border-color);
  padding-bottom: 4px;
  transition: border-color 0.3s;
}

.report-link:hover {
  border-color: var(--text-primary);
}

@media (max-width: 768px) {
  .knowledge-wrapper { padding: 120px 20px 60px 20px; }
  .dossier-item { 
    grid-template-columns: 1fr; 
    gap: 20px;
    padding: 30px 0;
  }
}
</style>