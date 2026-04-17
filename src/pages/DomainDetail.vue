<script setup lang="ts">
import { computed, onMounted } from 'vue'
import { useRouter } from 'vue-router'

const props = defineProps<{
  id: string
}>()

const router = useRouter()

// 核心修正：显式获取本地图片路径
const getLocalImage = (filename: string) => {
  return new URL(`../static/${filename}`, import.meta.url).href
}

const domainsData: Record<string, any> = {
  'political': {
    name: '政治安全',
    img: 'https://images.weserv.nl/?url=https://images.unsplash.com/photo-1508062878650-88b52897f298?w=1200',
    definition: '国家政权、主权、政治制度、政治秩序以及意识形态不受威胁、侵犯、破坏和控制的状态。',
    keyPoints: ['政权安全和制度安全是核心', '必须坚持党的领导', '防范各种渗透、颠覆活动', '维护意识形态安全'],
    chinaPractice: '中国坚持走中国特色社会主义道路，严厉打击敌对势力的渗透、颠覆和破坏活动，坚决捍卫国家宪法法律确定的制度秩序。'
  },
  'homeland': {
    name: '国土安全',
    img: 'https://images.weserv.nl/?url=https://images.unsplash.com/photo-1508804185872-d7badad00f7d?w=1200',
    definition: '领土完整、国家统一、边疆边境、领空、海洋权益等不受侵犯或免于威胁的状态。',
    keyPoints: ['领土完整是底线', '打击分裂活动', '保障陆海空主权安全', '维护海洋权益'],
    chinaPractice: '中国坚决维护南海领土主权和海洋权益，加强边境地区基础设施建设，构建了严密的陆海空联动防控体系。'
  },
  'military': {
    name: '军事安全',
    img: getLocalImage('军事安全.jpg'),
    definition: '国家不受外部军事入侵和战争威胁的状态，以及保障这种状态的能力。',
    keyPoints: ['建设强大军队', '确保能打仗打胜仗', '防范武装颠覆', '保护军事设施安全'],
    chinaPractice: '实施强军战略，研制出歼-20、国产航母等大国重器，现代化军事体系确保了我国具备慑止战争的底气。'
  },
  'economic': {
    name: '经济安全',
    img: getLocalImage('经济安全.jpg'),
    definition: '国家经济基础稳固、经济主权独立、经济运行平稳、经济发展可持续的状态。',
    keyPoints: ['国家安全的物质基础', '保障国家经济主权', '防范金融风险', '确保能源和产业链安全'],
    chinaPractice: '中国坚持稳中求进，构建“双循环”新发展格局，实施关键核心技术攻关，确保产业链供应链自主可控。'
  },
  'cultural': {
    name: '文化安全',
    img: getLocalImage('文化安全.jpg'),
    definition: '国家文化主权、文化价值观、文化资源等处于没有危险和不受内外威胁的状态。',
    keyPoints: ['维护意识形态安全', '弘扬传统文化', '抵制文化侵蚀', '增强国家软实力'],
    chinaPractice: '弘扬社会主义核心价值观，实施中华优秀传统文化传承发展工程，建设具有强大凝聚力的社会主义意识形态。'
  },
  'social': {
    name: '社会安全',
    img: 'https://images.weserv.nl/?url=https://images.unsplash.com/photo-1517048676732-d65bc937f952?w=1200',
    definition: '防范、消除、控制直接威胁社会公共秩序和人民群众生命财产安全的各类风险。',
    keyPoints: ['维护社会和谐稳定', '打击恐怖主义', '提高公共安全能力', '处置突发社会事件'],
    chinaPractice: '中国被公认为世界上最安全的国家之一，常态化开展“扫黑除恶”斗争，平安中国建设让百姓安全感大幅提升。'
  },
  'tech': {
    name: '科技安全',
    img: 'https://images.weserv.nl/?url=https://images.unsplash.com/photo-1518770660439-4636190af475?w=1200',
    definition: '科技体系完整有效，核心技术安全可控，国家核心利益不受外部科技优势损害。',
    keyPoints: ['解决卡脖子问题', '实现科技自强', '提升核心竞争力', '保护知识产权'],
    chinaPractice: '中国量子计算、5G技术、天眼等领域进入世界先进行列，坚持高水平科技自立自强，筑牢科技防线。'
  },
  'cyber': {
    name: '网络安全',
    img: 'https://images.weserv.nl/?url=https://images.unsplash.com/photo-1550751827-4bd374c3f58b?w=1200',
    definition: '网络空间主权不受侵犯，网络基础设施、信息系统及数据受到有效保护。',
    keyPoints: ['维护网空主权', '保护基础设施', '数据安全管理', '净化网络生态'],
    chinaPractice: '中国每年举办“国家网络安全宣传周”，实施《网络安全法》，有力打击网络攻击，清朗网络空间。'
  },
  'ecology': {
    name: '生态安全',
    img: 'https://images.weserv.nl/?url=https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=1200',
    definition: '生态环境能够支撑国家生存和发展的基本状态，环境风险处于可控范围。',
    keyPoints: ['守住保护红线', '应对气候变化', '保障大气土壤安全', '保护生物多样性'],
    chinaPractice: '提出“双碳”目标，三江源国家公园的建立，彰显了中国保护生态安全的决心。'
  },
  'resource': {
    name: '资源安全',
    img: 'https://images.weserv.nl/?url=https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?w=1200',
    definition: '国家发展所需的自然资源能够持续、稳定、及时、足量供应。',
    keyPoints: ['确保能源供应', '提高利用效率', '战略储备建设', '多元供应体系'],
    chinaPractice: '实施“西气东输”、“南水北调”等重大资源跨区域调配工程，确保核心资源供应。'
  },
  'nuclear': {
    name: '核安全',
    img: getLocalImage('核安全.jpg'),
    definition: '对核设施、核材料采取保护措施，防止核事故、核扩散及核恐怖主义。',
    keyPoints: ['坚持安全第一', '核能和平利用', '强化核应急', '防范核恐怖威胁'],
    chinaPractice: '中国自主研发的“华龙一号”核电技术达到世界最高安全标准，保持了优异的核安全记录。'
  },
  'overseas': {
    name: '海外利益安全',
    img: 'https://images.weserv.nl/?url=https://images.unsplash.com/photo-1436450412740-6b988f486c6b?w=1200',
    definition: '国家在海外的公民、机构、企业、资产及正当权益不受威胁 and 侵害。',
    keyPoints: ['提升保障能力', '保护海外公民', '维护合法权益', '应对跨境犯罪'],
    chinaPractice: '实施撤侨等重大行动，保护了海外同胞生命安全，体现了“中国脚步走到哪里，保护就跟到哪里”。'
  },
  'bio': {
    name: '生物安全',
    img: 'https://images.weserv.nl/?url=https://images.unsplash.com/photo-1584036561566-baf8f5f1b144?w=1200',
    definition: '有效防范 and 应对危险生物因子威胁，保障人民生命健康 and 生态系统平衡。',
    keyPoints: ['防控传染病', '保障粮食安全', '实验室管理', '防范物种入侵'],
    chinaPractice: '《生物安全法》实施，建立完善了国家生物安全风险防控体系，守护物种多样性。'
  },
  'space': {
    name: '太空安全',
    img: 'https://images.weserv.nl/?url=https://images.unsplash.com/photo-1446776811953-b23d57bd21aa?w=1200',
    definition: '国家在太空领域的资产、活动及权益不受威胁，拥有进入、利用和控制太空的能力。',
    keyPoints: ['维护太空主权', '防止外空武器化', '保护基础设施', '提升防御能力'],
    chinaPractice: '“天宫”空间站建成运行，北斗导航系统开通，维护太空主权和和平利用空间。'
  },
  'deepsea': {
    name: '深海安全',
    img: 'https://images.weserv.nl/?url=https://images.unsplash.com/photo-1439246854758-f686a415d9da?w=1200',
    definition: '国家在深海区域的探索、开发、利用及相关权益不受侵犯。',
    keyPoints: ['提升探测能力', '维护开发权益', '保障考查安全', '参与国际治理'],
    chinaPractice: '“奋斗者”号万米深潜器成功下潜，深海探测技术跨越式发展，科学维护深海权益。'
  },
  'polar': {
    name: '极地安全',
    img: 'https://images.weserv.nl/?url=https://images.unsplash.com/photo-1473081556163-2a17de81fc97?w=1200',
    definition: '国家在南极、北极地区的科学考察、资源利用及相关权益得到保障。',
    keyPoints: ['参与极地治理', '保护生态环境', '维护航行权利', '提升应急保障'],
    chinaPractice: '“雪龙2”号极地科考破冰船下水，秦岭站等科考站建设，支撑极地事务话语权。'
  }
}

const currentDomain = computed(() => domainsData[props.id] || null)

onMounted(() => {
  window.scrollTo(0, 0)
})

const goBack = () => {
  router.push('/')
}
</script>

<template>
  <div class="detail-page" v-if="currentDomain">
    <main class="detail-container">
      
      <header class="detail-header reveal">
        <button class="back-btn" @click="goBack">
          <el-icon><ArrowLeft /></el-icon> <span>返回</span>
        </button>
        <h1 class="domain-title serif">{{ currentDomain.name }}</h1>
        <div class="line"></div>
      </header>

      <section class="visual-section reveal delay-1">
        <div class="img-frame">
          <img :src="currentDomain.img" :alt="currentDomain.name" />
        </div>
      </section>

      <section class="content-section">
        <div class="info-grid">
          <div class="info-block reveal delay-2">
            <span class="label">领域定义</span>
            <p>{{ currentDomain.definition }}</p>
          </div>
          
          <div class="info-block reveal delay-3">
            <span class="label">核心要义</span>
            <ul class="point-list">
              <li v-for="point in currentDomain.keyPoints" :key="point">{{ point }}</li>
            </ul>
          </div>

          <div class="info-block practice-block reveal delay-4">
            <span class="label">中国实践</span>
            <div class="practice-content">
              <el-icon color="#a80000"><StarFilled /></el-icon>
              <p>{{ currentDomain.chinaPractice }}</p>
            </div>
          </div>
        </div>
      </section>

    </main>
  </div>
</template>

<style scoped>
.detail-page {
  background-color: var(--bg-color);
  min-height: 100vh;
  padding: 140px 40px 100px 40px;
  color: var(--text-main);
}

.detail-container {
  max-width: 1100px;
  margin: 0 auto;
}

.serif { font-family: var(--font-serif); }

.detail-header {
  margin-bottom: 60px;
}

.back-btn {
  background: none; border: none;
  display: flex; align-items: center; gap: 8px;
  color: var(--text-sub);
  cursor: pointer;
  font-size: 0.95rem;
  margin-bottom: 30px;
  padding: 0;
}

.back-btn:hover { color: var(--primary-red); }

.domain-title {
  font-size: clamp(3rem, 7vw, 5rem);
  margin: 0;
  letter-spacing: 0.1em;
}

.line {
  width: 80px; height: 5px;
  background: var(--primary-red);
  margin-top: 30px;
}

.visual-section {
  margin-bottom: 80px;
}

.img-frame {
  width: 100%;
  height: 50vh;
  overflow: hidden;
  border-radius: 12px;
  background: #eee;
}

.img-frame img {
  width: 100%; height: 100%;
  object-fit: cover;
}

.info-grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 60px;
}

.info-block {
  border-top: 1px solid #eee;
  padding-top: 25px;
}

.practice-block {
  grid-column: span 2;
  background: #fffdfd;
  padding: 30px;
  border: 1px solid #f9f0f0;
  border-radius: 12px;
}

.label {
  display: block;
  font-size: 0.85rem;
  font-weight: bold;
  color: var(--primary-red);
  margin-bottom: 20px;
  letter-spacing: 2px;
  text-transform: uppercase;
}

.info-block p {
  font-size: 1.15rem;
  line-height: 1.8;
  color: #333;
}

.point-list {
  list-style: none; padding: 0; margin: 0;
}

.point-list li {
  font-size: 1.15rem;
  margin-bottom: 12px;
  padding-left: 20px;
  position: relative;
}

.point-list li::before {
  content: '■';
  position: absolute; left: 0; top: 4px;
  font-size: 0.6rem; color: var(--primary-red);
}

.practice-content {
  display: flex; gap: 15px; align-items: flex-start;
}

.practice-content p {
  margin: 0; font-style: italic; color: #444;
}

@media (max-width: 900px) {
  .detail-page { padding: 120px 20px 60px 20px; }
  .info-grid { grid-template-columns: 1fr; gap: 40px; }
  .practice-block { grid-column: span 1; }
  .img-frame { height: 35vh; }
}
</style>