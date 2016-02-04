var array = new Array(100000);

for(i=2; i<Math.sqrt(100000); i++){
  if(array[i] == undefined){
    for(j=i+i; j<100000; j = j + i){
      array[j] = false;
    }
  }
}

var primesUnderThousand = [];
for(i=2; i<1000; i++){
  if(array[i] == undefined){
    primesUnderThousand.push(i);
  }
}

var maxCount = 0;
var maxab;
for(i in primesUnderThousand){
  var b = primesUnderThousand[i];
  for(a = 2 - b; a<1000; a++){
    var count = 0;
    var n = 0;
    while(n*n + a*n + b > 0 && array[n*n + a*n + b] == undefined){
      count = count + 1;
      if(count > maxCount){
        maxCount = count;
        maxab = a * b;
      }
      n = n + 1;
    }
  }
}
var result = maxab;
console.log(result);
