const logInBtn = document.querySelector('.js-open-login')
const selecLogIn = document.querySelector('.js-sign-form')
const logInClose = document.querySelector('.js-close-login')
const logInCloseBtn=document.querySelector('.js-modal-close-btn')
//open
function showLogIn() {
    selecLogIn.classList.add('openn')
}
logInBtn.addEventListener('click', showLogIn)

//close
function hideLogIn() {
    selecLogIn.classList.remove('openn')
}
logInCloseBtn.addEventListener('click', hideLogIn)
selecLogIn.addEventListener('click', hideLogIn)
logInClose.addEventListener('click', function (event) {
    event.stopPropagation()
})