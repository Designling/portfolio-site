// Mobile navigation menu toggle.
// Kept intentionally tiny: one job, no dependencies.
document.addEventListener('DOMContentLoaded', function () {
  var toggle = document.querySelector('.nav__toggle');
  var panel = document.querySelector('.nav__mobile-panel');

  if (!toggle || !panel) return;

  toggle.addEventListener('click', function () {
    var isOpen = panel.classList.toggle('is-open');
    toggle.setAttribute('aria-expanded', String(isOpen));
  });

  // Close the mobile menu automatically if the viewport is resized
  // up to desktop width while it's open.
  window.addEventListener('resize', function () {
    if (window.innerWidth >= 768 && panel.classList.contains('is-open')) {
      panel.classList.remove('is-open');
      toggle.setAttribute('aria-expanded', 'false');
    }
  });
});
