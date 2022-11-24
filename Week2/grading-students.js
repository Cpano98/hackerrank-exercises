function gradingStudents(grades) {
  return grades.map((grade) =>
    grade > 37 && grade % 5 >= 3 ? grade - ((grade % 5) - 5) : grade
  );
}

console.log(gradingStudents([4, 73, 67, 38, 33]));
