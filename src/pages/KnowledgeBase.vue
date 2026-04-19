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
        <span class="category-tag">OFFICIAL ARCHIVES</span>
        <h1 class="main-title serif">知识档案库</h1>
        <p class="subtitle">汇聚国家安全法律体系与总体国家安全观核心要义</p>
        <div class="accent-line"></div>
      </header>

      <div class="dossier-grid">
        <section class="dossier-card large reveal-simple">
          <div class="card-head">
            <span class="num">01</span>
            <h3 class="serif">基本定义</h3>
          </div>
          <div class="card-body">
            <p>根据《中华人民共和国国家安全法》，国家安全是指国家政权、主权、统一和领土完整、人民福祉、经济社会可持续发展和国家其他重大利益相对处于没有危险和不受内外威胁的状态，以及保障持续安全状态的能力。</p>
          </div>
        </section>

        <section class="dossier-card reveal-simple">
          <div class="card-head">
            <span class="num">02</span>
            <h3 class="serif">总体观</h3>
          </div>
          <div class="card-body">
            <p>2014年4月15日提出。强调以<b>人民安全</b>为宗旨，以<b>政治安全</b>为根本，以<b>经济安全</b>为基础。</p>
          </div>
        </section>

        <section class="dossier-card reveal-simple">
          <div class="card-head">
            <span class="num">03</span>
            <h3 class="serif">法律体系</h3>
          </div>
          <div class="card-body">
            <p>构建起以《宪法》为根本，以《国家安全法》为骨干的一系列专项法律体系。</p>
          </div>
        </section>

        <section class="dossier-card wide reveal-simple">
          <div class="card-head">
            <span class="num">04</span>
            <h3 class="serif">公民法定义务</h3>
          </div>
          <div class="card-body">
            <div class="duty-grid">
              <div class="duty-item">遵守宪法法律规定</div>
              <div class="duty-item">及时报告危害线索</div>
              <div class="duty-item">如实提供活动证据</div>
              <div class="duty-item">提供便利条件协助</div>
              <div class="duty-item">保守所知国家秘密</div>
            </div>
          </div>
        </section>
      </div>

      <footer class="report-section reveal-simple">
        <div class="report-card">
          <span class="label">NATIONAL REPORTING HOTLINE</span>
          <h2 class="number serif">12339</h2>
          <div class="divider-short"></div>
          <p class="desc">维护国家安全 · 人人有责</p>
        </div>
      </footer>

    </main>
  </div>
</template>

<style scoped>
.knowledge-page {
  background-color: #fff;
  min-height: 100vh;
  padding: 160px 40px 100px 40px;
  color: #111;
}

.content-wrapper {
  max-width: 1200px;
  margin: 0 auto;
}

.page-header { text-align: center; margin-bottom: 120px; }
.category-tag { font-size: 0.8rem; letter-spacing: 6px; color: var(--gold-dust); font-weight: 600; }
.main-title { font-size: clamp(3rem, 8vw, 6rem); margin: 20px 0; font-weight: 700; color: #111; }
.subtitle { font-size: 1.1rem; color: #666; letter-spacing: 2px; font-weight: 300; }
.accent-line { width: 60px; height: 3px; background: var(--cinnabar-red); margin: 40px auto 0 auto; }

/* Bento Grid */
.dossier-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-auto-rows: minmax(300px, auto);
  gap: 30px;
}

.dossier-card {
  background: #fff;
  border: 1px solid #f0f0f0;
  padding: 50px;
  display: flex; flex-direction: column;
  transition: all 0.5s var(--transition-smooth);
}
.dossier-card:hover { 
  border-color: var(--cinnabar-red);
  box-shadow: 0 30px 60px rgba(0,0,0,0.05);
  transform: translateY(-10px);
}

.dossier-card.large { grid-row: span 2; }
.dossier-card.wide { grid-column: span 2; }

.card-head { display: flex; align-items: center; gap: 20px; margin-bottom: 35px; }
.num { font-size: 0.8rem; font-weight: 900; color: var(--cinnabar-red); letter-spacing: 2px; }
.card-head h3 { font-size: 1.8rem; margin: 0; font-weight: 700; color: #111; }

.card-body p { font-size: 1.2rem; line-height: 2; color: #444; font-weight: 300; text-align: justify; }

.duty-grid {
  display: grid; grid-template-columns: 1fr 1fr; gap: 20px;
}
.duty-item {
  padding: 20px; background: #fafafa;
  border-left: 3px solid #eee;
  font-size: 1rem; color: #333; font-weight: 500;
  transition: all 0.3s;
}
.dossier-card:hover .duty-item { border-left-color: var(--cinnabar-red); background: #fffcfc; }

/* Report Section */
.report-section { margin-top: 120px; }
.report-card {
  background: #fafafa;
  padding: 100px 40px; text-align: center;
  border-radius: 4px; border: 1px solid #f0f0f0;
}
.label { font-size: 0.85rem; letter-spacing: 6px; color: #999; margin-bottom: 25px; display: block; }
.number { font-size: clamp(4rem, 12vw, 10rem); color: var(--cinnabar-red); line-height: 1; letter-spacing: 15px; }
.divider-short { width: 40px; height: 1px; background: #ddd; margin: 40px auto; }
.desc { font-size: 1.1rem; color: #666; letter-spacing: 4px; font-weight: 300; }

@media (max-width: 1024px) {
  .dossier-grid { grid-template-columns: 1fr 1fr; }
  .dossier-card.large { grid-row: span 1; }
  .dossier-card.wide { grid-column: span 2; }
}

@media (max-width: 768px) {
  .knowledge-page { padding: 120px 24px 60px 24px; }
  .dossier-grid { grid-template-columns: 1fr; }
  .dossier-card.wide { grid-column: span 1; }
  .duty-grid { grid-template-columns: 1fr; }
  .main-title { font-size: 2.8rem; }
  .report-card { padding: 60px 20px; }
  .number { font-size: 4.5rem; letter-spacing: 8px; }
}
</style>