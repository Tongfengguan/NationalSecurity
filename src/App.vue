<script setup lang="ts">
import { ref, onMounted, onUnmounted, watch } from 'vue'
import { useRoute } from 'vue-router'

const route = useRoute()
const transitionName = ref('glitch')

// 实时系统时间逻辑
const systemTime = ref('')
const systemCoords = ref('39.9042° N, 116.4074° E') // 默认北京坐标
let timeInterval: any = null

const updateTime = () => {
  const now = new Date()
  systemTime.value = now.toTimeString().split(' ')[0]
}

const updateCoords = () => {
  // 模拟坐标随机微调
  const lat = (39.9 + Math.random() * 0.1).toFixed(4)
  const lng = (116.4 + Math.random() * 0.1).toFixed(4)
  systemCoords.value = `${lat}° N, ${lng}° E`
}

onMounted(() => {
  updateTime()
  timeInterval = setInterval(() => {
    updateTime()
    if (Math.random() > 0.8) updateCoords()
  }, 1000)
})

onUnmounted(() => {
  if (timeInterval) clearInterval(timeInterval)
})

watch(() => route.path, () => {
  transitionName.value = 'glitch'
})
</script>

<template>
  <el-container class="app-container">
    <div class="crt-overlay"></div>
    
    <el-header class="app-header">
      <div class="header-left">
        <div class="logo" @click="$router.push('/')">
          <div class="logo-symbol pulse"></div>
          <span class="logo-text mono">CNS_CORE_TERMINAL</span>
        </div>
      </div>

      <div class="header-center">
        <div class="nav-links">
          <router-link to="/" class="nav-link mono" :class="{ active: route.path === '/' }">
            <span class="bracket">[</span> DASHBOARD <span class="bracket">]</span>
          </router-link>
          <router-link to="/knowledge" class="nav-link mono" :class="{ active: route.path === '/knowledge' }">
            <span class="bracket">[</span> ARCHIVES <span class="bracket">]</span>
          </router-link>
        </div>
      </div>

      <div class="header-right mono">
        <div class="hud-data">
          <div class="data-row"><span class="label">TIME_</span> <span class="val">{{ systemTime }}</span></div>
          <div class="data-row"><span class="label">LOC_</span> <span class="val">{{ systemCoords }}</span></div>
        </div>
      </div>
    </el-header>

    <el-main class="app-main">
      <router-view v-slot="{ Component }">
        <transition name="glitch" mode="out-in">
          <component :is="Component" />
        </transition>
      </router-view>
    </el-main>
  </el-container>
</template>

<style scoped>
.app-container {
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  background: #000;
  position: relative;
}

/* 信号干扰层 */
.crt-overlay {
  position: fixed; inset: 0;
  background: linear-gradient(rgba(18, 16, 16, 0) 50%, rgba(0, 0, 0, 0.1) 50%), linear-gradient(90deg, rgba(255, 0, 0, 0.01), rgba(0, 255, 0, 0.01), rgba(0, 0, 255, 0.01));
  background-size: 100% 2px, 3px 100%;
  pointer-events: none; z-index: 9999;
}

.app-header {
  display: flex; align-items: center; justify-content: space-between;
  background: #000; padding: 0 25px; height: 60px;
  position: fixed; top: 0; left: 0; right: 0;
  z-index: 1000;
  border-bottom: 1px solid #1a1a1a;
}

.logo { display: flex; align-items: center; gap: 12px; cursor: pointer; }
.logo-symbol { width: 10px; height: 10px; background: var(--alert-red); }
.logo-text { font-size: 0.9rem; font-weight: 900; color: #fff; letter-spacing: 1px; }

/* 呼吸效果 */
.pulse { animation: pulse 2s infinite ease-in-out; }
@keyframes pulse { 0% { opacity: 1; box-shadow: 0 0 5px var(--alert-red); } 50% { opacity: 0.4; box-shadow: 0 0 20px var(--alert-red); } 100% { opacity: 1; box-shadow: 0 0 5px var(--alert-red); } }

.nav-links { display: flex; gap: 15px; }
.nav-link { 
  text-decoration: none; color: #444; font-size: 0.75rem; 
  transition: all 0.2s; font-weight: bold;
}
.nav-link.active { color: var(--alert-red); }
.nav-link .bracket { opacity: 0; transition: opacity 0.2s; }
.nav-link.active .bracket { opacity: 1; }

.hud-data { display: flex; flex-direction: column; align-items: flex-end; }
.data-row { font-size: 0.65rem; line-height: 1.2; letter-spacing: 1px; }
.data-row .label { color: #333; }
.data-row .val { color: #888; }

.app-main { flex: 1; padding: 0; margin-top: 60px; }

/* 🚀 Glitch 转场效果 */
.glitch-enter-active, .glitch-leave-active {
  transition: all 0.2s steps(2);
}
.glitch-enter-from { opacity: 0; transform: skewX(10deg) scaleY(1.1); }
.glitch-leave-to { opacity: 0; transform: skewX(-10deg) scaleX(1.1); }

@media (max-width: 768px) {
  .header-right { display: none; }
  .app-header { padding: 0 15px; }
  .logo-text { font-size: 0.75rem; }
}
</style>