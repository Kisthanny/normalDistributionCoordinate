function getNumberInNormalDistribution(
  mean,
  std_dev,
  max = undefined,
  min = undefined
) {
  if (!isNaN(max) && max < mean) {
    throw new Error(`最大值max(${max})不可小于均值mean(${mean})`);
  }
  if (!isNaN(min) && min > mean) {
    throw new Error("最小值min不可大于均值mean");
  }
  const value = mean + randomNormalDistribution() * std_dev;
  if (isNaN(max) && isNaN(min)) {
    return value;
  } else if (!isNaN(max) && value > max) {
    return getNumberInNormalDistribution(mean, std_dev, max, min);
  } else if (!isNaN(min) && value < min) {
    return getNumberInNormalDistribution(mean, std_dev, max, min);
  } else {
    return value;
  }
}

function randomNormalDistribution() {
  let u = 0.0;
  let v = 0.0;
  let w = 0.0;
  let c = 0.0;
  do {
    //获得两个（-1,1）的独立随机变量
    u = Math.random() * 2 - 1.0;
    v = Math.random() * 2 - 1.0;
    w = u * u + v * v;
  } while (w === 0.0 || w >= 1.0);
  //这里就是 Box-Muller转换
  c = Math.sqrt((-2 * Math.log(w)) / w);
  //返回2个标准正态分布的随机数，封装进一个数组返回
  //当然，因为这个函数运行较快，也可以扔掉一个
  //return [u*c,v*c];
  return u * c;
}

function getCoordinateInNormalDistribution(
  mean_x,
  mean_y,
  min_x,
  min_y,
  max_x,
  max_y,
  std_dev_x,
  std_dev_y
) {
  const value_x = getNumberInNormalDistribution(
    mean_x,
    std_dev_x,
    max_x,
    min_x
  );
  const value_y = getNumberInNormalDistribution(
    mean_y,
    std_dev_y,
    max_y,
    min_y
  );
  return [Math.round(value_x), Math.round(value_y)];
}

function getFlatCoordinate(min_x, min_y, max_x, max_y) {
  const range_x = max_x - min_x;
  const range_y = max_y - min_y;
  const value_x = min_x + Math.random() * range_x;
  const value_y = min_y + Math.random() * range_y;
  return [value_x, value_y];
}
