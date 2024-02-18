<template>
  <div>
    <button disabled>Load</button>
    <DownloadButton/>
    <PrintButton/>
  </div>
</template>

<script setup lang="ts">
import DownloadButton from "./actions/DownloadButton.vue";
import PrintButton from "./actions/PrintButton.vue";
</script>

<style scoped>
    div {
        display: grid;
        gap: 0.5em;
        grid-template-columns: auto;
    }
</style>