<script setup lang="ts">
import { onMounted } from 'vue'

onMounted(() => {
  window.scrollTo(0, 0)
})
</script>

<template>
  <div class="knowledge-page">
    <main class="content-limit">
      
      <header class="page-header">
        <h1 class="title serif">国家安全知识档案</h1>
        <p class="subtitle">汇聚法律体系与核心总体观</p>
        <div class="red-bar"></div>
      </header>

      <div class="info-list">
        <section class="info-card">
          <div class="card-side">01</div>
          <div class="card-main">
            <h3>基本定义</h3>
            <p>国家安全是指国家政权、主权、统一和领土完整、人民福祉、经济社会可持续发展和国家其他重大利益相对处于没有危险和不受内外威胁的状态，以及保障持续安全状态的能力。</p>
          </div>
        </section>

        <section class="info-card">
          <div class="card-side">02</div>
          <div class="card-main">
            <h3>总体国家安全观</h3>
            <p>2014年4月15日正式提出。其核心逻辑是以人民安全为宗旨，以政治安全为根本，以经济安全为基础，以军事、文化、社会安全为保障，以促进国际安全为依托。</p>
          </div>
        </section>

        <section class="info-card">
          <div class="card-side">03</div>
          <div class="card-main">
            <h3>法律体系</h3>
            <p>已构建起以《宪法》为根本，以《国家安全法》为骨干，涵盖《反间谍法》、《网络安全法》、《数据安全法》等专项法律的完备保障体系。</p>
          </div>
        </section>

        <section class="info-card">
          <div class="card-side">04</div>
          <div class="card-main">
            <h3>公民法定义务</h3>
            <ul class="bullet-list">
              <li>遵守宪法、法律法规关于国家安全的规定</li>
              <li>及时报告危害国家安全活动的线索</li>
              <li>如实提供涉及危害国家安全活动的证据</li>
              <li>为国家安全工作提供便利条件或协助</li>
              <li>保守所知悉的国家秘密</li>
            </ul>
          </div>
        </section>
      </div>

      <div class="report-box">
        <div class="report-header">国家安全机关举报受理平台</div>
        <div class="report-num serif">12339</div>
        <div class="report-site">www.12339.gov.cn</div>
      </div>

    </main>
  </div>
</template>

<style scoped>
.knowledge-page {
  background-color: var(--bg-color);
  min-height: 100vh;
  padding: 140px 40px 100px 40px;
  color: var(--text-main);
}

.content-limit {
  max-width: 900px;
  margin: 0 auto;
}

.serif { font-family: var(--font-serif); }

.page-header {
  text-align: center;
  margin-bottom: 80px;
}

.title {
  font-size: clamp(2.5rem, 5vw, 4rem);
  margin-bottom: 15px;
  color: var(--text-main);
}

.subtitle {
  color: var(--text-sub);
  letter-spacing: 0.2em;
  text-transform: uppercase;
  font-size: 0.9rem;
}

.red-bar {
  width: 50px;
  height: 4px;
  background: var(--primary-red);
  margin: 30px auto 0 auto;
}

.info-list {
  display: flex;
  flex-direction: column;
  gap: 40px;
}

.info-card {
  display: flex;
  background: white;
  padding: 40px;
  border-radius: 12px;
  border: 1px solid #eee;
  transition: all 0.3s;
}

.info-card:hover {
  border-color: var(--primary-red);
  box-shadow: 0 10px 30px rgba(0,0,0,0.05);
}

.card-side {
  font-size: 0.85rem;
  font-weight: bold;
  color: var(--primary-red);
  margin-right: 30px;
  padding-top: 5px;
}

.card-main h3 {
  margin: 0 0 15px 0;
  font-size: 1.4rem;
  color: var(--text-main);
}

.card-main p {
  margin: 0;
  line-height: 1.8;
  color: #444;
  font-size: 1.1rem;
}

.bullet-list {
  padding-left: 20px;
  margin-top: 10px;
}

.bullet-list li {
  margin-bottom: 10px;
  color: #444;
}

.report-box {
  margin-top: 80px;
  background: var(--primary-red);
  color: white;
  padding: 60px 40px;
  border-radius: 20px;
  text-align: center;
}

.report-header {
  font-size: 1.1rem;
  opacity: 0.9;
  letter-spacing: 2px;
}

.report-num {
  font-size: 5rem;
  font-weight: 900;
  margin: 15px 0;
  letter-spacing: 10px;
}

.report-site {
  font-size: 1.2rem;
  opacity: 0.8;
}

@media (max-width: 768px) {
  .knowledge-page { padding: 120px 20px 60px 20px; }
  .info-card { padding: 25px; flex-direction: column; }
  .card-side { margin-bottom: 10px; }
  .report-num { font-size: 3rem; letter-spacing: 5px; }
}
</style>