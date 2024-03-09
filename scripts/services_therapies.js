const modalViews=document.querySelectorAll(".services-modal"),
      modalBtn=document.querySelectorAll(".btn_primary"),
      modalCloses=document.querySelectorAll(".services_modal-close")


      modalBtn.forEach((btn, index) => {
        btn.addEventListener("click", () => {
          modalViews[index].classList.add("active-modal");
        });
      });

      modalCloses.forEach((close, index) => {
        close.addEventListener("click", () => {
          modalViews[index].classList.remove("active-modal");
        });
      });
