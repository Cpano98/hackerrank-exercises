function matchingStrings(strings, queries) {
  // Write your code here
  let results = [];
  let frequency = 0;

  for (let i = 0; i < queries.length; i++) {
    for (let x = 0; x < strings.length; x++) {
        if(strings[x]==queries[i]){
            frequency += 1;
        }
    }

    results.push(frequency);
    frequency = 0;
  }

  console.log(results)

  return results;
}

matchingStrings(["ab", "ab", "abc"], ["ab", "abc", "bc"]);
