<script setup>
import { inject, onMounted, ref } from 'vue'
import Animation from '../utils/AnimationComponent.vue'
import Terminal from '../utils/TerminalComponent.vue'
import { sectionOptions } from '@/utils-js/constants'

const props = defineProps({
  animationType: {
    type: String,
    required: false,
    default: 'slide-fade-right'
  }
})
const title = ref('section')
const id = inject('id')

onMounted(() => {
  if (id) title.value = sectionOptions.find((opt) => opt.id === id).title.toUpperCase()
})
</script>

<template>
  <div class="h-full w-full min-w-72 min-h-[540px] flex flex-col items-center justify-center">
    <Animation class="md:min-h-[40%] w-full" :animation-type="animationType">
      <Terminal :title="title">
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
