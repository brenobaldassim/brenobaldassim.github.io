<script setup>
const props = defineProps({
    title:{
        type:String,
        required:true,
        default:'SECTION-NAME'
    }
})
</script>

<template>
  <div
    id="terminal"
    class="h-full w-full max-md:h-fit p-8 bg-app-base-dark text-app-secondary rounded border-2 border-app-secondary"
  >
    <h1 class="text-4xl font-bold">// {{ props.title }}:</h1>
    <slot />
  </div>
</template>

<style></style>
