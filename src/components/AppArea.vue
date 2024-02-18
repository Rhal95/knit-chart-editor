<template>
  <fieldset>
    <legend>{{props.title}}</legend>
    <slot/>
  </fieldset>
</template>

<script setup lang="ts">
const props = defineProps<{title: string}>();
</script>