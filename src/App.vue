<script setup lang="ts">
import { ref, watch } from 'vue'
import { useRoute } from 'vue-router'

const route = useRoute()
const transitionName = ref('page-dynamic')

// 智能判定转场：首页进详情为深入，详情回首页为撤出
watch(() => route.path, (to, from) => {
  if (to === '/' && from !== '/') {
    transitionName.value = 'page-retreat'
  } else {
    transitionName.value = 'page-dynamic'
  }
})
</script>

<template>
  <el-container class="app-container">
    <div class="grain-overlay"></div>

    <el-header class="app-header">
      <div class="logo" @click="$router.push('/')">
        <el-icon :size="22" color="#b32a26"><StarFilled /></el-icon>
        <span class="logo-text serif">国家安全教育</span>
      </div>
      <div class="nav-links">
        <router-link to="/" class="nav-link" :class="{ active: route.path === '/' }">首页</router-link>
        <router-link to="/knowledge" class="nav-link" :class="{ active: route.path === '/knowledge' }">档案库</router-link>
      </div>
    </el-header>

    <el-main class="app-main">
      <router-view v-slot="{ Component }">
        <transition :name="transitionName" mode="out-in">
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
  background: var(--ink-black);
  position: relative;
  overflow: hidden;
}

.grain-overlay {
  content: "";
  position: fixed; inset: 0;
  background-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)' opacity='0.04'/%3E%3C/svg%3E");
  pointer-events: none; z-index: 9999;
}

.app-header {
  display: flex; align-items: center; justify-content: space-between;
  background: rgba(0, 0, 0, 0.4);
  backdrop-filter: blur(20px);
  padding: 0 40px; height: 70px;
  position: fixed; top: 0; left: 0; right: 0;
  z-index: 1000;
  border-bottom: 1px solid rgba(255,255,255,0.05);
}

.logo { display: flex; align-items: center; gap: 12px; cursor: pointer; }
.logo-text { font-size: 1.1rem; font-weight: 900; color: #fff; letter-spacing: 2px; }
.nav-links { display: flex; gap: 30px; }
.nav-link { text-decoration: none; color: #fff; font-size: 0.85rem; opacity: 0.4; font-weight: 500; transition: all 0.4s; letter-spacing: 2px; }
.nav-link:hover, .nav-link.active { opacity: 1; }
.nav-link.active { color: var(--cinnabar-red); }

.app-main { flex: 1; padding: 0; }

/* 🚀 空间级动态转场 (Cinematic Spatial Transition) */
.page-dynamic-enter-active, .page-dynamic-leave-active,
.page-retreat-enter-active, .page-retreat-leave-active {
  transition: all 0.8s cubic-bezier(0.16, 1, 0.3, 1);
}

/* 深入：旧页缩小消失，新页放大推入 */
.page-dynamic-enter-from { opacity: 0; transform: scale(1.1) translate3d(0, 30px, 0); filter: blur(10px); }
.page-dynamic-leave-to { opacity: 0; transform: scale(0.9) translate3d(0, -30px, 0); filter: blur(10px); }

/* 撤出：旧页放大消失，新页缩小滑入 */
.page-retreat-enter-from { opacity: 0; transform: scale(0.9) translate3d(0, -30px, 0); filter: blur(10px); }
.page-retreat-leave-to { opacity: 0; transform: scale(1.1) translate3d(0, 30px, 0); filter: blur(10px); }

@media (max-width: 768px) {
  .app-header { padding: 0 20px; height: 60px; }
  .logo-text { font-size: 0.95rem; }
}
</style>