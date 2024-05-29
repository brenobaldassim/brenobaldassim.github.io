<script setup>
import { onMounted, ref } from 'vue'

const props = defineProps({
  animationType: {
    type: String,
    required: true,
    default: 'slide-fade-right'
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
.animated-component.slide-fade-left-enter-from
.animated-component.slide-fade-right-enter-from {
  transition: none;
}

/* Fade animation */
.slide-fade-left-enter-active,
.slide-fade-left-leave-active,
.slide-fade-right-enter-active,
.slide-fade-right-leave-active {
  transition: all 600ms ease-out;
}

.slide-fade-right-enter-from,
.slide-fade-right-leave-to {
  transform: translateX(-50px);
  opacity: 0;
}

.slide-fade-left-enter-from,
.slide-fade-left-leave-to {
  transform: translateX(50px);
  opacity: 0;
}
</style>
