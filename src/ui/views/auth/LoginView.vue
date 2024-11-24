<script setup lang="ts">
import TextInputComponent from '@/ui/components/TextInputComponent.vue'
import { Form } from 'vee-validate'
import { useLogin } from './composables/login'

const { login, credentials, loginSchema } = useLogin()
</script>

<template>
  <div class="h-dvh flex md:flex-row flex-col">
    <div
      class="bg-custom-background w-full h-full text-white flex flex-col justify-evenly sm:items-center p-6"
    >
      <Form class="flex flex-col gap-10  md:w-96" @submit="login" :validation-schema="loginSchema">
        <div>
          <h1 class="text-4xl font-bold">Login</h1>
          <p class="mt-2 text-gray-400">Enter your account details</p>
        </div>

        <div class="flex flex-col gap-6">
          <TextInputComponent
            name="username"
            v-model="credentials.username"
            autocomplete="on"
            type="text"
            placeholder="Username"
          />

          <TextInputComponent
            name="password"
            autocomplete="current-password"
            type="password"
            placeholder="Password"
            v-model="credentials.password"
          ></TextInputComponent>

          <a href="#" class="text-gray-400 mt-2 text-sm">Forgot password?</a>
          <button class="bg-custom-primary text-white p-2 rounded-md mt-5" type="submit">
            Login
          </button>
        </div>
      </Form>

      <div class="flex flex-wrap sm:gap-12 gap-4 items-center justify-center sm:justify-start">
        <a class="text-gray-400">Don't have an account?</a>
        <a href="#" class="bg-custom-tertiary text-white rounded-md px-4 py-2">Sign up</a>
      </div>
    </div>

    <div
      class="bg-custom-primary h-full w-full lg:flex flex-col justify-center items-center relative hidden"
    >
      <div class="absolute left-0 right-0 bottom-0 z-10">
        <img class="w-full" src="../../assets/background.svg" alt="logo" />
      </div>

      <div class="text-white z-20">
        <h1 class="text-6xl font-bold">
          Welcome to <br />
          <span class="font-normal">student portal</span>
        </h1>
        <p class="mt-2">Login to access your account</p>
      </div>
      <img class="z-20 w-3/4"  src="../../assets/ilustration.svg" alt="logo" />
    </div>
  </div>
</template>
