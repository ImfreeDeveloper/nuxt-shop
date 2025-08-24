<template>
  <div>
    <!-- <NuxtLink :to="{ name: '/about' }">About</NuxtLink> -->
    <button @click="openAbout">Перейти</button>
  </div>
</template>

<script setup lang="ts">
function openAbout() {
  navigateTo('/about')
  navigateTo({ path: '/about' })
}
</script>

<style scoped></style>
 