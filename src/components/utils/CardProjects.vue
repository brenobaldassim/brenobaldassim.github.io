<script setup>
import Tag from './TagComponent.vue'
const props = defineProps({
  project: {
    type: {},
    required: true
  }
})
</script>

<template>
  <div
    class="project-item bg-app-base p-2 rounded-md border border-app-secondary font-bold text-base text-center"
  >
    <a :href="project.url" target="_blank">
      <div class="w-full p-2 rounded">
        <h1 class="uppercase">{{ project.name }}</h1>
      </div>
      <div class="text-xs info">
        <p class="mt-2 font-normal text-justify">{{ project.description }}</p>
        <i class="text-2xl bx bx-link-external"></i>
        <div class="h-full flex items-end justify-end">
          <Tag> {{ project.language }} </Tag>
        </div>
      </div>
    </a>
  </div>
</template>

<style scoped>
.project-item:hover {
  transform: scale(1.05);
  transition: all 500ms ease-out;
  color: var(--app-color-white);
  border-color: var(--app-color-white);
}

.info {
  display: grid;
  grid-template-columns: 2 max-content 1fr;
  gap: 4px;
  height: 150px;
}

.project-item:hover #tag {
  transition: all 500ms ease-out;
  color: var(--app-color-light);
  border-color: var(--app-color-light);
}
</style>
