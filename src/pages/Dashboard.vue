<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue'
import { useRouter } from 'vue-router'

const router = useRouter()
const observer = ref<IntersectionObserver | null>(null)

const domains = [
  { id: 'political', name: '政治安全', en: 'POLITICAL', desc: '政权安全和制度安全是核心，坚持党的领导，捍卫国家根本制度。', img: 'https://images.unsplash.com/photo-1541872703-74c5e443d1f9?auto=format&fit=crop&q=80&w=1600' },
  { id: 'homeland', name: '国土安全', en: 'HOMELAND', desc: '国家统一、边境领空领海不受侵犯，是生存与发展的基本底线。', img: 'https://images.unsplash.com/photo-1501785888041-af3ef285b470?auto=format&fit=crop&q=80&w=1600' },
  { id: 'military', name: '军事安全', en: 'MILITARY', desc: '强军兴军，铸就捍卫国家主权与和平的坚固钢铁长城。', img: 'https://images.unsplash.com/photo-1508103501740-8456f4d85e78?auto=format&fit=crop&q=80&w=1600' },
  { id: 'economic', name: '经济安全', en: 'ECONOMIC', desc: '国计民生所在，保障产业链供应链与金融体系的自主可控。', img: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=1600' },
  { id: 'cultural', name: '文化安全', en: 'CULTURAL', desc: '坚定文化自信，弘扬中华优秀传统文化，抵御不良侵蚀。', img: 'https://images.unsplash.com/photo-1518709268805-4e9042af9f23?auto=format&fit=crop&q=80&w=1600' },
  { id: 'social', name: '社会安全', en: 'SOCIAL', desc: '防范化解重大风险，打击违法犯罪，维护社会和谐稳定。', img: 'https://images.unsplash.com/photo-1517048676732-d65bc937f952?auto=format&fit=crop&q=80&w=1600' },
  { id: 'tech', name: '科技安全', en: 'TECHNOLOGY', desc: '实现高水平科技自立自强，把关键核心技术牢牢掌握在自己手中。', img: 'https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&q=80&w=1600' },
  { id: 'cyber', name: '网络安全', en: 'CYBERSPACE', desc: '没有网络安全就没有国家安全，构筑清朗安全的数字空间防线。', img: 'https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&q=80&w=1600' },
  { id: 'ecology', name: '生态安全', en: 'ECOLOGICAL', desc: '绿水青山就是金山银山，构筑尊崇自然、绿色发展的生态屏障。', img: 'https://images.unsplash.com/photo-1441974231531-c6227db76b6e?auto=format&fit=crop&q=80&w=1600' },
  { id: 'resource', name: '资源安全', en: 'RESOURCES', desc: '保障能源、水、粮食等核心战略资源的可持续与稳定供应。', img: 'https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?auto=format&fit=crop&q=80&w=1600' },
  { id: 'nuclear', name: '核安全', en: 'NUCLEAR', desc: '坚持最高安全标准，确保核能和平开发利用万无一失。', img: 'https://images.unsplash.com/photo-1517420812313-8001a889944c?auto=format&fit=crop&q=80&w=1600' },
  { id: 'overseas', name: '海外利益安全', en: 'OVERSEAS', desc: '中国脚步走到哪里，安全保护就跟到哪里，维护侨胞与资产安全。', img: 'https://images.unsplash.com/photo-1436450412740-6b988f486c6b?auto=format&fit=crop&q=80&w=1600' },
  { id: 'bio', name: '生物安全', en: 'BIOLOGICAL', desc: '防范重大传染病和外来物种入侵，守护人民生命健康底线。', img: 'https://images.unsplash.com/photo-1584036561566-baf8f5f1b144?auto=format&fit=crop&q=80&w=1600' },
  { id: 'space', name: '太空安全', en: 'OUTER SPACE', desc: '和平探索与利用太空资源，捍卫国家在外太空的战略权益。', img: 'https://images.unsplash.com/photo-1454789548928-9efd52dc4031?auto=format&fit=crop&q=80&w=1600' },
  { id: 'deepsea', name: '深海安全', en: 'DEEP SEA', desc: '提升深海进入与探测能力，科学开发海洋，维护海洋强国利益。', img: 'https://images.unsplash.com/photo-1551244072-5d12893278ab?auto=format&fit=crop&q=80&w=1600' },
  { id: 'polar', name: '极地安全', en: 'POLAR REGIONS', desc: '积极参与极地国际治理，和平开展科考，守护极地生态环境。', img: 'https://images.unsplash.com/photo-1473081556163-2a17de81fc97?auto=format&fit=crop&q=80&w=1600' },
]

onMounted(() => {
  observer.value = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('is-visible')
      }
    })
  }, { threshold: 0.35 })

  const sections = document.querySelectorAll('.editorial-section')
  sections.forEach(s => observer.value?.observe(s))
})

onUnmounted(() => {
  observer.value?.disconnect()
})

const navigateToDomain = (id: string) => {
  router.push(`/domain/${id}`)
}
</script>

<template>
  <div class="scroller-container">
    
    <!-- 序幕：极简全屏电影级海报 -->
    <section class="editorial-section hero-section">
      <div class="cinematic-bg"></div>
      <div class="ambient-glow"></div>
      
      <div class="hero-content">
        <div class="reveal-mask"><div class="top-tag delay-1">N S E P · 2 0 2 6</div></div>
        <div class="reveal-mask"><h1 class="hero-title delay-2 font-serif">总体国家安全观</h1></div>
        <div class="expand-line delay-3"></div>
        <div class="reveal-mask">
          <p class="hero-desc delay-4">坚持以人民安全为宗旨，以政治安全为根本。<br/>居安思危，大国重器。</p>
        </div>
      </div>
      
      <div class="scroll-down-hint">
        <span class="vertical-text">SCROLL DOWN</span>
        <div class="line-indicator"></div>
      </div>
    </section>

    <!-- 16个领域：Awwwards 级排版 -->
    <section 
      v-for="(item, index) in domains" 
      :key="item.id" 
      class="editorial-section domain-section"
      @click="navigateToDomain(item.id)"
    >
      <!-- 背景：极慢缩放动画增加沉浸感 -->
      <div class="image-wrapper">
        <div class="bg-image" :style="{ backgroundImage: `url(${item.img})` }"></div>
        <div class="bg-gradient-mask"></div>
      </div>
      
      <!-- 巨大的背景水印数字 -->
      <div class="watermark-num">{{ index + 1 < 10 ? '0'+(index+1) : index+1 }}</div>
      
      <!-- 左下角的核心内容区 -->
      <div class="domain-content">
        <div class="reveal-mask"><div class="domain-en-tag delay-1">{{ item.en }}</div></div>
        <div class="reveal-mask"><h2 class="domain-title delay-2 font-serif">{{ item.name }}</h2></div>
        
        <div class="expand-line delay-3 line-gold"></div>
        
        <div class="reveal-mask">
          <div class="domain-desc-box delay-4">
            <p>{{ item.desc }}</p>
          </div>
        </div>
        
        <div class="reveal-mask">
          <div class="action-btn delay-4">
            <div class="magnetic-btn">
              <span class="btn-text">查阅机密档案</span>
              <div class="btn-circle"><el-icon><Right /></el-icon></div>
            </div>
          </div>
        </div>
      </div>
    </section>
    
    <!-- 终章：极简留白 -->
    <section class="editorial-section footer-section">
      <div class="ambient-glow" style="top: 20%; left: 20%;"></div>
      <div class="footer-content">
        <div class="reveal-mask"><h2 class="hero-title delay-1"><span class="font-serif">安而不忘危</span></h2></div>
        <div class="expand-line delay-2" style="width: 100px; margin: 30px auto;"></div>
        <div class="reveal-mask">
          <p class="delay-3" style="color: #999; letter-spacing: 2px;">国家安全机关举报受理热线</p>
        </div>
        <div class="reveal-mask">
          <h3 class="giant-num delay-4">12339</h3>
        </div>
        <div class="reveal-mask delay-4 mt-10">
          <button class="outline-btn" @click.stop="$router.push('/knowledge')">返回官方档案库</button>
        </div>
      </div>
    </section>
  </div>
</template>

<style scoped>
.scroller-container {
  height: 100vh;
  overflow-y: scroll;
  scroll-snap-type: y mandatory;
  scroll-behavior: smooth;
  background-color: var(--bg-dark);
  margin: -20px -15px; /* Offset global padding */
}

.scroller-container::-webkit-scrollbar {
  display: none;
}

.editorial-section {
  height: 100vh;
  width: 100%;
  position: relative;
  scroll-snap-align: start;
  scroll-snap-stop: always;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
  cursor: pointer;
}

.font-serif {
  font-family: var(--font-serif);
}

/* ====== 英雄屏 ====== */
.hero-section {
  background: var(--bg-dark);
  cursor: default;
}

.cinematic-bg {
  position: absolute;
  top: 0; left: 0; width: 100%; height: 100%;
  background: radial-gradient(circle at center, rgba(138, 11, 11, 0.2) 0%, var(--bg-dark) 80%);
}

.hero-content {
  position: relative;
  z-index: 10;
  text-align: center;
  color: var(--text-light);
  padding: 0 30px;
}

.top-tag {
  font-size: 0.8rem;
  letter-spacing: 8px;
  color: var(--gold-accent);
  margin-bottom: 20px;
}

.hero-title {
  font-size: 4.5rem;
  font-weight: 600;
  letter-spacing: 12px;
  margin: 0;
  color: var(--text-light);
  text-shadow: 0 10px 30px rgba(0,0,0,0.5);
}

.hero-section .expand-line {
  margin: 30px auto;
  max-width: 400px;
}

.hero-desc {
  font-size: 1rem;
  letter-spacing: 4px;
  line-height: 2;
  color: #a0a0a0;
}

.scroll-down-hint {
  position: absolute;
  bottom: 0; left: 50%;
  transform: translateX(-50%);
  display: flex;
  flex-direction: column;
  align-items: center;
  opacity: 0.6;
  z-index: 10;
}

.vertical-text {
  writing-mode: vertical-rl;
  text-orientation: mixed;
  font-size: 0.7rem;
  letter-spacing: 4px;
  margin-bottom: 15px;
}

.line-indicator {
  width: 1px;
  height: 60px;
  background: linear-gradient(to bottom, var(--text-light) 50%, transparent);
  animation: slide-down 2s ease-in-out infinite;
}

@keyframes slide-down {
  0% { transform: translateY(-20px); opacity: 0; }
  50% { opacity: 1; }
  100% { transform: translateY(20px); opacity: 0; }
}

/* ====== 领域屏 ====== */
.image-wrapper {
  position: absolute;
  top: 0; left: 0; width: 100%; height: 100%;
  overflow: hidden;
}

.bg-image {
  width: 100%; height: 100%;
  background-size: cover;
  background-position: center;
  transform: scale(1.1);
  transition: transform 10s linear;
}

.is-visible .bg-image {
  transform: scale(1);
}

.bg-gradient-mask {
  position: absolute;
  top: 0; left: 0; width: 100%; height: 100%;
  background: linear-gradient(135deg, rgba(5,5,5,0.9) 0%, rgba(5,5,5,0.6) 40%, transparent 100%);
}

.watermark-num {
  position: absolute;
  right: -5%;
  bottom: -10%;
  font-size: 35vw;
  font-weight: 900;
  line-height: 1;
  color: transparent;
  -webkit-text-stroke: 2px rgba(255,255,255,0.05);
  font-family: var(--font-sans);
  pointer-events: none;
  z-index: 1;
  transition: all 1s var(--ease-out-expo);
  transform: translateX(100px);
}

.is-visible .watermark-num {
  transform: translateX(0);
}

.domain-content {
  position: absolute;
  left: 8%;
  bottom: 15%;
  z-index: 10;
  max-width: 600px;
}

.domain-en-tag {
  font-size: 0.75rem;
  letter-spacing: 6px;
  color: var(--gold-accent);
  margin-bottom: 10px;
  font-family: var(--font-sans);
}

.domain-title {
  font-size: 4rem;
  margin: 0;
  letter-spacing: 8px;
  text-shadow: 0 4px 20px rgba(0,0,0,0.8);
}

.line-gold {
  margin: 20px 0;
  max-width: 80%;
}

.domain-desc-box {
  margin-bottom: 40px;
}

.domain-desc-box p {
  font-size: 1rem;
  line-height: 1.8;
  letter-spacing: 1px;
  color: #cccccc;
}

/* 高级交互按钮 */
.action-btn {
  display: inline-block;
}

.magnetic-btn {
  display: flex;
  align-items: center;
  gap: 15px;
  cursor: pointer;
  transition: transform 0.3s var(--ease-out-expo);
}

.magnetic-btn:hover {
  transform: translateX(10px);
}

.btn-text {
  font-size: 0.85rem;
  letter-spacing: 3px;
  font-weight: 600;
  text-transform: uppercase;
}

.btn-circle {
  width: 45px; height: 45px;
  border-radius: 50%;
  border: 1px solid rgba(255,255,255,0.3);
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.3s var(--ease-out-expo);
}

.magnetic-btn:hover .btn-circle {
  background: var(--primary-red);
  border-color: var(--primary-red);
}

/* ====== 终章 ====== */
.footer-section {
  background: var(--bg-dark);
  text-align: center;
  cursor: default;
}

.footer-content {
  position: relative;
  z-index: 10;
}

.giant-num {
  font-size: 6rem;
  font-weight: 900;
  margin: 0;
  letter-spacing: 10px;
  color: var(--primary-red);
  text-shadow: 0 0 40px rgba(138, 11, 11, 0.4);
}

.outline-btn {
  background: transparent;
  border: 1px solid var(--gold-accent);
  color: var(--gold-accent);
  padding: 12px 30px;
  font-size: 0.8rem;
  letter-spacing: 4px;
  cursor: pointer;
  transition: all 0.4s ease;
}

.outline-btn:hover {
  background: var(--gold-accent);
  color: var(--bg-dark);
}

.mt-10 { margin-top: 40px; }

/* ====== 响应式适配 ====== */
@media (max-width: 768px) {
  .hero-title { font-size: 2.8rem; letter-spacing: 6px; }
  .hero-desc { font-size: 0.85rem; }
  
  .bg-gradient-mask {
    background: linear-gradient(180deg, transparent 0%, rgba(5,5,5,0.8) 50%, rgba(5,5,5,0.95) 100%);
  }
  
  .domain-content {
    left: 20px; right: 20px;
    bottom: 10%;
  }
  
  .domain-title { font-size: 2.5rem; letter-spacing: 4px; }
  .domain-desc-box p { font-size: 0.9rem; }
  
  .watermark-num {
    top: 15%; bottom: auto;
    right: 5%;
    font-size: 40vw;
  }
  
  .giant-num { font-size: 4rem; }
}
</style>