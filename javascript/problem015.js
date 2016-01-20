function factorial(n){
  var value = 1;
  for(i=1; i<=n; i++){
    value = value * i;
  }
  return value;
}

function path(x, y){
  return factorial(x+y)/(factorial(x)*factorial(y));
}

result = path(20, 20);
console.log(result);
