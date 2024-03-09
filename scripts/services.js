const modalViews=document.querySelectorAll(".services-modal"),
      modalBtns=document.querySelectorAll(".button_link_services"),
      modalCloses=document.querySelectorAll(".services_modal-close")

let modal=function(modalClick){
  modalViews[modalClick].classList.add("active-modal")
}

modalBtns.forEach((modalBtn, i) => {
  modalBtn.addEventListener("click",()=>{
    modal(i)
  })
});

modalCloses.forEach((modalClose, i) => {
  modalClose.addEventListener("click",()=>{
    modalViews.forEach((modalView, i) => {
      modalView.classList.remove("active-modal")
    })
  })
});
