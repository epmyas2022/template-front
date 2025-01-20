import { onMounted, onUnmounted, ref } from 'vue'

export function useDevice() {
  const devices = () => {
    const screenWidth = window.innerWidth

    return {
      xs: screenWidth < 600,
      sm: screenWidth >= 600 && screenWidth <= 960,
      md: screenWidth > 960 && screenWidth <= 1280,
      lg: screenWidth > 1280 && screenWidth <= 1920,
      xl: screenWidth > 1920 && screenWidth <= 2560,
      xxl: screenWidth > 2560,
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
