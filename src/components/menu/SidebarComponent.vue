<script setup>
import { sectionOptions } from '@/utils-js/constants'
const scrollToId = (id) => {
  let e = document.getElementById(id)
  e.scrollIntoView({ behavior: 'instant', inline: 'nearest' })
}
const props = defineProps({
  display: {
    type: Boolean,
    required: true
  }
})
</script>

<template>
  <div id="sidebar" class="max-md:w-full" @click="$emit('handle-click', $event)">
    <div class="content font-Roboto flex flex-col items-center">
      <h2 class="title"><img src="/public/breno-baldassim_logo.png" /></h2>
      <ul class="nav text-xl w-full">
        <li v-for="opt in sectionOptions" @click="scrollToId(opt.id)">{{ opt.title }}</li>
      </ul>
      <div class="text-3xl mt-8 flex flex-row justify-center items-center gap-0.5">
        <a class="btn" target="_blank" href="https://github.com/brenobaldassim">
          <i class="bx bxl-github"></i>
        </a>
        <a
          class="btn ml-1"
          target="_blank"
          href="https://www.linkedin.com/in/breno-baldassim-bb2138196/"
        >
          <i class="bx bxl-linkedin"></i>
        </a>
      </div>
    </div>
  </div>
</template>

<style>
#sidebar {
  position: fixed;
  float: left;
  top: 0;
  left: 0;
  height: 100%;
  z-index: 1;
  transition: all 300ms ease-out;
}
.content {
  z-index: 1;
  width: 200px;
  height: 100%;
  text-align: left;
  background: var(--app-color-base-dark);
  color: var(--app-color-base-light);
  box-shadow: -3px 0 5px 0 #000;
}
.title {
  text-align: center;
  font-size: 20px;
  color: var(--app-color-base-light);
  background-color: #000;
  padding: 20px;
  width: 100%;
  height: 200px;
}

.title img:hover {
  transform: scale(1.1);
  transition: 0.3s;
  transition-timing-function: ease-out;
}

#sidebar ul {
  background-color: var(--app-color-dark);
}

#sidebar ul li {
  display: flex;
  justify-content: center;
  padding: 20px;
  width: 100%;
  transition: transform 0.3s ease-in-out;
  font-weight: 300;
  color: #5f5f5f;
  background-color: var(--app-color-base-dark);
}

#sidebar ul li:hover {
  background-color: var(--app-color-dark);
  transform: translateX(20px);
  user-select: none;
}

#sidebar ul li:hover {
  color: var(--app-color-white);
  cursor: pointer;
}

#sidebar .content > div > a:hover {
  color: var(--app-color-dark);
}

@media (max-height: 768px) {
  #sidebar ul li {
    font-size: 16px;
    padding: 12px;
  }
  #sidebar .content > div > a {
    font-size: 24px;
  }
}
</style>
