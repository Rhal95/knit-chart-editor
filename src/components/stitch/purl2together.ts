import {prepareRenderingContext} from "./prepareRenderingContext.ts";
import {Stitch} from "../../stitch.ts";

export function registerPurl2Together() {
  console.log("updating purl2together stitch")
  const {chart, ctx, cnv} = prepareRenderingContext();
  ctx.lineWidth = Math.ceil(chart.stitchPxSize / 25);
  ctx.lineCap = 'square';
  ctx.strokeStyle = "#000";
  const c = chart.stitchPxSize / 2;
  const wx = chart.stitchPxSize / 5;
  const wy = chart.stitchPxSize / 5;
  const d = chart.stitchPxSize / 4;
  const r = d / 2;
  ctx.beginPath();
  ctx.moveTo(c, c - wy);
  ctx.lineTo(c - wx, c + wy);
  ctx.stroke();
  ctx.roundRect(c - r, c, d, d, c);
  ctx.fill();


  chart.setStitchTemplate(Stitch.Purl2Together, cnv);
}