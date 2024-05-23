<script setup>
import { RouterLink, RouterView } from 'vue-router'
import NavBar from '@/components/NavBar.vue'
</script>

<template>
  <header class="font-DM">
    <div class="">
      <NavBar />
    </div>
  </header>

  <RouterView />
</template>

<style scoped></style>
