document.addEventListener('DOMContentLoaded', function() {
    const menuBtn = document.querySelector('.mobile-menu-btn');
    const mobileMenu = document.querySelector('.mobile-menu');
    
    menuBtn.addEventListener('click', function() {
      mobileMenu.classList.toggle('active');
    });
    
    const mobileLinks = document.querySelectorAll('.mobile-menu a');
    mobileLinks.forEach(link => {
      link.addEventListener('click', function() {
        mobileMenu.classList.remove('active');
      });
    });
    
    document.addEventListener('click', function(event) {
      if (!event.target.closest('.mobile-menu') && 
          !event.target.closest('.mobile-menu-btn')) {
        mobileMenu.classList.remove('active');
      }
    });
  });
