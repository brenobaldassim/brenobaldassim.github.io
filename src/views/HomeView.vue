<script setup>
import Sidebar from '@/components/Sidebar.vue'
import Section from '@/components/Section.vue'
</script>

<template>
<main class="font-DM">
    <div class="">
        <Sidebar />
        <div class="main">
            <Section />
        </div>
        
    </div>
</main>
</template>

<style >
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
