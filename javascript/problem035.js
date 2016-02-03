var array = new Array(1000000);

for(i=2; i<Math.sqrt(1000000); i++){
  if(array[i] == undefined){
    for(j=i+i; j<1000000; j = j + i){
      array[j] = false;
    }
  }
}

function isCircularPrime(n){
  var str = n.toString();
  for(a=0; a<str.length - 1; a++){
    var tempStr = str.substring(a+1, str.length) + str.substring(0, a+1);
    var tempValue = parseInt(tempStr);
    if(array[tempValue] != undefined){
      return false;
    }
  }
  return true;
}

var result = 0;
for(i=2; i<1000000; i++){
  if(array[i] == undefined && isCircularPrime(i)){
    result = result + 1;
  }
}

console.log(result);
