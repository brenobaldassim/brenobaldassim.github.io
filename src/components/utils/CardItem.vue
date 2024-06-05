<script setup></script>

<template>
  <div
    id="card-item"
    class="bg-app-base p-2 rounded-md border border-app-secondary font-bold text-base text-center"
  >
    <slot />
  </div>
</template>

<style scoped>
#card-item:hover {
  transform: scale(1.1);
  transition: 500ms ease-out;
  color: var(--app-color-white);
  border-color: var(--app-color-white);
}
</style>
