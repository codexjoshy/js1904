let name = "Kcipher";
let street = "No 3, Ikeja Lagos";
let aboutMe = "I have keen passion to be a Web Developer,";
let fun = " Its really getting interesting as I proceed.";
let web = "Web Development at Alabian Solutions";
let moreAbout = "a reputable"  
console.log(`<strong>A brief composition about myself.</strong>\n My name 
 is ${name}, i'm resident at ${street}\n and ${aboutMe} that's why i'm learning\n ${web}, ${moreAbout} web Development
 School in Lagos. ${fun}`);
document.write(`<strong>A brief composition about myself.</strong>\n My name 
 is ${name}, i'm resident at ${street}\n and ${aboutMe} that's why i'm learning\n ${web}, ${moreAbout} web Development
 School in Lagos. ${fun}`);

// var a = "I think \"javascript\" is easy for me";
// document.write(a);
// console.log(a);

// var y = x**2;
// var x = 5;
// document.write(y);
 
let opp = 4**2;
let adj = 6**2;
let hyp = opp + adj;
let whole;
let toFixed;
let round;
hyp = Math.sqrt(hyp);
whole = Math.round(hyp);
toFixed = hyp.toFixed(hyp);
console.log(hyp);
console.log(whole);
console.log(toFixed);


const score = 100;

let Grade = "";
if (score == 100 || score >= 70){
	Grade = "A";
}else if (score >= 60 || score <= 69.9){
	Grade = "B";
}else if (score >= 50 || score <= 59.9){
	Grade = "C";
}else if (score >= 40 || score <= 49.9){
	Grade = "D";	
}else if (score <= 40){
	Grade = "F";
	console.log(Grade);
}

var results = 20;
results*= 5;
console.log(results);
var num1 = 10;
var num2 = 8;
// num1 == num2;
console.log(num1 += num2);

// var age = 10;
// var isAdult = (age < 18) ? "too young" : "old enough";
 const age = 10;
 if (age == 1 && age < 10){
 	console.log("Be patient, just a few more years,you are way too young to be at the bar"); 
 }else if (age > 40){
 	console.log("sorry, a lil old");
 }else{
 	console.log("you are most welcome...");
 }

 const color = ["red", "blue", "green", 5, "motherfuckers"];
 console.log(color[3]);
 console.log(color[4]);
 console.log(color[0]);
 let wicked = color[4];

 console.log(`I hate ${wicked} that always try to snitch on a brother`);



for (let x = 1; x <=5; x++){
	console.log(x);
}
// let product = "";
// for (let index = 0; index < 5; index++){
// product += `2 X ${index} = ${index * 2} <br>`
// // document.write(product);
// console.log(product);
// }
for (let j = 5; j >= 5; j--){
	console.log(j);
}


