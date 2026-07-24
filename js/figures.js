// Tap-to-enlarge for case-study figures. Any <img> inside a .story-figure
// becomes clickable and opens in a full-screen lightbox. No-op if the page
// has no figures.
(function () {
  var imgs = document.querySelectorAll('.story-figure img');
  if (!imgs.length) return;

  var lb = document.createElement('div');
  lb.className = 'lightbox';
  lb.setAttribute('role', 'dialog');
  lb.setAttribute('aria-modal', 'true');
  lb.innerHTML =
    '<button class="lightbox__close" type="button" aria-label="Close">&times;</button>' +
    '<img alt="">';
  document.body.appendChild(lb);

  var lbImg = lb.querySelector('img');

  function open(src, alt) {
    lbImg.src = src;
    lbImg.alt = alt || '';
    lb.classList.add('is-open');
  }

  function close() {
    lb.classList.remove('is-open');
    lbImg.removeAttribute('src');
  }

  imgs.forEach(function (img) {
    img.classList.add('zoomable');
    img.addEventListener('click', function () {
      open(img.currentSrc || img.src, img.alt);
    });
  });

  lb.addEventListener('click', function (e) {
    if (e.target === lb || e.target.classList.contains('lightbox__close') || e.target === lbImg) {
      close();
    }
  });

  document.addEventListener('keydown', function (e) {
    if (e.key === 'Escape') close();
  });
})();
