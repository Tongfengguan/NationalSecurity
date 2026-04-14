import { defineStore } from 'pinia'
import { ref } from 'vue'

export const useAppStore = defineStore('app', () => {
  const isDark = ref(true)
  const quizScore = ref(0)

  function toggleDark() {
    isDark.value = !isDark.value
  }

  return { isDark, quizScore, toggleDark }
})