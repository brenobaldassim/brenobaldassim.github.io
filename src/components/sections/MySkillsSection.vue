<script setup>
import CardItem from '../utils/CardItem.vue'
import SectionLayout from '../utils/SectionLayout.vue'
</script>

<template>
  <SectionLayout :animation-type="'slide-fade-left'">
    <div class="card-wrapper">
      <div
        class="mt-4 md:mt-20 grid gap-2 md:gap-4 max-2xl:grid-rows-2 max-md:grid-cols-2 md:grid-flow-col md:auto-cols-fr"
      >
        <!-- SVGS TRANSFORMED INTO CSS CLASS -->
        <CardItem :name="'HTML5'">
          <i class="bx bxl-html5"></i>
        </CardItem>
        <CardItem :name="'CSS3'">
          <i class="bx bxl-css3"></i>
        </CardItem>
        <CardItem :name="'Vue.js'">
          <i class="bx bxl-vuejs"></i>
        </CardItem>
        <CardItem :name="'Tailwindcss'">
          <i class="bx bxl-tailwind-css"></i>
        </CardItem>
        <CardItem :name="'Javascript'">
          <i class="bx bxl-javascript"></i>
        </CardItem>
        <CardItem :name="'Node.js'">
          <i class="bx bxl-nodejs"></i>
        </CardItem>
        <CardItem :name="'Laravel'">
          <i class="bx bxl-php"></i>
        </CardItem>
        <CardItem :name="'Docker'">
          <i class="bx bxl-docker"></i>
        </CardItem>
      </div>
    </div>
  </SectionLayout>
</template>

<style scoped>
#terminal:hover {
  transform: scale(1.01);
  transition: 300ms ease;
}

@media (max-width: 768px) {
  .card-wrapper {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 100%;
  }
}
</style>
