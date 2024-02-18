import {prepareRenderingContext} from "./prepareRenderingContext.ts";
import {Stitch} from "../../stitch.ts";

export function registerKnit2Together() {
  console.log("updating knit2together stitch")
  const {chart, ctx, cnv} = prepareRenderingContext();
  ctx.lineWidth = Math.ceil(chart.stitchPxSize / 25);
  ctx.lineCap = 'square';
  ctx.strokeStyle = "#000";
  const c = chart.stitchPxSize / 2;
  const wx = chart.stitchPxSize / 5;
  const wy = chart.stitchPxSize / 5;

  ctx.beginPath();
  ctx.moveTo(c - wx / 2, c + wy);
  ctx.lineTo(c + wx / 2, c - wy);
  ctx.stroke();

  chart.setStitchTemplate(Stitch.Knit2Together, cnv);
}