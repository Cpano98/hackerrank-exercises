function diagonalDifference(arr) {
  // Write your code here
  let counter = 0;
  let counterTwo = arr[0] - 1;
  let sumLeft = 0;
  let sumRight = 0;

  for (let i = 1; i <= arr.length - 1; i = i + arr[0]) {
    //console.log(arr[i+counter]);
    sumLeft = sumLeft + arr[i + counter];
    sumRight = sumRight + arr[i + counterTwo];
    counter += 1;
    counterTwo -= 1;
    //console.log('Count: ' + counter)
  }

  //console.log(sumLeft);
  //console.log(sumRight);

  return console.log(Math.abs(sumLeft - sumRight));
}

function diagonalDifference2(arr) {
  // Write your code here

  let sum1 = 0;
  let sum2 = 0;

  for (let i = 0; i < arr.length; i++) {
    sum1 += arr[i][i];
  }

  let j = arr.length - 1;
  for (let i = 0; i < arr.length; i++) {
    sum2 += arr[i][j];
    j--;
  }
  return Math.abs(sum1 - sum2);
}




diagonalDifference([3, 11, 2, 4, 4, 5, 6, 10, 8, -12]);
diagonalDifference([3, 1, 2, 3, 4, 5, 6, 9, 8, 9]);
