<template>
  <div>
    <Field :name="name" v-slot="{ errors, field }">
      <div
        :class="`border-b ${!!errors.length ? 'border-red-300' : 'border-gray-500 hover:border-white'}
      px-2 leading-10  flex gap-2 w-full`"
      >
        <input
          v-bind="field"
          v-model="value"
          :autocomplete="autocomplete"
          class="bg-transparent outline-none w-full"
          :name="name"
          :type="type == 'password' && showPassword ? 'text' : type"
          :placeholder="placeholder"
        />
        <button v-if="type == 'password'" @click.prevent="togglePassword">
          <EyeIcon :open="showPassword" />
        </button>
      </div>

      <Transition name="error-animated">
        <div class="px-2 mt-1" v-if="!!errors.length">
          <ErrorMessage class="text-red-400" :name="name" />
        </div>
      </Transition>
    </Field>
  </div>
</template>

<script setup lang="ts">
import { useTextInput } from './composables/text-input'
import EyeIcon from './icons/EyeIcon.vue'
import { Field, ErrorMessage } from 'vee-validate'

defineProps<{
  placeholder: string
  autocomplete: string
  name: string
  type: 'text' | 'password' | 'email'
}>()

const value = defineModel<string>()

const { showPassword, togglePassword } = useTextInput()
</script>

<style scoped>
.error-animated-enter-active {
  animation: error-bounce 0.2s;
}

@keyframes error-bounce {
  0% {
    transform: translateX(-5px);
  }
  50% {
    transform: translateX(0);
  }
  100% {
    transform: translateX(-5px);
  }
}
</style>
