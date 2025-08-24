<template>
  <div>
    <!-- <NuxtLink :to="{ name: '/about' }">About</NuxtLink> -->
    <Icon name="icons:tw"  />
    <button @click="openAbout">Перейти</button>
    <InputField variant="black" placeholder="Введите ваш email для подписки" />
  </div>
</template>

<script setup lang="ts">

function openAbout() {
  navigateTo('/about')
  navigateTo({ path: '/about' })
}
</script>

<style scoped></style>
 