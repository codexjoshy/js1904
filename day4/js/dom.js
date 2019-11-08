// let header = document.querySelector('h2');
// header.textContent = "<em>New Javascript </em>";
// let input = document.getElementById('input');
// input.setAttribute('type', 'text');
// // input.setAttribute('value','Joshua');
// input.value = "Mike";
// let img = document.getElementById('anImg');
// let para = document.querySelector('p');
// para.style.color = 'red';
// para.style.backgroundColor = 'grey';
// para.style.padding = '10px';
// input.type = 'checkbox';
// header.textContent = 'JavaScript';
let div = document.createElement('div');
div.setAttribute('class','container');
let paragraph = document.createElement('h2');
    paragraph.innerHTML = 'Welcome to Javascript world';
div.appendChild(paragraph);
let bodyTag = document.body;
bodyTag.appendChild(div);

// let confirmDelete = confirm('DO YOU WANT TO DELETE THIS ?');
// if(confirmDelete){
//     alert('You said yes');
// }else{
//     alert('You said no');
// }

