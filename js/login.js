let btn = document.querySelector('.material-symbols-outlined');

btn.addEventListener('click', () => {
    let inputSecert = document.querySelector('#secret')
    if (inputSecert.getAttribute('type') == 'password') {
        inputSecert.setAttribute('type', 'text')

    } else {
        inputSecert.setAttribute('type', 'password')
    }
})

function toEnter() {
    let userLabel = document.querySelector('#userLabel')
    let user = document.querySelector('#user')

    let labelSecret = document.querySelector('#labelSecret')
    let secret = document.querySelector('#secret')

    let msgError = document.querySelector('#msgError')
    let listUser = []

    let userVald = {
        name: '',
        user: '',
        secret: ''
    }

    listUser = JSON.parse(localStorage.getItem('listUser'))

    listUser.forEach((item) => {
        if (user.value == item.userCad && secret.value == item.secretCad){

            userVald = {
                name: item.nameCad,
                user: item.userCad,
                secret: item.secretCad
            }
        }
    })

    if (user.value === "" && secret.value === "") {
        msgError.setAttribute('style', 'display: block')
        msgError.setAttribute('style', 'color: red')
        msgError.innerHTML = 'Preencha todos os campos'
        user.focus()
        return;
    }  
      
    if (user.value == userVald.user && secret.value == userVald.secret) {
         window.location.href = 'http://127.0.0.1:5500/index.html'
        let mathRandon = Math.random().toString(16).substr(2)
        let token = mathRandon + mathRandon
        localStorage.setItem('token', token)
        localStorage.setItem('loggedinuser', JSON.stringify(userVald))

     } else {
        userLabel.setAttribute('style', 'color: red')
        user.setAttribute('style', 'border-color: red')
        labelSecret.setAttribute('style', 'color: red')
        secret.setAttribute('style', 'border-color: red')
        msgError.setAttribute('style', 'display: block')
        msgError.innerHTML = 'Usuario ou senha incorretos'
        user.focus()
    }
    
}