<script setup lang="ts">
import { computed } from 'vue'
import { useRouter, useRoute } from 'vue-router'

const props = defineProps<{
  id: string
}>()

const router = useRouter()
const route = useRoute()
const base = import.meta.env.BASE_URL

const domainsData: Record<string, any> = {
  'political': {
    name: '政治安全',
    img: 'https://images.weserv.nl/?url=https://images.unsplash.com/photo-1508062878650-88b52897f298?w=1200',
    definition: '国家政权、主权、政治制度、政治秩序以及意识形态不受威胁、侵犯、破坏和控制的状态。',
    keyPoints: ['政权安全和制度安全是核心', '必须坚持党的领导', '防范各种渗透、颠覆活动', '维护意识形态安全'],
    chinaPractice: '中国坚持走中国特色社会主义道路，严厉打击敌对势力的渗透、颠覆和破坏活动，坚决捍卫制度秩序。'
  },
  'homeland': {
    name: '国土安全',
    img: 'https://images.weserv.nl/?url=https://images.unsplash.com/photo-1508804185872-d7badad00f7d?w=1200',
    definition: '领土完整、国家统一、边疆边境、领空、海洋权益等不受侵犯或免于威胁的状态。',
    keyPoints: ['领土完整是底线', '打击分裂活动', '保障陆海空主权安全', '维护海洋权益'],
    chinaPractice: '坚决维护南海领土主权和海洋权益，加强边境建设，构建严密的陆海空联动防控体系。'
  },
  'military': {
    name: '军事安全',
    img: `${base}static/military.jpg`,
    definition: '国家不受外部军事入侵和战争威胁的状态，以及保障这种状态的能力。',
    keyPoints: ['建设强大军队', '确保能打仗打胜仗', '防范武装颠覆', '保护军事设施安全'],
    chinaPractice: '实施强军战略，歼-20、国产航母等重器入列，现代化军事体系确保具备慑止战争的能力。'
  },
  'economic': {
    name: '经济安全',
    img: `${base}static/economic.jpg`,
    definition: '国家经济基础稳固、经济主权独立、经济运行平稳、经济发展可持续的状态。',
    keyPoints: ['国家安全的物质基础', '保障国家经济主权', '防范金融风险', '确保能源和产业链安全'],
    chinaPractice: '中国坚持稳中求进，构建双循环格局，实施核心技术攻关，确保产业链供应链自主可控。'
  },
  'cultural': {
    name: '文化安全',
    img: `${base}static/cultural.jpg`,
    definition: '国家文化主权、文化价值观、文化资源等处于没有危险和不受内外威胁的状态。',
    keyPoints: ['维护意识形态安全', '弘扬传统文化', '抵制文化侵蚀', '增强国家软实力'],
    chinaPractice: '弘扬社会主义核心价值观，实施中华优秀传统文化传承发展工程，建设具有强大凝聚力。'
  },
  'social': {
    name: '社会安全',
    img: 'https://images.weserv.nl/?url=https://images.unsplash.com/photo-1517486808906-6ca8b3f04846?w=1200',
    definition: '防范、消除、控制直接威胁社会公共秩序和人民群众生命财产安全的各类风险。',
    keyPoints: ['维护社会和谐稳定', '打击恐怖主义', '提高公共安全能力', '处置突发社会事件'],
    chinaPractice: '常态化开展扫黑除恶斗争，平安中国建设让百姓获得感、安全感大幅提升。'
  },
  'tech': {
    name: '科技安全',
    img: 'https://images.weserv.nl/?url=https://images.unsplash.com/photo-1518770660439-4636190af475?w=1200',
    definition: '科技体系完整有效，核心技术安全可控，国家核心利益不受外部科技优势损害。',
    keyPoints: ['解决卡脖子问题', '实现科技自强', '提升核心竞争力', '保护知识产权'],
    chinaPractice: '量子计算、5G、天眼等进入世界领先行列，坚持自立自强，筑牢科技防线。'
  },
  'cyber': {
    name: '网络安全',
    img: 'https://images.weserv.nl/?url=https://images.unsplash.com/photo-1550751827-4bd374c3f58b?w=1200',
    definition: '网络空间主权不受侵犯，网络基础设施、信息系统及数据受到有效保护。',
    keyPoints: ['维护网空主权', '保护基础设施', '数据安全管理', '净化网络生态'],
    chinaPractice: '实施《网络安全法》，有力打击网络攻击和诈骗，构建清朗安全的数字空间。'
  },
  'ecology': {
    name: '生态安全',
    img: 'https://images.weserv.nl/?url=https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=1200',
    definition: '生态环境能够支撑国家生存和发展的基本状态，环境风险处于可控范围。',
    keyPoints: ['守住保护红线', '应对气候变化', '保障大气土壤安全', '保护生物多样性'],
    chinaPractice: '提出双碳目标，三江源国家公园建立，彰显保护中华水塔和生态安全的决心。'
  },
  'resource': {
    name: '资源安全',
    img: 'https://images.weserv.nl/?url=https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?w=1200',
    definition: '国家发展所需的自然资源能够持续、稳定、及时、足量供应。',
    keyPoints: ['确保能源供应', '提高利用效率', '战略储备建设', '多元供应体系'],
    chinaPractice: '守住耕地红线，实施西气东输、南水北调等重大工程，确保核心资源供应。'
  },
  'nuclear': {
    name: '核安全',
    img: `${base}static/nuclear.jpg`,
    definition: '对核设施、核材料采取保护措施，防止核事故、核扩散及核恐怖主义。',
    keyPoints: ['坚持安全第一', '核能和平利用', '强化核应急', '防范核恐怖威胁'],
    chinaPractice: '自主研发华龙一号核电技术达到世界最高安全标准，保持优异核安全记录。'
  },
  'overseas': {
    name: '海外利益安全',
    img: 'https://images.weserv.nl/?url=https://images.unsplash.com/photo-1436450412740-6b988f486c6b?w=1200',
    definition: '国家在海外的公民、机构、企业、资产及正当权益不受威胁 and 侵害。',
    keyPoints: ['提升保障能力', '保护海外公民', '维护合法权益', '应对跨境犯罪'],
    chinaPractice: '实施也门撤侨等重大行动，有力保护同胞生命安全，中国保护如影随形. '
  },
  'bio': {
    name: '生物安全',
    img: 'https://images.weserv.nl/?url=https://images.unsplash.com/photo-1532187875605-1ef6c237ddc4?w=1600',
    definition: '有效防范 and 应对危险生物因子威胁，保障人民生命健康 and 生态系统平衡。',
    keyPoints: ['防控传染病', '保障粮食安全', '实验室管理', '防范物种入侵'],
    chinaPractice: '《生物安全法》实施，完善国家生物安全风险防控体系，守护物种多样性。'
  },
  'space': {
    name: '太空安全',
    img: 'https://images.weserv.nl/?url=https://images.unsplash.com/photo-1446776811953-b23d57bd21aa?w=1200',
    definition: '国家在太空领域的资产、活动及权益不受威胁，拥有进入、利用 and 控制太空的能力。',
    keyPoints: ['维护太空主权', '防止外空武器化', '保护基础设施', '提升防御能力'],
    chinaPractice: '天宫空间站建成，北三全球组网，中国为维护太空权益做出重大贡献。'
  },
  'deepsea': {
    name: '深海安全',
    img: 'https://images.weserv.nl/?url=https://images.unsplash.com/photo-1439246854758-f686a415d9da?w=1200',
    definition: '国家在深海区域的探索、开发、利用及相关权益不受侵犯。',
    keyPoints: ['提升探测能力', '维护开发权益', '保障考查安全', '参与国际治理'],
    chinaPractice: '奋斗者号万米深潜成功，深海探测技术跨越发展，科学维护深海权益。'
  },
  'polar': {
    name: '极地安全',
    img: 'https://images.weserv.nl/?url=https://images.unsplash.com/photo-1473081556163-2a17de81fc97?w=1200',
    definition: '国家在南极、北极地区的科学考察、资源利用及相关权益得到保障。',
    keyPoints: ['参与极地治理', '保护生态环境', '维护航行权利', '提升应急保障'],
    chinaPractice: '雪龙2号下水，长城站、秦岭站建设，有力支撑极地国际话语权。'
  }
}

const currentDomain = computed(() => domainsData[props.id] || null)

const goBack = () => {
  const index = route.query.backIndex
  router.push({
    path: '/',
    query: { fromIndex: index }
  })
}
</script>

<template>
  <div class="dossier-page" v-if="currentDomain">
    <main class="dossier-layout">
      
      <!-- 档案页眉 -->
      <header class="dossier-header reveal-snappy">
        <div class="header-top">
          <button class="back-link mono" @click="goBack">
            <span class="blink">&lt;</span> EXIT_TO_MAIN
          </button>
          <div class="doc-id mono">DOC_REF: NS-2026-{{ id.toUpperCase() }}</div>
        </div>
        <div class="title-wrap">
          <div class="classification-stamp">CLASSIFIED</div>
          <h1 class="domain-title serif">{{ currentDomain.name }}</h1>
        </div>
        <div class="border-heavy"></div>
      </header>

      <!-- 视觉扫描区 -->
      <section class="scan-section reveal-snappy" style="transition-delay: 0.1s">
        <div class="img-container">
          <img :src="currentDomain.img" :alt="currentDomain.name" />
          <div class="scan-line"></div>
          <div class="overlay-grid"></div>
        </div>
      </section>

      <!-- 核心数据区 -->
      <div class="data-grid">
        <div class="data-block reveal-snappy" style="transition-delay: 0.2s">
          <h3 class="mono">> DEFINITION</h3>
          <p class="mono-text">{{ currentDomain.definition }}</p>
        </div>
        
        <div class="data-block reveal-snappy" style="transition-delay: 0.3s">
          <h3 class="mono">> CORE_INTEL</h3>
          <ul class="point-list mono">
            <li v-for="point in currentDomain.keyPoints" :key="point">
              [ CONFIDENTIAL ] {{ point }}
            </li>
          </ul>
        </div>

        <div class="data-block wide-block highlight-block reveal-snappy" style="transition-delay: 0.4s">
          <h3 class="mono">> CHINA_PRACTICE</h3>
          <div class="practice-content">
            <div class="barcode"></div>
            <p class="serif">{{ currentDomain.chinaPractice }}</p>
          </div>
        </div>
      </div>
    </main>
  </div>
</template>

<style scoped>
.dossier-page {
  background-color: #000;
  min-height: 100vh;
  padding: 120px 40px 100px 40px;
}

.dossier-layout { max-width: 1100px; margin: 0 auto; position: relative; }

.dossier-header { margin-bottom: 60px; }
.header-top { display: flex; justify-content: space-between; align-items: center; margin-bottom: 30px; }
.back-link { background: none; border: none; color: #555; cursor: pointer; font-size: 0.7rem; letter-spacing: 2px; transition: color 0.3s; }
.back-link:hover { color: var(--alert-red); }
.doc-id { font-size: 0.65rem; color: #333; letter-spacing: 1px; }

.title-wrap { position: relative; display: flex; align-items: flex-end; gap: 30px; }
.classification-stamp { 
  border: 2px solid var(--alert-red); color: var(--alert-red); padding: 2px 10px; font-size: 0.7rem; font-weight: 900; 
  transform: rotate(-10deg); letter-spacing: 2px;
}
.domain-title { font-size: clamp(3rem, 8vw, 6rem); margin: 0; color: #fff; line-height: 1; }
.border-heavy { width: 100%; height: 8px; background: #fff; margin-top: 20px; }

.scan-section { margin-bottom: 80px; }
.img-container { width: 100%; height: 50vh; position: relative; overflow: hidden; border: 1px solid #222; }
.img-container img { width: 100%; height: 100%; object-fit: cover; filter: grayscale(1) contrast(1.5) brightness(0.6); }

.scan-line { 
  position: absolute; top: 0; left: 0; width: 100%; height: 2px; background: var(--alert-red); 
  box-shadow: 0 0 15px var(--alert-red); animation: scan 4s linear infinite; z-index: 5;
}
@keyframes scan { from { top: 0; } to { top: 100%; } }

.overlay-grid { 
  position: absolute; inset: 0; z-index: 2;
  background-image: linear-gradient(rgba(255,255,255,0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.03) 1px, transparent 1px);
  background-size: 20px 20px;
}

.data-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 60px; }
.data-block h3 { font-size: 0.8rem; color: var(--alert-red); margin-bottom: 25px; letter-spacing: 3px; }
.mono-text { font-size: 1rem; color: #888; line-height: 1.8; text-align: justify; }

.point-list { list-style: none; padding: 0; }
.point-list li { font-size: 0.9rem; color: #555; margin-bottom: 15px; border-bottom: 1px solid #111; padding-bottom: 10px; }

.wide-block { grid-column: span 2; }
.highlight-block { border-top: 2px solid #fff; padding-top: 40px; }
.practice-content { display: flex; gap: 40px; align-items: flex-start; }
.barcode { width: 100px; height: 100px; background: url("https://upload.wikimedia.org/wikipedia/commons/e/e9/UPC-A-barcode.svg") center/contain no-repeat; filter: invert(1) opacity(0.3); flex-shrink: 0; }
.practice-content p { font-size: 1.4rem; line-height: 1.8; color: #fff; margin: 0; }

@media (max-width: 900px) {
  .dossier-page { padding: 100px 20px 60px 20px; }
  .data-grid { grid-template-columns: 1fr; gap: 40px; }
  .wide-block { grid-column: span 1; }
  .practice-content { flex-direction: column; gap: 20px; }
  .img-container { height: 35vh; }
  .domain-title { font-size: 2.2rem; }
}
</style>