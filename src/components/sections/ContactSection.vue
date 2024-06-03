<script setup>
import SectionLayout from '../utils/SectionLayout.vue'
</script>

<template>
  <SectionLayout>
    <div class="text-xl md:text-2xl text-left w-full mt-4 md:mt-20">
      <form>
        <div class="mb-3">
          <label></label>
          <input type="text" placeholder="email" />
        </div>
        <div class="mb-3">
          <label></label>
          <input type="text" placeholder="message" />
        </div>
      </form>
    </div>
  </SectionLayout>
</template>

<style scoped></style>
