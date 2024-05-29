<script setup>
import Animation from '../utils/AnimationComponent.vue'
import Terminal from '../utils/TerminalComponent.vue'
</script>

<template>
  <div class="h-full w-full flex flex-col items-center justify-center">
    <Animation class="min-h-[40%]">
      <Terminal class="" :title="'PROJECTS'">
        <div class="text-xl md:text-2xl text-left text-app-white w-full mt-4 md:mt-20">
          
        </div>
      </Terminal>
    </Animation>
  </div>
</template>

<style scoped></style>
