<script setup>
import Animation from '../utils/AnimationComponent.vue'
</script>

<template>
  <div class="h-full w-full flex flex-col items-center justify-center">
    <Animation class="min-h-[40%]">
      <div
        class="about-me h-full w-full p-8 bg-app-base-dark text-app-secondary hover:border-app-white hover:text-app-white rounded border-2 border-app-secondary"
      >
        <h1 class="text-4xl font-bold">// ABOUT ME:</h1>
        <div class="text-2xl text-left text-app-white w-full mt-20">
          <p class="whitespace-normal">
            <span class="text-app-secondary">></span> Fullstack Web Developer experienced with
            Vue.js, Node.js, Laravel, Javascript, Docker, building and consuming REST APIs
          </p>
          <p class="whitespace-normal">
            <span class="text-app-secondary">></span> I'm a creative, problem solver, dedicated team
            player developer with good comunications skills
          </p>
          <p class="whitespace-normal">
            <span class="text-app-secondary">></span> I'm passionate about technology, optimization,
            music and sports<span class="cursor">_</span>
          </p>
        </div>
      </div>
    </Animation>
  </div>
</template>

<style scoped>
.about-me:hover {
  transform: scale(1.01);
  transition: 300ms ease;
}

.cursor {
  animation: blink 1s 0s infinite;
}

@keyframes blink {
  0% {
    opacity: 0;
  }

  40% {
    opacity: 0;
  }

  50% {
    opacity: 1;
  }

  90% {
    opacity: 1;
  }

  100% {
    opacity: 0;
  }
}
</style>
