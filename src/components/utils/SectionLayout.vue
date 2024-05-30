<script setup>
import Animation from '../utils/AnimationComponent.vue'
import Terminal from '../utils/TerminalComponent.vue'

const props = defineProps({
  title: {
    type: String,
    required: true
  }
})
</script>

<template>
  <div class="h-full w-full min-w-72 min-h-[540px] flex flex-col items-center justify-center">
    <Animation class="md:min-h-[40%] w-full max-md:h-full">
      <Terminal :title="props.title">
        <slot />
      </Terminal>
    </Animation>
  </div>
</template>

<style scoped>
#terminal:hover {
  transform: scale(1.01);
  transition: 300ms ease;
}
</style>
