<template>
  <div>
    <button disabled>Load</button>
    <button disabled>Save</button>
    <button disabled>Export</button>
    <PrintButton/>
  </div>
</template>

<script setup lang="ts">
import PrintButton from "./actions/PrintButton.vue";
</script>

<style scoped>
    div {
        display: grid;
        gap: 0.5em;
        grid-template-columns: auto;
    }
</style>