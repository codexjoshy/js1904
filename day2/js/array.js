//array
// const colors = ['red', 'blue', 'green', 'orange'];
// console.log(colors[0]);
// let lengthOfcolors = colors.length;
// console.log(colors[lengthOfcolors - 1]);
// colors[6] = "Brown";
// console.log(colors);
// colors.shift();
// console.log(colors);
// colors.unshift(2);
// console.log(colors);
// colors.pop();
// console.log(colors);
// colors.push('yellow');
// console.log(colors);

//DESTRUCTURING
// const color = ['red', 'blue', 'green', 'orange'];
// const [getRed, , getGreen, getOrange] = color;
// console.log(`I love color ${getRed}`);

//spread operators
// const newColor = ["magenta", "brown", "indigo",];
// //array
// const color = [...newColor ,'red', 'blue', 'green', 'orange'];
// const newArrayOfColors = [color, ...newColor];
// console.log(color);

//if statement
// const age = 18;
// let result ="";
// if(age==1 && age <=10){
//     result = 'You are too young to be at the bar';
// }else if(age >10 && age < 17){
//     result = 'Be patient, jus a few more years';
// }else if(age > 40 ){
//     result = 'sorry too old';
// }else{
//     result = 'You are welcome';
// }
// console.log(result);

// let enter = (age < 18)? "you are too young" : "You are welcome";

//loop
let results = "";
for (let index = 1; index <= 5; index++) {
  for (let j = 1; j <= 12; j++) {
    results += `
    <div class="container">
        <table class="table table-bordered">
    <tbody>
      <tr>
        <td>${index}</td>
        <td>X</td>
        <td>${j}</td>
        <td>=</td>
        <td>${index * j}</td>
      </tr>
    </tbody>
  </table>
  </div>`;
  }
}
document.write(results);
