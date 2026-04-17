<script setup lang="ts">
import { ref, onMounted } from 'vue'
import { useRoute } from 'vue-router'

const route = useRoute()
const isLoading = ref(true)
const scrollProgress = ref(0)

onMounted(() => {
  // 模拟资源加载，确保开场动画有足够时间展示
  setTimeout(() => {
    isLoading.value = false
  }, 1500)

  // 监听滚动进度
  window.addEventListener('scroll', () => {
    const winScroll = document.documentElement.scrollTop || document.body.scrollTop
    const height = document.documentElement.scrollHeight - document.documentElement.clientHeight
    scrollProgress.value = (winScroll / height) * 100
  }, { passive: true })
})
</script>

<template>
  <el-container class="app-container">
    <!-- 全屏加载动画 - 炫技点：仪式感开场 -->
    <transition name="loader-fade">
      <div v-if="isLoading" class="premium-loader">
        <div class="loader-content">
          <el-icon class="loader-icon" :size="60"><StarFilled /></el-icon>
          <div class="loader-line"></div>
          <p class="loader-text serif">NATIONAL SECURITY</p>
        </div>
      </div>
    </transition>

    <!-- 顶部全局进度条 -->
    <div class="global-progress" :style="{ width: scrollProgress + '%' }"></div>

    <el-header class="app-header">
      <div class="logo" @click="$router.push('/')">
        <el-icon :size="20" color="#fff"><StarFilled /></el-icon>
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
  background: #000;
}

/* 全球进度条 */
.global-progress {
  position: fixed;
  top: 0; left: 0;
  height: 2px;
  background: linear-gradient(90deg, var(--cinnabar-red), var(--gold-dust));
  z-index: 2000;
  transition: width 0.2s ease;
}

/* 顶奢加载页 */
.premium-loader {
  position: fixed;
  inset: 0;
  background: #050505;
  z-index: 3000;
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
}

.loader-content {
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;
}

.loader-icon {
  color: var(--cinnabar-red);
  animation: pulse 2s infinite ease-in-out;
}

.loader-line {
  width: 40px; height: 1px;
  background: var(--gold-dust);
  animation: grow 2s infinite ease-in-out;
}

.loader-text {
  font-size: 0.8rem;
  letter-spacing: 6px;
  opacity: 0.6;
}

@keyframes pulse {
  0%, 100% { transform: scale(1); opacity: 0.5; }
  50% { transform: scale(1.1); opacity: 1; }
}

@keyframes grow {
  0%, 100% { width: 0; }
  50% { width: 100px; }
}

.loader-fade-leave-active {
  transition: all 0.8s cubic-bezier(0.16, 1, 0.3, 1);
}
.loader-fade-leave-to {
  opacity: 0;
  transform: scale(1.1);
}

/* 导航头 */
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
  mix-blend-mode: difference;
}

.logo { display: flex; align-items: center; gap: 10px; cursor: pointer; }
.logo-text { font-size: 1.1rem; font-weight: 800; color: #fff; letter-spacing: 2px; }
.nav-links { display: flex; gap: 30px; }
.nav-link { text-decoration: none; color: #fff; font-size: 0.9rem; opacity: 0.6; transition: all 0.3s; }
.nav-link:hover, .nav-link.active { opacity: 1; }

.app-main { flex: 1; padding: 0; }

/* 页面切换：PPT 翻页感 */
.page-zoom-enter-active, .page-zoom-leave-active {
  transition: all 0.6s cubic-bezier(0.4, 0, 0.2, 1);
}
.page-zoom-enter-from { opacity: 0; transform: scale(0.95) translateY(10px); }
.page-zoom-leave-to { opacity: 0; transform: scale(1.05) translateY(-10px); }

@media (max-width: 768px) {
  .app-header { padding: 0 20px; height: 60px; }
  .logo-text { font-size: 0.9rem; }
  .nav-links { gap: 15px; }
}
</style>