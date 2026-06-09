/**
 * Mobile nav disclosure. Served from /public as an external file so the
 * production CSP can stay `script-src 'self'`. aria-expanded, Esc to close,
 * click-outside to close. Progressive enhancement — nav links are visible
 * server-rendered without JS.
 */
(function () {
  var toggle = document.querySelector('.nav-toggle');
  var links = document.getElementById('navlinks');

  function setOpen(open) {
    if (!links || !toggle) return;
    links.classList.toggle('open', open);
    toggle.setAttribute('aria-expanded', String(open));
  }

  if (toggle) {
    toggle.addEventListener('click', function () {
      setOpen(!(links && links.classList.contains('open')));
    });
  }

  document.addEventListener('keydown', function (e) {
    if (e.key === 'Escape' && links && links.classList.contains('open')) {
      setOpen(false);
      if (toggle) toggle.focus();
    }
  });

  document.addEventListener('click', function (e) {
    if (!links || !links.classList.contains('open')) return;
    var target = e.target;
    if (!links.contains(target) && toggle && !toggle.contains(target)) setOpen(false);
  });
})();
