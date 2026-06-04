/* Cal.com lazy booking loader (plain JS — third-party glue, kept out of the
   typed build). Loads the embed only on click or when scrolled near, so it
   never blocks LCP. Reads config from the .booking element's data attributes. */
(function () {
  var root = document.querySelector('.booking');
  if (!root) return;
  var target = document.getElementById('cal-inline');
  var placeholder = document.getElementById('booking-placeholder');
  var loadBtn = document.getElementById('booking-load');
  var calLink = root.getAttribute('data-cal-link') || '';
  var origin = root.getAttribute('data-cal-origin') || 'https://cal.com';
  var loaded = false;

  function loadCal() {
    if (loaded || !target) return;
    loaded = true;

    // Official Cal.com embed bootstrap.
    (function (C, A, L) {
      var p = function (a, ar) {
        a.q.push(ar);
      };
      var d = C.document;
      C.Cal =
        C.Cal ||
        function () {
          var cal = C.Cal;
          var ar = arguments;
          if (!cal.loaded) {
            cal.ns = {};
            cal.q = cal.q || [];
            d.head.appendChild(d.createElement('script')).src = A;
            cal.loaded = true;
          }
          if (ar[0] === L) {
            var api = function () {
              p(api, arguments);
            };
            var namespace = ar[1];
            api.q = api.q || [];
            if (typeof namespace === 'string') {
              cal.ns[namespace] = cal.ns[namespace] || api;
              p(cal.ns[namespace], ar);
              p(cal, ['initNamespace', namespace]);
            } else {
              p(cal, ar);
            }
            return;
          }
          p(cal, ar);
        };
    })(window, 'https://app.cal.com/embed/embed.js', 'init');

    window.Cal('init', { origin: origin });
    window.Cal('inline', { elementOrSelector: '#cal-inline', calLink: calLink });
    window.Cal('ui', { theme: 'dark', hideEventTypeDetails: false, layout: 'month_view' });
    if (placeholder) placeholder.setAttribute('hidden', '');
  }

  if (loadBtn) loadBtn.addEventListener('click', loadCal);

  if ('IntersectionObserver' in window) {
    var io = new IntersectionObserver(
      function (entries) {
        for (var i = 0; i < entries.length; i++) {
          if (entries[i].isIntersecting) {
            loadCal();
            io.disconnect();
            break;
          }
        }
      },
      { rootMargin: '300px' }
    );
    io.observe(root);
  }
})();
