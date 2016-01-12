var result = 1;
for(i=2; i<=501; i++){
  result = result + (2*i-1)*(2*i-1);
  result = result + (2*i-1)*(2*i-1) - 2*(i-1);
  result = result + (2*i-1)*(2*i-1) - 4*(i-1);
  result = result + (2*i-1)*(2*i-1) - 6*(i-1);
}

console.log(result);
