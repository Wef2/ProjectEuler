var array = new Array(2000000);

for(i=2; i<Math.sqrt(2000000); i++){
  if(array[i] == undefined){
    for(j=i+i; j<2000000; j = j + i){
      array[j] = false;
    }
  }
}

var result = 0;
for(i=2; i<2000000; i++){
  if(array[i] == undefined){
    result = result + i;
  }
}

console.log(result);
