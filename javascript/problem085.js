function countRectangles(x, y){
  var count = 0;
  for(i=1; i<=x; i++){
    for(j=1; j<=y; j++){
      count = count + (x + 1 - i)*(y + 1 - j);
    }
  }
  return count;
}

var nearestX = 0;
var nearestY = 0;
var nearestValue = 2000000;

for(a=1; a<100; a++){
  for(b=1; b<100; b++){
    var value = countRectangles(a, b) - 2000000;
    if(value < 0){
      value = value * (-1);
    }
    if(value < nearestValue){
      nearestValue = value;
      nearestX = a;
      nearestY = b;
    }
  }
}

var result = nearestX * nearestY;

console.log(result);
