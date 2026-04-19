<script setup lang="ts">
import { ref, onMounted, onUnmounted, watch } from 'vue'
import { useRoute } from 'vue-router'

const route = useRoute()
const transitionName = ref('glitch')

// 实时 HUD 逻辑
const systemTime = ref('')
const systemCoords = ref('39.9042° N, 116.4074° E')
const isMobile = ref(false)
const cursorX = ref(0)
const cursorY = ref(0)
const isLocked = ref(false)
let timeInterval: any = null

const updateTime = () => {
  const now = new Date()
  systemTime.value = now.toTimeString().split(' ')[0]
}

const handleMouseMove = (e: MouseEvent) => {
  if (isMobile.value) return
  cursorX.value = e.clientX
  cursorY.value = e.clientY
  
  // 智能锁定：如果鼠标划过按钮或链接，触发锁定动效
  const target = e.target as HTMLElement
  isLocked.value = ['BUTTON', 'A', 'EL-CARD'].includes(target.tagName) || !!target.closest('.ppt-nav')
}

// 🚀 震动反馈微交互
const triggerVibration = () => {
  if (navigator.vibrate) navigator.vibrate(10)
}

onMounted(() => {
  isMobile.value = window.innerWidth <= 768
  updateTime()
  timeInterval = setInterval(() => {
    updateTime()
    if (Math.random() > 0.8) {
      const lat = (39.9 + Math.random() * 0.1).toFixed(4)
      const lng = (116.4 + Math.random() * 0.1).toFixed(4)
      systemCoords.value = `${lat}° N, ${lng}° E`
    }
  }, 1000)

  if (!isMobile.value) {
    window.addEventListener('mousemove', handleMouseMove)
  }
})

onUnmounted(() => {
  if (timeInterval) clearInterval(timeInterval)
  window.removeEventListener('mousemove', handleMouseMove)
})

watch(() => route.path, () => {
  transitionName.value = 'glitch'
  triggerVibration()
})
</script>

<template>
  <el-container class="app-container" :style="{ cursor: isMobile ? 'auto' : 'none' }">
    <!-- 全球准心 -->
    <div v-if="!isMobile" class="hud-cursor" :class="{ locked: isLocked }" :style="{ left: cursorX + 'px', top: cursorY + 'px' }"></div>
    
    <div class="crt-overlay"></div>
    
    <el-header class="app-header">
      <div class="header-left">
        <div class="logo" @click="$router.push('/'); triggerVibration()">
          <div class="logo-symbol pulse"></div>
          <span class="logo-text mono">CNS_TERMINAL_04</span>
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
          <div class="data-row"><span class="label">T:</span> <span class="val">{{ systemTime }}</span></div>
          <div class="data-row"><span class="label">L:</span> <span class="val">{{ systemCoords }}</span></div>
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
  background: var(--bg-base);
  position: relative;
}

.crt-overlay {
  position: fixed; inset: 0;
  background: linear-gradient(rgba(18, 16, 16, 0) 50%, rgba(0, 0, 0, 0.1) 50%), linear-gradient(90deg, rgba(255, 0, 0, 0.01), rgba(0, 255, 0, 0.01), rgba(0, 0, 255, 0.01));
  background-size: 100% 2px, 3px 100%;
  pointer-events: none; z-index: 9999; opacity: 0.3;
}

.app-header {
  display: flex; align-items: center; justify-content: space-between;
  background: rgba(0,0,0,0.8); backdrop-filter: blur(10px);
  padding: 0 30px; height: 60px;
  position: fixed; top: 0; left: 0; right: 0;
  z-index: 1000;
  border-bottom: 1px solid #222;
}

.logo { display: flex; align-items: center; gap: 12px; cursor: pointer; }
.logo-symbol { width: 10px; height: 10px; background: var(--alert-red); }
.logo-text { font-size: 0.9rem; font-weight: 900; color: #fff; letter-spacing: 1px; }

.pulse { animation: pulse 2s infinite ease-in-out; }
@keyframes pulse { 0%, 100% { opacity: 1; box-shadow: 0 0 5px var(--alert-red); } 50% { opacity: 0.4; box-shadow: 0 0 15px var(--alert-red); } }

.nav-links { display: flex; gap: 15px; }
.nav-link { 
  text-decoration: none; color: #444; font-size: 0.75rem; 
  transition: all 0.2s; font-weight: bold;
}
.nav-link.active { color: var(--alert-red); }
.nav-link .bracket { opacity: 0; transition: opacity 0.2s; }
.nav-link.active .bracket { opacity: 1; }

.hud-data { display: flex; flex-direction: column; align-items: flex-end; }
.data-row { font-size: 0.6rem; line-height: 1.2; letter-spacing: 1px; color: #666; }
.data-row .label { color: #333; margin-right: 5px; }

.app-main { flex: 1; padding: 0; margin-top: 60px; }

.glitch-enter-active, .glitch-leave-active { transition: opacity 0.2s steps(2); }
.glitch-enter-from { opacity: 0; transform: skewX(10deg); }
.glitch-leave-to { opacity: 0; transform: skewX(-10deg); }

@media (max-width: 768px) {
  .header-right { display: none; }
  .app-header { padding: 0 15px; }
  .logo-text { font-size: 0.75rem; }
}
</style>