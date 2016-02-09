var index = 1;
var productPosition = 1;
var totalLength = 0;
var result = 1;

while(productPosition<10000000){
  strIndex = index.toString();
  for(i = 0; i<strIndex.length; i++){
    totalLength = totalLength + 1;
    if(totalLength == productPosition){
      result = result * parseInt(strIndex.charAt(i));
      productPosition = productPosition * 10;
    }
  }
  index = index + 1;
}

console.log(result);
