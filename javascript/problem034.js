function factorial(n){
  var value = 1;
  for(i=1;i<=n;i++){
    value = value * i;
  }
  return value;
}

var result = 0;

for(a=10; a<999999; a++){
    var sum = 0;
    var str = a.toString();
    for(b=0; b<str.length; b++){
      sum += factorial(parseInt(str.charAt(b)));
    }
    if(a == sum){
      result += a;
    }
}

console.log(result);
