<script setup lang="ts">
function printChart() {
  window.print();
}
</script>

<template>
  <button @click="printChart">Print</button>
</template>

<!-- Global print style to remove everything except the canvas with the chart-->
<style>
@media print {
  .footer, .side, .above, .header {
    display: none;
  }

  .content {
    display: contents;
  }

  fieldset {
    display: contents;
  }

  legend {
    display: none;
  }

  * {
    margin: 0;
    padding: 0;
  }
}


</style>