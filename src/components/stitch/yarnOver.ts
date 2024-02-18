import {prepareRenderingContext} from "./prepareRenderingContext.ts";
import {Stitch} from "../../stitch.ts";

export function registerYarnOver(){
  console.log("updating knit stitch")
  const {chart, cnv, ctx} = prepareRenderingContext();
  ctx.fillStyle = "#000";
  ctx.lineWidth = Math.ceil(chart.stitchPxSize/25);
  const d = chart.stitchPxSize * 2 / 5;
  const r = d / 2;
  const c = chart.stitchPxSize / 2;
  ctx.roundRect(c - r, c - r, d, d, c);
  ctx.stroke();
  chart.setStitchTemplate(Stitch.YarnOver, cnv);
}