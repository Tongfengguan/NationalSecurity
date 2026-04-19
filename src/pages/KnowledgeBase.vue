<script setup lang="ts">
import { onMounted } from 'vue'

onMounted(() => {
  window.scrollTo(0, 0)
})
</script>

<template>
  <div class="terminal-container">
    <div class="terminal-window">
      <header class="terminal-header">
        <div class="window-controls">
          <span class="ctrl close"></span>
          <span class="ctrl mini"></span>
          <span class="ctrl full"></span>
        </div>
        <div class="window-title mono">SECURITY_LOG_VIEWER v1.0.4</div>
      </header>

      <main class="terminal-body mono">
        <div class="log-entry reveal-snappy">
          <span class="prompt">root@national_security:~$</span> cat ./definitions/basic.txt
          <div class="log-content">
            <span class="label">[ SYSTEM_DATA ]</span> 根据《中华人民共和国国家安全法》，国家安全是指国家政权、主权、统一和领土完整、人民福祉、经济社会可持续发展和国家其他重大利益相对处于没有危险和不受内外威胁的状态，以及保障持续安全状态的能力。
          </div>
        </div>

        <div class="log-entry reveal-snappy" style="transition-delay: 0.2s">
          <span class="prompt">root@national_security:~$</span> cat ./doctrine/core_concept.txt
          <div class="log-content">
            <span class="label">[ DOCTRINE ]</span> 2014年4月15日提出。强调以人民安全为宗旨，以政治安全为根本，以经济安全为基础，以军事、文化、社会安全为保障。
          </div>
        </div>

        <div class="log-entry reveal-snappy" style="transition-delay: 0.4s">
          <span class="prompt">root@national_security:~$</span> ls /legal/专项法律/
          <div class="log-content">
            <div class="grid-list">
              <span>> 反间谍法.sh</span>
              <span>> 网络安全法.sh</span>
              <span>> 生物安全法.sh</span>
              <span>> 数据安全法.sh</span>
              <span>> 反外国制裁法.sh</span>
            </div>
          </div>
        </div>

        <div class="log-entry reveal-snappy" style="transition-delay: 0.6s">
          <span class="prompt">root@national_security:~$</span> cat ./obligations/citizen.log
          <div class="log-content">
            <ul class="terminal-list">
              <li>- 遵守宪法法律关于国家安全的规定</li>
              <li>- 及时报告危害国家安全活动的线索</li>
              <li>- 如实提供涉及危害国家安全活动的证据</li>
              <li>- 保持所知悉的国家秘密</li>
            </ul>
          </div>
        </div>

        <div class="alert-section reveal-snappy" style="transition-delay: 0.8s">
          <div class="alert-header">!! EMERGENCY_REPORTING_CHANNEL !!</div>
          <div class="alert-body">
            <span class="blink">></span> HOTLINE: <span class="highlight">12339</span>
          </div>
          <div class="alert-footer">STATUS: ACTIVE_LISTENING</div>
        </div>
        
        <div class="cursor-line">
          <span class="prompt">root@national_security:~$</span> <span class="blink">_</span>
        </div>
      </main>
    </div>
  </div>
</template>

<style scoped>
.terminal-container {
  min-height: 100vh;
  background-color: #000;
  padding: 100px 20px;
}

.terminal-window {
  max-width: 900px;
  margin: 0 auto;
  border: 1px solid #333;
  box-shadow: 0 50px 100px rgba(0,0,0,0.5);
  background: #050505;
}

.terminal-header {
  background: #1a1a1a;
  padding: 10px 20px;
  display: flex;
  align-items: center;
  gap: 20px;
  border-bottom: 1px solid #333;
}

.window-controls { display: flex; gap: 8px; }
.ctrl { width: 10px; height: 10px; border-radius: 50%; }
.close { background: #ff5f56; }
.mini { background: #ffbd2e; }
.full { background: #27c93f; }

.window-title { font-size: 0.7rem; color: #666; letter-spacing: 1px; }

.terminal-body {
  padding: 40px;
  color: #ccc;
  font-size: 0.95rem;
  line-height: 1.6;
}

.log-entry { margin-bottom: 40px; }
.prompt { color: #0f0; margin-right: 15px; }
.log-content { margin-top: 15px; padding-left: 20px; border-left: 2px solid #111; }
.label { color: var(--alert-red); font-weight: bold; margin-right: 10px; }

.grid-list { display: grid; grid-template-columns: repeat(auto-fill, minmax(200px, 1fr)); gap: 10px; color: #0f0; }
.terminal-list { list-style: none; padding: 0; }
.terminal-list li { color: #888; margin-bottom: 8px; }

.alert-section {
  margin-top: 60px;
  border: 2px solid var(--alert-red);
  padding: 30px;
  text-align: center;
  position: relative;
}

.alert-header { background: var(--alert-red); color: #fff; font-weight: 900; position: absolute; top: -12px; left: 50%; transform: translateX(-50%); padding: 2px 15px; font-size: 0.7rem; }
.alert-body { font-size: 2.5rem; font-weight: 900; color: var(--alert-red); }
.highlight { color: #fff; text-shadow: 0 0 20px var(--alert-red); }
.alert-footer { font-size: 0.7rem; color: #444; margin-top: 15px; letter-spacing: 2px; }

.blink { animation: blink 1s infinite; }
@keyframes blink { 0%, 100% { opacity: 1; } 50% { opacity: 0; } }

@media (max-width: 768px) {
  .terminal-body { padding: 20px; font-size: 0.85rem; }
  .alert-body { font-size: 1.8rem; }
}
</style>