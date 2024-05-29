<script setup>
const props = defineProps({
  name: {
    type: String,
    required: true,
    default: 'Card'
  }
})
</script>

<template>
  <div
    class="card-item text-4xl md:text-8xl bg-app-base p-2 rounded-md border border-app-secondary text-center"
  >
    <h1 class="text-base">{{ props.name }}</h1>
    <slot />
  </div>
</template>

<style scoped>
.card-item:hover {
  transform: scale(1.1);
  transition: 500ms ease-out;
  color: var(--app-color-white);
  border-color: var(--app-color-white);
}
</style>
