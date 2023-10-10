/* 
let person = {
    name: 'John',
    lastname: 'Doe' 
}

let { name, lastname } = person;

console.log(name);
console.log(lastname);

let nombres = ["Hugo", "Paco", "Luis"];
let [a, ...arr] = nombres;
console.log(a)
console.log(arr) 
*/

/* Expresiones Regulares */
let regexPass = /^[A-Za-z]{6,20}$/

let isEmail = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/
let onlyGmail = /^[a-zA-Z0-9._-]+@gmail.com$/
let onlyHotmail = /^[a-zA-Z0-9._-]+@hotmail.com$/

let isACreditCard = /^[0-9]{4}\-[0-9]{4}\-[0-9]{4}\-[0-9]{4}$/


let form = document.querySelector('.myForm');
form.addEventListener('submit', (e) => {
    e.preventDefault();

    let { username, password, login } = e.target; // destructuring (objecto)
    
    let userFeed = document.querySelector('#userFeed');
    let passFeed = document.querySelector('#passFeed');

    if(username.value === ""){
        username.classList.add('is-invalid')
        userFeed.textContent = "username is required!";
    }else if(!isEmail.test(username.value)){
        username.classList.add('is-invalid')
        userFeed.textContent = "username must be an email";
    }else{
        username.classList.remove('is-invalid');
        userFeed.textContent = ""
    }

    console.log(regexPass.test(password.value));
    if(password.value === ""){
        password.classList.add('is-invalid')
        passFeed.textContent = "password is required!";
    }else if(!regexPass.test(password.value)){
        password.classList.add('is-invalid')
        passFeed.textContent = "must be only letter";
    }else{
        password.classList.remove('is-invalid');
        passFeed.textContent = ""
    }

})