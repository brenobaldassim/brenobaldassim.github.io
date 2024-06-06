<script setup></script>

<template>
  <p id="blink" class="whitespace-normal w-full">
    <span class="text-app-secondary">></span>
    <slot />
    <span class="cursor">_</span>
  </p>
</template>

<style scoped>
.cursor {
  animation: blink 1s 0s infinite;
}

@keyframes blink {
  0% {
    opacity: 0;
  }

  40% {
    opacity: 0;
  }

  50% {
    opacity: 1;
  }

  90% {
    opacity: 1;
  }

  100% {
    opacity: 0;
  }
}
</style>
