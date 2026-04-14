<script setup lang="ts">
import { ref, computed } from 'vue'

const questions = [
  {
    id: 1,
    text: '总体国家安全观的核心是什么？',
    options: ['经济安全', '政治安全', '军事安全', '社会安全'],
    answer: 1
  },
  {
    id: 2,
    text: '全民国家安全教育日是哪一天？',
    options: ['3月15日', '4月15日', '10月1日', '12月4日'],
    answer: 1
  },
  {
    id: 3,
    text: '维护国家安全的首要任务是？',
    options: ['保障主权独立', '维护政治安全', '促进经济发展', '加强国防建设'],
    answer: 1
  },
  {
    id: 4,
    text: '国家安全机关受理公民和组织举报电话是？',
    options: ['110', '120', '12339', '12345'],
    answer: 2
  }
]

const currentQuestionIndex = ref(0)
const selectedOption = ref<number | null>(null)
const score = ref(0)
const showResult = ref(false)

const currentQuestion = computed(() => questions[currentQuestionIndex.value])

const selectOption = (index: number) => {
  if (showResult.value) return
  selectedOption.value = index
}

const submitAnswer = () => {
  if (selectedOption.value === currentQuestion.value.answer) {
    score.value++
  }
  
  if (currentQuestionIndex.value < questions.length - 1) {
    currentQuestionIndex.value++
    selectedOption.value = null
  } else {
    showResult.value = true
  }
}

const restart = () => {
  currentQuestionIndex.value = 0
  selectedOption.value = null
  score.value = 0
  showResult.value = false
}
</script>

<template>
  <div class="quiz-container">
    <div class="page-header">
      <h1 class="page-title">国家安全知识测评</h1>
      <p>通过测试检验你的国家安全意识</p>
    </div>
    
    <el-card class="quiz-card" v-if="!showResult">
      <div class="progress-info">
        <span>第 {{ currentQuestionIndex + 1 }} 题 / 共 {{ questions.length }} 题</span>
        <el-progress :percentage="((currentQuestionIndex + 1) / questions.length) * 100" :show-text="false" color="#c00000" />
      </div>
      
      <h2 class="question-text">{{ currentQuestion.text }}</h2>
      
      <div class="options-list">
        <div 
          v-for="(option, index) in currentQuestion.options" 
          :key="index"
          class="option-item"
          :class="{ 'is-selected': selectedOption === index }"
          @click="selectOption(index)"
        >
          <div class="option-indicator">{{ String.fromCharCode(65 + index) }}</div>
          <div class="option-content">{{ option }}</div>
        </div>
      </div>
      
      <div class="card-footer">
        <el-button 
          type="primary" 
          size="large" 
          @click="submitAnswer" 
          :disabled="selectedOption === null"
          round
        >
          {{ currentQuestionIndex < questions.length - 1 ? '下一题' : '查看结果' }}
        </el-button>
      </div>
    </el-card>

    <el-card class="result-card" v-else>
      <div class="result-wrap">
        <el-result
          :icon="score === questions.length ? 'success' : 'info'"
          :title="score === questions.length ? '满分！国家安全意识极强' : '测评结束'"
          :sub-title="`你的最终得分是：${(score / questions.length) * 100} 分 (${score}/${questions.length})`"
        >
          <template #extra>
            <el-button type="primary" @click="restart" round>重新测评</el-button>
          </template>
        </el-result>
      </div>
    </el-card>
  </div>
</template>

<style scoped>
.quiz-container {
  max-width: 800px;
  margin: 0 auto;
}

.page-header {
  text-align: center;
  margin-bottom: 30px;
}

.page-title {
  color: #c00000;
  font-size: 2rem;
  margin-bottom: 5px;
}

.quiz-card {
  border-top: 4px solid #c00000;
}

.progress-info {
  margin-bottom: 30px;
  color: #909399;
}

.question-text {
  font-size: 1.5rem;
  color: #303133;
  margin-bottom: 30px;
}

.options-list {
  display: flex;
  flex-direction: column;
  gap: 15px;
  margin-bottom: 40px;
}

.option-item {
  display: flex;
  align-items: center;
  gap: 15px;
  padding: 20px;
  border: 1px solid #ebeef5;
  border-radius: 10px;
  cursor: pointer;
  transition: all 0.2s;
  background: #fff;
}

.option-item:hover {
  background: #fdfafb;
  border-color: #f5c2c2;
}

.option-item.is-selected {
  background: rgba(192, 0, 0, 0.05);
  border-color: #c00000;
  color: #c00000;
}

.option-indicator {
  width: 32px;
  height: 32px;
  border-radius: 50%;
  background: #f0f2f5;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: bold;
}

.is-selected .option-indicator {
  background: #c00000;
  color: #fff;
}

.card-footer {
  text-align: center;
}

.result-wrap {
  padding: 40px 0;
}
</style>