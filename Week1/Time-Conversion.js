function timeConversion(s) {
  // Write your code here
  let conversion = "";
  let splitTime = s.split(":");
  let lastElement = splitTime[2].includes("PM");

  //console.log(splitTime[2].includes("PM"));

  function removeLast(value) {
    return value.charAt(0) + value.charAt(1);
  }

  function createNewHour(a, b, c) {
    return a + ":" + b + ":" + c;
  }

  if (lastElement) {
    if (splitTime[0] == "12") {
      conversion = createNewHour("12", splitTime[1], removeLast(splitTime[2]));
    } else {
      let hourSum = parseInt(splitTime[0]) + 12;
      conversion = createNewHour(
        hourSum,
        splitTime[1],
        removeLast(splitTime[2])
      );
    }

    console.log(conversion);
    return conversion;
    
  } else {
    if (splitTime[0] == "12") {
      conversion = createNewHour("00", splitTime[1], removeLast(splitTime[2]));
    } else {
      conversion = createNewHour(
        splitTime[0],
        splitTime[1],
        removeLast(splitTime[2])
      );
    }
  }

  console.log(conversion);
  return conversion;
}

timeConversion("07:05:45PM");
timeConversion("07:05:45AM");

timeConversion("12:00:00PM");
timeConversion("12:00:00AM");

timeConversion("12:40:22AM");
timeConversion("12:45:54PM");
