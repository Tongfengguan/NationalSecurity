<script setup lang="ts">
import { useRoute } from 'vue-router'

const route = useRoute()
</script>

<template>
  <el-container class="app-container">
    <el-header class="app-header">
      <div class="logo">
        <el-icon :size="28" color="#c00000"><StarFilled /></el-icon>
        <span class="logo-text">国家安全教育平台</span>
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
        <el-menu-item index="/">
          <el-icon><HomeFilled /></el-icon> 首页大盘
        </el-menu-item>
        <el-menu-item index="/knowledge">
          <el-icon><Reading /></el-icon> 知识库
        </el-menu-item>
        <el-menu-item index="/quiz">
          <el-icon><Checked /></el-icon> 知识测评
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
    <el-footer class="app-footer">
      <p>© 2026 国家安全教育专题平台 · 统筹发展与安全</p>
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
  border-bottom: 2px solid #c00000;
  background: #ffffff;
  padding: 0 40px;
  box-shadow: 0 2px 10px rgba(0,0,0,0.05);
  position: sticky;
  top: 0;
  z-index: 100;
}

.logo {
  display: flex;
  align-items: center;
  gap: 12px;
}

.logo-text {
  font-size: 1.4rem;
  font-weight: 800;
  color: #c00000;
  letter-spacing: 1px;
}

.nav-menu {
  border-bottom: none;
  height: 100%;
}

.app-main {
  flex: 1;
  padding: 30px;
  background: #fcfcfc;
}

.app-footer {
  text-align: center;
  color: #909399;
  border-top: 1px solid #ebeef5;
  height: auto;
  padding: 20px;
  background: #fff;
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.2s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>