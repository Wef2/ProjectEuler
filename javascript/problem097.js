var result = 28433;

for(i=1; i<=7830457; i++){
  result = result * 2;
  var str = result.toString();
  if(str.length > 10){
    str = str.substring(1,11);
    result = parseInt(str);
  }
}

result = result + 1;

console.log(result);
