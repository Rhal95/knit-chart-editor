<script setup lang="ts">
import {ref, watchEffect} from "vue";
import {useChart} from "../state.ts";
import {Stitch} from "../stitch.ts";

const canvas = ref<HTMLCanvasElement>();
const chart = useChart();

watchEffect(() => {
  const canvasElem = canvas.value;
  const ctx: CanvasRenderingContext2D | undefined | null = canvasElem?.getContext('2d');
  if (canvasElem && ctx) {
    updateCanvas(canvasElem);
    paintChart(ctx)
  }
})


function updateCanvas(canvasElement: HTMLCanvasElement) {
  const width = Math.floor(chart.chartWidth * chart.stitchPxSize);
  const height = Math.floor(chart.chartHeight * chart.stitchPxSize);
  canvasElement.width = width;
  canvasElement.height = height;
}

function paintStitch(ctx: CanvasRenderingContext2D, x: number, y: number, stitch: Stitch) {
  switch (stitch) {
    case Stitch.Empty:
      ctx.fillStyle = (y % 2 === 0) != (x % 2 === 0) ? "#9e9e9e" : "#b0b0b0";
      ctx.fillRect(x * chart.stitchPxSize, y * chart.stitchPxSize, chart.stitchPxSize, chart.stitchPxSize);
      break;
    default:
      ctx.drawImage(chart.stitches[stitch], x * chart.stitchPxSize, y * chart.stitchPxSize);
      break;
  }
}

function paintGridCell(ctx: CanvasRenderingContext2D, x: number, y: number) {
  ctx.strokeStyle = "#000";
  ctx.lineWidth = chart.stitchPxSize / 50;
  ctx.beginPath();
  ctx.moveTo(x * chart.stitchPxSize, y * chart.stitchPxSize);
  ctx.lineTo(x * chart.stitchPxSize + chart.stitchPxSize, y * chart.stitchPxSize);
  ctx.lineTo(x * chart.stitchPxSize + chart.stitchPxSize, y * chart.stitchPxSize + chart.stitchPxSize);
  ctx.lineTo(x * chart.stitchPxSize, y * chart.stitchPxSize + chart.stitchPxSize);
  ctx.lineTo(x * chart.stitchPxSize, y * chart.stitchPxSize);
  ctx.closePath();
  ctx.stroke();
}

function paintChart(ctx: CanvasRenderingContext2D) {
  ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height);

  for (let y = 0; y < chart.chartHeight; y++) {
    for (let x = 0; x < chart.chartWidth; x++) {
      const stitch = chart.data[y][x];
      paintStitch(ctx, x, y, stitch);
    }
  }
  for (let y = 0; y < chart.chartHeight; y++) {
    for (let x = 0; x < chart.chartWidth; x++) {
      const stitch = chart.data[y][x];
      if (stitch !== Stitch.Empty) paintGridCell(ctx, x, y);
    }
  }
}

const pressing = ref(false);

function clickCanvas(event: PointerEvent) {
  const target = event.target as HTMLCanvasElement;
  target.setPointerCapture(event.pointerId);
  pressing.value = true;
  const canvasElem = canvas.value;
  if (!canvasElem) return;
  const x = Math.floor((chart.chartWidth / canvasElem.clientWidth * event.offsetX))
  const y = Math.floor((chart.chartHeight / canvasElem.clientHeight * event.offsetY))
  chart.setStitch(x, y, chart.selectedStitch);
}

function dragCanvas(event: PointerEvent) {
  if (pressing.value) {
    clickCanvas(event);
  }
}

function releaseCanvas() {
  pressing.value = false;
}

</script>

<template>
  <main class="knit-chart">
    <canvas
        id="knit-chart-canvas"
        v-once
        ref="canvas"
        @pointerdown="clickCanvas"
        @pointermove="dragCanvas"
        @pointercancel="releaseCanvas"
        @pointerup="releaseCanvas"></canvas>
  </main>
</template>

<style scoped>
.knit-chart {
  display: grid;
  flex-direction: column;
  border: #1a1a1a solid thin;
}

canvas {
  width: 100%;
  height: 100%;
  margin: 0;
  padding: 0;
  image-rendering: pixelated;
  touch-action: none;
}
</style>