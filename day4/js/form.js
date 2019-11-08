let formButton = document.getElementById('submit');
let username = document.getElementById('username');
let pass = document.getElementById('password');
let count = document.getElementById('count');

formButton.addEventListener('click', (e)=>{
    e.preventDefault();
    if(username.value == ''){
        alert('pls enter a username')
    }else if(!pass.value){
        alert('pls enter a password')
    }else{
        alert(`welcome ${username.value}`);
        count.innerHTML = `<i>Welcome ${username.value} to my site</i>`;
    }
})