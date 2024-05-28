<script setup>
import { computed } from 'vue'

const props = defineProps({
  id: {
    type: String,
    required: true,
    default: 'placeholder'
  },
  component: {
    type: Object,
    required: true
  },
  bgColorBase: {
    type: String,
    required: true,
    default: 'base'
  }
})

const bg = computed(() => {
  return props.bgColorBase ? 'bg-app-base' : 'bg-app-base'
})
</script>

<template>
  <section :id="props.id">
    <div class="container p-4" :class="bg">
      <component :is="props.component" />
    </div>
  </section>
</template>

<style scoped>
.container {
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-right: auto;
  margin-left: auto;
}

section {
  scroll-snap-align: center;
  scroll-snap-stop: always;
}
</style>
