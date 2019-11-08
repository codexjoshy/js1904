let button = document.getElementById('btn');
let countCont = document.getElementById('count');
let pos = 0;
button.addEventListener('click', ()=>{
    
    let body = document.body;
    let para = document.querySelector('p');
    let color = 'red';
    let bodyStyle = body.style.backgroundColor = color;
    if (bodyStyle == 'red'){
        para.style.color = '#fff';
    }
    countCont.innerHTML = ++pos;

})