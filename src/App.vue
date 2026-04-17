<script setup lang="ts">
import { useRoute } from 'vue-router'

const route = useRoute()
</script>

<template>
  <el-container class="app-container">
    <el-header class="app-header">
      <div class="logo" @click="$router.push('/')">
        <el-icon :size="22" color="#a80000"><StarFilled /></el-icon>
        <span class="logo-text serif">国家安全教育</span>
      </div>
      <div class="nav-links">
        <router-link to="/" class="nav-link" :class="{ active: route.path === '/' }">首页</router-link>
        <router-link to="/knowledge" class="nav-link" :class="{ active: route.path === '/knowledge' }">知识档案</router-link>
      </div>
    </el-header>

    <el-main class="app-main">
      <router-view v-slot="{ Component }">
        <transition name="fade" mode="out-in">
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
}

.app-header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  background: rgba(255, 255, 255, 0.98);
  padding: 0 30px;
  height: 60px;
  position: fixed;
  top: 0; left: 0; right: 0;
  z-index: 1000;
  border-bottom: 1px solid #eee;
}

.logo { display: flex; align-items: center; gap: 10px; cursor: pointer; }
.logo-text { font-size: 1.1rem; font-weight: bold; color: #111; letter-spacing: 1px; }

.nav-links { display: flex; gap: 25px; }
.nav-link { text-decoration: none; color: #666; font-size: 0.95rem; font-weight: 500; transition: color 0.3s; }
.nav-link:hover, .nav-link.active { color: var(--primary-red); }

.app-main { flex: 1; padding: 0; margin-top: 60px; }

.fade-enter-active, .fade-leave-active {
  transition: opacity 0.3s ease;
}
.fade-enter-from, .fade-leave-to {
  opacity: 0;
}

@media (max-width: 768px) {
  .app-header { padding: 0 15px; }
  .logo-text { font-size: 1rem; }
}
</style>