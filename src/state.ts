import {defineStore} from "pinia";
import {Stitch} from "./stitch.ts";

export function createOffscreenCanvas() {
  const chart = useChart();
  const offscreenCanvas = document.createElement("canvas").transferControlToOffscreen();
  offscreenCanvas.width = chart.stitchPxSize;
  offscreenCanvas.height = chart.stitchPxSize;
  offscreenCanvas.getContext("2d");
  return offscreenCanvas;
}

const empty: CanvasImageSource = (()=>{
  const canvas = document.createElement("canvas").transferControlToOffscreen();
  canvas.getContext("2d")
  return canvas.transferToImageBitmap();
})();

export const useChart = defineStore("chart", {


  state: () => {
    const chartWidth = 10;
    const chartHeight = 5;
    const selectedStitch = Stitch.Knit;
    const data = new Array<Array<Stitch>>(5)
      .fill([])
      .map((_value, i) => i)
      .map((y) => new Array<Stitch>(10)
        .fill(Stitch.Empty)
        .map((_value, i) => i)
        .map((x) => x % chartWidth + (y % chartHeight) * chartWidth)
        .map((x) => x < Object.values(Stitch).length ? Object.values(Stitch)[x] : Stitch.Empty)
      );
    const stitches:{ [key in Stitch]: CanvasImageSource } = {
      [Stitch.Empty]: empty,
      [Stitch.Knit]: empty,
      [Stitch.Purl]: empty,
      [Stitch.YarnOver]: empty,
      [Stitch.Knit2Together]: empty,
      [Stitch.Purl2Together]: empty,
      [Stitch.SlipKnitPass]: empty,
      [Stitch.SlipPurlPass]: empty,
      [Stitch.KnitFrontBack]: empty,
      [Stitch.PurlFrontBack]: empty,
      [Stitch.Knit3Together]: empty,
      [Stitch.Purl3Together]: empty,
    };
    const stitchPxSize = 256;
    return ({stitchPxSize, chartWidth, chartHeight, data, stitches, selectedStitch});
  },
  actions: {
    setChartWidth(width: number) {
      if (!Number.isSafeInteger(width)) return;
      this.chartWidth = width;
      if (this.data[0].length < width) {
        this.data = this.data.map((row) => row.concat(new Array(width - row.length).fill(Stitch.Empty)));
      } else if (this.data[0].length > width) {
        this.data = this.data.map((row) => row.slice(0, width));
      }
    },
    setChartHeight(height: number) {
      if (!Number.isSafeInteger(height)) return;
      this.chartHeight = height;
      if (this.data.length < height) {
        this.data.push(...new Array(height - this.data.length).fill([]).map(() => new Array(this.chartWidth).fill(Stitch.Empty)));
      } else if (this.data.length > height) {
        this.data.splice(height);
      }
    },
    setStitchPxSize(px: number){
      if (!Number.isSafeInteger(px)) return;
      this.stitchPxSize = px;
    },
    setStitch(x: number, y: number, stitch: Stitch) {
      if (this.data[y][x] !== stitch) this.data[y][x] = stitch;
    },
    setStitchTemplate(stitch: Stitch, img: CanvasImageSource) {
        this.stitches[stitch] = img;
    },
    setSelectedStitch(stitch: Stitch) {
      this.selectedStitch = stitch;
    }
  }
})
