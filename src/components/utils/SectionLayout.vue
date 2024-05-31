<script setup>
import { getCurrentInstance, onMounted, ref } from 'vue'
import Animation from '../utils/AnimationComponent.vue'
import Terminal from '../utils/TerminalComponent.vue'
import { sectionOptions } from '@/utils-js/constants'

const title = ref('section')

onMounted(() => {
  const sectionParent = getCurrentInstance().parent.parent.ctx
  if (sectionParent.id.length > 0)
    title.value = sectionOptions.find((opt) => opt.id === sectionParent.id).title.toUpperCase()
})
</script>

<template>
  <div class="h-full w-full min-w-72 min-h-[540px] flex flex-col items-center justify-center">
    <Animation class="md:min-h-[40%] w-full max-md:h-full">
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
