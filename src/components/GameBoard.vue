<script setup lang="ts">
  import SudokuBlock from "./SudokuBlock.vue";
</script>

<template>
  <div class="board">
    <SudokuBlock v-for="n in 9" :key="n" />
  </div>
</template>

<style scoped>
div.board {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: repeat(3, 1fr);
  width: 100%;
  height: 100%;
  max-width: 450px;
  max-height: 450px;
}
</style>
