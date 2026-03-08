import { ref, watch } from 'vue'

const isDarkMode = ref(false)

export const useThemeMode = () => {
  const initializeTheme = () => {
    if (process.client) {
      const savedTheme = localStorage.getItem('theme')
      isDarkMode.value = savedTheme === 'dark'
    }
  }

  const toggleTheme = () => {
    isDarkMode.value = !isDarkMode.value
    if (process.client) {
      localStorage.setItem('theme', isDarkMode.value ? 'dark' : 'light')
    }
  }

  return {
    isDarkMode,
    initializeTheme,
    toggleTheme
  }
}
