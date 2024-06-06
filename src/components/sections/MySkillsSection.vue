<script setup>
import Card from '../utils/CardItem.vue'
import SectionLayout from '../utils/SectionLayout.vue'

const techs = [
  {
    name: 'HTML5',
    class: 'bx bxl-html5'
  },
  {
    name: 'CSS3',
    class: 'bx bxl-css3'
  },
  {
    name: 'Vue.js',
    class: 'bx bxl-vuejs'
  },
  {
    name: 'Tailwindcss',
    class: 'bx bxl-tailwind-css'
  },
  {
    name: 'Javascript',
    class: 'bx bxl-javascript'
  },
  {
    name: 'Node.js',
    class: 'bx bxl-nodejs'
  },
  {
    name: 'Laravel',
    class: 'bx bxl-php'
  },
  {
    name: 'Docker',
    class: 'bx bxl-docker'
  }
]
</script>

<template>
  <SectionLayout :animation-type="'slide-fade-left'">
    <div class="card-wrapper">
      <div
        class="mt-4 md:mt-20 grid gap-2 md:gap-4 max-2xl:grid-rows-2 max-md:grid-cols-2 md:grid-flow-col md:auto-cols-fr"
      >
        <!-- SVGS TRANSFORMED INTO CSS CLASS -->
        <Card v-for="tech in techs">
          <h1 class="text-base">{{ tech.name }}</h1>
          <i class="text-4xl md:text-8xl" :class="tech.class"></i>
        </Card>
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
