<template>
  <div class="h-screen w-screen bg-slate-400 flex justify-center items-center px-4">
    <div class="w-full md:max-w-96 flex flex-col gap-4 border bg-slate-200 rounded p-4"> 
      <Input type="email" placeholder="E-mail" v-model="email" @input="validateEmail"/>
      <p v-if="errors.email" class="text-red-500">{{ errors.email }}</p>
      <Input type="password" placeholder="Senha" v-model="password" @input="validatePassword"/>
      <p v-if="errors.password" class="text-red-500">{{ errors.password }}</p>
      <Button @click="login">Login</Button>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import Button from '@/components/ui/button/Button.vue';
import Input from '@/components/ui/input/Input.vue';

import { useAuthStore } from '../stores/auth'
import { useRouter } from 'vue-router';

interface ErrosProps {
  email?: string,
  password?: string
}

const authStore = useAuthStore()

const router = useRouter()

const email = ref('')
const password = ref('')
const errors = ref<ErrosProps>({})

const login = () => {
  if(!email.value || !password.value) {
    alert('Preencha todos os campos')
    return
  }
  authStore.login({name: 'Sousa', email: email.value})
  router.push('/')
}

const validateEmail = () => {
  errors.value.email = ''
  if (!email.value) {
    errors.value.email = 'O email é obrigatório.'
  } else if (!/\S+@\S+\.\S+/.test(email.value)) {
    errors.value.email = 'Por favor, insira um e-mail válido.'
  }
}

const validatePassword = () => {
  errors.value.password = ''
  if (!password.value) {
    errors.value.password = 'A senha é obrigatória.'
  } else if (password.value.length < 6) {
    errors.value.password = 'A senha deve ter no mínimo 6 caracteres.'
  }
}
</script>
