<script setup lang="ts">
import { ref, watch } from 'vue'
import { useRoute } from 'vue-router'

const route = useRoute()
const transitionName = ref('cut')

watch(() => route.path, () => {
  transitionName.value = 'cut'
})
</script>

<template>
  <el-container class="app-container">
    <el-header class="app-header">
      <div class="logo" @click="$router.push('/')">
        <div class="logo-symbol"></div>
        <span class="logo-text mono">SYSTEM.SEC_CORE</span>
      </div>
      <div class="nav-links">
        <router-link to="/" class="nav-link mono" :class="{ active: route.path === '/' }">
          <span class="bracket">[</span> HOME <span class="bracket">]</span>
        </router-link>
        <router-link to="/knowledge" class="nav-link mono" :class="{ active: route.path === '/knowledge' }">
          <span class="bracket">[</span> LOGS <span class="bracket">]</span>
        </router-link>
      </div>
      <div class="system-status mono">
        <span class="status-dot"></span> ENCRYPTED_LINK
      </div>
    </el-header>

    <el-main class="app-main">
      <router-view v-slot="{ Component }">
        <transition name="cut" mode="out-in">
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
  background: var(--bg-base);
  position: relative;
}

.app-header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  background: #000;
  padding: 0 30px;
  height: 60px;
  position: fixed;
  top: 0; left: 0; right: 0;
  z-index: 1000;
  border-bottom: 2px solid var(--alert-red);
}

.logo { display: flex; align-items: center; gap: 15px; cursor: pointer; }
.logo-symbol { width: 12px; height: 12px; background: var(--alert-red); }
.logo-text { font-size: 1rem; font-weight: 800; color: #fff; letter-spacing: 1px; }

.nav-links { display: flex; gap: 20px; }
.nav-link { 
  text-decoration: none; 
  color: var(--text-muted); 
  font-size: 0.8rem; 
  transition: color 0.2s;
}
.nav-link.active { color: var(--alert-red); }
.nav-link .bracket { opacity: 0; transition: opacity 0.2s; }
.nav-link.active .bracket { opacity: 1; }

.system-status { font-size: 0.7rem; color: var(--text-muted); display: flex; align-items: center; gap: 8px; }
.status-dot { width: 6px; height: 6px; background: #0f0; border-radius: 50%; box-shadow: 0 0 10px #0f0; }

.app-main { flex: 1; padding: 0; margin-top: 60px; }

/* 🚀 机械切入转场 (Instant Cut) */
.cut-enter-active, .cut-leave-active {
  transition: opacity 0.2s steps(2);
}
.cut-enter-from, .cut-leave-to {
  opacity: 0;
}

@media (max-width: 768px) {
  .app-header { padding: 0 15px; }
  .system-status { display: none; }
  .logo-text { font-size: 0.8rem; }
}
</style>