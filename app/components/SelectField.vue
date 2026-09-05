<template>
  <div class="select-wrapper">
    <select v-model="model" class="select">
      <option
        v-for="option in options"
        :key="option.value"
        :value="option"
      >
        {{ option.label }}
      </option>
    </select>
  </div>
</template>

<script setup lang="ts">
const { options } = defineProps<{
  options: {
    label: string
    value: string
  }[]
}>()
const model = defineModel<string>()
</script>

<style scoped>
  .select-wrapper {
    position: relative;
  }

  .select {
    appearance: none;
    background-color: transparent;
    border: 1px solid var(--color-gray);
    padding: 15px 12px;
    margin: 0;
    width: 100%;
    font-family: inherit;
  }
</style>
