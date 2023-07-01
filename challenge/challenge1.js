// Prompt the user to enter student marks
const prompt = require ("prompt-sync")({sigint: true})
var marks = prompt("Enter student marks (between 0 and 100):");

// Convert the input to a number
marks = parseInt(marks);

// Check the range of marks and assign the grade
var grade;
if (marks > 79) {
  grade = "A";
} else if (marks >= 60 && marks <= 79) {
  grade = "B";
} else if (marks >= 50 && marks <= 59) {
  grade = "C";
} else if (marks >= 40 && marks <= 49) {
  grade = "D";
} else {
  grade = "E";
}

// Output the grade
console.log("Grade: " + grade);