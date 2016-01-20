var triangularNumber;
var pentagonalNumber;
var hexagonalNumber;

function getTriangular(n){
  return (n*n + n)/2;
}

function getPentagonal(n){
  return (3*n*n - n)/2
}

function getHexagonal(n){
  return 2*n*n - n;
}

var indexT = 1;
var indexP = 1;
var indexH = 1;
var count = 0;

while(count < 3){
  triangularNumber = getTriangular(indexT);
  pentagonalNumber = getPentagonal(indexP);
  hexagonalNumber = getHexagonal(indexH);
  while(pentagonalNumber != hexagonalNumber){
    if(pentagonalNumber > hexagonalNumber){
      indexH = indexH + 1;
      hexagonalNumber = getHexagonal(indexH);
    }
    else if(hexagonalNumber > pentagonalNumber){
      indexP = indexP + 1;
      pentagonalNumber = getPentagonal(indexP);
    }
  }
  if(triangularNumber < pentagonalNumber){
    indexT = indexT + 1;
    triangularNumber = getTriangular(indexT);
  }
  else if(triangularNumber == pentagonalNumber){
    count = count + 1;
    indexT = indexT + 1;
    indexP = indexP + 1;
    indexH = indexH + 1;
  }
  else{
    indexT = indexT + 1;
    indexP = indexP + 1;
    indexH = indexH + 1;
  }
}

var result = triangularNumber;
console.log(result);
