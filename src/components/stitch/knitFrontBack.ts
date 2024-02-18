import {prepareRenderingContext} from "./prepareRenderingContext.ts";
import {Stitch} from "../../stitch.ts";

export function registerKnitFrontBack() {
  console.log("updating knitFrontBack stitch")
  const {chart, ctx, cnv} = prepareRenderingContext();
  ctx.lineWidth = Math.ceil(chart.stitchPxSize / 25);
  ctx.lineCap = 'square';
  ctx.lineJoin = 'bevel';
  ctx.strokeStyle = "#000";
  const c = chart.stitchPxSize / 2;
  const wx = chart.stitchPxSize / 5;
  const wy = chart.stitchPxSize / 5;

  ctx.beginPath();
  ctx.moveTo(c - wx, c - wy);
  ctx.lineTo(c, c + wy);
  ctx.lineTo(c + wx, c - wy);
  ctx.stroke();


  chart.setStitchTemplate(Stitch.KnitFrontBack, cnv);
}