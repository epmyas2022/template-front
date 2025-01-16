import { ref, watch } from 'vue'
import gsap from 'gsap'

import { useDevice } from './device'

export function useAppBar() {
  const isOpenMenu = ref(true)
  const { device, isMobile } = useDevice()

  const toggleMenu = () => {
    animateMenu()
    isOpenMenu.value = !isOpenMenu.value
  }

  const animateMenu = () => {
    const minValue = device.value.xs ? '0px' : '4rem'

    const value = isMobile() ? '80%' : '16rem'

    gsap.to('.menu', {
      width: !isOpenMenu.value ? value : minValue,
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
