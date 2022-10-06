const buyBtns = document.querySelectorAll('.js-buy-ticket')
const modal= document.querySelector('.js-modal')
const modalContainer = document.querySelector('.js-modal-container')
const modalClose=document.querySelector('.js-modal-close')

//Mở
function showBuyTickets() {
    modal.classList.add('open')
}
for (const buyBtn of buyBtns) {
    buyBtn.addEventListener('click', showBuyTickets)
}

//Đóng
function HideBuyTickets() {
    modal.classList.remove('open')
}

modalClose.addEventListener('click',HideBuyTickets)

modal.addEventListener('click',HideBuyTickets)

modalContainer.addEventListener('click',function(event){
event.stopPropagation()
})