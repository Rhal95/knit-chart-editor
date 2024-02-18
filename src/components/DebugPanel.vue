<script setup lang="ts">
import {useChart} from "../state.ts";
import {watchEffect} from "vue";

const chart = useChart();

watchEffect(()=>{
      Object.keys(chart.$state)
          .forEach((key)=> {
            console.log(key, chart[key as keyof typeof chart]);
          })
});
</script>


<style scoped>

</style>