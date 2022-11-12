function findMedian(arr) {
  // Write your code here
  let newArr = arr.sort(function (a, b) {
    return a - b;
  });
  console.log(newArr);
  if (arr.lenght % 2 != 0) {
    return console.log(newArr[arr.length / 2 - 0.5]);
  }
}

findMedian([0, 1, 2, 4, 6, 5, 3]);
findMedian([2, 4, 6, 5, 3]);
