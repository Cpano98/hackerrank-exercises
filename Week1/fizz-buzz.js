function fizzBuzz(n) {
  // Write your code here
  let result = "";

  for (let i = 1; i < n; i++) {
    if (i % 15 == 0) {
      result = "FizzBuzz" + " ";
      console.log(result)
    } else if (i % 3 == 0) {
      result = "Fizz" + " ";
      console.log(result)
    } else if (i % 5 == 0) {
      result = "Buzz" + " ";
      console.log(result)
    } else {
      result = i + " ";
      console.log(result)
    }
  }

}



fizzBuzz(15)