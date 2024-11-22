import { ref } from 'vue'

export function useTextInput() {
  const showPassword = ref(false)

  const togglePassword = () => {
    showPassword.value = !showPassword.value
  }
  return {
    showPassword,
    togglePassword,
  }
}
