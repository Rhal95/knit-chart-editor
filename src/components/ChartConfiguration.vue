<template>
  <div>
      <label>Width</label>
      <input type="number" min="0" :value="chart.chartWidth"
             @change="(e: Event)=>chart.setChartWidth(Number((e.target as HTMLInputElement | null)?.value))"/>
      <label>Height</label>
      <input type="number" min="0" :value="chart.chartHeight"
             @change="(e: Event)=>chart.setChartHeight(Number((e.target as HTMLInputElement | null)?.value))"/>
      <label>Resolution</label>
      <input type="number" min="0" :value="chart.stitchPxSize"
             @change="(e: Event)=>chart.setStitchPxSize(Number((e.target as HTMLInputElement | null)?.value))"/>
  </div>
</template>

<script lang="ts" setup>

import {useChart} from "../state.ts";

const chart = useChart();

</script>

<style scoped>
div {
  display: grid;
  grid-template-columns: auto 1fr;
  gap: 0.5em;
}
</style>