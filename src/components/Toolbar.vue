<script setup lang="ts">
import ToolbarStitch from "./ToolbarStitch.vue";
import {Stitch} from "../stitch.ts";
</script>

<template>
  <div class="stitch-selection">
    <ToolbarStitch v-for="stitch in Stitch" :stitch="Stitch[stitch as Stitch]" :label="stitch.toString()"/>
  </div>
</template>

<style scoped>
.stitch-selection {
  display: grid;
  grid-template-rows: repeat(2, 1fr);
  grid-auto-flow: column;
}
</style>