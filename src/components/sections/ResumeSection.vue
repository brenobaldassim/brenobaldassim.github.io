<script setup>
import Presentation from '../PresentationComponent.vue'
</script>

<template>
  <div class="banner flex flex-col justify-center items-center">
    <div class="presentation">
      <div class="greetings font-bold flex flex-col gap-2">
        <Presentation />
      </div>
      <div
        class="greetings-btns text-app-base hover:text-lg flex flex-row justify-start w-full"
      >
        <a
          class="btn download-btn rounded-full p-4"
          target="_blank"
          href="https://drive.google.com/file/d/1Sq23fIjrsmwyncBdFEriZNvVuCQgPIjI/view?usp=sharing"
          >Download Resume</a
        >
      </div>
    </div>
  </div>
</template>

<style>
.download-btn {
  width: 100%;
  background-color: transparent;
  border: 3px solid var(--app-color-base-light);
  text-align: center;
  color: var(--app-color-white);
  box-shadow: -3px 0 5px 0 rgb(0, 0, 0, 0.5);
}

.download-btn:hover {
  color: var(--app-color-base);
  background-color: var(--app-color-white);
  border-color: var(--app-color-white);
  line-height: normal;
}
.presentation{
  display: grid;
  place-items: center;
  grid-template-rows: auto 100px;
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
