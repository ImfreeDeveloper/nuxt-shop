<template>
  <div>
    {{ favoritesStore.favoriteIds[0] }}
  </div>
</template>

<script setup lang="ts">
const favoritesStore = useFavoritesStore()

favoritesStore.addToFavorite(1)

</script>
