<script setup>
const props = defineProps({
  isOpen: {
    type: Boolean,
    default: false,
    required: true
  }
})
</script>

<template>
  <div id="menu-mobile" class="md:hidden" @click="$emit('handle-click')">
    <div v-if="!props.isOpen"><i class="bx bx-menu"></i></div>
  </div>
</template>

<style scoped>
#menu-mobile {
  position: fixed;
  top: 0;
  left: 0;
  z-index: 1;
  width: 75px;
  height: 50px;
  margin: 16px 0 0 8px;
  font-size: 36px;
  color: var(--app-color-white);
}
</style>
