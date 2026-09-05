<template>
  <div>
    <h1 class="left">Каталог товаров</h1>
    <div class="catalog">
      <div class="catalog__filter">
        <SelectField v-model="select" :options="categoriesSelect" />
      </div>
      <div class="catalog__grid">
        <CatalogCard
          v-for="product in productsData?.products"
          :key="product.id"
          v-bind="product"
        />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import type { GetCategoriesResponse } from '~/components/interfaces/category.interfaces'
import type { GetProductsResponse } from '~/components/interfaces/product.interfaces'
import SelectField from '~/components/SelectField.vue'

const config = useRuntimeConfig()
const API_URL = config.public.apiurl

const selectDefault = {
  value: '',
  label: 'Категории',
}

const select = ref(selectDefault)

const { data } = await useFetch<GetCategoriesResponse>(API_URL + '/categories')

const categoriesSelect = computed(() => {
  return data.value
    ? data.value?.categories
        .map((c) => ({
          value: c.id.toString(),
          label: c.name,
        }))
        .concat(selectDefault)
    : [selectDefault]
})

const { data: productsData } = await useFetch<GetProductsResponse>(
  API_URL + '/products',
  {
    query: {
      limit: 20,
      offset: 0,
    },
  },
)
</script>

<style scoped>
.catalog {
  display: flex;
  gap: 30px;
}
.catalog__filter {
  width: 260px;
}
.catalog__grid {
  display: grid;
  width: 100%;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 24px 12px;
}
</style>
