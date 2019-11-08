//multi dimensional array
const family = ['father', 'mother', ['dara', 'uche', 'ayo'],   ['joe', 'josh'] ];
// console.log(family[0]);
// console.log(family[2][0]);
// console.log(family[3][0]);
// add();

// const [getFather, getM, [getD, getU, getA], [getJ, getJo]] = family;
// const [getFather1, getM1, getCh, getCh1] = family;

// console.log(getA);
// const [, , getAy] = getCh;

// console.log(getAy);
// showName();
let aName = "Josh";
let newName = checkName(aName);
// console.log(newName);

function checkName(name) {
    let sentence;
    if (name) {
        sentence =  `welcome ${name} to my website`;
    } else {
        sentence = "pls enter a name";
    }
    return sentence;
}

let sayYourName = sayName('Joe');
// let addition = add(100, 300);
// let addition1 = add(500, 300);
// let addition2 = add(100, 600);
// let addition3 = add(800, 300);

// console.log(sayYourName);
// console.log(addition1);
// console.log(addition2);
// console.log(addition3);

//function
function showName(){
    let name = 'josh';
    alert(name);
}
function add(param1, param2){
    let [num1, num2] = [param1, param2];
    return(num1 + num2);
}


let subtract = function(num1, num2){
    return num2 - num1;
}

subtract(2, 10);
// add();
let aSubstraction = add();
// console.log(aSubstraction);

function sayName(a){
    return `my name is ${a}`;
}

let division = ()=>{

}
let multiplyBy10 = (num2, num3 =10)=>{
    return num2 * num3;
}

console.log(multiplyBy10(2000));
multiply = 5;

let modulus = (num1, num2)=>num2%num1;
// console.log(modulus(20, 10));
let sayAnyName = aName=> alert(`my name is ${aName}`);

// multiply = sayAnyName('JOSH');
// console.log(multiply);

// callbacks

let alertName = (name)=>{
    alert(name);
    sayAnyName('ayo');
}





alertName('josh');