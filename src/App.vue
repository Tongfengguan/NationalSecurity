<script setup lang="ts">
import { useRoute } from 'vue-router'

const route = useRoute()
</script>

<template>
  <el-container class="app-container">
    <el-header class="app-header">
      <div class="logo" @click="$router.push('/')">
        <el-icon :size="24" color="#c00000"><StarFilled /></el-icon>
        <span class="logo-text">国家安全教育</span>
      </div>
      <el-menu
        :default-active="route.path"
        mode="horizontal"
        router
        class="nav-menu"
        background-color="#ffffff"
        text-color="#303133"
        active-text-color="#c00000"
        :ellipsis="false"
      >
        <el-menu-item index="/">首页</el-menu-item>
        <el-menu-item index="/knowledge">知识</el-menu-item>
      </el-menu>
    </el-header>
    <el-main class="app-main">
      <router-view v-slot="{ Component }">
        <transition name="slide-fade" mode="out-in">
          <component :is="Component" />
        </transition>
      </router-view>
    </el-main>
    <el-footer class="app-footer">
      <p>© 2026 国家安全专题教育平台</p>
    </el-footer>
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
  border-bottom: 1px solid #eee;
  background: #ffffff;
  padding: 0 15px;
  height: 60px;
  position: sticky;
  top: 0;
  z-index: 1000;
}

.logo {
  display: flex;
  align-items: center;
  gap: 8px;
  cursor: pointer;
}

.logo-text {
  font-size: 1.1rem;
  font-weight: 800;
  color: #c00000;
  white-space: nowrap;
}

.nav-menu {
  border-bottom: none;
  height: 60px;
}

:deep(.el-menu-item) {
  padding: 0 10px;
  font-size: 0.95rem;
}

.app-main {
  flex: 1;
  padding: 20px 15px;
  background: #fff;
  overflow-x: hidden;
}

.app-footer {
  text-align: center;
  color: #909399;
  font-size: 0.8rem;
  padding: 15px;
  background: #fafafa;
}

/* 丝滑的滑动淡入动画 */
.slide-fade-enter-active {
  transition: all 0.3s ease-out;
}

.slide-fade-leave-active {
  transition: all 0.2s cubic-bezier(1, 0.5, 0.8, 1);
}

.slide-fade-enter-from {
  transform: translateX(20px);
  opacity: 0;
}

.slide-fade-leave-to {
  transform: translateX(-20px);
  opacity: 0;
}

@media (min-width: 768px) {
  .app-header {
    padding: 0 40px;
  }
  .logo-text {
    font-size: 1.3rem;
  }
  .app-main {
    padding: 30px 40px;
  }
}
</style>