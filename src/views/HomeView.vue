<script setup>
import SidebarComponent from '@/components/SidebarComponent.vue';
import ResumeSection from '@/components/sections/ResumeSection.vue';
import SectionItem from '@/components/SectionItem.vue';
import AboutMeSection from '@/components/sections/AboutMeSection.vue';
import ProjectsSection from '@/components/sections/ProjectsSection.vue';
import MySkillsSection from '@/components/sections/MySkillsSection.vue';
import ContactSection from '@/components/sections/ContactSection.vue';
</script>

<template>
<main class="font-DM">
        <SidebarComponent />
        <div class="main">
            <SectionItem :id="'resume'" :component="ResumeSection" />
            <SectionItem :id="'about-me'" :component="AboutMeSection" />
            <SectionItem :id="'my-skills'" :component="MySkillsSection" />
            <SectionItem :id="'projects'" :component="ProjectsSection" />
            <SectionItem :id="'contact'" :component="ContactSection" />
        </div>
        <footer></footer>
</main>
</template>

<style >
html {
    scroll-snap-type: y mandatory;
}

.btn:hover {
    transform: scale(1.1);
    transition: 0.5s;
    transition-timing-function: ease-in-out;
}

@media (max-width: 768px) {
    .sidebar {
        display: none;
    }  
}

@media (min-width: 768px) {
    .main {
        margin-left: 200px; /* Same as the width of the sidebar */
        padding: 0px 10px;
    }   
}
</style>
