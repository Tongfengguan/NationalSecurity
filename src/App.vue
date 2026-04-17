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
}

.app-header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  background: transparent;
  padding: 0 40px;
  height: 80px;
  position: fixed;
  top: 0; left: 0; right: 0;
  z-index: 1000;
  /* 仅在背景亮色时起作用的黑白反转 */
  mix-blend-mode: exclusion; 
}

.logo { display: flex; align-items: center; gap: 12px; cursor: pointer; }
.logo-text { font-size: 1.1rem; font-weight: 900; color: #fff; letter-spacing: 2px; }

.nav-links { display: flex; gap: 30px; }
.nav-link { 
  text-decoration: none; color: #fff; font-size: 0.9rem; 
  opacity: 0.5; font-weight: 500; transition: all 0.4s;
  letter-spacing: 1px;
}
.nav-link:hover, .nav-link.active { opacity: 1; color: var(--cinnabar-red); }

.app-main { flex: 1; padding: 0; }

/* 页面切换：PPT 翻页感 */
.page-zoom-enter-active, .page-zoom-leave-active {
  transition: all 0.6s cubic-bezier(0.16, 1, 0.3, 1);
}
.page-zoom-enter-from { opacity: 0; transform: scale(0.98) translateY(10px); }
.page-zoom-leave-to { opacity: 0; transform: scale(1.02) translateY(-10px); }

@media (max-width: 768px) {
  .app-header { padding: 0 20px; height: 60px; }
  .logo-text { font-size: 0.95rem; }
}
</style>