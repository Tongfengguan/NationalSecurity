<script setup lang="ts">
import { computed, onMounted } from 'vue'
import { useRouter } from 'vue-router'

const props = defineProps<{
  id: string
}>()

const router = useRouter()

const domainsData: Record<string, any> = {
  'political': {
    name: '政治安全',
    icon: 'UserFilled',
    img: 'https://images.unsplash.com/photo-1541872703-74c5e443d1f9?auto=format&fit=crop&q=80&w=1200',
    definition: '政治安全是指国家政权、主权、政治制度、政治秩序以及意识形态不受威胁、侵犯、破坏和控制的状态。',
    keyPoints: ['政权安全和制度安全是核心', '必须坚持党的领导', '防范各种渗透、颠覆活动', '维护意识形态安全']
  },
  'homeland': {
    name: '国土安全',
    icon: 'MapLocation',
    img: 'https://images.unsplash.com/photo-1501785888041-af3ef285b470?auto=format&fit=crop&q=80&w=1200',
    definition: '国土安全是指领土完整、国家统一、边疆边境、领空、海洋权益等不受侵犯或免于威胁的状态。',
    keyPoints: ['领土完整是底线', '打击分裂活动', '保障陆海空主权安全', '维护海洋权益']
  },
  'military': {
    name: '军事安全',
    icon: 'Promotion',
    img: 'https://images.unsplash.com/photo-1508103501740-8456f4d85e78?auto=format&fit=crop&q=80&w=1200',
    definition: '军事安全是指国家不受外部军事入侵和战争威胁的状态，以及保障这种状态的能力。',
    keyPoints: ['建设强大军队', '确保能打仗打胜仗', '防范武装颠覆', '保护军事设施安全']
  },
  'economic': {
    name: '经济安全',
    icon: 'TrendCharts',
    img: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=1200',
    definition: '经济安全是指国家经济基础稳固、经济主权独立、经济运行平稳、经济发展可持续的状态。',
    keyPoints: ['国家安全的物质基础', '保障国家经济主权', '防范金融风险', '确保能源和产业链安全']
  },
  'cultural': {
    name: '文化安全',
    icon: 'Collection',
    img: 'https://images.unsplash.com/photo-1518709268805-4e9042af9f23?auto=format&fit=crop&q=80&w=1200',
    definition: '文化安全是指国家文化主权、文化价值观、文化资源等处于没有危险和不受内外威胁的状态。',
    keyPoints: ['维护意识形态安全', '弘扬传统文化', '抵制文化侵蚀', '增强国家软实力']
  },
  'social': {
    name: '社会安全',
    icon: 'Management',
    img: 'https://images.unsplash.com/photo-1517048676732-d65bc937f952?auto=format&fit=crop&q=80&w=1200',
    definition: '社会安全是指防范、消除、控制直接威胁社会公共秩序和人民群众生命财产安全的各类风险。',
    keyPoints: ['维护社会和谐稳定', '打击恐怖主义', '提高公共安全能力', '处置突发社会事件']
  },
  'tech': {
    name: '科技安全',
    icon: 'Monitor',
    img: 'https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&q=80&w=1200',
    definition: '科技安全是指科技体系完整有效，核心技术安全可控，国家核心利益不受外部科技优势损害。',
    keyPoints: ['解决卡脖子问题', '实现科技自强', '提升核心竞争力', '保护知识产权']
  },
  'cyber': {
    name: '网络安全',
    icon: 'Lock',
    img: 'https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&q=80&w=1200',
    definition: '网络安全是指网络空间主权不受侵犯，网络基础设施、信息系统及数据受到有效保护。',
    keyPoints: ['维护网空主权', '保护基础设施', '数据安全管理', '净化网络生态']
  },
  'ecology': {
    name: '生态安全',
    icon: 'Sunny',
    img: 'https://images.unsplash.com/photo-1441974231531-c6227db76b6e?auto=format&fit=crop&q=80&w=1200',
    definition: '生态安全是指生态环境能够支撑国家生存和发展的基本状态，环境风险处于可控范围。',
    keyPoints: ['守住保护红线', '应对气候变化', '保障大气土壤安全', '保护生物多样性']
  },
  'resource': {
    name: '资源安全',
    icon: 'Operation',
    img: 'https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?auto=format&fit=crop&q=80&w=1200',
    definition: '资源安全是指国家发展所需的自然资源（能源、矿产、水、土地等）能够持续、稳定、及时、足量供应。',
    keyPoints: ['确保能源供应', '提高利用效率', '战略储备建设', '多元供应体系']
  },
  'nuclear': {
    name: '核安全',
    icon: 'Warning',
    img: 'https://images.unsplash.com/photo-1517420812313-8001a889944c?auto=format&fit=crop&q=80&w=1200',
    definition: '核安全是指对核设施、核材料采取保护措施，防止核事故、核扩散及核恐怖主义。',
    keyPoints: ['坚持安全第一', '核能和平利用', '强化核应急', '防范核恐怖威胁']
  },
  'overseas': {
    name: '海外利益安全',
    icon: 'Ship',
    img: 'https://images.unsplash.com/photo-1436450412740-6b988f486c6b?auto=format&fit=crop&q=80&w=1200',
    definition: '海外利益安全是指国家在海外的公民、机构、企业、资产及正当权益不受威胁和侵害。',
    keyPoints: ['提升保障能力', '保护海外公民', '维护合法权益', '应对跨境犯罪']
  },
  'bio': {
    name: '生物安全',
    icon: 'FirstAidKit',
    img: 'https://images.unsplash.com/photo-1584036561566-baf8f5f1b144?auto=format&fit=crop&q=80&w=1200',
    definition: '生物安全是指国家有效防范和应对危险生物因子威胁，保障人民生命健康和生态系统平衡。',
    keyPoints: ['防控传染病', '保障粮食安全', '实验室管理', '防范物种入侵']
  },
  'space': {
    name: '太空安全',
    icon: 'Compass',
    img: 'https://images.unsplash.com/photo-1454789548928-9efd52dc4031?auto=format&fit=crop&q=80&w=1200',
    definition: '太空安全是指国家在太空领域的资产、活动及权益不受威胁，拥有进入、利用和控制太空的能力。',
    keyPoints: ['维护太空主权', '防止外空武器化', '保护基础设施', '提升防御能力']
  },
  'deepsea': {
    name: '深海安全',
    icon: 'Odometer',
    img: 'https://images.unsplash.com/photo-1551244072-5d12893278ab?auto=format&fit=crop&q=80&w=1200',
    definition: '深海安全是指国家在深海区域的探索、开发、利用及相关权益不受侵犯。',
    keyPoints: ['提升探测能力', '维护开发权益', '保障考查安全', '参与国际治理']
  },
  'polar': {
    name: '极地安全',
    icon: 'Place',
    img: 'https://images.unsplash.com/photo-1473081556163-2a17de81fc97?auto=format&fit=crop&q=80&w=1200',
    definition: '极地安全是指国家在南极、北极地区的科学考察、资源利用及相关权益得到保障。',
    keyPoints: ['参与极地治理', '保护生态环境', '维护航行权利', '提升应急保障']
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
  <div class="detail-container" v-if="currentDomain">
    <div class="dynamic-grid-bg"></div>
    
    <header class="detail-header">
      <button class="back-link" @click="goBack">
        <el-icon><ArrowLeft /></el-icon> 返回档案
      </button>
    </header>

    <main class="detail-content">
      <div class="top-hero" :style="{ backgroundImage: `url(${currentDomain.img})` }">
        <div class="hero-overlay"></div>
        <div class="hero-text">
          <span class="category-tag">重点领域档案</span>
          <h1 class="domain-title">{{ currentDomain.name }}</h1>
        </div>
      </div>

      <div class="dossier-card">
        <div class="card-section">
          <h3 class="section-label">领域定义</h3>
          <p class="definition">{{ currentDomain.definition }}</p>
        </div>
        
        <div class="ornament-divider"></div>

        <div class="card-section">
          <h3 class="section-label">核心要义</h3>
          <ul class="points">
            <li v-for="point in currentDomain.keyPoints" :key="point">
              {{ point }}
            </li>
          </ul>
        </div>
      </div>
    </main>
  </div>
</template>

<style scoped>
.detail-container {
  min-height: 100vh;
  padding-top: 60px;
  background-color: var(--bg-cream);
}

.detail-header {
  max-width: 1200px;
  margin: 0 auto;
  padding: 20px 40px;
}

.back-link {
  background: none; border: none;
  font-size: 0.9rem;
  color: #1a1a1a;
  cursor: pointer;
  display: flex; align-items: center; gap: 8px;
  opacity: 0.6; transition: opacity 0.3s;
  letter-spacing: 1px;
}

.back-link:hover { opacity: 1; color: var(--primary-red); }

.detail-content {
  max-width: 900px;
  margin: 0 auto;
  padding: 0 40px 100px 40px;
}

.top-hero {
  height: 400px;
  border-radius: 0;
  background-size: cover;
  background-position: center;
  position: relative;
  overflow: hidden;
  box-shadow: 0 30px 60px rgba(0,0,0,0.1);
}

.hero-overlay {
  position: absolute;
  top: 0; left: 0; width: 100%; height: 100%;
  background: linear-gradient(to bottom, transparent, rgba(0,0,0,0.7));
}

.hero-text {
  position: absolute;
  bottom: 40px; left: 40px;
  color: white;
}

.category-tag {
  font-size: 0.8rem;
  letter-spacing: 3px;
  text-transform: uppercase;
  opacity: 0.7;
}

.domain-title {
  font-size: 3.5rem;
  font-weight: 900;
  margin: 10px 0 0 0;
  letter-spacing: 5px;
}

.dossier-card {
  background: white;
  margin-top: -50px;
  position: relative;
  z-index: 10;
  padding: 60px;
  box-shadow: 0 40px 100px rgba(0,0,0,0.05);
}

.section-label {
  font-size: 0.8rem;
  color: var(--primary-red);
  letter-spacing: 4px;
  text-transform: uppercase;
  margin-bottom: 20px;
}

.definition {
  font-size: 1.2rem;
  line-height: 1.8;
  color: #333;
}

.ornament-divider {
  width: 100%; height: 1px;
  background: #eee;
  margin: 40px 0;
  position: relative;
}

.ornament-divider::after {
  content: '';
  width: 40px; height: 3px;
  background: var(--gold-accent);
  position: absolute;
  top: -1px; left: 0;
}

.points {
  list-style: none;
  padding: 0;
}

.points li {
  font-size: 1.1rem;
  padding: 12px 0;
  border-bottom: 1px solid #f9f9f9;
  display: flex;
  align-items: center;
  gap: 15px;
}

.points li::before {
  content: '·';
  color: var(--gold-accent);
  font-weight: bold;
}

@media (max-width: 768px) {
  .detail-content { padding: 0 20px 60px 20px; }
  .top-hero { height: 250px; }
  .domain-title { font-size: 2rem; }
  .dossier-card { padding: 30px; }
  .definition { font-size: 1rem; }
}
</style>