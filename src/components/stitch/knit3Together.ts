import {prepareRenderingContext} from "./prepareRenderingContext.ts";
import {Stitch} from "../../stitch.ts";

export function registerKnit3Together() {
  console.log("updating knit3Together stitch")
  const {chart, ctx, cnv} = prepareRenderingContext();
  ctx.lineWidth = Math.ceil(chart.stitchPxSize / 25);
  ctx.strokeStyle = "#000";
  ctx.lineJoin = 'bevel';
  ctx.lineCap = 'square';
  const c = chart.stitchPxSize / 2;
  const wx = chart.stitchPxSize / 5;
  const wy = chart.stitchPxSize / 5;

  ctx.beginPath();
  ctx.moveTo(c - wx, c + wy);
  ctx.lineTo(c, c - wy);
  ctx.lineTo(c + wx, c + wy);
  ctx.stroke();

  ctx.lineCap = 'butt';
  ctx.beginPath();
  ctx.moveTo(c, c - wy);
  ctx.lineTo(c, c);
  ctx.stroke();
  ctx.lineCap = 'square';
  ctx.beginPath();
  ctx.moveTo(c, c);
  ctx.lineTo(c, c + wy);
  ctx.stroke();

  chart.setStitchTemplate(Stitch.Knit3Together, cnv);
}