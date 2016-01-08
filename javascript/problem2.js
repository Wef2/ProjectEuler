var result = 0;
var index = 0;

function fibonacci(n){
  if(n==1){
    return 1;
  }
  else if(n==2){
    return 2;
  }
  else{
    return fibonacci(n-2) + fibonacci(n-1);
  }
}

while(true){
    index = index + 1;
    if(fibonacci(index) < 4000000){
      if(fibonacci(index)%2==0){
        result = result + fibonacci(index);
      }
    }
    else{
      break;
    }
}

console.log(result);
