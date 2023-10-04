function positiveSum(arr) {
    return arr.map(num => num > 0 ? num : 0).reduce((a,b) => a+b);
    
  }
  
  console.log(positiveSum([-1, 4, 6,]))
  
  // reduce https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/Reduce
  // use map, to loop through each item in array, and return 0 if the number is 0 or less, and then use a reduce method to use a callback function on each element of the array to sum the values. 
  
  const array1 = [1, 2, 3, 4];
  
  // 0 + 1 + 2 + 3 + 4
  const initialValue = 0;
  const sumWithInitial = array1.reduce((accumulator, currentValue) => accumulator + currentValue, initialValue);
  
  console.log(sumWithInitial);
  // Expected output: 10