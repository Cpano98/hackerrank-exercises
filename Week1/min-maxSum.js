function miniMaxSum(arr) {
  // Write your code here
  //console.log(arr);

  let minSum = 0;
  let maxSum = 0;
  let values = [];

  for (let i = 0; i < arr.length; i++) {
    let sum = 0;
    for (let j = 0; j < arr.length; j++) {
      if (arr[i] === arr[j]) {
        sum = sum;
      } else {
        sum = sum + arr[j];
      }
    }
    //console.log(sum)
    values.push(sum);
  }
  minSum = Math.min(...values);
  maxSum = Math.max(...values);
  //console.log(values)
  //values = [Math.min(...values), Math.max(...values)];

  return console.log(minSum, maxSum);
}

miniMaxSum([1, 3, 5, 7, 9]);
miniMaxSum([1, 2, 3, 4, 5]);
