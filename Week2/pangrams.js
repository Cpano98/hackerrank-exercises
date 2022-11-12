function pangrams(s) {
  // Write your code here
  let noSpace = s.replace(/\s+/g, "").toLowerCase(); //Removing spaces and setting all to Lower case

  let uniqueCount = new Set(noSpace).size;

  if (uniqueCount === 26) {
    return console.log("pangram");
  } else return console.log("not pangram");
}

pangrams("We promptly judged antique ivory buckles for the next prize");
pangrams("We promptly judged antique ivory buckles for the prize");
