var array = new Array(1000000);
array[1] = false;

for(i=2; i<Math.sqrt(1000000); i++){
  if(array[i] == undefined){
    for(j=i+i; j<1000000; j = j + i){
      array[j] = false;
    }
  }
}

function isTruncatable(n){
  var str = n.toString();
  for(a=1; a<str.length; a++){
    var tempStr1 = str.substring(0, a);
    var tempStr2 = str.substring(a, str.length)
    var tempValue1 = parseInt(tempStr1);
    var tempValue2 = parseInt(tempStr2);
    if(array[tempValue1] != undefined || array[tempValue2] != undefined){
      return false;
    }
  }
  return true;
}

var result = 0;
var count = 0;
var index = 10;
while(count < 11){
  if(array[index] == undefined && isTruncatable(index)){
    result = result + index;
    count = count + 1;
  }
  index = index + 1;
}

console.log(result);
