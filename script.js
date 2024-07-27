document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('contactForm');
    const formMessage = document.getElementById('formMessage');
  
    form.addEventListener('submit', function(event) {
      event.preventDefault();
  
      // Simulate form submission
      setTimeout(() => {
        formMessage.textContent = 'Thank you for your message!';
        form.reset();
      }, 500);
    });
  
    // Smooth scrolling for navigation links
    const navLinks = document.querySelectorAll('nav ul li a');
  
    navLinks.forEach(link => {
      link.addEventListener('click', function(event) {
        event.preventDefault();
        const targetId = this.getAttribute('href').substring(1);
        document.getElementById(targetId).scrollIntoView({
          behavior: 'smooth'
        });
      });
    });
  });