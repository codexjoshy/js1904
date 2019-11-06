let number = 5;
let times = 12;
let result = "";
result += "<table border=1>";

for(let i = 1; i <= number; i++){
    // result += `<tr><th></th>`;
    result += "<tr>";
    for(let j = 1; j <= times; j++){
        result +=`<td>${i} X ${j} = ${i*j}</td>`;
    }
    result += "</tr>";
}
result += "</table>";
document.write(result);