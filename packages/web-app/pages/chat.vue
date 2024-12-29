<template>
  <div class="flex">
    <LayoutNavbar />
    <LayoutMainContent />
  </div>
</template>

<script setup lang="ts">
definePageMeta({
  middleware: ['auth']
})
</script>