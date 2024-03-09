$(document).ready(function () {
  const captions = ["Πλήρως εξοπλισμένες- υπερσύγχρονες αίθουσες", "Πλήρως καταρτισμένο προσωπικό", "Μεγάλη εμπειρία"];
  let currentCaptionIndex = 0;
  let captionElement = $("#caption");

  function typeCaption() {
    let currentCaption = captions[currentCaptionIndex];
    let captionLength = currentCaption.length;
    let typingSpeed = 100; // Adjust typing speed (milliseconds per character)

    captionElement.text(""); // Clear previous caption

    // Function to simulate typing effect
    function typeNextCharacter(index) {
      if (index <= captionLength) {
        captionElement.text(currentCaption.substring(0, index));
        setTimeout(function () {
          typeNextCharacter(index + 1);
        }, typingSpeed);
      } else {
        // Typing finished, wait for a moment and then start deleting
        setTimeout(function () {
          deleteCaption();
        }, 1000); // Wait for 1 second before starting deletion
      }
    }

    // Function to simulate deleting effect
    function deleteCaption() {
      let currentText = captionElement.text();
      let deleteSpeed = 50; // Adjust deleting speed (milliseconds per character)

      if (currentText.length > 0) {
        captionElement.text(currentText.substring(0, currentText.length - 1));
        setTimeout(function () {
          deleteCaption();
        }, deleteSpeed);
      } else {
        // Deletion finished, move to the next caption
        currentCaptionIndex = (currentCaptionIndex + 1) % captions.length;
        setTimeout(function () {
          typeCaption();
        }, 500); // Wait for 0.5 seconds before typing the next caption
      }
    }

    // Start typing
    typeNextCharacter(0);
  }

  // Start the typing effect when the page loads
  typeCaption();
});
