import { ref } from 'vue'
import gsap from 'gsap'

export function useAppBar() {
  const isOpenMenu = ref(true)

  const toggleMenu = () => {
    animateMenu()
    isOpenMenu.value = !isOpenMenu.value
  }

  const animateMenu = () => {
    gsap.to('.menu', {
      width: !isOpenMenu.value ? '20rem' : '4rem',
      duration: 0.4,
      ease: 'power2.inOut',
    })
  }

  return {
    isOpenMenu,
    toggleMenu,
    animateMenu,
  }
}
