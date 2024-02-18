import {createApp, watchEffect} from 'vue'
import './style.css'
import App from './App.vue'
import {createPinia} from "pinia";
import {registerPurl} from "./components/stitch/purl.ts";
import {registerKnit} from "./components/stitch/knit.ts";
import {registerYarnOver} from "./components/stitch/yarnOver.ts";
import {registerKnit2Together} from "./components/stitch/knit2together.ts";
import {registerPurl2Together} from "./components/stitch/purl2together.ts";
import {registerSlipKnitPass} from "./components/stitch/slipKnitPass.ts";
import {registerSlipPurlPass} from "./components/stitch/slipPurlPass.ts";
import {registerKnitFrontBack} from "./components/stitch/knitFrontBack.ts";
import {registerPurlFrontBack} from "./components/stitch/purlFrontBack.ts";
import {registerKnit3Together} from "./components/stitch/knit3Together.ts";
import {registerPurl3Together} from "./components/stitch/purl3Together.ts";

const app = createApp(App).use(createPinia());
app.runWithContext(()=>{
  watchEffect(()=> registerKnit())
  watchEffect(()=> registerPurl())
  watchEffect(()=> registerYarnOver())
  watchEffect(()=> registerKnit2Together())
  watchEffect(()=> registerPurl2Together())
  watchEffect(()=> registerSlipKnitPass())
  watchEffect(()=> registerSlipPurlPass())
  watchEffect(()=> registerKnitFrontBack())
  watchEffect(()=> registerPurlFrontBack())
  watchEffect(()=> registerKnit3Together())
  watchEffect(()=> registerPurl3Together())

})
app.mount('#app');


