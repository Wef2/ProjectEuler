function d(n){
  var value = 0;
  for(i=1; i<n; i++){
    if(n % i == 0){
      value = value + i;
    }
  }
  return value;
}

var result = 0;

for(a=2; a<=10000; a++){
  if(a != d(a) && a == d(d(a))){
    result = result + a;
  }
}

console.log(result);
