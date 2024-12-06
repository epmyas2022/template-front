import { defineComponent } from 'vue'
import { useDevice } from '../../composables/device'
import { describe, it, expect, vi } from 'vitest'
import { mount } from '@vue/test-utils'

describe('useDevice', () => {
  const mockWindow = (width: number) => {
    vi.spyOn(window, 'innerWidth', 'get').mockReturnValue(width)

    const testComponent = defineComponent({
      setup() {
        const { device, isMobile } = useDevice()
        return { device, isMobile }
      },
      template: `<div></div>`,
    })

    const wrapper = mount(testComponent)

    return wrapper.vm
  }

  it('should return the device object', () => {
    const { device } = mockWindow(300)

    expect(device).toEqual({
      xs: expect.any(Boolean),
      sm: expect.any(Boolean),
      md: expect.any(Boolean),
      lg: expect.any(Boolean),
      xl: expect.any(Boolean),
      xxl: expect.any(Boolean),
    })
  })

  it('should return true if the device is mobile', () => {
    const { isMobile } = mockWindow(300)

    expect(isMobile()).toBe(true)
  })

  it('should return false if the device is not mobile', () => {
    const { isMobile } = mockWindow(1280)

    expect(isMobile()).toBe(false)
  })

  it('should return true if device breakpoint is xs', () => {
    const { device } = mockWindow(300)

    expect(device.xs).toBe(true)
  })

  it('should return true if device breakpoint is sm', () => {
    const { device } = mockWindow(800)

    expect(device.sm).toBe(true)
  })

  it('should return false if device breakpoint is not xs or sm', () => {
    const { device } = mockWindow(1280)

    expect(device.xs).toBe(false)
    expect(device.sm).toBe(false)
  })

  it('should return true if device breakpoint is md', () => {
    const { device } = mockWindow(1000)

    expect(device.md).toBe(true)
  })
})
