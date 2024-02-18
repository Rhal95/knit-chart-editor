<script setup lang="ts">

import {ref, watchEffect} from "vue";
import {Stitch} from "../stitch.ts";
import {useChart} from "../state.ts";

const props = defineProps<{ stitch: Stitch, label: string }>();

const chart = useChart();
const canvas = ref<HTMLCanvasElement | null>(null);
watchEffect(() => {
  const canvasElem = canvas.value;
  const ctx: CanvasRenderingContext2D | undefined | null = canvasElem?.getContext('2d');
  if (canvasElem && ctx) {
    canvasElem.width = 48;
    canvasElem.height = 48;
    const stitch = chart.stitches[props.stitch];
    if (props.stitch !== Stitch.Empty) ctx.drawImage(stitch, 0, 0, 48, 48);
    else {
      ctx.fillStyle = "#9e9e9e";
      ctx.fillRect(0, 0, 48, 48);
    }
    ctx.lineWidth = 4;
    ctx.strokeStyle = "#000";
    ctx.strokeRect(0, 0, 48, 48);
  }
});

</script>

<template>
  <div>
    <input :id="`selected-stitch[${stitch}]`" type="radio" name="selected-stitch"
           :value="stitch"
           :checked="chart.selectedStitch === stitch"
           @change="chart.setSelectedStitch(stitch)">
    <label :for="`selected-stitch[${stitch}]`">
      <span>{{ label }}</span>
      <canvas ref="canvas" role="presentation"></canvas>
    </label>
  </div>
</template>

<style scoped>
canvas {
  width: 1em;
  height: 1em;
}

label {
  display: inline-flex;
  align-items: center;
  gap: 0.5em;
}
</style>