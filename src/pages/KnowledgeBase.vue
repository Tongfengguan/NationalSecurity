<script setup lang="ts">
import { onMounted } from 'vue'

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
            <h3>基本定义</h3>
          </div>
          <div class="item-body">
            根据《中华人民共和国国家安全法》，国家安全是指国家政权、主权、统一和领土完整、人民福祉、经济社会可持续发展和国家其他重大利益相对处于没有危险和不受内外威胁的状态，以及保障持续安全状态的能力。
          </div>
        </section>

        <section class="dossier-item reveal-text is-visible" style="transition-delay: 0.15s">
          <div class="item-header">
            <el-icon><Promotion /></el-icon>
            <h3>总体国家安全观</h3>
          </div>
          <div class="item-body">
            2014年4月15日，习近平总书记在中央国家安全委员会第一次会议上首次提出。强调坚持以<b>人民安全</b>为宗旨，以<b>政治安全</b>为根本，以<b>经济安全</b>为基础，以<b>军事、文化、社会安全</b>为保障，以<b>促进国际安全</b>为依托。
          </div>
        </section>

        <section class="dossier-item reveal-text is-visible" style="transition-delay: 0.2s">
          <div class="item-header">
            <el-icon><ScaleToOriginal /></el-icon>
            <h3>中国国家安全法律体系</h3>
          </div>
          <div class="item-body">
            中国已构建起以《宪法》为根本，以《国家安全法》为骨干，涵盖《反间谍法》、《网络安全法》、《生物安全法》、《数据安全法》、《反外国制裁法》等一系列专项法律的完备体系。
          </div>
        </section>

        <section class="dossier-item reveal-text is-visible" style="transition-delay: 0.25s">
          <div class="item-header">
            <el-icon><Stamp /></el-icon>
            <h3>公民法定义务</h3>
          </div>
          <div class="item-body">
            <ul class="premium-list">
              <li>遵守宪法、法律法规关于国家安全的有关规定；</li>
              <li>及时报告危害国家安全活动的线索；</li>
              <li>如实提供所知悉的涉及危害国家安全活动的证据；</li>
              <li>为国家安全工作提供便利条件或者其他协助；</li>
              <li>向国家安全机关、公安机关和有关军事机关提供必要的支持和协助；</li>
              <li>保守所知悉的国家秘密。</li>
            </ul>
          </div>
        </section>

        <section class="dossier-item reveal-text is-visible" style="transition-delay: 0.3s">
          <div class="item-header">
            <el-icon><Calendar /></el-icon>
            <h3>重要时间节点</h3>
          </div>
          <div class="item-body">
            <div class="timeline-mini">
              <div class="t-item"><b>4月15日</b> 全民国家安全教育日</div>
              <div class="t-item"><b>1月10日</b> 中国人民警察节</div>
              <div class="t-item"><b>11月1日</b> 《反间谍法》颁布实施纪念日</div>
            </div>
          </div>
        </section>
      </div>

      <div class="report-section reveal-text is-visible" style="transition-delay: 0.4s">
        <div class="report-card">
          <div class="report-label">国家安全机关举报受理平台</div>
          <div class="report-number">12339</div>
          <div class="report-web">www.12339.gov.cn</div>
          <p class="report-hint">国之大者 · 安而不忘危</p>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.knowledge-container {
  min-height: 100vh;
  background-color: var(--bg-cream);
  padding-top: 120px; /* 增加留白，确保不被 Header 遮挡 */
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
  gap: 30px;
}

.dossier-item {
  background: white;
  padding: 35px;
  box-shadow: 0 15px 40px rgba(0,0,0,0.02);
  border-left: 3px solid var(--primary-red);
  transition: transform 0.3s;
}

.dossier-item:hover {
  transform: translateX(5px);
}

.item-header {
  display: flex;
  align-items: center;
  gap: 12px;
  margin-bottom: 15px;
  color: var(--primary-red);
}

.item-header h3 {
  margin: 0;
  font-size: 1.25rem;
  letter-spacing: 1px;
  color: #1a1a1a;
}

.item-body {
  font-size: 1.05rem;
  line-height: 1.8;
  color: #444;
  text-align: justify;
}

.premium-list {
  padding-left: 20px;
  list-style: none;
}

.premium-list li {
  margin-bottom: 10px;
  position: relative;
}

.premium-list li::before {
  content: '·';
  position: absolute;
  left: -15px;
  color: var(--gold-accent);
  font-weight: bold;
}

.timeline-mini {
  display: flex;
  flex-direction: column;
  gap: 10px;
}

.t-item {
  padding: 8px 15px;
  background: #fcfcfc;
  border-radius: 4px;
  font-size: 0.95rem;
}

.t-item b {
  color: var(--primary-red);
  margin-right: 10px;
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
  content: 'SAFE';
  position: absolute;
  font-size: 10rem;
  font-weight: 900;
  bottom: -30px;
  right: -10px;
  opacity: 0.05;
}

.report-label {
  font-size: 1rem;
  letter-spacing: 4px;
  opacity: 0.8;
}

.report-number {
  font-size: 4.5rem;
  font-weight: 900;
  margin: 10px 0;
  letter-spacing: 8px;
}

.report-web {
  font-size: 1.2rem;
  letter-spacing: 2px;
  margin-bottom: 20px;
  opacity: 0.9;
}

.report-hint {
  font-size: 0.85rem;
  letter-spacing: 4px;
  opacity: 0.7;
  text-transform: uppercase;
}

@media (max-width: 768px) {
  .knowledge-content { padding: 0 20px 60px 20px; }
  .main-title { font-size: 1.8rem; letter-spacing: 4px; }
  .dossier-item { padding: 25px; }
  .report-number { font-size: 2.8rem; }
  .report-card { padding: 30px; }
  .report-web { font-size: 1rem; }
}
</style>