var fs = require('fs');

var data = fs.readFileSync('../textfiles/problem022.txt', 'utf8');
var nameArray = data.split(',');
var array = nameArray.sort();

function getScore(name, order){
  var score = 0;
  for(a=1; a<name.length-1; a++){
    score = score + name.charCodeAt(a) - 64;
  }
  return score * order;
}

var result = 0;
var index = 0;

for(i=0; i<array.length; i++){
  index = index + 1;
  result = result + getScore(array[i], index);
}

console.log(result);
