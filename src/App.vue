<script setup lang="ts">

import KnitChart from "./components/KnitChart.vue";
import ChartConfiguration from "./components/ChartConfiguration.vue";
import AppArea from "./components/AppArea.vue";
import AppLayout from "./components/AppLayout.vue";
import ActionButtons from "./components/ActionButtons.vue";
import DebugPanel from "./components/DebugPanel.vue";
import Toolbar from "./components/Toolbar.vue";
</script>

<template>
  <AppLayout>
    <template v-slot:header>
      <h1>Knit Chart Editor</h1>
    </template>
    <template v-slot:above>
      <AppArea title="Toolbar">
        <Toolbar/>
      </AppArea>
    </template>
    <template v-slot:content>
      <AppArea title="Chart">
        <KnitChart/>
      </AppArea>
    </template>
    <template v-slot:side>
      <AppArea title="Actions">
        <ActionButtons/>
      </AppArea>
    </template>
    <template v-slot:footer>
      <AppArea title="Chart Configuration">
        <ChartConfiguration/>
      </AppArea>
    </template>
  </AppLayout>
  <DebugPanel/>
</template>

