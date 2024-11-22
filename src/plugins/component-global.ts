import type { App } from 'vue'

export default {
  install: async (app: App<Element>) => {
    const components = import.meta.glob('@/ui/components/**/*.vue', {
      eager: true,
    })

    if (!components) return

    for (const path in components) {
      const component = components[path] as { default: object }

      const name = path
        .replace(/(\.\/|\.vue)/g, '')
        .split('/')
        .pop()

      if (!name) continue

      app.component(name, component.default)
    }
  },
}
