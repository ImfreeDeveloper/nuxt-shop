<template>
  <div>
    <h1 class="left">Каталог товаров</h1>
    <div class="catalog">
      <div class="catalog__filter">
        <SelectField v-model="select" :options="categoriesSelect" />
      </div>
      <div></div>
    </div>
  </div>
</template>

<script setup lang="ts">
import type { GetCategoriesResponse } from '~/components/interfaces/category.interfaces'
import SelectField from '~/components/SelectField.vue'

const config = useRuntimeConfig()
const API_URL = config.public.apiurl

const selectDefault = {
  value: '',
  label: 'Категории'
}

const select = ref(selectDefault)

const { data } = await useFetch<GetCategoriesResponse>(API_URL + '/categories')



const categoriesSelect = computed(() => {
  return data.value
    ? data.value?.categories.map((c) => ({
        value: c.id.toString(),
        label: c.name,
      })).concat(selectDefault)
    : [selectDefault]
})
</script>

<style scoped>
.catalog {
  display: flex;
  gap: 3;
}
.catalog__filter {
  width: 260px;
}
</style>
