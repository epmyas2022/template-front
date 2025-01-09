<template>
  <ul :class="`flex flex-col  ${!isChild ? 'gap-5 overflow-hidden ' : 'gap-4 mt-4'}`">
    <li
      v-for="(item, index) in items"
      :key="index"
      :class="`${index == selectedItem ? 'text-white' : 'text-gray-200'}
      hover:text-white cursor-pointer relative px-4`"
    >
      <TransitionExpand>
        <div
          v-if="index == selectedItem && !isChild"
          class="absolute left-0 bg-white h-7 w-1.5 rounded-r-lg"
        ></div>
      </TransitionExpand>
      <button class="text-md w-full" @click="actionLink(item.link, index)">
        <div class="flex gap-4">
          <span>
            <component :is="item.icon" />
          </span>

          <Transition name="fade">
            <span v-show="isOpenMenu" class="text-sm text-nowrap">{{ item.title }}</span>
          </Transition>

          <div v-if="item.children && isOpenMenu" class="ml-auto">
            <IconChevronDown v-if="!expandMenu" />
            <IconChevronUp v-else />
          </div>
        </div>
      </button>

      <TransitionExpand>
        <MenuItemComponent
          :items="item.children"
          :is-open-menu="isOpenMenu"
          :is-child="true"
          v-if="item.children && isOpenMenu && expandMenu"
        />
      </TransitionExpand>
    </li>
  </ul>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import type { MenuItem } from './types'
import { IconChevronDown, IconChevronUp } from '@tabler/icons-vue'
import { TransitionExpand } from '@limonische/vue3-transition-expand'
import { useRouter } from 'vue-router'

const router = useRouter()
defineProps<{
  isOpenMenu: boolean
  isChild?: boolean
  items: MenuItem[]
}>()

const expandMenu = ref(false)
const selectedItem = ref<number | null>(0)

const actionLink = (link?: string, index?: number) => {
  selectedItem.value = index || 0

  if (link && link != '#') return router.push({ path: link })

  expandMenu.value = !expandMenu.value
}
</script>
