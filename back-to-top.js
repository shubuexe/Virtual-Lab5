/**
 * Back to Top Button Functionality
 * Electronic Circuit Simulation Lab
 */

document.addEventListener('DOMContentLoaded', function() {
  // Create back to top button element
  const backToTopBtn = document.createElement('a');
  backToTopBtn.href = '#';
  backToTopBtn.className = 'back-to-top';
  backToTopBtn.setAttribute('aria-label', 'Back to top');
  backToTopBtn.setAttribute('title', 'Back to top');
  
  // Create arrow element
  const arrow = document.createElement('div');
  arrow.className = 'arrow';
  backToTopBtn.appendChild(arrow);
  
  // Append to body
  document.body.appendChild(backToTopBtn);
  
  // Handle scroll event
  window.addEventListener('scroll', function() {
    if (window.pageYOffset > 300) {
      backToTopBtn.classList.add('visible');
    } else {
      backToTopBtn.classList.remove('visible');
    }
  });
  
  // Handle click event
  backToTopBtn.addEventListener('click', function(e) {
    e.preventDefault();
    
    // Smooth scroll to top
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  });
}); 