document.addEventListener('DOMContentLoaded', () => {
  console.log('App.js loaded and running.');

  // Fade in the header text
  const header = document.querySelector('header h1');
  if (header) {
    header.style.opacity = 0;
    header.style.transition = 'opacity 1.5s ease-in-out';
    // Trigger fade in after a tiny delay
    setTimeout(() => {
      header.style.opacity = 1;
    }, 100);
  }

  // Optional: smooth scroll for anchor links (if added later)
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      e.preventDefault();
      const targetID = this.getAttribute('href').substring(1);
      const targetElement = document.getElementById(targetID);
      if (targetElement) {
        targetElement.scrollIntoView({ behavior: 'smooth' });
      }
    });
  });
});
