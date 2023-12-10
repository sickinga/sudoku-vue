<script setup lang="ts">
import NumberBlock from './NumberBlock.vue'
</script>

<template>
  <div class="sudoku-block">
    <NumberBlock v-for="n in 9" :key="n" />
  </div>
</template>

<style scoped>
div.sudoku-block {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: repeat(3, 1fr);
  max-width: 150px;
  max-height: 150px;
  border: 1px solid white;
}
</style>
