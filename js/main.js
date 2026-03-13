/* ─── The Ultimate Beauty — Landing JS ─── */

/* Nav scroll behavior */
window.addEventListener('scroll', function() {
  var nav = document.querySelector('.nav');
  if (nav) {
    if (window.scrollY > 60) {
      nav.classList.add('scrolled');
      nav.classList.add('on');
    } else {
      nav.classList.remove('scrolled');
      nav.classList.remove('on');
    }
  }
});

/* Intersection Observer for scroll reveal animations */
(function() {
  var reveals = document.querySelectorAll('.reveal');
  if (reveals.length === 0) return;
  
  var observer = new IntersectionObserver(function(entries) {
    entries.forEach(function(entry) {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.12 });
  
  reveals.forEach(function(el) {
    observer.observe(el);
  });
})();
