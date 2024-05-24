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
      <div class="banner px-10">
        <div class="presentation md:w-[769px]">
          <div class="greetings font-bold flex flex-col gap-2">
            <Terminal />
          </div>
          <div class="greetings-btns text-app-base flex flex-row justify-start w-full mt-8">
            <a
              class="btn download-btn rounded-full p-4"
              target="_blank"
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
@media (min-width:768px) {

}

.container{
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
}

.btn {
  width: 100%;
  background-color: transparent;
  border: 3px solid var(--app-color-base-light);
  text-align: center;
  color: var(--app-color-white);
  box-shadow: -3px 0 5px 0 rgb(0,0,0,0.5);
}

.btn:hover {
  transform: scale(1.1);
  transition: 0.5s;
  transition-timing-function: ease-in-out;
}
.download-btn:hover {
  color: var(--app-color-base);
  background-color: var(--app-color-white);
  border: none;
}

.greetings-btns {
  animation: fadeIn 5s;
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
