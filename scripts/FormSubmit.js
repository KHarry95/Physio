function onSubmit(token) {
  // Retrieve form data
  var formData = new FormData(document.getElementById("contact_form"));

  // Make an AJAX request to the server-side script
  var xhr = new XMLHttpRequest();
  xhr.open("POST", "SendMail.php", true);
  xhr.onload = function () {
    if (xhr.status === 200) {
      // Successful response from the server
      alert(xhr.responseText);
    } else {
      // Handle errors
      alert("Error sending email. Please try again later.");
    }
  };
  xhr.send(formData);
}
