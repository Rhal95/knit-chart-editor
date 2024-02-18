<script setup lang="ts">


import {ref} from "vue";
import {Stitch} from "../../stitch.ts";
import AppArea from "../AppArea.vue";
import {useChart} from "../../state.ts";

const dialogElement = ref<HTMLDialogElement | null>(null)

const storageKey = "saved-knit-charts";
const saves = ref<{
  [name: string]: {
    width: number,
    height: number
    data: Stitch[][]
  }
}>({})


function reloadSaves() {
  saves.value = JSON.parse(window.localStorage.getItem(storageKey) ?? '{}');
}


function loadCanvas() {
  reloadSaves();
  const dialog = dialogElement.value;
  if (dialog) {
    dialog.showModal();
  }
}

const chart = useChart();
</script>

<template>
  <button @click="loadCanvas">Load</button>
  <dialog ref="dialogElement">
    <form method="dialog">
      <AppArea title="Existing Saves">
        <ol>
          <li v-for="(save, name) of saves">
            <button @click="()=>{
              chart.chartWidth = save.width;
              chart.chartHeight = save.height;
              chart.data = save.data;
            }">{{ name }}</button>
          </li>
        </ol>
      </AppArea>
    </form>
  </dialog>
</template>

<style scoped>

</style>