<script setup>
const props = defineProps({
  id: {
    type: String,
    required: true,
    default: 'placeholder'
  },
  component: {
    type: Object,
    required: true
  }
})
</script>

<template>
  <section :id="props.id">
    <div class="container p-11 md:p-4">
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
  scroll-snap-align: start;
  scroll-snap-stop: always;
}
</style>
