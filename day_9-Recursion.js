function factorial(n) {
  // Complete this function
  var result = 1;
  for (i = n; i >= 1; i--) {
    result *= i
  }
  return result
}

// Using recursion, answer should be like -

function factorial(n) {
    if(n>=1){
        return (n*factorial(n-1));
    }else {
        return 1;
    }
}
