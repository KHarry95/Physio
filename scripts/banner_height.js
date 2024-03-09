const isMobile = /iPhone|iPad|iPod|Android|webOS|BlackBerry|Windows Phone/i.test(navigator.userAgent);

if (isMobile) {
    // Your script here
    function updateBannerHeight(){
      // Find elements by class name
      const mainPartHeight = document.querySelector('.main_part').offsetHeight;
      const navHeight = document.querySelector('nav').offsetHeight;

      // Calculate the sum of heights in viewport height (vh) units
      const sumHeight = mainPartHeight + navHeight;
      const screenHeight = window.screen.height;
      const finalHeight= sumHeight / screenHeight*100;
      // Set the height of the element with class name "banner"
      document.querySelector('.banner').style.height = `${finalHeight}vh`;


      console.log('Main Part Height:', mainPartHeight);
      console.log('Nav Height:', navHeight);
      console.log('Sum of Heights:', sumHeight);
      console.log('Screen Height:', screenHeight);
    }
    updateBannerHeight();


    window.addEventListener('load', updateBannerHeight);
    window.addEventListener("orientationchange", updateBannerHeight);
} else {
    console.log('This script does not run on a mobile device.');
    document.querySelector('.banner').style.height = `110vh`;

}
