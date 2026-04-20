<script setup lang="ts">
import { computed, onMounted, ref } from "vue";
import { useRouter, useRoute } from "vue-router";

const props = defineProps<{
  id: string;
}>();

const router = useRouter();
const route = useRoute();

// 🚀 战术扫描雷达逻辑
const scanValue = ref(85);
onMounted(() => {
  setInterval(() => {
    scanValue.value = 80 + Math.floor(Math.random() * 15);
  }, 2000);
});

const domainsData: Record<string, any> = {
  political: {
    name: "政治安全",
    img: "https://images.weserv.nl/?url=https://images.unsplash.com/photo-1508062878650-88b52897f298?w=1200",
    definition:
      "国家政权、主权、政治制度、政治秩序以及意识形态不受威胁、侵犯、破坏和控制的状态。它是国家安全的根本，决定了国家发展的根本方向。",
    keyPoints: [
      "政权安全和制度安全是核心指标",
      "必须毫不动摇地坚持中国共产党的领导",
      "严密防范国内外敌对势力的渗透、破坏与颠覆",
      "维护意识形态安全，筑牢思想防线",
      "保障宪法和法律的绝对权威"
    ],
    challenges: "当前，个别国家推行单边主义和“颜色革命”，利用网络传播错误思潮，对我国政治制度进行攻击抹黑，试图动摇我国发展的政治根基。",
    chinaPractice:
      "中国始终坚持走中国特色社会主义道路，建立健全国家安全审查制度，严厉打击危害国家安全的渗透破坏活动。通过加强基层治理和意识形态阵地建设，极大提升了政治体制的稳固性。党的十八大以来，我们有效粉碎了多起境外势力策划的颠覆企图，捍卫了国家长治久安。",
  },
  homeland: {
    name: "国土安全",
    img: "https://images.weserv.nl/?url=https://images.unsplash.com/photo-1508804185872-d7badad00f7d?w=1200",
    definition:
      "领土完整、国家统一、边疆边境、领空、海洋权益等不受侵犯或免于威胁的状态。国土安全是国家生存和发展的基本物质前提。",
    keyPoints: [
      "维护陆地边境、领海、领空的完整性",
      "坚决反对一切形式的分裂活动",
      "保障岛礁主权和海洋资源权益",
      "建设现代化边海防防控体系",
      "提升突发国土安全事件的应急处置能力"
    ],
    challenges: "部分海域存在主权争议，境外间谍机构通过技术手段对我国边境进行非法测绘，边境反恐和防范非法越境的压力依然较大。",
    chinaPractice:
      "我国坚持陆海统筹，加强南海岛礁建设，提升了对领海的有效管控能力。实施边境地区兴边富民行动，不仅稳固了边防，也改善了民生。近年来，解放军和武警部队常态化开展海上巡航和空天警巡，坚决维护了每一寸神圣国土。",
  },
  military: {
    name: "军事安全",
    img: `https://images.weserv.nl/?url=https://images.unsplash.com/photo-1508804185872-d7badad00f7d?w=1200`,
    definition:
      "国家不受外部军事入侵和战争威胁的状态，以及保障这种状态的能力。军事安全是国家安全的重要保障，是慑止战争的基石。",
    keyPoints: [
      "建设一支听党指挥、能打胜仗、作风优良的人民军队",
      "推进国防和军队现代化升级",
      "确保武器装备、军事设施和国防科技安全",
      "提升一体化国家战略体系和能力",
      "防范军事信息泄露和网络战争威胁"
    ],
    challenges: "全球军事技术革命加速迭代，部分大国试图通过技术代差实现对我国的军事遏制，地缘冲突频发对全球安全格局产生冲击。",
    chinaPractice:
      "我国深入贯彻强军目标，歼-20、山东舰、福建舰等大国重器相继入列。深化国防 and 军队改革，实现了人民军队组织架构的重塑。通过实战化训练，提升了全军全域作战能力，确保在关键时刻能够“拉得出、用得上、打得赢”。",
  },
  economic: {
    name: "经济安全",
    img: `https://images.weserv.nl/?url=https://images.unsplash.com/photo-1508062878650-88b52897f298?w=1200`,
    definition:
      "国家经济基础稳固、经济主权独立、经济运行平稳、经济发展可持续的状态。它是国家安全的基础，是国家实力的核心体现。",
    keyPoints: [
      "保障国家经济主权和发展自主权",
      "防范化解重大金融风险，维护股市汇市平稳",
      "确保产业链、供应链、能源和粮食供应安全",
      "保障关键基础设施和战略性资源的自主可控",
      "提升应对全球经济波动和外部制裁的能力"
    ],
    challenges: "单边主义、贸易保护主义抬头，全球产业链面临重构。外部势力利用金融工具、出口管制等手段对我国关键企业进行围堵打压。",
    chinaPractice:
      "中国坚持稳中求进工作总基调，构建“双循环”新发展格局。通过实施核心技术攻关，在高端芯片、关键原材料等领域不断突破，确保产业链自主。同时，深化金融改革，守住了不发生系统性金融风险的底线，为高质量发展保驾护航。",
  },
  cultural: {
    name: "文化安全",
    img: `https://images.weserv.nl/?url=https://images.unsplash.com/photo-1508804185872-d7badad00f7d?w=1200`,
    definition:
      "国家文化主权、文化价值观、文化资源等处于没有危险和不受内外威胁的状态。文化安全是国家之魂，是民族凝聚力的源泉。",
    keyPoints: [
      "坚定文化自信，维护社会主义核心价值观",
      "保护中华优秀传统文化，抵御西方腐朽文化侵蚀",
      "加强网络文化阵地管理，防止错误言论误导青少年",
      "提升国家文化软实力和国际话语权",
      "保障公共文化产品和服务的安全供应"
    ],
    challenges: "西方中心主义色彩浓厚，利用影视、社交媒体输出普世价值。部分网络平台存在泛娱乐化、去主流化的趋势，对传统价值观产生冲击。",
    chinaPractice:
      "大力弘扬中华优秀传统文化，推动中华文明创造性转化、创新性发展。通过建设新时代文明实践中心，强化主流思想导向。同时，实施文化出海工程，通过纪录片、艺术展览等形式讲述中国故事，提升了国家文化竞争力和国际感召力。",
  },
  social: {
    name: "社会安全",
    img: "https://images.weserv.nl/?url=https://images.unsplash.com/photo-1517486808906-6ca8b3f04846?w=1200",
    definition:
      "防范、消除、控制直接威胁社会公共秩序和人民群众生命财产安全的各类风险。社会安全是人民安居乐业的前提。",
    keyPoints: [
      "维护社会大局和谐稳定，防范群体性事件",
      "严厉打击黑恶势力及各类刑事犯罪",
      "加强基层社会治理体系建设",
      "提高公共安全能力和突发事件应急处置水平",
      "防范和化解矛盾纠纷，确保社会运行有序"
    ],
    challenges: "社会转型期各类矛盾交织，非法金融活动、新型网络诈骗频发。部分敌对势力试图利用社会热点事件挑唆民意，制造分裂。",
    chinaPractice:
      "常态化开展扫黑除恶斗争，社会治安环境持续优化。平安中国建设深入推进，我国成为世界上公认的最安全的国家之一。通过推广“枫桥经验”，实现了矛盾纠纷在基层、在源头化解，构建了共建共治共享的社会治理格局。",
  },
  tech: {
    name: "科技安全",
    img: "https://images.weserv.nl/?url=https://images.unsplash.com/photo-1518770660439-4636190af475?w=1200",
    definition:
      "科技体系完整有效，核心技术安全可控，国家核心利益不受外部科技优势损害。它是国家安全的重要支撑。",
    keyPoints: [
      "实现高水平科技自立自强，突破“卡脖子”技术",
      "保护核心科研数据和知识产权安全",
      "保障科技人才梯队建设，防止人才外流",
      "防范科技伦理风险，建立科技安全监测体系",
      "提升关键实验室和科研平台的安全防护"
    ],
    challenges: "部分国家实施科技霸凌，限制我国获取高端技术和设备。科技间谍活动活跃，重要科研成果面临流失风险。人工智能等新技术的滥用带来挑战。",
    chinaPractice:
      "我国坚持把科技自立自强作为国家发展的战略支撑，在量子通信、超级计算、空天探测等领域跻身世界前列。通过完善国家实验室体系，加大基础研究投入，逐步在关键环节实现国产替代，筑牢了坚不可摧的科技安全长城。",
  },
  cyber: {
    name: "网络安全",
    img: "https://images.weserv.nl/?url=https://images.unsplash.com/photo-1550751827-4bd374c3f58b?w=1200",
    definition:
      "网络空间主权不受侵犯，网络基础设施、信息系统及数据受到有效保护。没有网络安全就没有国家安全。",
    keyPoints: [
      "维护国家网络空间主权，确立网空治权",
      "保障关键信息基础设施，如电力、交通、通信网络",
      "强化数据安全保护，防止个人信息泄露和跨境倒卖",
      "打击网络攻击、网络恐怖主义和电信网络诈骗",
      "构建清朗的网络空间生态，传播正能量"
    ],
    challenges: "跨境网络攻击手段日益复杂，勒索软件频发。数据成为战略资源，跨境数据流动管理难度增加。生成式AI带来的虚假信息挑战显著。",
    chinaPractice:
      "颁布实施《网络安全法》、《数据安全法》，建立健全等级保护制度。连续举办国家网络安全宣传周，提升全民防护意识。成功应对多起针对关键部门的有组织网络攻击，为数字中国建设构建了坚实的防火墙。",
  },
  ecology: {
    name: "生态安全",
    img: "https://images.weserv.nl/?url=https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=1200",
    definition:
      "生态环境能够支撑国家生存与发展的基本状态，环境风险处于可控范围。绿水青山就是金山银山。",
    keyPoints: [
      "守住自然生态安全红线，保护关键生态屏障",
      "积极应对全球气候变化，推动绿色转型",
      "防治大气、水、土壤污染，改善人居环境",
      "保护生物多样性，严防外来物种入侵",
      "完善自然灾害监测预警和应急救援体系"
    ],
    challenges: "部分地区生态本底脆弱，气候变暖导致极端天气频发。生物间谍活动活跃，种质资源面临流失威胁。环境治理任务依然艰巨。",
    chinaPractice:
      "提出“双碳”目标，彰显了大国责任。建立以国家公园为主体的自然保护地体系，长江大保护取得显著进展。通过大规模国土绿化行动，我国成为全球森林覆盖增长最快的国家，为维护全球生态平衡贡献了中国方案。",
  },
  resource: {
    name: "资源安全",
    img: "https://images.weserv.nl/?url=https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?w=1200",
    definition: "国家发展所需的自然资源能够持续、稳定、及时、足量供应。资源安全是国家实力的物质保障。",
    keyPoints: [
      "确保能源资源稳定供应，提升自给率",
      "实行最严格的耕地保护制度，确保粮食安全",
      "加强水资源统筹利用，保障饮水安全",
      "提升矿产资源储备能力，完善多元供应体系",
      "推动资源节约集约利用，建立循环经济模式"
    ],
    challenges: "对外依存度较高的关键矿产和油气资源面临供应链中断风险。全球地缘政治局势导致大宗商品价格波动，影响国家战略储备和经济稳定运行。",
    chinaPractice:
      "实施“西气东输”、“南水北调”等跨区域资源调配工程，有效缓解了区域性匮乏。坚守18亿亩耕地红线，饭碗始终牢牢端在自己手中。大力发展风、光、水等可再生能源，逐步降低化石能源依赖，构建了安全可靠的现代能源体系。",
  },
  nuclear: {
    name: "核安全",
    img: `https://images.weserv.nl/?url=https://images.unsplash.com/photo-1508804185872-d7badad00f7d?w=1200`,
    definition:
      "对核设施、核材料采取有效防护，防止核事故、核扩散及核恐怖主义。它是和平利用原子能的前提。",
    keyPoints: [
      "坚持“安全第一、质量第一”的核安全工作方针",
      "强化核电厂及各类核设施的运行安全监控",
      "严密管控核材料，防范核非法交易和恐怖威胁",
      "完善核应急响应机制，提升监测预警水平",
      "积极参与核安全国际治理，共建人类命运共同体"
    ],
    challenges: "核能发展环境日益复杂，部分老旧核设施面临退役和废弃物处置挑战。一些国家排放核污染水等行为对全球海洋生态和核安全秩序造成冲击。",
    chinaPractice:
      "我国核电建设保持“零事故”记录。自主研发的“华龙一号”达到世界最高安全等级。建立了国家级核应急组织体系，实现了核设施监测全覆盖。通过立法和监管，确保了核技术的平安利用，为保障能源安全和应对气候变化做出了重要贡献。",
  },
  overseas: {
    name: "海外利益安全",
    img: "https://images.weserv.nl/?url=https://images.unsplash.com/photo-1436450412740-6b988f486c6b?w=1200",
    definition: "国家在海外的公民、机构、企业、资产及正当权益不受威胁和侵害。中国脚步走到哪里，安全保护就跟到哪里。",
    keyPoints: [
      "提升海外公民和机构的安全保障能力",
      "维护海外中资企业的合法经营权益",
      "打击针对中国海外目标的跨境恐怖主义和犯罪",
      "加强对国际航道、海底电缆等战略通道的安全保护",
      "建立健全海外利益保护法律体系和应急预警机制"
    ],
    challenges: "地缘博弈外溢，部分地区局势动荡给我国海外投资带来风险。跨境有组织犯罪针对中国公民的诈骗和绑架案件时有发生，保护手段仍需加强。",
    chinaPractice:
      "实施利比亚、也门等多次大规模海外撤侨行动，成功保护了同胞生命安全。通过“一带一路”安保体系建设，极大提升了中资项目的抗风险能力。中国海军常态化参与亚丁湾护航任务，为维护全球航运安全展现了大国担当。",
  },
  bio: {
    name: "生物安全",
    img: "https://images.weserv.nl/?url=https://images.unsplash.com/photo-1532187875605-1ef6c237ddc4?w=1600",
    definition:
      "有效防范和应对危险生物因子威胁，保障人民生命健康和生态系统平衡。它是国家安全的新兴领域。",
    keyPoints: [
      "防控重大新发突发传染病，筑牢公共卫生防线",
      "保障粮食、种子和生物种质资源安全",
      "严密管控实验室生物安全，防范病原体泄漏",
      "防范和应对生物恐怖主义与生物武器威胁",
      "加强对人类遗传资源和生物基因数据的保护"
    ],
    challenges: "全球传染病暴发风险增加，传播速度加快。生物技术双刃剑效应凸显，基因编辑等前沿技术的伦理与安全风险并存。生物间谍活动窃取我国珍稀遗传资源。",
    chinaPractice:
      "《生物安全法》正式实施，标志着我国生物安全进入法治化轨道。成功经受住多次疫情考验，建立了完善的疾控和预防体系。通过加强海关检疫和国家遗传资源管理，有力打击了物种入侵和基因流失行为，守护了国民健康和物种基因库。",
  },
  space: {
    name: "太空安全",
    img: "https://images.weserv.nl/?url=https://images.unsplash.com/photo-1446776811953-b23d57bd21aa?w=1200",
    definition:
      "国家在太空领域的资产、活动及权益不受威胁，拥有进入、利用和控制太空的能力。太空是人类活动的第四维度。",
    keyPoints: [
      "维护国家太空主权和轨道位置、频率资源使用权",
      "防止外空武器化和军备竞赛，保障太空资产安全",
      "提升进入空间和长期在轨驻留的保障能力",
      "加强对太空碎片、太阳风暴等空间环境的监测预警",
      "保护北斗等卫星导航定位系统及关键遥感设施"
    ],
    challenges: "外空军备竞赛加剧，部分国家推行外空单边霸权。空间碎片日益增多，极大地威胁着卫星等高价值资产的运行。轨道和频率资源竞争愈演愈烈。",
    chinaPractice:
      "中国空间站全面建成，开启长期有人驻留时代。北斗三号系统提供全球服务，确保了时空基准的自主可控。坚持和平利用外空理念，在深空探测和空间科学领域取得丰硕成果。通过提升空间碎片感知能力，成功保障了多次重大任务安全。",
  },
  deepsea: {
    name: "深海安全",
    img: "https://images.weserv.nl/?url=https://images.unsplash.com/photo-1439246854758-f686a415d9da?w=1200",
    definition: "国家在深海区域的探索、开发、利用及相关权益不受侵犯。深海是未来国家竞争的战略高地。",
    keyPoints: [
      "提升进入深海、探测深海和开发深海的技术能力",
      "维护国家在国际海底区域的勘探和开发权益",
      "保障海底光缆、管线等战略通信设施的安全",
      "积极参与深海国际法治建设，推动秩序公平公正",
      "防范针对深海关键技术和装备的间谍渗透"
    ],
    challenges: "深海探测技术仍存短板，部分核心装备面临出口限制。海洋间谍潜航器等新型威胁不断涌现，对我国水下声纹信息和战略布局构成重大隐患。",
    chinaPractice:
      "“奋斗者”号成功坐底万米深渊，标志着我国具备了全海域深潜能力。成功布设一系列深海观测网，实现了对深层海洋环境的实时监控。在南海及周边海域多次发现并查获境外非法水下探测设备，有力捍卫了领海安全和海洋秘密。",
  },
  polar: {
    name: "极地安全",
    img: "https://images.weserv.nl/?url=https://images.unsplash.com/photo-1473081556163-2a17de81fc97?w=1200",
    definition: "国家在南极、北极地区的科学考察、资源利用及相关权益得到保障。极地关乎全球气候和未来航道利用。",
    keyPoints: [
      "参与极地治理体系建设，提升国际规则话语权",
      "保障极地科考站点、人员及重要考察资产安全",
      "维护北极航道的合法航行权利和资源利用权",
      "加强极地环境保护，应对冰盖消融对气候的影响",
      "提升极地极端环境下的应急保障和通信测控能力"
    ],
    challenges: "极地竞争呈现政治化、军事化趋势。个别国家试图排斥非北极国家参与极地事务。极地科考受国际局势影响，合作门槛增加，物资补给难度大。",
    chinaPractice: "“雪龙2”号双向破冰船交付使用，大幅提升了极地科考周期。成功建成南极秦岭站等多个科考站，填补了监测空白。我国提出共建“冰上丝绸之路”，积极参与南极条约体系事务，在气候变化研究和资源永续利用领域展现了负责任大国形象。",
  },
};

const currentDomain = computed(() => domainsData[props.id] || null);

const goBack = () => {
  const index = route.query.backIndex;
  router.push({ path: "/", query: { fromIndex: index } });
};
</script>

<template>
  <div class="dossier-page" v-if="currentDomain">
    <!-- 🚀 强化返回按钮：固定位置、赛博风格 -->
    <button class="fixed-back-btn mono" @click="goBack">
      <div class="btn-scan"></div>
      <span class="arrow">&lt;&lt;</span>
      <span class="text">RETURN_TO_COMMAND_CENTER</span>
      <div class="corner"></div>
    </button>

    <main class="dossier-layout">
      <header class="dossier-header">
        <div class="header-top">
          <div class="breadcrumb mono">
            SYSTEM / <span class="active">{{ id.toUpperCase() }}</span>
          </div>
          <div class="doc-id mono">NODE_ID: 0x{{ (Math.random() * 0xFFFF | 0).toString(16).toUpperCase() }}</div>
        </div>
        <div class="title-row">
          <div class="stamp-box">
            <div class="stamp">CLASSIFIED</div>
          </div>
          <h1 class="domain-title serif">{{ currentDomain.name }}</h1>
        </div>
        <div class="status-bar">
          <div class="bar-fill" :style="{ width: scanValue + '%' }"></div>
          <span class="mono">NEURAL_SCAN_COMPLETED: {{ scanValue }}%</span>
        </div>
      </header>

      <!-- 核心视觉区 -->
      <section class="visual-grid">
        <div class="sat-view">
          <img :src="currentDomain.img" :alt="currentDomain.name" />
          <div class="scan-horizontal"></div>
          <div class="hud-corners">
            <span></span><span></span><span></span><span></span>
          </div>
          <div class="sat-label mono">LIVE_SATELLITE_FEED_01 // SECURE_LINK_ACTIVE</div>
          <div class="glitch-overlay"></div>
        </div>

        <!-- 🚀 战术数据面板 -->
        <div class="data-panel glass-panel mono">
          <div class="panel-header">STRATEGIC_METRICS</div>
          <div class="metrics">
            <div class="m-row">
              <span>SECURITY_INDEX:</span> <span class="val">9.{{ 5 + Math.floor(Math.random()*4) }}/10</span>
            </div>
            <div class="m-row">
              <span>THREAT_LEVEL:</span> <span class="val" :class="{ green: scanValue > 85 }">{{ scanValue > 90 ? 'STABLE' : 'MONITORING' }}</span>
            </div>
            <div class="m-row">
              <span>SYNC_STATUS:</span> <span class="val green">ENCRYPTED</span>
            </div>
          </div>
          <div class="radar-box">
            <div class="radar-circle"></div>
            <div class="radar-sweep"></div>
            <div class="radar-points">
              <span v-for="n in 3" :key="n" :style="{ top: Math.random()*100 + '%', left: Math.random()*100 + '%' }"></span>
            </div>
          </div>
        </div>
      </section>

      <div class="intel-grid">
        <!-- 核心定义 -->
        <div class="intel-block glass-panel definition-box">
          <h3 class="mono">> [01] 核心内涵 / DEFINITION</h3>
          <p class="mono-text">{{ currentDomain.definition }}</p>
        </div>

        <!-- 核心要点 -->
        <div class="intel-block glass-panel">
          <h3 class="mono">> [02] 战略重点 / CORE_DIRECTIVES</h3>
          <ul class="point-list mono">
            <li v-for="(point, idx) in currentDomain.keyPoints" :key="idx">
              <span class="bullet">[ 0{{ idx + 1 }} ]</span> {{ point }}
            </li>
          </ul>
        </div>

        <!-- 🚀 新增板块：现状与挑战 -->
        <div class="intel-block glass-panel challenge-box">
          <h3 class="mono">> [03] 现状挑战 / CURRENT_CHALLENGES</h3>
          <div class="challenge-content">
            <div class="warning-icon">!</div>
            <p class="mono-text">{{ currentDomain.challenges }}</p>
          </div>
        </div>

        <!-- 中国实践：突出展示 -->
        <div class="intel-block wide highlight-box">
          <h3 class="mono">> [04] 中国实践与成就 / CHINA_PRACTICE</h3>
          <div class="practice-wrap">
            <div class="practice-text">
              <p class="serif">{{ currentDomain.chinaPractice }}</p>
            </div>
            <!-- 🚀 动态红色签章 -->
            <div class="official-seal">
              <div class="seal-inner">
                <span>中国国家安全</span>
                <span class="small">OFFICIAL_AUTH</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
    
    <footer class="dossier-footer mono">
      <div class="footer-line"></div>
      <div class="footer-content">
        <span>© 2024 NATIONAL_SECURITY_COMMAND</span>
        <span>SECURITY_PROTOCOL: X-772_B</span>
      </div>
    </footer>
  </div>
</template>

<style scoped>
/* 🚀 强化返回按钮样式 */
.fixed-back-btn {
  position: fixed;
  top: 30px;
  left: 40px;
  z-index: 2000;
  background: rgba(10, 10, 10, 0.8);
  border: 1px solid #333;
  color: #fff;
  padding: 12px 24px;
  display: flex;
  align-items: center;
  gap: 15px;
  cursor: pointer;
  transition: 0.4s cubic-bezier(0.4, 0, 0.2, 1);
  backdrop-filter: blur(10px);
  overflow: hidden;
}

.fixed-back-btn .arrow {
  color: var(--alert-red);
  font-weight: 900;
  font-size: 1rem;
}

.fixed-back-btn .text {
  font-size: 0.75rem;
  letter-spacing: 2px;
  opacity: 0.8;
}

.fixed-back-btn:hover {
  border-color: var(--alert-red);
  box-shadow: 0 0 20px rgba(255, 0, 60, 0.2);
  transform: translateX(10px);
}

.fixed-back-btn:hover .text {
  opacity: 1;
  text-shadow: 0 0 10px #fff;
}

.btn-scan {
  position: absolute;
  top: 0;
  left: -100%;
  width: 100%;
  height: 100%;
  background: linear-gradient(90deg, transparent, rgba(255, 0, 60, 0.1), transparent);
  animation: btnScan 3s infinite;
}

@keyframes btnScan {
  to { left: 100%; }
}

.fixed-back-btn .corner {
  position: absolute;
  bottom: 0;
  right: 0;
  width: 10px;
  height: 10px;
  background: var(--alert-red);
  clip-path: polygon(100% 0, 100% 100%, 0 100%);
}

.dossier-page {
  background-color: #000;
  min-height: 100vh;
  padding: 140px 40px 80px 40px;
  color: #fff;
  background-image: 
    radial-gradient(circle at 50% 50%, rgba(20, 20, 20, 0.5) 0%, transparent 100%),
    linear-gradient(rgba(18, 16, 16, 0) 50%, rgba(0, 0, 0, 0.2) 50%);
  background-size: 100% 100%, 100% 4px;
}

.dossier-layout {
  max-width: 1200px;
  margin: 0 auto;
  position: relative;
}

.dossier-header {
  margin-bottom: 60px;
}
.header-top {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 30px;
  border-bottom: 1px solid #1a1a1a;
  padding-bottom: 10px;
}
.breadcrumb { font-size: 0.7rem; color: #444; }
.breadcrumb .active { color: var(--alert-red); }
.doc-id { font-size: 0.65rem; color: #333; }

.title-row {
  display: flex;
  align-items: center;
  gap: 40px;
  margin-bottom: 30px;
}
.stamp-box {
  border: 1px solid var(--alert-red);
  padding: 5px;
  opacity: 0.8;
  transform: rotate(-5deg);
}
.stamp {
  border: 2px solid var(--alert-red);
  color: var(--alert-red);
  padding: 5px 15px;
  font-weight: 900;
  font-size: 0.8rem;
  letter-spacing: 3px;
}
.domain-title {
  font-size: clamp(3rem, 8vw, 6rem);
  margin: 0;
  line-height: 1;
  text-transform: uppercase;
}

.status-bar {
  height: 2px;
  background: #111;
  width: 100%;
  position: relative;
  margin-top: 40px;
}
.bar-fill {
  height: 100%;
  background: var(--alert-red);
  transition: width 0.3s ease;
  box-shadow: 0 0 15px var(--alert-red);
}
.status-bar span {
  position: absolute;
  right: 0;
  top: -20px;
  font-size: 0.6rem;
  color: #555;
  letter-spacing: 1px;
}

.visual-grid {
  display: grid;
  grid-template-columns: 1.8fr 1fr;
  gap: 30px;
  margin-bottom: 80px;
}
.sat-view {
  position: relative;
  height: 450px;
  border: 1px solid #1a1a1a;
  overflow: hidden;
  background: #050505;
}
.sat-view img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  filter: grayscale(1) brightness(0.5) contrast(1.1) sepia(0.2);
  mix-blend-mode: luminosity;
}
.scan-horizontal {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 2px;
  background: var(--alert-red);
  box-shadow: 0 0 20px var(--alert-red);
  animation: scanH 8s linear infinite;
  z-index: 5;
}
@keyframes scanH {
  0% { top: 0; }
  100% { top: 100%; }
}
.hud-corners span {
  position: absolute;
  width: 20px;
  height: 20px;
  border: 1px solid var(--alert-red);
}
.hud-corners span:nth-child(1) { top: 20px; left: 20px; border-right: 0; border-bottom: 0; }
.hud-corners span:nth-child(2) { top: 20px; right: 20px; border-left: 0; border-bottom: 0; }
.hud-corners span:nth-child(3) { bottom: 20px; left: 20px; border-right: 0; border-top: 0; }
.hud-corners span:nth-child(4) { bottom: 20px; right: 20px; border-left: 0; border-top: 0; }

.sat-label {
  position: absolute;
  bottom: 20px;
  left: 20px;
  font-size: 0.65rem;
  color: var(--alert-red);
  background: rgba(0,0,0,0.7);
  padding: 4px 10px;
}

.data-panel {
  border: 1px solid #1a1a1a;
  padding: 30px;
  display: flex;
  flex-direction: column;
  background: rgba(255,255,255,0.02);
}
.panel-header {
  font-size: 0.7rem;
  color: #555;
  margin-bottom: 25px;
  border-bottom: 1px solid #1a1a1a;
  padding-bottom: 10px;
  letter-spacing: 2px;
}
.metrics {
  display: flex;
  flex-direction: column;
  gap: 20px;
  font-size: 0.85rem;
  margin-bottom: 40px;
}
.metrics .m-row { display: flex; justify-content: space-between; border-bottom: 1px solid #0a0a0a; padding-bottom: 8px; }
.metrics span:first-child { color: #555; }
.metrics .val { color: #fff; font-weight: 700; }
.metrics .val.green { color: #0f0; text-shadow: 0 0 10px rgba(0,255,0,0.5); }

.radar-box {
  width: 140px;
  height: 140px;
  border: 1px solid #1a1a1a;
  border-radius: 50%;
  margin: auto;
  position: relative;
  overflow: hidden;
}
.radar-circle {
  position: absolute;
  inset: 15px;
  border: 1px solid #111;
  border-radius: 50%;
}
.radar-sweep {
  position: absolute;
  inset: 0;
  background: conic-gradient(from 0deg, var(--alert-red) 0deg, transparent 90deg);
  opacity: 0.15;
  animation: sweep 4s linear infinite;
}
.radar-points span {
  position: absolute;
  width: 4px;
  height: 4px;
  background: var(--alert-red);
  border-radius: 50%;
  box-shadow: 0 0 10px var(--alert-red);
  animation: blink 2s infinite;
}
@keyframes sweep { from { transform: rotate(0deg); } to { transform: rotate(360deg); } }

.intel-grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 30px;
}
.intel-block {
  padding: 40px;
  border: 1px solid #1a1a1a;
  transition: 0.4s;
  background: rgba(5,5,5,0.5);
}
.intel-block:hover {
  border-color: #333;
  background: rgba(10,10,10,0.8);
}
.intel-block h3 {
  font-size: 0.85rem;
  color: var(--alert-red);
  margin-bottom: 30px;
  letter-spacing: 2px;
  border-bottom: 1px solid #1a1a1a;
  padding-bottom: 15px;
}
.mono-text {
  font-size: 1rem;
  line-height: 1.8;
  color: #bbb;
}

.point-list { list-style: none; padding: 0; }
.point-list li {
  font-size: 0.95rem;
  color: #888;
  margin-bottom: 18px;
  padding-left: 0;
  display: flex;
  gap: 15px;
}
.point-list .bullet { color: var(--alert-red); font-size: 0.7rem; font-weight: bold; }

.challenge-box { border-left: 2px solid var(--alert-red); }
.challenge-content { display: flex; gap: 25px; align-items: flex-start; }
.warning-icon {
  width: 40px;
  height: 40px;
  border: 1px solid var(--alert-red);
  color: var(--alert-red);
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: 900;
  flex-shrink: 0;
}

.wide { grid-column: span 2; }
.highlight-box {
  margin-top: 30px;
  border-top: 2px solid #fff;
  padding-top: 60px;
  background: linear-gradient(180deg, rgba(20,20,20,0.5), transparent);
}
.practice-wrap {
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 60px;
}
.practice-text p {
  font-size: 1.4rem;
  line-height: 1.7;
  color: #fff;
  margin: 0;
  max-width: 900px;
  text-align: justify;
}

.official-seal {
  width: 140px;
  height: 140px;
  border: 3px double var(--alert-red);
  color: var(--alert-red);
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  transform: rotate(15deg);
  opacity: 0.5;
  flex-shrink: 0;
}
.seal-inner {
  padding: 10px;
  border: 1px solid var(--alert-red);
  border-radius: 50%;
  width: 120px;
  height: 120px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  font-weight: 900;
}
.seal-inner .small { font-size: 0.5rem; margin-top: 5px; opacity: 0.8; }

.dossier-footer {
  margin-top: 100px;
  padding-top: 40px;
}
.footer-line { height: 1px; background: #1a1a1a; margin-bottom: 20px; }
.footer-content {
  display: flex;
  justify-content: space-between;
  font-size: 0.6rem;
  color: #333;
}

@media (max-width: 900px) {
  .fixed-back-btn { top: 20px; left: 20px; padding: 10px 15px; }
  .fixed-back-btn .text { display: none; }
  .dossier-page { padding: 100px 20px 40px 20px; }
  .visual-grid { grid-template-columns: 1fr; }
  .sat-view { height: 300px; }
  .intel-grid { grid-template-columns: 1fr; }
  .wide { grid-column: span 1; }
  .practice-wrap { flex-direction: column; text-align: center; }
  .practice-text p { font-size: 1.1rem; }
  .domain-title { font-size: 3rem; }
}
</style>
