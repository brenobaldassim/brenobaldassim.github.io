<script setup>
import Terminal from './Terminal.vue'
const props = defineProps({
  id: {
    type: String,
    required: true,
    default: 'test'
  }
})
</script>

<template>
  <div :id="props.id" class="text-app-secondary">
    <div class="container mr-auto ml-auto w-90%">
      <div class="banner flex flex-row items-center justify-center px-10">
        <div class="presentation w-full flex flex-col gap-0.5">
          <div class="greetings font-bold flex w-full flex-col gap-2">
            <Terminal />
          </div>
          <div class="greetings-btns text-app-base flex flex-row justify-end w-full p-4">
            <a
              class="btn download-btn text-app-white rounded-full bg-app-principal p-4"
              href="/src/assets/resume/RESUME_BRENO_2024.pdf"
              >Download CV</a
            >
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.banner{
  height: 1080px;
}

.btn:hover {
  transform: scale(1.1);
  transition: 0.5s;
}
.download-btn:hover {
  color: var(--app-color-base);
  background-color: var(--app-color-white);
}

.greetings-btns {
  animation: fadeIn 3.5s;
}

@keyframes fadeIn {
  0% {
    opacity: 0;
  }
  50% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
}
</style>
