function miniMaxSum(arr) {
  let newArr = arr.sort((a, b) => a - b);
  let n = newArr.length - 1;

  let mini = newArr.reduce((a, b, i) => {
    if (i == n) return a;
    return a + b;
  });
  let max = newArr.reduceRight((a, b, i) => {
    if (i == 0) return a;
    return a + b;
  });
  return console.log(mini, max);
}

miniMaxSum([1, 3, 5, 7, 9]);
miniMaxSum([1, 2, 3, 4, 5]);
