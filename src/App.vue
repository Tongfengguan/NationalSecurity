<script setup lang="ts">
import { ref, onMounted, onUnmounted, watch } from 'vue'
import { useRoute } from 'vue-router'

const route = useRoute()
const transitionName = ref('glitch')
const isBooting = ref(true)
const bootLogs = ref<string[]>([])

// 实时 HUD 逻辑
const systemTime = ref('')
const systemCoords = ref('39.9042° N, 116.4074° E')
const isMobile = ref(false)
const cursorX = ref(0)
const cursorY = ref(0)
const isLocked = ref(false)
let timeInterval: any = null

// 🚀 模拟启动序列
const startBoot = async () => {
  const steps = [
    '> INITIALIZING_KERNEL_0.4.2...',
    '> LOADING_RSA_KEYS_4096_BIT...',
    '> LINKING_SATELLITE_CHINASAT_12...',
    '> BYPASSING_PROXY_LAYERS...',
    '> ACCESS_GRANTED_ROOT@SEC_CORE'
  ]
  for (const step of steps) {
    bootLogs.value.push(step)
    await new Promise(r => setTimeout(r, 400))
  }
  setTimeout(() => isBooting.value = false, 500)
}

const updateTime = () => {
  const now = new Date()
  systemTime.value = now.toTimeString().split(' ')[0]
}

const handleMouseMove = (e: MouseEvent) => {
  if (isMobile.value) return
  cursorX.value = e.clientX
  cursorY.value = e.clientY
  const target = e.target as HTMLElement
  isLocked.value = ['BUTTON', 'A', 'EL-CARD'].includes(target.tagName) || !!target.closest('.ppt-nav')
}

// 🚀 物理声效 (极简高频音)
const playSound = (type: 'click' | 'hover') => {
  try {
    const audioCtx = new (window.AudioContext || (window as any).webkitAudioContext)()
    const osc = audioCtx.createOscillator()
    const gain = audioCtx.createGain()
    osc.connect(gain)
    gain.connect(audioCtx.destination)
    
    osc.type = 'sine'
    osc.frequency.setValueAtTime(type === 'click' ? 800 : 1200, audioCtx.currentTime)
    gain.gain.setValueAtTime(0.05, audioCtx.currentTime)
    gain.gain.exponentialRampToValueAtTime(0.01, audioCtx.currentTime + 0.1)
    
    osc.start()
    osc.stop(audioCtx.currentTime + 0.1)
  } catch (e) { /* 忽略静音政策报错 */ }
}

onMounted(() => {
  startBoot()
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

  if (!isMobile.value) window.addEventListener('mousemove', handleMouseMove)
})

onUnmounted(() => {
  if (timeInterval) clearInterval(timeInterval)
  window.removeEventListener('mousemove', handleMouseMove)
})

watch(() => route.path, () => {
  transitionName.value = 'glitch'
  playSound('click')
})
</script>

<template>
  <el-container class="app-container" :style="{ cursor: isMobile ? 'auto' : 'none' }" @click="playSound('hover')">
    
    <!-- 🚀 开机引导屏 -->
    <transition name="boot-fade">
      <div v-if="isBooting" class="boot-screen mono">
        <div class="boot-content">
          <div v-for="(log, i) in bootLogs" :key="i" class="boot-log">{{ log }}</div>
          <div class="boot-cursor blink">_</div>
        </div>
      </div>
    </transition>

    <!-- 全球准心 -->
    <div v-if="!isMobile && !isBooting" class="hud-cursor" :class="{ locked: isLocked }" :style="{ left: cursorX + 'px', top: cursorY + 'px' }"></div>
    
    <div class="crt-overlay"></div>
    
    <el-header class="app-header">
      <div class="header-left">
        <div class="logo" @click="$router.push('/')">
          <div class="logo-symbol pulse"></div>
          <span class="logo-text mono">CNS_TERMINAL_V2</span>
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
          <div class="data-row"><span class="label">SEC_LEVEL:</span> <span class="val danger">ULTRA</span></div>
          <div class="data-row"><span class="label">LOC:</span> <span class="val">{{ systemCoords }}</span></div>
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
  min-height: 100vh; display: flex; flex-direction: column;
  background: var(--bg-base); position: relative;
}

/* 🚀 引导屏样式 */
.boot-screen {
  position: fixed; inset: 0; background: #000; z-index: 5000;
  display: flex; align-items: center; justify-content: center;
}
.boot-content { width: 300px; }
.boot-log { color: #0f0; font-size: 0.8rem; margin-bottom: 5px; letter-spacing: 1px; }
.boot-fade-leave-active { transition: opacity 0.8s steps(4); }
.boot-fade-leave-to { opacity: 0; }

.crt-overlay {
  position: fixed; inset: 0;
  background: linear-gradient(rgba(18, 16, 16, 0) 50%, rgba(0, 0, 0, 0.1) 50%), linear-gradient(90deg, rgba(255, 0, 0, 0.01), rgba(0, 255, 0, 0.01), rgba(0, 0, 255, 0.01));
  background-size: 100% 2px, 3px 100%;
  pointer-events: none; z-index: 9999; opacity: 0.2;
}

.app-header {
  display: flex; align-items: center; justify-content: space-between;
  background: rgba(0,0,0,0.9); backdrop-filter: blur(10px);
  padding: 0 30px; height: 60px;
  position: fixed; top: 0; left: 0; right: 0;
  z-index: 1000; border-bottom: 1px solid #111;
}

.logo { display: flex; align-items: center; gap: 12px; cursor: pointer; }
.logo-symbol { width: 10px; height: 10px; background: var(--alert-red); }
.logo-text { font-size: 0.9rem; font-weight: 900; color: #fff; letter-spacing: 1px; }

.pulse { animation: pulse 2s infinite ease-in-out; }
@keyframes pulse { 0%, 100% { opacity: 1; box-shadow: 0 0 5px var(--alert-red); } 50% { opacity: 0.3; box-shadow: 0 0 15px var(--alert-red); } }

.nav-links { display: flex; gap: 15px; }
.nav-link { text-decoration: none; color: #333; font-size: 0.75rem; transition: 0.2s; font-weight: bold; }
.nav-link.active { color: var(--alert-red); }
.nav-link .bracket { opacity: 0; }
.nav-link.active .bracket { opacity: 1; }

.hud-data { display: flex; flex-direction: column; align-items: flex-end; }
.data-row { font-size: 0.6rem; line-height: 1.2; color: #444; }
.data-row .danger { color: var(--alert-red); font-weight: 900; }

.app-main { flex: 1; padding: 0; margin-top: 60px; }

.glitch-enter-active, .glitch-leave-active { transition: opacity 0.15s steps(2); }
.glitch-enter-from { opacity: 0; transform: skewX(15deg); }
.glitch-leave-to { opacity: 0; transform: skewX(-15deg); }

.blink { animation: blink 1s infinite; }
@keyframes blink { 0%, 100% { opacity: 1; } 50% { opacity: 0; } }

@media (max-width: 768px) {
  .header-right { display: none; }
  .app-header { padding: 0 15px; }
}
</style>