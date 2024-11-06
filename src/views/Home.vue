<template>
  <div class="bg-slate-400 h-screen w-screen flex flex-col items-center justify-center">
    <h1 class="text-3xl">Home</h1>
    <h2 class="text-lg mb-10">Bem-vindo, {{ user?.name }}!</h2>
    <Button @click="handleLogout">Sair</Button>
  </div>
</template>

<script setup lang="ts">
import Button from '@/components/ui/button/Button.vue';
import { useAuthStore } from '@/stores/auth';
import { useRouter } from 'vue-router';

const { user, logout } = useAuthStore()

const router = useRouter()

const handleLogout = () => {
  logout()
  router.push('/login')
}
</script>
