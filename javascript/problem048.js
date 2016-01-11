function lastTen(n){
  var value = 1;
  for(i=1; i<=n; i++){
    value = value * n;
    var str = value.toString();
    if(str.length > 10){
      str = str.substring(str.length-10,str.length);
      value = parseInt(str);
    }
  }
  return value;
}

var result = 0;

for(a=1; a<=1000; a++){
  result = result + lastTen(a);
}
var resultstr = result.toString();
resultstr = resultstr.substring(resultstr.length-10, resultstr.length);
result = parseInt(resultstr);

console.log(result);
