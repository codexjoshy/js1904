// 1.
// a. Create an HTML (index.html) and a JavaScript (script.js) file in the root folder (function)
// b. In the index.html file, link the two files together just before the closing body tag, using the script tag <script src="script.js"></script>.
// c. Write a function named calculateTrapezium with 3 parameters:
// firstLength – the longer length
// secondLength – the shorter length
// height – the height

let calculateTrapezium = (firstLength, secondLength, height) => {
  return (answer = (1 / 2) * (firstLength + secondLength) * height);
};

// d. Then, calculate the area of a trapezium where a = 20cm, b = 14cm and h = 12cm.
// e. Use this formula A = ½(a+b)h
// f. Return the result of your calculation.

let finalAnswer = calculateTrapezium(20, 14, 12);
console.log(finalAnswer);

// g. Supply 3 arguments to the calculateTrapezium function, and call it 3 times in the
// document.write() method

for (i = 0; i <= 2; i++) {
  document.write(`<h1>${finalAnswer}</h1>`);
}
// h. Save your index.html and script.js files.
// f. Launch your index.html file on your preferred browser.
// 2.
// a. Still in your script.js file in your function folder, using the problem in chapter 4, create a
// function named AgeRange with 2 parameters: age and name
//------------c.
// From the ranges 0-12, 13-19, 20-29, 30-45, 46-55, 56-70, 71-90, 90-110, check where the age of your President     falls.
// d. The final result should look like this: "My President's age is 20 and falls within the range
// 20-29".
// Hint: The President's age should be assigned to a variable
// Compare the variable with the given ranges in the “if and else…if” blocks.
// In each of the block, output their corresponding result like document.write("My President's age is "+presidentAge+" and falls within the range 20-29")

let ageRange = (age, name) => {
  if (age >= 0 && age <= 12) {
    return `President ${name}'s age is ${age} and falls within the range 0 - 12`;
  } else if (age >= 13 && age <= 19) {
    return `President ${name}'s age is ${age} and falls within the range 13 - 19`;
  } else if (age >= 20 && age <= 29) {
    return `President ${name}'s age is ${age} and falls within the range 20 - 29`;
  } else if (age >= 30 && age <= 35) {
    return `President ${name}'s age is ${age} and falls within the range 30 - 35`;
  } else if (age >= 46 && age <= 55) {
    return `President ${name}'s age is ${age} and falls within the range 46 - 55`;
  } else if (age >= 56 && age <= 70) {
    return `President ${name}'s age is ${age} and falls within the range 56 - 70`;
  } else if (age >= 71 && age <= 90) {
    return `President ${name}'s age is ${age} and falls within the range 71 - 90`;
  } else if (age > 90 && age <= 110) {
    return `President ${name}'s age is ${age} and falls within the range 90 - 110`;
  }
};

let finalName = ageRange(76, "Muhammadu Buhari");

for (j = 0; j <= 2; j++) {
  document.write(`<h1>${finalName}</h1>`);
}

console.log(ageRange(76, "Buhari"));

// b. Return the result
// c. Supply two arguments to the ageRange function, and call it 3 times in the document.write() method
// d. Save your index.html and script.js files.
// e. Launch your index.html file on your preferred browser.
// 3.
// a. Still in your script.js file in your function folder, using the problem in number 1 of chapter 5,
// create a function named reverseString with 1 parameter:
// b. Return the result (Note: the reversed string should be in uppercase)
// c. Supply an argument to the reverseString function, and call it 3 times in the document.write() method

let reverseString = str => {
  let revWord = "";
  for (let k = str.length - 1; k >= 0; k--) {
    revWord += str[k];
  }

  return revWord.toUpperCase();
};

let revAnswer = reverseString("i enjoy coding at alabian solutions");

for (l = 0; l <= 2; l++) {
  document.write(`<h1>${revAnswer}</h1>`);
}

// d. Save your index.html and script.js files.
// e. Launch your index.html file on your preferred browser.
// Bonus: Using callback function, call the reverseString() function in the ageRange() function
// The result should look like this: "92-02 egnar eht nihtiw sllaf dna 22 si ega s'tnediserP yM"

document.write(`<h1>${reverseString(finalName)}</h1>`);
