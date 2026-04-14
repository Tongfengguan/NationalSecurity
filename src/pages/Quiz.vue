<script setup lang="ts">
import { ref, computed } from 'vue'

const questions = [
  {
    id: 1,
    text: 'What is the core of national security?',
    options: ['Economic Development', 'Political Security', 'Military Strength', 'Cultural Prosperity'],
    answer: 1
  },
  {
    id: 2,
    text: 'Which day is the National Security Education Day?',
    options: ['April 15', 'May 1', 'October 1', 'December 4'],
    answer: 0
  },
  {
    id: 3,
    text: 'Who has the responsibility and obligation to maintain national security?',
    options: ['Only the military', 'Only government officials', 'Every citizen and organization', 'Only the police'],
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
    <h1 class="page-title">Security Awareness Quiz</h1>
    
    <el-card class="quiz-card" shadow="never" v-if="!showResult">
      <div class="progress">
        Question {{ currentQuestionIndex + 1 }} of {{ questions.length }}
        <el-progress :percentage="((currentQuestionIndex + 1) / questions.length) * 100" :show-text="false" color="#10b981" />
      </div>
      
      <h2 class="question-text">{{ currentQuestion.text }}</h2>
      
      <div class="options">
        <div 
          v-for="(option, index) in currentQuestion.options" 
          :key="index"
          class="option-btn"
          :class="{ 'selected': selectedOption === index }"
          @click="selectOption(index)"
        >
          <span class="option-letter">{{ String.fromCharCode(65 + index) }}</span>
          {{ option }}
        </div>
      </div>
      
      <div class="actions">
        <el-button 
          type="primary" 
          size="large" 
          @click="submitAnswer" 
          :disabled="selectedOption === null"
        >
          {{ currentQuestionIndex < questions.length - 1 ? 'Next Question' : 'Finish Quiz' }}
        </el-button>
      </div>
    </el-card>

    <el-card class="result-card" shadow="never" v-else>
      <div class="result-content">
        <el-progress type="dashboard" :percentage="(score / questions.length) * 100" color="#10b981">
          <template #default="{ percentage }">
            <span class="percentage-value">{{ percentage }}%</span>
            <span class="percentage-label">Score</span>
          </template>
        </el-progress>
        
        <h2 class="result-title">Quiz Completed!</h2>
        <p class="result-desc">You answered {{ score }} out of {{ questions.length }} questions correctly.</p>
        
        <el-button type="primary" @click="restart" class="mt-4">Try Again</el-button>
      </div>
    </el-card>
  </div>
</template>

<style scoped>
.quiz-container {
  max-width: 800px;
  margin: 0 auto;
}

.page-title {
  margin-bottom: 24px;
  font-size: 1.8rem;
  color: #f8fafc;
  text-align: center;
}

.quiz-card, .result-card {
  background: rgba(30, 41, 59, 0.7);
  border: 1px solid rgba(255, 255, 255, 0.05);
  border-radius: 12px;
}

.progress {
  color: #94a3b8;
  margin-bottom: 24px;
  font-size: 0.9rem;
}

.question-text {
  font-size: 1.4rem;
  margin-bottom: 30px;
  color: #f8fafc;
}

.options {
  display: flex;
  flex-direction: column;
  gap: 12px;
  margin-bottom: 30px;
}

.option-btn {
  padding: 16px 20px;
  background: rgba(15, 23, 42, 0.6);
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 8px;
  cursor: pointer;
  transition: all 0.2s;
  display: flex;
  align-items: center;
  gap: 16px;
  color: #cbd5e1;
  font-size: 1.1rem;
}

.option-btn:hover {
  background: rgba(255, 255, 255, 0.05);
  border-color: rgba(255, 255, 255, 0.2);
}

.option-btn.selected {
  background: rgba(16, 185, 129, 0.15);
  border-color: #10b981;
  color: #10b981;
}

.option-letter {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 32px;
  height: 32px;
  background: rgba(255, 255, 255, 0.1);
  border-radius: 4px;
  font-weight: bold;
}

.selected .option-letter {
  background: #10b981;
  color: #fff;
}

.actions {
  display: flex;
  justify-content: flex-end;
}

.result-content {
  text-align: center;
  padding: 40px 0;
}

.percentage-value {
  display: block;
  font-size: 28px;
  font-weight: bold;
  color: #f8fafc;
}

.percentage-label {
  display: block;
  font-size: 14px;
  color: #94a3b8;
  margin-top: 4px;
}

.result-title {
  margin-top: 24px;
  font-size: 1.8rem;
  color: #f8fafc;
}

.result-desc {
  color: #94a3b8;
  font-size: 1.1rem;
  margin-top: 8px;
}

.mt-4 {
  margin-top: 24px;
}
</style>