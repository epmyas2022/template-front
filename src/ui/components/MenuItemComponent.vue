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
      <button class="text-md w-full" @click="actionLink(item, index)">
        <div class="flex gap-4 items-center">
          <span class="text-2xl">
            <i :class="item.icon" v-if="typeof item.icon === 'string'"></i>
            <component v-else :is="item.icon" />
          </span>

          <Transition name="fade">
            <span v-show="isOpenMenu" class="text-md sm:text-sm text-nowrap">{{ item.title }}</span>
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
import { IconChevronDown, IconChevronUp } from '@tabler/icons-vue'
import { TransitionExpand } from '@limonische/vue3-transition-expand'
import { useRouter } from 'vue-router'
import type { PrimitivePath } from '@/domain/user/entities/path.entity'

const router = useRouter()
defineProps<{
  isOpenMenu: boolean
  isChild?: boolean
  items: PrimitivePath[]
}>()

const expandMenu = ref(false)
const selectedItem = ref<number | null>(0)

const actionLink = (item: PrimitivePath, index?: number) => {
  selectedItem.value = index || 0

  const { path: link, children } = item

  if (link && !children) return router.push({ path: link })

  expandMenu.value = !expandMenu.value
}
</script>
