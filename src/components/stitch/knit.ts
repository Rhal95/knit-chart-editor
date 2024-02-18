import {prepareRenderingContext} from "./prepareRenderingContext.ts";
import {Stitch} from "../../stitch.ts";

export function registerKnit() {
  console.log("updating knit stitch")
  const {chart, cnv} = prepareRenderingContext();
  chart.setStitchTemplate(Stitch.Knit, cnv);
}