<script setup lang="ts">
import { computed } from 'vue'
import { useRouter } from 'vue-router'

const props = defineProps<{
  id: string
}>()

const router = useRouter()

const domainsData: Record<string, any> = {
  'political': {
    name: '政治安全',
    icon: 'UserFilled',
    definition: '政治安全是指国家政权、主权、政治制度、政治秩序以及意识形态不受威胁、侵犯、破坏和控制的状态。',
    keyPoints: [
      '政权安全和制度安全是核心',
      '必须坚持党的领导，维护中国特色社会主义制度',
      '防范和打击各种渗透、颠覆、破坏活动',
      '维护意识形态安全，筑牢政治防线'
    ]
  },
  'homeland': {
    name: '国土安全',
    icon: 'MapLocation',
    definition: '国土安全是指领土完整、国家统一、边疆边境、领空、海洋权益等不受侵犯或免于威胁的状态。',
    keyPoints: [
      '领土完整、国家统一是底线',
      '防范和打击一切分裂国家的活动',
      '保障陆地边境和领空安全',
      '维护国家海洋权益'
    ]
  },
  'military': {
    name: '军事安全',
    icon: 'Promotion',
    definition: '军事安全是指国家不受外部军事入侵和战争威胁的状态，以及保障这种状态的能力。',
    keyPoints: [
      '建设巩固国防和强大军队',
      '确保“能打仗、打胜仗”',
      '防范和抵御侵略，制止武装颠覆',
      '维护军事利益、设施和秘密安全'
    ]
  },
  'economic': {
    name: '经济安全',
    icon: 'TrendCharts',
    definition: '经济安全是指国家经济基础稳固、经济主权独立、经济运行平稳、经济发展可持续的状态。',
    keyPoints: [
      '国家安全的物质基础',
      '维护基本经济制度，保障国家经济主权',
      '防范金融风险，维护金融安全',
      '保障粮食、能源、资源以及产业链供应链安全'
    ]
  },
  'cultural': {
    name: '文化安全',
    icon: 'Collection',
    definition: '文化安全是指国家文化主权、文化价值观、文化资源等处于没有危险和不受内外威胁的状态。',
    keyPoints: [
      '维护意识形态安全',
      '弘扬中华优秀传统文化，抵制不良文化侵蚀',
      '增强国家文化软实力和文化影响力',
      '保障国民文化权益'
    ]
  },
  'social': {
    name: '社会安全',
    icon: 'Management',
    definition: '社会安全是指防范、消除、控制直接威胁社会公共秩序和人民群众生命财产安全的各类风险。',
    keyPoints: [
      '维护社会和谐稳定',
      '严厉打击恐怖主义、黑恶势力及重大刑事犯罪',
      '提高公共安全保障能力',
      '有效处置突发社会安全事件'
    ]
  },
  'tech': {
    name: '科技安全',
    icon: 'Monitor',
    definition: '科技安全是指科技体系完整有效，核心技术安全可控，国家核心利益不受外部科技优势损害。',
    keyPoints: [
      '解决“卡脖子”问题，实现高水平科技自立自强',
      '强化国家战略科技力量',
      '提升科技创新能力和核心竞争力',
      '保障科技人才、科研设施和知识产权安全'
    ]
  },
  'cyber': {
    name: '网络安全',
    icon: 'Lock',
    definition: '网络安全是指网络空间主权不受侵犯，网络基础设施、信息系统及数据受到有效保护。',
    keyPoints: [
      '维护网络空间主权，防范网络攻击',
      '保护关键信息基础设施安全',
      '加强个人信息保护和重要数据安全管理',
      '净化网络生态，维护网络秩序'
    ]
  },
  'ecology': {
    name: '生态安全',
    icon: 'Sunny',
    definition: '生态安全是指生态环境能够支撑国家生存和发展的基本状态，环境风险处于可控范围。',
    keyPoints: [
      '守住生态保护红线',
      '积极应对气候变化',
      '保障大气、水、土壤安全',
      '保护生物多样性，建设美丽中国'
    ]
  },
  'resource': {
    name: '资源安全',
    icon: 'Operation',
    definition: '资源安全是指国家发展所需的自然资源（能源、矿产、水、土地等）能够持续、稳定、及时、足量供应。',
    keyPoints: [
      '确保能源安全和重要矿产资源供应',
      '提高资源利用效率，推进节约集约利用',
      '加强资源战略储备',
      '完善多元资源供应体系'
    ]
  },
  'nuclear': {
    name: '核安全',
    icon: 'Warning',
    definition: '核安全是指对核设施、核材料采取保护措施，防止核事故、核扩散及核恐怖主义。',
    keyPoints: [
      '坚持“安全第一”，确保核能和平利用',
      '强化核应急能力和放射性废物管理',
      '防范核恐怖主义威胁',
      '履行核不扩散国际义务'
    ]
  },
  'overseas': {
    name: '海外利益安全',
    icon: 'Ship',
    definition: '海外利益安全是指国家在海外的公民、机构、企业、资产及正当权益不受威胁和侵害。',
    keyPoints: [
      '提升海外安全保障能力',
      '保护“走出去”的中国公民和机构安全',
      '维护国家在海外的合法权益',
      '应对国际恐怖主义和跨境犯罪威胁'
    ]
  },
  'bio': {
    name: '生物安全',
    icon: 'FirstAidKit',
    definition: '生物安全是指国家有效防范和应对危险生物因子威胁，保障人民生命健康和生态系统平衡。',
    keyPoints: [
      '防控重大新发突发传染病',
      '防治动植物疫情，保障粮食安全',
      '加强实验室生物安全管理',
      '防范外来物种入侵，保护生态系统'
    ]
  },
  'space': {
    name: '太空安全',
    icon: 'Compass',
    definition: '太空安全是指国家在太空领域的资产、活动及权益不受威胁，拥有进入、利用和控制太空的能力。',
    keyPoints: [
      '维护太空主权和和平利用空间权利',
      '防止太空军备竞赛和外空武器化',
      '保护卫星等空间基础设施安全',
      '提升空间资产保护和防御能力'
    ]
  },
  'deepsea': {
    name: '深海安全',
    icon: 'Odometer',
    definition: '深海安全是指国家在深海区域的探索、开发、利用及相关权益不受侵犯。',
    keyPoints: [
      '提升深海进入、深海探测和深海开发能力',
      '维护深海资源开发利用权利',
      '保障深海设施和科学考察安全',
      '参与深海国际治理'
    ]
  },
  'polar': {
    name: '极地安全',
    icon: 'Place',
    definition: '极地安全是指国家在南极、北极地区的科学考察、资源利用及相关权益得到保障。',
    keyPoints: [
      '参与极地国际治理和规则制定',
      '保护极地生态环境，应对极地气候变化',
      '维护极地科研、航行和资源合理利用权利',
      '提升极地保障和应急救援能力'
    ]
  }
}

const currentDomain = computed(() => domainsData[props.id] || null)

const goBack = () => {
  router.push('/')
}
</script>

<template>
  <div class="domain-detail" v-if="currentDomain">
    <el-page-header @back="goBack" class="header">
      <template #content>
        <div class="header-content">
          <el-icon :size="24" color="#c00000"><component :is="currentDomain.icon" /></el-icon>
          <span class="header-title">{{ currentDomain.name }}</span>
        </div>
      </template>
    </el-page-header>

    <div class="main-content">
      <el-card class="content-card">
        <div class="section">
          <h2 class="section-title">领域定义</h2>
          <p class="definition-text">{{ currentDomain.definition }}</p>
        </div>
        
        <el-divider />
        
        <div class="section">
          <h2 class="section-title">核心要点</h2>
          <ul class="points-list">
            <li v-for="(point, index) in currentDomain.keyPoints" :key="index" class="point-item">
              <el-icon color="#c00000" class="point-icon"><CaretRight /></el-icon>
              <span>{{ point }}</span>
            </li>
          </ul>
        </div>
      </el-card>
      
      <div class="action-bar">
        <el-button type="primary" size="large" @click="goBack" plain round>返回首页</el-button>
      </div>
    </div>
  </div>
  <div v-else class="not-found">
    <el-result icon="warning" title="未找到相关领域" sub-title="请返回首页重新选择">
      <template #extra>
        <el-button type="primary" @click="goBack">返回首页</el-button>
      </template>
    </el-result>
  </div>
</template>

<style scoped>
.domain-detail {
  max-width: 1000px;
  margin: 0 auto;
}

.header {
  margin-bottom: 30px;
  padding: 15px;
  background: #fff;
  border-radius: 8px;
  box-shadow: 0 2px 8px rgba(0,0,0,0.05);
}

.header-content {
  display: flex;
  align-items: center;
  gap: 10px;
}

.header-title {
  font-size: 1.5rem;
  font-weight: bold;
  color: #303133;
}

.main-content {
  margin-top: 20px;
}

.content-card {
  padding: 30px;
  border-top: 4px solid #c00000;
  border-radius: 8px;
}

.section {
  margin-bottom: 30px;
}

.section-title {
  font-size: 1.3rem;
  color: #c00000;
  margin-bottom: 20px;
  display: flex;
  align-items: center;
}

.definition-text {
  font-size: 1.1rem;
  line-height: 1.8;
  color: #303133;
  text-indent: 2em;
}

.points-list {
  list-style: none;
  padding: 0;
}

.point-item {
  display: flex;
  align-items: flex-start;
  gap: 12px;
  margin-bottom: 15px;
  font-size: 1.1rem;
  line-height: 1.6;
  color: #606266;
}

.point-icon {
  margin-top: 5px;
}

.action-bar {
  margin-top: 40px;
  text-align: center;
}

.not-found {
  padding-top: 100px;
}
</style>