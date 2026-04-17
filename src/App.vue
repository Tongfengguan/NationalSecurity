<script setup lang="ts">
import { useRoute } from 'vue-router'

const route = useRoute()
</script>

<template>
  <el-container class="app-container">
    <el-header class="app-header">
      <div class="logo" @click="$router.push('/')">
        <el-icon :size="20" color="#8b0000"><StarFilled /></el-icon>
        <span class="logo-text">国家安全教育</span>
      </div>
      <div class="nav-links">
        <router-link to="/" class="nav-link" :class="{ active: route.path === '/' }">首页</router-link>
        <router-link to="/knowledge" class="nav-link" :class="{ active: route.path === '/knowledge' }">档案库</router-link>
      </div>
    </el-header>
    <el-main class="app-main">
      <router-view v-slot="{ Component }">
        <transition name="page-slide" mode="out-in">
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
  background: rgba(253, 253, 251, 0.8);
  backdrop-filter: blur(20px);
  padding: 0 40px;
  height: 60px;
  position: fixed;
  top: 0; left: 0; right: 0;
  z-index: 1000;
  border-bottom: 1px solid rgba(0,0,0,0.05);
}

.logo {
  display: flex;
  align-items: center;
  gap: 10px;
  cursor: pointer;
}

.logo-text {
  font-size: 1rem;
  font-weight: 800;
  color: #1a1a1a;
  letter-spacing: 2px;
  text-transform: uppercase;
}

.nav-links {
  display: flex;
  gap: 30px;
}

.nav-link {
  text-decoration: none;
  color: #1a1a1a;
  font-size: 0.9rem;
  letter-spacing: 1px;
  opacity: 0.5;
  transition: all 0.3s;
}

.nav-link:hover, .nav-link.active {
  opacity: 1;
  color: #8b0000;
}

.app-main {
  flex: 1;
  padding: 0; /* 首页是全屏，不需要内边距 */
  margin-top: 0;
}

.page-slide-enter-active, .page-slide-leave-active {
  transition: all 0.5s cubic-bezier(0.4, 0, 0.2, 1);
}

.page-slide-enter-from { opacity: 0; transform: scale(1.05); }
.page-slide-leave-to { opacity: 0; transform: scale(0.95); }

@media (max-width: 768px) {
  .app-header { padding: 0 20px; }
  .nav-links { gap: 15px; }
}
</style>