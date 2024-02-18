import {prepareRenderingContext} from "./prepareRenderingContext.ts";
import {Stitch} from "../../stitch.ts";

export function registerPurlFrontBack() {
  console.log("updating purlFrontBack stitch")
  const {chart, ctx, cnv} = prepareRenderingContext();
  ctx.lineWidth = Math.ceil(chart.stitchPxSize / 25);
  ctx.lineCap = 'square';
  ctx.strokeStyle = "#000";
  ctx.fillStyle = "#000";
  const c = chart.stitchPxSize / 2;
  const wx = chart.stitchPxSize / 5;
  const wy = chart.stitchPxSize / 5;
  const d = chart.stitchPxSize / 4;
  const r = d / 2;

  ctx.roundRect(c - r, c-r - r, d, d, c);
  ctx.fill();

  ctx.beginPath();
  ctx.moveTo(c - wx, c - wy);
  ctx.lineTo(c, c + wy);
  ctx.lineTo(c + wx, c - wy);
  ctx.stroke();

  chart.setStitchTemplate(Stitch.PurlFrontBack, cnv);
}