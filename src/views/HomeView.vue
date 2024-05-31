<script setup>
import SidebarComponent from '@/components/menu/SidebarComponent.vue'
import SectionItem from '@/components/SectionItem.vue'
import MenuMobile from '@/components/menu/MenuMobile.vue'
import { sectionOptions } from '@/utils-js/constants'
import { ref, computed } from 'vue'

const display = ref(false)
const displayOpt = computed(() => {
  return !display.value ? 'max-md:translate-x-[-768px]' : 'max-md:translate-x-0'
})
const handleClickMenuIcon = () => {
  display.value = !display.value
}
const handleClickSideBar = (event) => {
  if (event.target.id === 'sidebar') display.value = false
}
</script>

<template>
  <main class="font-DM">
    <MenuMobile @handle-click="handleClickMenuIcon" :is-open="display" />
    <SidebarComponent :class="displayOpt" :display="display" @handle-click="handleClickSideBar" />
    <div class="main">
      <SectionItem
        v-for="section in sectionOptions"
        :key="section.id"
        :id="section.id"
        :component="section.component"
      />
    </div>
    <footer></footer>
  </main>
</template>

<style>
.btn:hover {
  transform: scale(1.05);
  transition: 0.5s;
  transition-timing-function: ease-in-out;
}

@media (min-width: 768px) {
  .main {
    margin-left: 200px;
    /* Same as the width of the sidebar */
    padding: 0px 10px;
  }
}
</style>
