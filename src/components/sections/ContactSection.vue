<script setup>
import SectionLayout from '../utils/SectionLayout.vue'

const submitEmail = (e) => {
  console.log(e.target);
}
</script>

<template>
  <SectionLayout>
    <div class="flex flex-col items-center justify-center w-full text-xl md:text-2xl md:mt-4 font-bold">
      <form ref="emailForm" @submit.prevent="submitEmail" class="md:w-2/4 p-4 md:p-8">
        <div class="text-center mb-12 bg-app-base p-8 rounded">
          <h1 class="text-4xl">Have you liked my portifolio?</h1>
          <h2 class="text-2xl">Send me an email!</h2>
        </div>
        <div>
          <div class="mb-8">
            <label>Email:</label>
            <input type="text" placeholder="jhon@doe.com" />
          </div>
          <div class="md:mb-12 mb-8">
            <label>Message:</label>
            <textarea type="text" placeholder="Hi, I would like to..." />
          </div>
        </div>
        <button type="submit" class=" text-lg w-full bg-app-base rounded hover:bg-app-base-light p-2">SEND EMAIL</button>
      </form>
    </div>
  </SectionLayout>
</template>

<style scoped>
input, textarea{
  font-size: 16px;
  border-radius: 4px;
  background-color: var(--app-color-base);
  padding: 4px;
  resize: none;
  margin-top: 10px;
}
</style>
