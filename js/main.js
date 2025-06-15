/** Hamburger menu in mobile view */
document.addEventListener('DOMContentLoaded', function() {
    const hamburgerBtn = document.querySelector('.landing-page__left-hamburger-btn');
    const navbarLinks = document.querySelector('.landing-page__left-navbar-links');

    /** Listen for click event in the element */
    hamburgerBtn.addEventListener('click', function() {
      hamburgerBtn.classList.toggle('active');
      navbarLinks.classList.toggle('active');
      
      /** Set body overflow as hidden in case of menu open and and vice versa */
      document.body.style.overflow = navbarLinks.classList.contains('active') ? 'hidden' : '';
    });
    
    /** removes the active class on menu click and also removes the overflow hidden from body */
    navbarLinks.querySelectorAll('a').forEach(link => {
      link.addEventListener('click', () => {
        hamburgerBtn.classList.remove('active');
        navbarLinks.classList.remove('active');
        document.body.style.overflow = '';
      });
    });
  });