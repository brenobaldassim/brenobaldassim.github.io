<script setup>
import SectionLayout from '../utils/SectionLayout.vue'
</script>

<template>
  <SectionLayout>
    <div class="flex flex-col items-center justify-center w-full text-xl md:text-2xl mt-4 md:mt-8">
      <form class="md:w-1/3 bg-app-base rounded border border-app-secondary p-4 md:p-8">
        <div class="mb-3">
          <label class="mb-2">email:</label>
          <input type="text" placeholder="email" />
        </div>
        <div class="md:mb-12 mb-8">
          <label class="mb-2">message:</label>
          <textarea type="text" placeholder="message" />
        </div>
      </form>
    </div>
  </SectionLayout>
</template>

<style scoped>
input, textarea{
  border-radius: 4px;
}
</style>
