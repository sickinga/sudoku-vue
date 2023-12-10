<script setup lang="ts">
</script>

<template>
  <div class="number-block">
  </div>
</template>

<style scoped>
div.number-block {
    border: 0.5px solid black;
    max-width: 50px;
    width: 100%;
}

div.number-block::after {
    content: "";
    display: block;
    padding-bottom: 100%;
}
</style>
