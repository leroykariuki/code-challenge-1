const prompt = require ("prompt-sync")({sigint: true})

// Prompt the user to enter the speed of the car
var speed = prompt("Enter the speed of the car:");

// Convert the input to a number
speed = parseInt(speed);

// Define the speed limit and the demerit points threshold
var speedLimit = 70;
var demeritPointsThreshold = 12;

// Calculate the demerit points based on the speed
var demeritPoints = 0;

if (speed < speedLimit) {
  console.log("Points: " + demeritPoints);
} else {
  // Calculate the number of demerit points
  demeritPoints = Math.floor((speed - speedLimit) / 5);

  if (demeritPoints > demeritPointsThreshold) {
    console.log("License suspended");
  } else {
    console.log("Points: " + demeritPoints);
  }
}