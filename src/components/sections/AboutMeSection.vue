<script setup>
import SectionLayout from '../utils/SectionLayout.vue'
import UnderscoreBlink from '../utils/UnderscoreBlink.vue'
</script>

<template>
  <SectionLayout>
    <div class="text-xl md:text-2xl text-left text-app-white w-full mt-4 md:mt-20">
      <p class="whitespace-normal">
        <span class="text-app-secondary">></span> Fullstack Web Developer experienced with Vue.js,
        Node.js, Laravel, Javascript, Docker, building and consuming REST APIs
      </p>
      <p class="whitespace-normal">
        <span class="text-app-secondary">></span> I'm a creative, problem solver, dedicated team
        player developer with good comunications skills
      </p>
      <UnderscoreBlink>
        <span> I'm passionate about technology, optimization,music and sports</span>
      </UnderscoreBlink>
    </div>
  </SectionLayout>
</template>

<style scoped>
#terminal:hover {
  transform: scale(1.01);
  transition: 300ms ease;
}
</style>
