var result = 0;
for(i=0; i<1000; i++){
  if(i % 3 == 0){
    result = result + i;
  }
  else if(i % 5 == 0){
    result = result + i;
  }
}
console.log(result);
