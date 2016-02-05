var array = new Array(200000);

for(i=2; i<Math.sqrt(200000); i++){
  if(array[i] == undefined){
    for(j=i+i; j<200000; j = j + i){
      array[j] = false;
    }
  }
}

var count = 0;
var index = 1;
while(count < 10001){
  index = index + 1;
  if(array[index] == undefined){
    count = count + 1;
  }
}
var result = index;

console.log(result);
