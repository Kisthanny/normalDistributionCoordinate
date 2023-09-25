# 师爷，翻译翻译
import random
import math
def randomNormalDistribution():
  u = 0.0
  v = 0.0
  w = 0.0
  c = 0.0
  while(w==0.0 or w>=1.0):
    u = random.random() * 2 - 1.0
    v = random.random() * 2 - 1.0
    w = u * u + v * v
  c = math.sqrt((-2 * math.log(w)) / w)
  return u * c

def getNumberInNormalDistribution(mean, std_dev, max = None, min = None):
  if (max != None) and (max < mean):
    raise Exception(f"最大值max({max})不可小于均值mean({mean})")
  if (min != None) and (min > mean):
    raise Exception(f"最小值min({min})不可大于均值mean({mean})")
  value = mean + randomNormalDistribution() * std_dev
  if (max == None) and (min == None):
    return value
  elif (max != None) and (value > max):
    return getNumberInNormalDistribution(mean, std_dev, max, min)
  elif (min != None) and (value < min):
    return getNumberInNormalDistribution(mean, std_dev, max, min)
  else:
    return value

def getCoordinateInNormalDistribution(
  mean_x,
  mean_y,
  min_x,
  min_y,
  max_x,
  max_y,
  std_dev_x,
  std_dev_y
):
  value_x = getNumberInNormalDistribution(
    mean_x,
    std_dev_x,
    max_x,
    min_x
  )
  value_y = getNumberInNormalDistribution(
    mean_y,
    std_dev_y,
    max_y,
    min_y
  )
  
  return [round(value_x), round(value_y)]

def main():
  coordinateList = []
  for i in range(999):
    coordinate = getCoordinateInNormalDistribution(
      250,
      250,
      0,
      0,
      500,
      500,
      40,
      40
    )
    coordinateList.append([coordinate[0], coordinate[1]])
  print(coordinateList)

main()