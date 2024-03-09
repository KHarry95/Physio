var nameError=document.getElementById("name-error");
var phoneError=document.getElementById("phone-error");
var emailError=document.getElementById("email-error");
var submitError=document.getElementById("submit-error");

function validateName(){
  var name = document.getElementById("contact-name").value;

  if(name.length==0){
    nameError.innerHTML="";
    return false;
  }
  if(!name.match(/^[ά-ωΑ-Ωa-zA-Z]+(\s+|\u0020)[ά-ωΑ-Ωa-zA-Z]+$/)){
    nameError.innerHTML='<i class="fa-solid fa-triangle-exclamation"></i>';
    return false;
  }
  nameError.innerHTML = '<i class="fa-solid fa-circle-check"></i>';
  return true;
}

function validatePhone(){
  var phone = document.getElementById("contact-phone").value;

  if(phone.length==0){
    phoneError.innerHTML="";
    return false;
  }
  if(!phone.match(/^[0-9]+$/)){
    phoneError.innerHTML='<i class="fa-solid fa-triangle-exclamation"></i>';
    return false;
  }
  if(phone.length!==10){
    phoneError.innerHTML='<i class="fa-solid fa-triangle-exclamation"></i>';
    return false;
  }
  phoneError.innerHTML = '<i class="fa-solid fa-circle-check"></i>';
  return true;
}

function validateEmail(){
  var email = document.getElementById("contact-email").value;

  if(email.length==0){
    emailError.innerHTML="";
    return false;
  }
  if(!email.match(/\S+@\S+\.\S+/)){
    emailError.innerHTML='<i class="fa-solid fa-triangle-exclamation"></i>';
    return false;
  }
  emailError.innerHTML = '<i class="fa-solid fa-circle-check"></i>';
  return true;
}
