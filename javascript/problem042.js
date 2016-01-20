var fs = require('fs');

var data = fs.readFileSync('../textfiles/problem042.txt', 'utf8');
var wordArray = data.split(',');
var array = wordArray.sort();


triangularNumber = [];

function setTriangularNumber(n){
  triangularNumber.push((n*n + n)/2);
}

function getValueFromWord(word){
  var value = 0;
  for(a=1; a<word.length-1; a++){
    value = value + word.charCodeAt(a) - 64;
  }
  return value;
}

for(i=1; i<20; i++){
  setTriangularNumber(i);
}

var result = 0;

for(i=0; i<array.length; i++){
  if(triangularNumber.indexOf(getValueFromWord(array[i])) != -1){
    result = result + 1;
  }
}

console.log(result);
