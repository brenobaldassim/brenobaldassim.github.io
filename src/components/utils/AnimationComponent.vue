<script setup>
import { onMounted, ref } from 'vue'

const props = defineProps({
  animationType: {
    type: String,
    required: true,
    default: 'slide-fade'
  }
})

const target = ref()
const animate = ref(false)

const observer = new IntersectionObserver(
  ([entry]) => {
    animate.value = entry.isIntersecting
  },
  {
    threshold: 0.7
  }
)

onMounted(() => {
  observer.observe(target.value)
})
</script>

<template>
  <div ref="target">
    <transition :name="props.animationType">
      <div v-if="animate" class="animated-component h-full w-full">
        <slot />
      </div>
    </transition>
  </div>
</template>

<style scoped>
.animated-component.slide-fade-enter-from {
  transition: none;
}

/* Fade animation */
.slide-fade-enter-active,
.slide-fade-leave-active {
  transition: all 500ms ease-out;
}

.slide-fade-enter-from,
.slide-fade-leave-to {
  transform: translateX(-50px);
  opacity: 0;
}
</style>
