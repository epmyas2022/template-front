import { ref, watch } from 'vue'
import gsap from 'gsap'

import { useDevice } from './device'

export function useAppBar() {
  const isOpenMenu = ref(true)
  const { device } = useDevice()

  const toggleMenu = () => {
    animateMenu()
    isOpenMenu.value = !isOpenMenu.value
  }

  const animateMenu = () => {
    const minValue = device.value.xs ? '0px' : '4rem'

    gsap.to('.menu', {
      width: !isOpenMenu.value ? '20rem' : minValue,
      duration: 0.4,
      ease: 'power2.inOut',
    })
  }

  watch(device, () => toggleMenu())

  return {
    isOpenMenu,
    toggleMenu,
    animateMenu,
    device,
  }
}
