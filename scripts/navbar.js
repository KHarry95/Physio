const burger = document.querySelector('.burger');
const nav = document.querySelector('.nav-links');
const h = document.querySelector('header');

burger.addEventListener('click', () => {
  // Toggle Nav
  nav.classList.toggle('nav-active');
  h.classList.add('scrolled');
  document.body.style.overflow = 'hidden';

  // Animate Links
  const navLinks = document.querySelectorAll('.nav-links li');
  navLinks.forEach((link, index) => {
    if (link.style.animation) {
      link.style.animation = '';
      document.body.style.overflow = 'auto';
    } else {
      link.style.animation = `navLinkFade 0.5s ease forwards ${index / 7 + 0.3}s`;
    }
  });

  // Burger Animation
  burger.classList.toggle('toggle');
});
