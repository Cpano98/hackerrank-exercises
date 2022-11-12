function divisibleSumPairs(n, k, ar) {
  // Write your code here
  let pairs = 0;
  let sum = 0;

  for (let i = 0; i < n; i++) {
    for (let j = 0; j < n; j++) {
      sum = ar[i] + ar[j];
      if (sum % k === 0 && i < j) {
        //console.log(ar[j], ar[i])
        pairs++;
      }
    }
  }

  //console.log(listOfPairs)

  return pairs;
}

//divisibleSumPairs(6, 5, [1, 2, 3, 4, 5, 6])
console.log(divisibleSumPairs(6, 5, [1, 2, 3, 4, 5, 6]));
console.log(divisibleSumPairs(6, 3, [1, 3, 2, 6, 1, 2]));
