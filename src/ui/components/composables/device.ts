import { onMounted, onUnmounted, ref } from 'vue'

export function useDevice() {
  const devices = () => {
    const x = window.innerWidth

    return {
      xs: x < 600,
      sm: x >= 600 && x <= 960,
      md: x > 960 && x <= 1280,
      lg: x > 1280 && x <= 1920,
      xl: x > 1920 && x <= 2560,
      xxl: x > 2560,
    }
  }

  const device = ref(devices())

  const updateDevice = () => {
    device.value = devices()
  }

  onMounted(() => {
    window.addEventListener('resize', updateDevice)
  })
  onUnmounted(() => {
    window.removeEventListener('resize', updateDevice)
  })

  const isMobile = () => {
    return device.value.xs || device.value.sm
  }

  return { device, isMobile }
}
