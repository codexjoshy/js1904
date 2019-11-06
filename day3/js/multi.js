// const family = ["father", "mother", ["dara", "uche", "ayo"], ["joe", "josh"]];

// const [, , children] = family;
// const [, , getCh] = family;
// const [, , getAy] = getCh;
// console.log(getAy);

// function callName(name1) {
//   if (name1 != "") {
//     console.log(`Welcome ${String(name1)} to my website`);
//   } else {
//     console.log(`Please enter a name`);
//   }
// }

// callName("Yinka");
// callName();

// let name = "";
// if (name != "") {
//   console.log(`welcome ${name} to my website`);
// } else {
//   console.log(`Please provide a name`);
// }
// add();
// FUNCTION --------------------------------------------------------------
// function showName() {
//   let myName = "joe";
//   alert(myName);
// }

// function add() {
//   let [num1, num2] = [2, 5];
//   return num2 + num1;
// }

// let subtract = function() {
//   let [num1, num2] = [8, 5];
//   console.log(num2 - num1);
// };

// let addition = add();
// console.log(addition);

// let subb = function(numb1, numb2) {
//   return numb2 - numb1;
// };

// let subb1 = subb(5, 19);
// console.log(subb1);

// ARROW FUNCTIONS

// let multiply = (mul1, mul2) => {
//   return mul1 * mul2;
// };

// console.log(multiply(10, 20));

// let modulus = (num1, num2) => num2 % num1;

// console.log(modulus(2, 31));

// let anyName = aName => `my name is ${aName}`;

// console.log(anyName("Yinka"));

let fullName = (fName, lName) => `my fullname is ${fName} ${lName}`;

myfName = fullName("Yinka", "joe");
console.log(myfName);

// CALLBACKS---------------------------------------------------------------------------

// CLASSES-----------------------------------------------------------------------------

class Human {
  constructor(aName, anAge) {
    this.name = aName;
    this.age = anAge;
  }
}

let newStudent = new Human("Josh", 29);
console.log(
  `My name is ${newStudent.name} and I am ${newStudent.age} years old`
);
