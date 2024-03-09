<?php
if ($_SERVER["REQUEST_METHOD"] === "POST") {
    // Retrieve form data
    $name = $_POST["name"];
    $email = $_POST["email"];
    $phone = $_POST["phone"];
    $message = $_POST["message"];

    // You can perform additional validation here if needed

    // Compose the email message
    $to = "kharrys95@gmail.com"; // Replace with your actual email address
    $subject = "New Contact Form Submission";
    $messageBody = "Name: $name\nEmail: $email\nPhone: $phone\nMessage: $message";

    // Send the email
    mail($to, $subject, $messageBody);

    // Respond to the client
    echo "Email sent successfully!";
} else {
    // Redirect to the home page or display an error message
    header("Location: index.html");
    exit();
}
?>
