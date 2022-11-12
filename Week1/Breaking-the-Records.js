function breakingRecords(scores) {
  // Write your code here
  let records = [];

  let higherScore = scores[0];
  let lowerScore = scores[0];
  let min = 0;
  let max = 0;

  for (let i = 0; i < scores.length; i++) {
    if (scores[i] > higherScore) {
      higherScore = scores[i];
      max = max + 1;
    } else if (scores[i] < lowerScore) {
      lowerScore = scores[i];
      min = min + 1;
    }
  }

  records = [max, min];

  console.log(records);
  return records;
}

breakingRecords([10, 5, 20, 20, 4, 5, 2, 25, 1]);
