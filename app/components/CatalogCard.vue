<template>
  <NuxtLink class="card" :to="`/catalog/${product.id}`">
    <div class="card__image">
      <span v-if="product.discount > 0" class="card__discount">
        -{{ product.discount }} %
      </span>
    </div>
    <div class="card__name">{{ product.name }}</div>
    <div class="card__price">$ {{ product.price }}</div>
  </NuxtLink>
</template>

<script setup lang="ts">
import type { Product } from './interfaces/product.interfaces'

const config = useRuntimeConfig()

const product = defineProps<Product>()

const image = computed(
  () =>`url(${config.public.imageurl}${product.images[0]})`,
)
</script>

<style scoped>
.card {
  display: flex;
  flex-direction: column;
  gap: 24px;
  width: 100%;
  text-decoration: none;
}
.card__image {
  aspect-ratio: 1/1;
  width: 100%;
  min-width: 320px;
  border-radius: 8px;
  padding: 16px;
  background-repeat: no-repeat;
  background-size: cover;
  background-image: v-bind(image);
}
.card__discount {
  background: var(--color-accent);
  border-radius: 4px;
  padding: 2px 8px;
  font-size: 12px;
  color: var(--color-white-light);
}
.card__name {
  font-size: 26px;
  color: var(--color-black);
}
.card__price {
  font-size: 20px;
  font-weight: 500;
  text-transform: capitalize;
  color: var(--color-accent);
}
</style>
