<script setup lang="ts">
import { useRoute } from 'vue-router'

const route = useRoute()
</script>

<template>
  <el-container class="app-container">
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
        <transition name="page-zoom" mode="out-in">
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
}

/* 增加全屏胶片颗粒感纹理，提升高级感 */
.app-container::before {
  content: "";
  position: fixed;
  top: 0; left: 0; width: 100%; height: 100%;
  background-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)' opacity='0.05'/%3E%3C/svg%3E");
  pointer-events: none;
  z-index: 9999;
}

.app-header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  background: transparent;
  padding: 0 60px;
  height: 90px;
  position: fixed;
  top: 0; left: 0; right: 0;
  z-index: 1000;
  mix-blend-mode: exclusion; 
  transition: all 0.5s var(--transition-smooth);
}

.logo { 
  display: flex; 
  align-items: center; 
  gap: 14px; 
  cursor: pointer;
  transition: transform 0.3s var(--transition-smooth);
}
.logo:hover { transform: scale(1.05); }

.logo-text { 
  font-size: 1.2rem; 
  font-weight: 900; 
  color: #fff; 
  letter-spacing: 4px;
  text-transform: uppercase;
}

.nav-links { display: flex; gap: 40px; }
.nav-link { 
  text-decoration: none; 
  color: #fff; 
  font-size: 0.85rem; 
  opacity: 0.4; 
  font-weight: 500; 
  transition: all 0.4s var(--transition-smooth);
  letter-spacing: 2px;
  text-transform: uppercase;
  position: relative;
}
.nav-link::after {
  content: '';
  position: absolute;
  bottom: -6px; left: 0;
  width: 0; height: 1px;
  background: var(--cinnabar-red);
  transition: width 0.4s var(--transition-smooth);
}
.nav-link:hover, .nav-link.active { opacity: 1; }
.nav-link.active::after { width: 100%; }

.app-main { flex: 1; padding: 0; }

/* 页面切换：极致丝滑的缩放平移 */
.page-zoom-enter-active, .page-zoom-leave-active {
  transition: all 0.8s cubic-bezier(0.16, 1, 0.3, 1);
}
.page-zoom-enter-from { opacity: 0; transform: scale(1.02) translateY(20px); filter: blur(10px); }
.page-zoom-leave-to { opacity: 0; transform: scale(0.98) translateY(-20px); filter: blur(10px); }

@media (max-width: 768px) {
  .app-header { padding: 0 24px; height: 70px; }
  .logo-text { font-size: 1rem; letter-spacing: 2px; }
  .nav-links { gap: 20px; }
}
</style>