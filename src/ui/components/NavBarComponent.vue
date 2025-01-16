<template>
  <nav class="bg-appbar-background text-white p-2 h-16 flex justify-between sm:block">
    <button @click="$emit('openMenu')" :class="{ 'sm:hidden': true }">
      <IconMenu2 />
    </button>

    <ModalComponent ref="profileModal" width="23rem">
      <div class="mb-4 grid place-items-center">
        <AvatarComponent :size="4" :url="authStore.auth.user?.avatar"></AvatarComponent>

        <h1 class="text-white text-lg font-bold my-1">
          {{ `${authStore.auth.user?.name} ${authStore.auth.user?.lastname}` }}
        </h1>
        <p class="text-gray-300">@{{ authStore.auth.user?.username }}</p>
      </div>
      <div class="flex flex-col gap-3">
        <div class="flex gap-3 sm:items-center flex-col sm:flex-row">
          <TextInputComponent
            type="text"
            name="name"
            autocomplete="off"
            placeholder="Name"
            v-model="user.name"
            class="text-white"
          >
          </TextInputComponent>

          <TextInputComponent
            type="text"
            v-model="user.lastname"
            name="lastname"
            autocomplete="off"
            placeholder="Lastname"
            class="text-white"
          >
          </TextInputComponent>
        </div>

        <div class="flex gap-3 sm:items-center flex-col sm:flex-row">
          <TextInputComponent
            type="text"
            name="username"
            autocomplete="off"
            v-model="user.username"
            placeholder="Username"
            class="text-white"
          >
          </TextInputComponent>

          <TextInputComponent
            type="text"
            name="phone"
            autocomplete="off"
            v-model="user.phone"
            placeholder="Phone"
            class="text-white"
          >
          </TextInputComponent>
        </div>

        <TextInputComponent
          type="email"
          v-model="user.email"
          name="email"
          autocomplete="off"
          placeholder="Email"
          class="text-white"
        >
        </TextInputComponent>

        <div class="mt-4">
          <button class="bg-custom-primary text-white w-full py-2 rounded-md">Save</button>
        </div>
      </div>
    </ModalComponent>
    <div class="flex justify-end px-4">
      <div class="flex gap-10 items-center">
        <div class="flex gap-4">
          <button
            class="bg-slate-400/30 text-sm w-10 h-10 flex justify-center items-center rounded-full hover:bg-custom-secondary"
          >
            <IconBell size="20" />
          </button>

          <button
            class="bg-slate-400/30 text-sm w-10 h-10 flex justify-center items-center rounded-full hover:bg-custom-secondary"
          >
            <IconCategory2 />
          </button>

          <button
            class="bg-slate-400/30 text-sm w-10 h-10 flex justify-center items-center rounded-full hover:bg-custom-secondary"
          >
            <IconAdjustments />
          </button>
        </div>
        <AvatarComponent :url="authStore.auth.user?.avatar">
          <div class="absolute h-auto hidden group-hover:block right-0">
            <div class="bg-appbar-background rounded-md mt-2 px-10 py-4">
              <button
                class="text-white text-sm w-full py-1 flex gap-2 items-center"
                @click="
                  () => {
                    profileModal?.open()
                    user = { ...authStore.auth.user }
                  }
                "
              >
                <IconUser />
                Profile
              </button>

              <button class="text-white text-sm w-full py-1 flex gap-2 items-center mt-2">
                <IconLogout2 />
                Logout
              </button>
            </div>
          </div>
        </AvatarComponent>
      </div>
    </div>
  </nav>
</template>

<script setup lang="ts">
import {
  IconBell,
  IconCategory2,
  IconAdjustments,
  IconMenu2,
  IconUser,
  IconLogout2,
} from '@tabler/icons-vue'
import { reactive, useTemplateRef } from 'vue'
import { type ComponentExposed } from 'vue-component-type-helpers'
import type ModalComponent from './ModalComponent.vue'
import TextInputComponent from './TextInputComponent.vue'
import AvatarComponent from './AvatarComponent.vue'
import { useAuthStore } from '@/stores/auth/auth'
import type { PrimitiveUser } from '@/domain/user/entities/user.entity'

const profileModal = useTemplateRef<ComponentExposed<typeof ModalComponent>>('profileModal')

const authStore = useAuthStore()

const user = reactive({} as Partial<PrimitiveUser>)
</script>
