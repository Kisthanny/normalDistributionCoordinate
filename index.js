function getCTX() {
  let c = document.getElementById("canvas");
  let ctx = c.getContext("2d");
  ctx.clearRect(0, 0, c.width, c.height);
  return ctx;
}
let ctx = getCTX();

function drawPoint(point, color) {
  // 获取画笔
  // 设置绘制颜色
  ctx.fillStyle = color;
  // 绘制成矩形
  ctx.fillRect(point.x - 2, point.y - 2, 4, 4);

  // 设置字体样式
  ctx.font = "16px bold 宋体";
  // 绘制文字
  // ctx.fillText("(" + point.x + ", " + point.y + ")", point.x, point.y);
  ctx.fillText("", point.x, point.y);
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
    50,
    50
  );
  drawPoint({x:coordinate[0], y:coordinate[1]}, "red");
});
