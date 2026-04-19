<script setup lang="ts">
import { ref, onMounted, onUnmounted, nextTick } from 'vue'
import { useRouter, useRoute } from 'vue-router'

const router = useRouter()
const route = useRoute()
const activeIndex = ref(0)
const observer = ref<IntersectionObserver | null>(null)
const base = import.meta.env.BASE_URL

// 伪随机系统日志
const logs = ref<string[]>([
  '[SYS] INITIALIZING_ENCRYPTION_LAYER...',
  '[SYS] FETCHING_SATELLITE_FEED_CHINA_NORTH...',
  '[WARN] UNKNOWN_IP_BLOCK_172.x.x.x_DENIED',
])

const generateLog = () => {
  const events = [
    '[INFO] PACKET_FILTERING_ACTIVE',
    '[SEC] DATABASE_INTEGRITY_CHECK_PASSED',
    '[WARN] SCAN_DETECTED_ON_PORT_443',
    '[SYS] RELAYING_DATA_TO_NODE_BEIJING',
    '[INFO] HANDSHAKE_SUCCESSFUL_RSA_4096',
  ]
  logs.value.push(events[Math.floor(Math.random() * events.length)])
  if (logs.value.length > 5) logs.value.shift()
}

const domains = [
  { id: 'political', name: '政治安全', en: 'POLITICAL_SEC', desc: 'CORE_SYSTEM / 政权安全和制度安全是核心，坚持党的领导。', img: 'https://images.weserv.nl/?url=https://images.unsplash.com/photo-1508062878650-88b52897f298?w=1600' },
  { id: 'homeland', name: '国土安全', en: 'TERRITORY_SEC', desc: 'BORDER_CONTROL / 国家统一、边境领空领海不受侵犯。', img: 'https://images.weserv.nl/?url=https://images.unsplash.com/photo-1508804185872-d7badad00f7d?w=1600' },
  { id: 'military', name: '军事安全', en: 'MILITARY_FORCE', desc: 'IRON_WALL / 强军兴军，铸就捍卫主权与和平的坚固长城。', img: `${base}static/military.jpg` },
  { id: 'economic', name: '经济安全', en: 'ECON_STABILITY', desc: 'MARKET_BASE / 国计民生所在，保障产业链与金融体系自主。', img: `${base}static/economic.jpg` },
  { id: 'cultural', name: '文化安全', en: 'CULTURAL_HERITAGE', desc: 'SOUL_DEFENSE / 坚定文化自信，弘扬优秀传统文化。', img: `${base}static/cultural.jpg` },
  { id: 'social', name: '社会安全', en: 'SOCIAL_ORDER', desc: 'CIVIL_STABILITY / 防范化解重大风险，维护社会和谐。', img: 'https://images.weserv.nl/?url=https://images.unsplash.com/photo-1517486808906-6ca8b3f04846?w=1600' },
  { id: 'tech', name: '科技安全', en: 'TECH_FRONTIER', desc: 'INNOVATION_CORE / 实现高水平科技自立自强。', img: 'https://images.weserv.nl/?url=https://images.unsplash.com/photo-1518770660439-4636190af475?w=1600' },
  { id: 'cyber', name: '网络安全', en: 'CYBER_SHIELD', desc: 'NET_SOVEREIGNTY / 构筑清朗安全的数字空间防线。', img: 'https://images.weserv.nl/?url=https://images.unsplash.com/photo-1563986768609-322da13575f3?w=1200' },
  { id: 'ecology', name: '生态安全', en: 'ECOLOGY_VITAL', desc: 'GREEN_BARRIER / 绿水青山就是金山银山。', img: 'https://images.weserv.nl/?url=https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=1600' },
  { id: 'resource', name: '资源安全', en: 'RESOURCE_STRAT', desc: 'STRATEGIC_SUPPLY / 保障能源、水、粮食等核心战略资源。', img: 'https://images.weserv.nl/?url=https://images.unsplash.com/photo-1523348837708-15d4a09cfac2?w=1600' },
  { id: 'nuclear', name: '核安全', en: 'NUCLEAR_CONTROL', desc: 'SAFE_ENERGY / 坚持最高安全标准，确保万无一失。', img: `${base}static/nuclear.jpg` },
  { id: 'overseas', name: '海外利益', en: 'OVERSEAS_INTEREST', desc: 'GLOBAL_PROTECT / 中国脚步走到哪里，安全保护就跟到哪里。', img: 'https://images.weserv.nl/?url=https://images.unsplash.com/photo-1524661135-423995f22d0b?w=1200' },
  { id: 'bio', name: '生物安全', en: 'BIO_DEFENSE', desc: 'LIFE_SECURITY / 防范重大传染病和物种入侵。', img: 'https://images.weserv.nl/?url=https://images.unsplash.com/photo-1532187875605-1ef6c237ddc4?w=1600' },
  { id: 'space', name: '太空安全', en: 'SPACE_STRAT', desc: 'ORBIT_权益 / 和平探索与利用太空资源，捍卫战略权益。', img: 'https://images.unsplash.com/photo-1446776811953-b23d57bd21aa?w=1600' },
  { id: 'deepsea', name: '深海安全', en: 'DEEP_SEA_MIS', desc: 'ABYSS_EXPLORE / 提升深海进入与探测能力。', img: 'https://images.weserv.nl/?url=https://images.unsplash.com/photo-1439246854758-f686a415d9da?w=1600' },
  { id: 'polar', name: '极地安全', en: 'POLAR_治理', desc: 'ICE_GOVERNANCE / 积极参与极地国际治理，和平开展科考。', img: 'https://images.weserv.nl/?url=https://images.unsplash.com/photo-1473081556163-2a17de81fc97?w=1600' },
]

let logInterval: any = null

onMounted(async () => {
  const returnIdx = route.query.fromIndex
  if (returnIdx !== undefined) {
    await nextTick()
    setTimeout(() => scrollToSection(Number(returnIdx)), 100)
  }

  logInterval = setInterval(generateLog, 3000)

  observer.value = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('is-visible')
        activeIndex.value = parseInt(entry.target.getAttribute('data-index') || '0')
      } else {
        entry.target.classList.remove('is-visible')
      }
    })
  }, { threshold: 0.5 })

  document.querySelectorAll('.ppt-section').forEach(s => observer.value?.observe(s))
})

onUnmounted(() => {
  observer.value?.disconnect()
  if (logInterval) clearInterval(logInterval)
})

const navigateToDomain = (id: string, index: number) => {
  router.push({ path: `/domain/${id}`, query: { backIndex: index } })
}

const scrollToSection = (index: number) => {
  const sections = document.querySelectorAll('.ppt-section')
  sections[index]?.scrollIntoView({ behavior: 'auto' })
}
</script>

<template>
  <div class="command-container">
    
    <!-- HUD 刻度 -->
    <div class="hud-side-nav">
      <div v-for="(_, i) in (domains.length + 2)" :key="i" class="hud-nav-item" :class="{ active: activeIndex === i }">
        <span class="mono">{{ i < 10 ? '0'+i : i }}</span>
      </div>
    </div>

    <!-- Hero HUD -->
    <section class="ppt-section hero" data-index="0">
      <div class="hud-frame"></div>
      <div class="content">
        <div class="reveal-snappy mono alert-tag">>> AUTHENTICATED_ACCESS_GRANTED</div>
        <h1 class="hero-title serif reveal-snappy">总体国家安全观</h1>
        
        <!-- 滚动日志 -->
        <div class="terminal-log-feed mono reveal-snappy">
          <div v-for="(log, idx) in logs" :key="idx" class="log-line">{{ log }}</div>
        </div>

        <div class="scroll-arrow mono reveal-snappy">SCAN_READY_TO_INITIALIZE v</div>
      </div>
    </section>

    <!-- 16 Domain HUDs -->
    <section 
      v-for="(item, index) in domains" 
      :key="item.id" 
      class="ppt-section domain-page"
      :data-index="index + 1"
      @click="navigateToDomain(item.id, index + 1)"
    >
      <div class="hud-bg">
        <div class="bg-img" :style="{ backgroundImage: `url(${item.img})` }"></div>
        <div class="red-tint"></div>
      </div>
      
      <div class="hud-corner top-left"></div>
      <div class="hud-corner top-right"></div>
      <div class="hud-corner bottom-left"></div>
      <div class="hud-corner bottom-right"></div>

      <div class="watermark mono">{{ index + 1 }}</div>
      
      <div class="content-box">
        <div class="status-header mono reveal-snappy">
          <span class="pulse"></span> TRACE: NODE_{{ item.id.toUpperCase() }}_READY
        </div>
        <div class="text-group">
          <div class="en-code mono reveal-snappy">> {{ item.en }}</div>
          <h2 class="title serif reveal-snappy">{{ item.name }}</h2>
          <div class="divider-hard reveal-snappy"></div>
          <p class="description mono reveal-snappy">{{ item.desc }}</p>
          <button class="access-btn mono reveal-snappy">
            > EXEC_ACCESS_ARCHIVE
          </button>
        </div>
      </div>
    </section>

    <!-- Final -->
    <section class="ppt-section footer-page" :data-index="domains.length + 1">
      <div class="content text-center">
        <h2 class="hero-title serif">安而不忘危</h2>
        <div class="mono alert-banner">!! SYSTEM_LEVEL_STABLE !!</div>
        <div class="hotline-hud mono">
          <span class="l">DIRECT_LINE</span>
          <span class="n">12339</span>
        </div>
        <button class="access-btn large mono" @click.stop="$router.push('/knowledge')">
          > VIEW_ALL_LOG_ARCHIVES
        </button>
      </div>
    </section>

  </div>
</template>

<style scoped>
.command-container {
  height: 100vh; overflow-y: scroll;
  scroll-snap-type: y mandatory;
  scroll-behavior: auto; /* 去掉平滑滚动，由 JS 或 CSS 处理瞬间感 */
  background: #000; margin: -60px 0 0 0;
}

.hud-side-nav {
  position: fixed; left: 20px; top: 50%;
  transform: translateY(-50%); z-index: 1001;
  display: flex; flex-direction: column; gap: 8px;
}
.hud-nav-item { font-size: 0.55rem; color: #222; }
.hud-nav-item.active { color: var(--alert-red); font-weight: bold; }

.ppt-section {
  height: 100vh; width: 100%;
  position: relative; scroll-snap-align: start; scroll-snap-stop: always;
  display: flex; align-items: center; justify-content: center;
}

.hud-frame { position: absolute; inset: 40px; border: 1px solid rgba(255,255,255,0.03); }
.hud-corner { position: absolute; width: 20px; height: 20px; border-color: var(--alert-red); border-style: solid; z-index: 11; }
.top-left { top: 40px; left: 40px; border-width: 2px 0 0 2px; }
.top-right { top: 40px; right: 40px; border-width: 2px 2px 0 0; }
.bottom-left { bottom: 40px; left: 40px; border-width: 0 0 2px 2px; }
.bottom-right { bottom: 40px; right: 40px; border-width: 0 2px 2px 0; }

.hud-bg { position: absolute; inset: 0; z-index: 0; }
.bg-img { width: 100%; height: 100%; background-size: cover; background-position: center; filter: grayscale(1) brightness(0.5); }
.red-tint { position: absolute; inset: 0; background: rgba(255,0,60,0.1); mix-blend-mode: color; }

.content-box { position: relative; z-index: 10; width: 100%; max-width: 1100px; padding: 0 100px; }

.terminal-log-feed { 
  margin: 40px 0; font-size: 0.75rem; color: #555; text-align: left; 
  padding: 20px; border: 1px solid #111; max-width: 400px; margin-left: auto; margin-right: auto;
}
.log-line { margin-bottom: 5px; opacity: 0.8; }

.hero-title { font-size: clamp(3rem, 10vw, 6rem); font-weight: 900; }
.alert-tag { color: var(--alert-red); font-size: 0.8rem; letter-spacing: 2px; }

.status-header { font-size: 0.7rem; color: var(--alert-red); margin-bottom: 25px; display: flex; align-items: center; gap: 8px; }
.pulse { width: 6px; height: 6px; background: var(--alert-red); border-radius: 50%; animation: pulse 1s infinite; }
@keyframes pulse { 0% { opacity: 1; } 50% { opacity: 0.3; } 100% { opacity: 1; } }

.title { font-size: clamp(2.5rem, 8vw, 5rem); color: #fff; line-height: 1; }
.divider-hard { width: 100px; height: 2px; background: #fff; margin: 40px 0; }
.description { font-size: 1.1rem; color: #888; max-width: 450px; line-height: 1.8; margin-bottom: 50px; }

.access-btn { 
  background: transparent; border: 1px solid rgba(255,255,255,0.2); color: #fff; 
  padding: 15px 30px; font-size: 0.8rem; letter-spacing: 2px; cursor: pointer;
}
.access-btn:hover { background: var(--alert-red); border-color: var(--alert-red); }

.watermark { position: absolute; right: 50px; bottom: 40px; font-size: 15vw; font-weight: 900; color: #080808; pointer-events: none; }

.hotline-hud .n { font-size: 6rem; color: var(--alert-red); font-weight: 900; }

@media (max-width: 768px) {
  .hud-frame, .hud-corner, .hud-side-nav, .terminal-log-feed { display: none; }
  .content-box { padding: 0 30px; }
  .hotline-hud .n { font-size: 4rem; }
}
</style>