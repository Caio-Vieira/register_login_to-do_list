
let btnSecret = document.querySelector('#btnSecret');
let btnConfirmSecret = document.querySelector('#btnComfirmSecret');

let labelName = document.querySelector('#label-name');
let names = document.querySelector('#input-name');
let validName = false

let labelUser = document.querySelector('#label-user');
let user = document.querySelector('#input-user');
let validUser = false

let labelSecret = document.querySelector('#label-secret'); 
let secret = document.querySelector('#input-secret');
let validSecret = false

let labelComfirmSecret = document.querySelector('#label-comfirm-secret');
let comfirmSecret = document.querySelector('#input-comfirm-secret');
let validComfirmSecret = false

let msgError = document.querySelector('#msgError');
let msgSuccess = document.querySelector('#msgSuccess');

names.addEventListener('keyup', ()=>{
    if(names.value.length <= 2){
        labelName.setAttribute('style', 'color: red')
        labelName.innerHTML = 'Isira no minimo 3 caracteres'
        validName = false
    } else {
        labelName.setAttribute('style', 'color: #bacbe8')
        labelName.innerHTML = 'Nome'
        validName = true
    }
});
user.addEventListener('keyup', ()=>{
    if(user.value.length <= 4){
        labelUser.setAttribute('style', 'color: red')
        labelUser.innerHTML = 'Isira no minimo 5 caracteres'
        validUser = false
    } else {
        labelUser.setAttribute('style', 'color: #bacbe8')
        labelUser.innerHTML = 'Usuario'
        validUser = true
    }
});
secret.addEventListener('keyup', ()=>{
    if(secret.value.length <= 5){
        labelSecret.setAttribute('style', 'color: red')
        labelSecret.innerHTML = 'Isira no minimo 6 caracteres'
        validSecret = false
    } else {
        labelSecret.setAttribute('style', 'color: #bacbe8')
        labelSecret.innerHTML = 'Senha'
        validSecret = true
    }

});
comfirmSecret.addEventListener('keyup', ()=>{
    if(secret.value != comfirmSecret.value){
        labelComfirmSecret.setAttribute('style', 'color: red')
        labelComfirmSecret.innerHTML = 'Senhas deven ser iguais '
        validComfirmSecret = false
    } else {
        labelComfirmSecret.setAttribute('style', 'color: #bacbe8')
        labelComfirmSecret.innerHTML = 'Comfirme senha'
        validComfirmSecret = true
    }

});

function register(){
    if (validName && validUser && validSecret && validComfirmSecret){
        let listUser = JSON.parse(localStorage.getItem('listUser') || '[]')

        listUser.push({
            nameCad: names.value,
            userCad: user.value,
            secretCad: secret.value,
        });

        localStorage.setItem('listUser', JSON.stringify(listUser))

        msgSuccess.setAttribute('style', 'display: block')
        msgSuccess.innerHTML = 'Cadastrando Usuário...'
        msgError.setAttribute('style', 'display: none')
        msgError.innerHTML = ''

        setTimeout(()=>{
            window.location.href = 'http://127.0.0.1:5500/login.html'
          }, 3000)
    
        } else {
        msgError.setAttribute('style', 'display: block')
        msgError.innerHTML = 'Preencha corretamente os campos'
        msgSuccess.innerHTML = ''
        msgSuccess.setAttribute('style', 'display: none')
    }
}

btnSecret.addEventListener('click', () => {
    let inputSecret = document.querySelector('#input-secret');
    if (inputSecret.getAttribute('type') == 'password') {
        inputSecret.setAttribute('type', 'text');
    } else {
        inputSecret.setAttribute('type', 'password');
    }

});

btnConfirmSecret.addEventListener('click', () => {
    let inputConfirmSecret = document.querySelector('#input-comfirm-secret');
    if (inputConfirmSecret.getAttribute('type') == 'password') {
        inputConfirmSecret.setAttribute('type', 'text');
    } else {
        inputConfirmSecret.setAttribute('type', 'password');
    }

});






