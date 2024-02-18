import {createOffscreenCanvas, useChart} from "../../state.ts";

export function prepareRenderingContext() {
  const chart = useChart();
  const cnv = createOffscreenCanvas()
  const ctx = cnv.getContext("2d");
  if (!ctx) throw new Error("Could not get 2d context");
  return {chart, cnv, ctx};
}