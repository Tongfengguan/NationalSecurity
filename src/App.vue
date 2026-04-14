<script setup lang="ts">
import { onMounted } from 'vue'
import { useRoute } from 'vue-router'

const route = useRoute()

onMounted(() => {
  document.documentElement.classList.add('dark')
})
</script>

<template>
  <el-container class="app-container">
    <el-header class="app-header">
      <div class="logo">
        <el-icon :size="24" color="#10b981"><Shield /></el-icon>
        <span>National Security Center</span>
      </div>
      <el-menu
        :default-active="route.path"
        mode="horizontal"
        router
        class="nav-menu"
        background-color="transparent"
        text-color="#f8fafc"
        active-text-color="#10b981"
        :ellipsis="false"
      >
        <el-menu-item index="/">
          <el-icon><DataLine /></el-icon> Dashboard
        </el-menu-item>
        <el-menu-item index="/knowledge">
          <el-icon><Document /></el-icon> Knowledge Base
        </el-menu-item>
        <el-menu-item index="/quiz">
          <el-icon><CircleCheck /></el-icon> Quiz
        </el-menu-item>
      </el-menu>
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
  border-bottom: 1px solid rgba(255, 255, 255, 0.1);
  background: rgba(15, 23, 42, 0.8);
  backdrop-filter: blur(10px);
  position: sticky;
  top: 0;
  z-index: 100;
}

.logo {
  display: flex;
  align-items: center;
  gap: 10px;
  font-size: 1.2rem;
  font-weight: bold;
  color: #10b981;
}

.nav-menu {
  border-bottom: none;
  background: transparent;
}

.el-menu--horizontal > .el-menu-item {
  border-bottom: none;
}

.el-menu--horizontal > .el-menu-item.is-active {
  border-bottom: 2px solid #10b981 !important;
}

.app-main {
  flex: 1;
  padding: 20px;
  overflow-x: hidden;
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.3s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>