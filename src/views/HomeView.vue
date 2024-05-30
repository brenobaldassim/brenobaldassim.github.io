<script setup>
import SidebarComponent from '@/components/menu/SidebarComponent.vue'
import ResumeSection from '@/components/sections/ResumeSection.vue'
import SectionItem from '@/components/SectionItem.vue'
import AboutMeSection from '@/components/sections/AboutMeSection.vue'
import ProjectsSection from '@/components/sections/ProjectsSection.vue'
import MySkillsSection from '@/components/sections/MySkillsSection.vue'
import ContactSection from '@/components/sections/ContactSection.vue'
import MenuMobile from '@/components/menu/MenuMobile.vue'
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

const sections = [
  {
    id: 'resume',
    component: ResumeSection
  },
  {
    id: 'about-me',
    component: AboutMeSection
  },
  {
    id: 'my-skills',
    component: MySkillsSection
  },
  {
    id: 'projects',
    component: ProjectsSection
  },
  {
    id: 'contact',
    component: ContactSection
  }
]
</script>

<template>
  <main class="font-DM">
    <MenuMobile @handle-click="handleClickMenuIcon" :is-open="display" />
    <SidebarComponent :class="displayOpt" :display="display" @handle-click="handleClickSideBar" />
    <div class="main">
      <SectionItem
        v-for="section in sections"
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
  transform: scale(1.1);
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
