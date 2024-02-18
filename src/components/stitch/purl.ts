import {prepareRenderingContext} from "./prepareRenderingContext.ts";
import {Stitch} from "../../stitch.ts";

export function registerPurl() {
  console.log("updating purl stitch")
  const {chart, ctx, cnv} = prepareRenderingContext();
  ctx.fillStyle = "#000";
  const d = chart.stitchPxSize / 4;
  const r = d / 2;
  const c = chart.stitchPxSize / 2;
  ctx.roundRect(c - r, c - r, d, d, c);
  ctx.fill();
  chart.setStitchTemplate(Stitch.Purl, cnv);
}
