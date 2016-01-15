var value = [1];

for(i=1; i<=1000; i++){
  for(j=0; j<value.length; j++){
    value[j] = value[j] * 2;
  }
  for(j=0; j<value.length; j++){
    if(value[j] >= 10){
      if(value[j+1] == undefined){
        value[j+1] = parseInt(value[j] / 10);
      }
      else{
        value[j+1] += parseInt(value[j] / 10);
      }
      value[j] = value[j] % 10;
    }
  }
}

var result = 0;
for(a=0; a<value.length; a++){
  result = result + value[a];
}
console.log(result);
