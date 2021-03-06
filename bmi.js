/*
The BMI is defined as the body mass divided by the square of the body height, and is universally expressed in units of kg/m2 (source: Wikipedia)

BMI = weight (kg) / (height * height (m))

Underweight < 18.5
Normal (healthy weight) 18.5 - 25
Overweight 25 - 30
Obesity > 30
*/

// global variable
var button, input;

// eventhandling
button = document.getElementById('submit');
button.addEventListener('click', calculateBMI);


function calculateBMI() {
  'use strict';
	// all logic goes here...
	//console.log('Function executed!');
	// preventing form submission
	event.preventDefault();
	// get form input
	input = document.getElementsByTagName('input');
	//console.log(input); // is array
	let w = input[0].value; //local variable let
 	let h = input[1].value;
	console.log('User input: ' + w + ', ' + h);
}
