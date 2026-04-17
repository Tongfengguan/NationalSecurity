<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue'
import { useRouter } from 'vue-router'

const router = useRouter()
const activeIndex = ref(0)
const observer = ref<IntersectionObserver | null>(null)
const base = import.meta.env.BASE_URL

const domains = [
  { id: 'political', name: '政治安全', en: 'POLITICAL', desc: '政权安全和制度安全是核心，坚持党的领导，捍卫国家根本制度。', img: 'https://images.weserv.nl/?url=https://images.unsplash.com/photo-1508062878650-88b52897f298?w=1600' },
  { id: 'homeland', name: '国土安全', en: 'HOMELAND', desc: '国家统一、边境领空领海不受侵犯，是生存与发展的基本底线。', img: 'https://images.weserv.nl/?url=https://images.unsplash.com/photo-1508804185872-d7badad00f7d?w=1600' },
  { id: 'military', name: '军事安全', en: 'MILITARY', desc: '强军兴军，铸就捍卫国家主权与和平的坚固钢铁长城。', img: `${base}static/military.jpg` },
  { id: 'economic', name: '经济安全', en: 'ECONOMIC', desc: '国计民生所在，保障产业链供应链与金融体系的自主可控。', img: `${base}static/economic.jpg` },
  { id: 'cultural', name: '文化安全', en: 'CULTURAL', desc: '坚定文化自信，弘扬中华优秀传统文化，抵御不良侵蚀。', img: `${base}static/cultural.jpg` },
  { id: 'social', name: '社会安全', en: 'SOCIAL', desc: '防范化解重大风险，打击违法犯罪，维护社会和谐稳定。', img: 'https://images.weserv.nl/?url=https://images.unsplash.com/photo-1517048676732-d65bc937f952?w=1600' },
  { id: 'tech', name: '科技安全', en: 'TECHNOLOGY', desc: '实现高水平科技自立自强，把关键核心技术掌握在自己手中。', img: 'https://images.weserv.nl/?url=https://images.unsplash.com/photo-1518770660439-4636190af475?w=1600' },
  { id: 'cyber', name: '网络安全', en: 'CYBERSPACE', desc: '没有网络安全就没有国家安全，构筑清朗安全的数字空间防线。', img: 'https://images.weserv.nl/?url=https://images.unsplash.com/photo-1550751827-4bd374c3f58b?w=1600' },
  { id: 'ecology', name: '生态安全', en: 'ECOLOGICAL', desc: '绿水青山就是金山银山，构筑尊崇自然、绿色发展的生态屏障。', img: 'https://images.weserv.nl/?url=https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=1600' },
  { id: 'resource', name: '资源安全', en: 'RESOURCES', desc: '保障能源、水、粮食等核心战略资源的可持续与稳定供应。', img: 'https://images.weserv.nl/?url=https://images.unsplash.com/photo-1523348837708-15d4a09cfac2?w=1600' },
  { id: 'nuclear', name: '核安全', en: 'NUCLEAR', desc: '坚持最高安全标准，确保核能和平开发利用万无一失。', img: `${base}static/nuclear.jpg` },
  { id: 'overseas', name: '海外利益安全', en: 'OVERSEAS', desc: '中国脚步走到哪里，安全保护就跟到哪里，维护侨胞与资产安全。', img: 'https://images.weserv.nl/?url=https://images.unsplash.com/photo-1436450412740-6b988f486c6b?w=1600' },
  { id: 'bio', name: '生物安全', en: 'BIOLOGICAL', desc: '防范重大传染病和外来物种入侵，守护人民生命健康底线。', img: 'https://images.weserv.nl/?url=https://images.unsplash.com/photo-1532187875605-1ef6c237ddc4?w=1600' }, // 修复 404 ID
  { id: 'space', name: '太空安全', en: 'OUTER SPACE', desc: '和平探索与利用太空资源，捍卫国家在外太空的战略权益。', img: 'https://images.weserv.nl/?url=https://images.unsplash.com/photo-1446776811953-b23d57bd21aa?w=1600' },
  { id: 'deepsea', name: '深海安全', en: 'DEEP SEA', desc: '提升深海进入与探测能力，科学开发海洋，维护海洋强国利益。', img: 'https://images.weserv.nl/?url=https://images.unsplash.com/photo-1439246854758-f686a415d9da?w=1600' },
  { id: 'polar', name: '极地安全', en: 'POLAR REGIONS', desc: '积极参与极地国际治理，和平开展科考，守护极地生态环境。', img: 'https://images.weserv.nl/?url=https://images.unsplash.com/photo-1473081556163-2a17de81fc97?w=1600' },
]

onMounted(() => {
  observer.value = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('is-visible')
        activeIndex.value = parseInt(entry.target.getAttribute('data-index') || '0')
      }
    })
  }, { threshold: 0.5 })

  document.querySelectorAll('.ppt-section').forEach(s => observer.value?.observe(s))
})

onUnmounted(() => {
  observer.value?.disconnect()
})

const navigateToDomain = (id: string) => {
  router.push(`/domain/${id}`)
}
</script>

<template>
  <div class="ppt-container">
    
    <!-- Hero PPT -->
    <section class="ppt-section hero" data-index="0">
      <div class="overlay-gradient"></div>
      <div class="content reveal-simple">
        <h1 class="hero-title serif">总体国家安全观</h1>
        <p class="hero-subtitle">以人民安全为宗旨 · 以政治安全为根本</p>
        <div class="scroll-hint">
          <div class="scroll-bar"></div>
          <span>滚动探索</span>
        </div>
      </div>
    </section>

    <!-- 16 Domain PPTs -->
    <section 
      v-for="(item, index) in domains" 
      :key="item.id" 
      class="ppt-section domain-page"
      :data-index="index + 1"
      @click="navigateToDomain(item.id)"
    >
      <div class="bg-wrap">
        <div class="bg-img" :style="{ backgroundImage: `url(${item.img})` }"></div>
        <div class="bg-mask"></div>
      </div>
      
      <div class="watermark">{{ index + 1 }}</div>
      
      <div class="content">
        <div class="tag serif">{{ item.en }}</div>
        <h2 class="title serif">{{ item.name }}</h2>
        <div class="divider"></div>
        <p class="desc">{{ item.desc }}</p>
        <div class="btn-box">
          <span class="btn-text">查阅档案</span>
          <el-icon><Right /></el-icon>
        </div>
      </div>
    </section>

    <!-- Final PPT -->
    <section class="ppt-section footer-page" :data-index="domains.length + 1">
      <div class="content text-center">
        <h2 class="hero-title serif">安而不忘危</h2>
        <p class="mt-4">国家安全机关举报受理热线</p>
        <h3 class="hotline serif">12339</h3>
        <button class="knowledge-btn mt-8" @click.stop="$router.push('/knowledge')">进入知识库</button>
      </div>
    </section>

  </div>
</template>

<style scoped>
.ppt-container {
  height: 100vh;
  overflow-y: scroll;
  scroll-snap-type: y mandatory;
  scroll-behavior: smooth;
  background: #000;
  margin: -60px 0 0 0; /* 抵消 header 高度 */
}

.ppt-container::-webkit-scrollbar { display: none; }

.ppt-section {
  height: 100vh;
  width: 100%;
  position: relative;
  scroll-snap-align: start;
  scroll-snap-stop: always;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
}

/* 背景优化：性能第一 */
.bg-wrap {
  position: absolute;
  inset: 0;
  z-index: 0;
}

.bg-img {
  width: 100%; height: 100%;
  background-size: cover;
  background-position: center;
}

.bg-mask {
  position: absolute;
  inset: 0;
  background: linear-gradient(135deg, rgba(0,0,0,0.9) 0%, rgba(0,0,0,0.6) 50%, rgba(0,0,0,0.85) 100%);
}

.content {
  position: relative;
  z-index: 10;
  color: #fff;
  width: 100%;
  max-width: 600px;
  padding: 0 40px;
}

.hero-title {
  font-size: clamp(3rem, 10vw, 6rem);
  font-weight: 900;
  letter-spacing: 0.1em;
  margin: 0;
}

.hero-subtitle {
  font-size: 1.2rem;
  margin-top: 20px;
  opacity: 0.8;
  letter-spacing: 0.2em;
}

.tag { font-size: 0.8rem; color: #c5a059; letter-spacing: 4px; margin-bottom: 10px; }
.title { font-size: clamp(3rem, 8vw, 5rem); margin: 0; }
.divider { width: 60px; height: 3px; background: #c5a059; margin: 30px 0; }
.desc { font-size: 1.1rem; line-height: 1.8; color: #ccc; margin-bottom: 40px; }

.btn-box {
  display: inline-flex;
  align-items: center;
  gap: 15px;
  color: #fff;
  font-weight: bold;
  letter-spacing: 2px;
}

.watermark {
  position: absolute;
  right: -5%; bottom: -5%;
  font-size: 40vw;
  font-weight: 900;
  color: rgba(255,255,255,0.03);
  pointer-events: none;
}

.scroll-hint {
  position: absolute;
  bottom: 50px; left: 50%;
  transform: translateX(-50%);
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 15px;
  opacity: 0.5;
}

.scroll-bar {
  width: 1px; height: 50px;
  background: linear-gradient(to bottom, #fff, transparent);
}

.hotline { font-size: 5rem; color: var(--primary-red); }

.knowledge-btn {
  background: var(--primary-red);
  color: white;
  border: none;
  padding: 15px 40px;
  border-radius: 4px;
  font-weight: bold;
  cursor: pointer;
}

@media (max-width: 768px) {
  .content { padding: 0 30px; }
  .title { font-size: 2.8rem; }
  .hotline { font-size: 3rem; }
}
</style>