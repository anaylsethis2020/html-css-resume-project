// Scroll-triggered reveal animation
document.addEventListener('DOMContentLoaded', function() {
    const reveals = document.querySelectorAll('.reveal');
    const observerOptions = {
      root: null,
      rootMargin: '0px',
      threshold: 0.1
    };
    const revealOnScroll = new IntersectionObserver(function(entries, observer) {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('active');
          observer.unobserve(entry.target);
        }
      });
    }, observerOptions);
    reveals.forEach(section => {
      revealOnScroll.observe(section);
    });
  });
  