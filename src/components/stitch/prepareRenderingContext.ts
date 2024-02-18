import {createOffscreenCanvas, useChart} from "../../state.ts";

export function prepareRenderingContext() {
  const chart = useChart();
  const cnv = createOffscreenCanvas()
  const ctx = cnv.getContext("2d");
  if (!ctx) throw new Error("Could not get 2d context");
  ctx.fillStyle = '#fff'
  ctx.fillRect(0,0, cnv.width, cnv.height);
  ctx.strokeStyle = "#000";
  ctx.fillStyle = "#000";
  return {chart, cnv, ctx};
}