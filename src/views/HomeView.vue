<script setup>
import SidebarComponent from '@/components/menu/SidebarComponent.vue';
import ResumeSection from '@/components/sections/ResumeSection.vue';
import SectionItem from '@/components/SectionItem.vue';
import AboutMeSection from '@/components/sections/AboutMeSection.vue';
import ProjectsSection from '@/components/sections/ProjectsSection.vue';
import MySkillsSection from '@/components/sections/MySkillsSection.vue';
import ContactSection from '@/components/sections/ContactSection.vue';
import MenuMobile from '@/components/menu/MenuMobile.vue';
import { ref, computed } from 'vue';

const display = ref(false);
const displayOpt = computed(() => {
    return display.value ? 'block' : 'none';
})
const handleClick = () => {
    display.value = !display.value;
};
</script>

<template>
    <main class="font-DM">
        <MenuMobile @handle-click="handleClick" :is-open="display" />
        <SidebarComponent />
        <div class="main">
            <SectionItem :id="'resume'" :component="ResumeSection" />
            <SectionItem :id="'about-me'" :component="AboutMeSection" :bg-color-base="false" />
            <SectionItem :id="'my-skills'" :component="MySkillsSection" />
            <SectionItem :id="'projects'" :component="ProjectsSection" />
            <SectionItem :id="'contact'" :component="ContactSection" />
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

@media (max-width: 768px) {
    .sidebar {
        display: v-bind(displayOpt);
    }
}
</style>
