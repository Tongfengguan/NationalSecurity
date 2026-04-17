<script setup lang="ts">
import { onMounted } from 'vue'

onMounted(() => {
  window.scrollTo(0, 0)
})
</script>

<template>
  <div class="knowledge-page">
    <main class="content-wrapper">
      
      <header class="page-header reveal-simple">
        <h1 class="title serif">国家安全知识档案</h1>
        <p class="subtitle">汇聚法律体系与核心总体观</p>
        <div class="red-divider"></div>
      </header>

      <div class="info-list">
        <section class="info-item reveal-simple">
          <div class="item-meta">01 / DEFINITION</div>
          <div class="item-main">
            <h3 class="serif">基本定义</h3>
            <p>根据《中华人民共和国国家安全法》，国家安全是指国家政权、主权、统一和领土完整、人民福祉、经济社会可持续发展和国家其他重大利益相对处于没有危险和不受内外威胁的状态，以及保障持续安全状态的能力。</p>
          </div>
        </section>

        <section class="info-item reveal-simple">
          <div class="item-meta">02 / CORE CONCEPT</div>
          <div class="item-main">
            <h3 class="serif">总体国家安全观</h3>
            <p>2014年4月15日提出。强调以<b>人民安全</b>为宗旨，以<b>政治安全</b>为根本，以<b>经济安全</b>为基础，以<b>军事、文化、社会安全</b>为保障，以<b>促进国际安全</b>为依托。</p>
          </div>
        </section>

        <section class="info-item reveal-simple">
          <div class="item-meta">03 / LEGAL SYSTEM</div>
          <div class="item-main">
            <h3 class="serif">法律体系</h3>
            <p>已构建起以《宪法》为根本，以《国家安全法》为骨干，涵盖《反间谍法》、《网络安全法》、《数据安全法》等专项法律的完备保障体系。</p>
          </div>
        </section>

        <section class="info-item reveal-simple">
          <div class="item-meta">04 / OBLIGATIONS</div>
          <div class="item-main">
            <h3 class="serif">公民法定义务</h3>
            <ul class="clean-list">
              <li>遵守宪法、法律法规关于国家安全的规定</li>
              <li>及时报告危害国家安全活动的线索</li>
              <li>如实提供涉及危害国家安全活动的证据</li>
              <li>为国家安全工作提供便利条件或协助</li>
              <li>保守所知悉的国家秘密</li>
            </ul>
          </div>
        </section>
      </div>

      <div class="report-banner reveal-simple">
        <div class="label">举报受理热线</div>
        <div class="number serif">12339</div>
        <div class="link">www.12339.gov.cn</div>
      </div>

    </main>
  </div>
</template>

<style scoped>
.knowledge-page {
  background-color: #fff;
  min-height: 100vh;
  padding: 120px 20px 80px 20px;
}

.content-wrapper {
  max-width: 800px;
  margin: 0 auto;
}

.page-header {
  text-align: center;
  margin-bottom: 80px;
}

.title {
  font-size: clamp(2.2rem, 5vw, 4rem);
  color: #111;
  margin-bottom: 10px;
}

.subtitle {
  font-size: 0.9rem;
  color: #888;
  letter-spacing: 0.2em;
  text-transform: uppercase;
}

.red-divider {
  width: 40px;
  height: 3px;
  background: var(--primary-red);
  margin: 30px auto 0 auto;
}

.info-list {
  display: flex;
  flex-direction: column;
  gap: 60px;
}

.info-item {
  display: grid;
  grid-template-columns: 1fr;
  border-top: 1px solid #eee;
  padding-top: 30px;
}

.item-meta {
  font-size: 0.75rem;
  font-weight: bold;
  color: var(--primary-red);
  letter-spacing: 1px;
  margin-bottom: 15px;
}

.item-main h3 {
  font-size: 1.8rem;
  margin: 0 0 20px 0;
  color: #111;
}

.item-main p {
  font-size: 1.1rem;
  line-height: 1.8;
  color: #333;
  text-align: justify;
}

.clean-list {
  padding-left: 20px;
  margin: 0;
}

.clean-list li {
  font-size: 1.1rem;
  margin-bottom: 12px;
  color: #333;
}

.report-banner {
  margin-top: 100px;
  padding: 60px 40px;
  background: #f9f9f9;
  border-radius: 4px;
  text-align: center;
}

.report-banner .label {
  font-size: 1rem;
  color: #666;
  letter-spacing: 2px;
}

.report-banner .number {
  font-size: 4rem;
  font-weight: 900;
  color: var(--primary-red);
  margin: 10px 0;
}

.report-banner .link {
  font-size: 1.1rem;
  color: #999;
}

@media (min-width: 768px) {
  .info-item {
    grid-template-columns: 200px 1fr;
  }
}
</style>