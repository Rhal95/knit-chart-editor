<template>
  <div>
    <SaveButton/>
    <LoadButton/>
    <DownloadButton/>
    <PrintButton/>
  </div>
</template>

<script setup lang="ts">
import DownloadButton from "./actions/DownloadButton.vue";
import PrintButton from "./actions/PrintButton.vue";
import SaveButton from "./actions/SaveButton.vue";
import LoadButton from "./actions/LoadButton.vue";
</script>

<style scoped>
    div {
        display: grid;
        gap: 0.5em;
        grid-template-columns: auto;
    }
</style>