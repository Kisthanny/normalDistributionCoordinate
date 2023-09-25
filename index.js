function getCTX(canvasId) {
  const c = document.getElementById(canvasId);
  const ctx = c.getContext("2d");
  ctx.clearRect(0, 0, c.width, c.height);
  return ctx;
}
const ctx_1 = getCTX("canvas");
const ctx_2 = getCTX("canvas2");

function drawPoint(point, color, ctx_this) {
  // 获取画笔
  // 设置绘制颜色
  ctx_this.fillStyle = color;
  // 绘制成矩形
  ctx_this.fillRect(point.x - 2, point.y - 2, 4, 4);

  // 设置字体样式
  ctx_this.font = "16px bold 宋体";
  // 绘制文字
  // ctx_this.fillText("(" + point.x + ", " + point.y + ")", point.x, point.y);
  ctx_this.fillText("", point.x, point.y);
}

const arr = new Array(999).fill(0);
arr.map((e) => {
  const coordinate = window.getCoordinateInNormalDistribution(
    250,
    250,
    0,
    0,
    500,
    500,
    40,
    40
  );
  drawPoint({ x: coordinate[0], y: coordinate[1] }, "red", ctx_1);
  const flatCoordinate = window.getFlatCoordinate(0, 0, 500, 500);
  drawPoint({ x: flatCoordinate[0], y: flatCoordinate[1] }, "red", ctx_2);
});
