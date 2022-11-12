function getMinSubsequences(input_str) {
  // Write your code here
  let splitCount = [];

  for (let i = 0; i < input_str.length; i++) {
    //Iteration on the complete String

    for (let j = 0; j < input_str.length; j--) {
      //Startinf from the end
      let newSequence = input_str.substr(i, i + j);
      splitCount.push(newSequence);
    }
  }

  //Remove duplicates from the SplitCount array
  

  return console.log(splitCount);
}

getMinSubsequences("11001010");
