<script setup lang="ts">
function downloadChart() {
  const canvas: HTMLCanvasElement | null = document.querySelector('canvas#knit-chart-canvas');
  if (canvas) {
    const link = document.createElement('a');
    link.download = 'chart.png';
    link.href = canvas.toDataURL('image/png');
    link.click();
  }
}
</script>

<template>
  <button @click="downloadChart">Download</button>
</template>