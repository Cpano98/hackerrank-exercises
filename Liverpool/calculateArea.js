// Complete the calculateArea function below.
// It returns a Promise which on success, returns area of the shape, and on failure returns [-1].
let calculateArea = (shape, values) => {
  const newArea = {
    rectangle: (length, base) => {
      return length * base; //Calcualtes Rectangle's Area
    },
    square: (side) => {
      return Math.pow(side, 2); //Calculates Aquare's Area
    },
    circle: (radius) => {
      return 3.14 * Math.pow(radius, 2); //Calculates Circle's Area
    },
    triangle: (base, height) => {
      return (base * height) / 2; //Calcualtes Rectangle's Area
    },
  };

  return new Promise((resolve, reject) => {
    let noCorrectShape = "-1";

    if (Object.keys(newArea).includes(shape.toLowerCase())) {
      if (shape === "rectangle") {
        return resolve(newArea.rectangle(values[0], values[1])); //Calls the function to calculate Area for Rectangle
      } else if (shape === "square") {
        return resolve(newArea.square(values)); //Calls the function to calculate Area for Square
      } else if (shape === "circle") {
        return resolve(newArea.circle(values));
      } else if (shape === "triangle") {
        //Calls the function to calculate Area for Triangle
        return resolve(newArea.triangle(values[0], values[1]));
      } else {
        return noCorrectShape; //Return no shape variable
      }
    }
  });
};

// Complete the generateArea function below.
// It returns a Promise which on success, returns an array of areas of all the shapes and on failure, returns [-1].
let getAreas = async (shapes, values_arr) => {
  //Added Async to make it work...
  let newArea = []; //Add all areas to a empty array
  if (shapes.length === values_arr.length) { //See through all the available shapes
    for (let i = 0; i < shapes.length; i++) { //Calculate Areas for the available shapes
      const area = await calculateArea(shapes[i], values_arr[i]); //Promise
      Number.isInteger(area) ? newArea.push(area) : newArea.push(area.toFixed(1));
    }
    console.log(newArea)
    return newArea; //Result
  } else {
    return -1;
  }
};

let shapes = ["square", "rectangle", "triangle", "circle"];
let values_arr = [3, [3, 2], [2, 3], 5];

getAreas(shapes, values_arr);
