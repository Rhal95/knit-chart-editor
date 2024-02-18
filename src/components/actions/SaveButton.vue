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


function saveCanvas() {
  reloadSaves();
  const dialog = dialogElement.value;
  if (dialog) {
    dialog.showModal();
  }
}

const chart = useChart();

function handleSave(e: Event) {
  const dialog = e.target as HTMLDialogElement;
  if (dialog.returnValue === "submit") {
    const form = dialog.querySelector("form") as HTMLFormElement;
    const saveName = form.elements.namedItem("saveName") as HTMLInputElement;
    const name = saveName.value;
    const updatedSaves = {
      ...saves.value,
      [name]: {
        width: chart.chartWidth,
        height: chart.chartHeight,
        data: chart.data
      }
    };

    window.localStorage.setItem(storageKey, JSON.stringify(updatedSaves));
    reloadSaves();
  }
}

</script>

<template>
  <button @click="saveCanvas">Save</button>
  <dialog ref="dialogElement" @close="handleSave">

    <AppArea title="Save">
      <form method="dialog" @submit="()=>dialogElement?.close('submit')">
        <label>
          <span>File name:</span>
          <input type="text" name="saveName" required/>
        </label>
        <button type="submit">Save</button>
      </form>
    </AppArea>
    <AppArea title="Existing Saves">
      <ol>
        <li v-for="(_data, name) of saves">
          <button @click="e=>{
          const input = (e.target as HTMLButtonElement).closest('dialog')?.querySelector('input');
          if (input) { input.value = String(name); dialogElement?.close('submit') }
        }">{{ name }}
          </button>
        </li>
      </ol>
    </AppArea>
  </dialog>
</template>

<style scoped>

</style>