/* IMPACT Sport & Fight Academy — Verhalten (kein Framework, keine externen Anfragen) */
(function () {
  'use strict';

  /* Mobilmenü */
  var head = document.querySelector('.site-head');
  var toggle = document.querySelector('.nav-toggle');
  if (head && toggle) {
    toggle.addEventListener('click', function () {
      var open = head.classList.toggle('open');
      toggle.setAttribute('aria-expanded', open ? 'true' : 'false');
      var nav = head.querySelector('.nav');
      if (open && nav) head.style.setProperty('--menu-h', nav.offsetHeight + 'px');
    });
    document.addEventListener('click', function (e) {
      if (head.classList.contains('open') && !head.contains(e.target)) {
        head.classList.remove('open');
        toggle.setAttribute('aria-expanded', 'false');
      }
    });
  }

  /* Eintritts-Animation: Abschnitte sanft einblenden */
  if ('IntersectionObserver' in window) {
    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (en) {
        if (en.isIntersecting) { en.target.classList.add('in'); io.unobserve(en.target); }
      });
    }, { rootMargin: '0px 0px -8% 0px', threshold: 0.08 });
    document.querySelectorAll('.reveal').forEach(function (el) { io.observe(el); });
  } else {
    document.querySelectorAll('.reveal').forEach(function (el) { el.classList.add('in'); });
  }

  /* Hero-Video: selbst gehostet, kein Dritter, keine Einwilligung noetig.
     Das Video wird erst eingeblendet, wenn es tatsaechlich laeuft — und gar
     nicht erst gestartet, wenn der Besucher reduzierte Bewegung eingestellt
     hat oder die Datei fehlt. Das Bild darunter traegt den Hero in dem Fall. */
  document.querySelectorAll('.hero-video').forEach(function (wrap) {
    var video = wrap.querySelector('video');
    if (!video) return;

    var ruhig = window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)');
    if (ruhig && ruhig.matches) return;

    var quelle = video.querySelector('source');
    if (!quelle || !quelle.getAttribute('src')) return;

    video.addEventListener('playing', function () { wrap.classList.add('is-playing'); });
    video.addEventListener('error', function () { wrap.classList.remove('is-playing'); }, true);

    // Autoplay nur mit muted — sonst blockt jeder Browser. Schlaegt es trotzdem
    // fehl (Energiesparmodus, Datensparmodus), bleibt einfach das Bild stehen.
    video.muted = true;
    var versuch = video.play();
    if (versuch && typeof versuch.catch === 'function') {
      versuch.catch(function () { wrap.classList.remove('is-playing'); });
    }

    // Ausserhalb des Sichtfelds pausieren — spart Akku und Bandbreite auf
    // langen Seiten, das Video sitzt ja ganz oben.
    if ('IntersectionObserver' in window) {
      new IntersectionObserver(function (entries) {
        entries.forEach(function (en) {
          if (en.isIntersecting) { var p = video.play(); if (p && p.catch) p.catch(function () {}); }
          else video.pause();
        });
      }, { threshold: 0.05 }).observe(wrap);
    }
  });

  /* Galerie-Lightbox */
  var lb = document.querySelector('.lightbox');
  if (lb) {
    var lbImg = lb.querySelector('img');
    document.querySelectorAll('.gallery a').forEach(function (a) {
      a.addEventListener('click', function (e) {
        e.preventDefault();
        lbImg.src = a.getAttribute('href');
        lbImg.alt = (a.querySelector('img') || {}).alt || '';
        lb.classList.add('open');
      });
    });
    lb.addEventListener('click', function (e) {
      if (e.target === lb || e.target.closest('button')) lb.classList.remove('open');
    });
    document.addEventListener('keydown', function (e) {
      if (e.key === 'Escape') lb.classList.remove('open');
    });
  }

  /* E-Mail-Adresse erst auf Klick zusammensetzen (Spam-Schutz).
     Adresse austauschen: data-user / data-domain am Button anpassen. */
  document.querySelectorAll('[data-email-user]').forEach(function (el) {
    el.addEventListener('click', function () {
      var mail = el.getAttribute('data-email-user') + '@' + el.getAttribute('data-email-domain');
      el.outerHTML = '<a href="mailto:' + mail + '">' + mail + '</a>';
    }, { once: true });
  });

  /* Kontaktformular: statische Seite -> vorbefüllte E-Mail im Mailprogramm */
  var form = document.querySelector('form[data-mailform]');
  if (form) {
    form.addEventListener('submit', function (e) {
      e.preventDefault();
      if (!form.reportValidity()) return;
      var g = function (n) { var f = form.querySelector('[name="' + n + '"]'); return f ? f.value.trim() : ''; };
      var body = 'Vorname: ' + g('vorname') + '\nNachname: ' + g('nachname') +
        '\nE-Mail: ' + g('email') + '\nTelefon: ' + g('telefon') +
        '\n\n' + g('nachricht');
      var mail = form.getAttribute('data-mailform');
      var betreff = form.getAttribute('data-subject') || 'Anfrage über die Website';
      location.href = 'mailto:' + mail +
        '?subject=' + encodeURIComponent(betreff) +
        '&body=' + encodeURIComponent(body);
    });
  }

  /* FORM-Ansicht: ?form kennzeichnet alle Bildplätze */
  if (/(^|[?&])form(=|&|$)/.test(location.search)) {
    var formId = function (url) {
      var m = /assets\/img\/([^"')?]+)/.exec(url || '');
      return m ? m[1] : null;
    };
    var draw = function () {
      document.querySelectorAll('.form-marker,.form-frame').forEach(function (e) { e.remove(); });
      var n = 0;
      var mark = function (el, id, art) {
        var r = el.getBoundingClientRect();
        if (r.width < 24 || r.height < 24) return;
        n++;
        var f = document.createElement('div');
        f.className = 'form-frame';
        f.style.cssText = 'left:' + (r.left + scrollX) + 'px;top:' + (r.top + scrollY) +
          'px;width:' + r.width + 'px;height:' + r.height + 'px';
        document.body.appendChild(f);
        var m = document.createElement('div');
        m.className = 'form-marker';
        m.innerHTML = id + '<small>' + art + ' · ' + Math.round(r.width) + '×' + Math.round(r.height) + '</small>';
        m.style.cssText = 'left:' + (r.left + scrollX) + 'px;top:' + (r.top + scrollY) + 'px';
        document.body.appendChild(m);
      };
      document.querySelectorAll('img').forEach(function (el) {
        var id = formId(el.getAttribute('src'));
        if (id) mark(el, id, 'Bild');
      });
      document.querySelectorAll('.hero-media, [style*="background-image"]').forEach(function (el) {
        var bg = el.querySelector('img') ? null : getComputedStyle(el).backgroundImage;
        var id = formId(bg);
        if (id) mark(el, id, 'Hintergrund');
      });
      var legend = document.querySelector('.form-legend') || document.createElement('div');
      legend.className = 'form-legend';
      legend.innerHTML = '<b>FORM-Ansicht</b> — ' + n + ' Bildplätze markiert.<br>' +
        'Austauschen: Datei unter <code>assets/img/…</code> ersetzen.<br>' +
        '<span style="opacity:.7">Ausblenden: <code>?form</code> aus der URL entfernen.</span>';
      document.body.appendChild(legend);
    };
    addEventListener('load', draw);
    addEventListener('resize', draw);
    var t; addEventListener('scroll', function () { clearTimeout(t); t = setTimeout(draw, 150); });
  }
})();

/* ============================================================
   V2 — Parallax-Engine (Graffiti-Worte, Boxer-Ebenen)
   Elemente mit [data-px] bewegen sich relativ zum Scroll.
   Faktor z. B. 0.12 (langsamer als Seite) oder -0.08 (gegenlaeufig).
   Respektiert prefers-reduced-motion.
   ============================================================ */
(function () {
  var mq = window.matchMedia('(prefers-reduced-motion: reduce)');
  var els = [];
  function collect() {
    els = Array.prototype.slice.call(document.querySelectorAll('[data-px]'))
      .map(function (el) {
        return { el: el, f: parseFloat(el.getAttribute('data-px')) || 0.1 };
      });
  }
  var ticking = false;
  function update() {
    ticking = false;
    if (mq.matches) return;
    var vh = window.innerHeight;
    for (var i = 0; i < els.length; i++) {
      var r = els[i].el.getBoundingClientRect();
      if (r.bottom < -200 || r.top > vh + 200) continue;
      var mid = r.top + r.height / 2 - vh / 2;
      els[i].el.style.setProperty('--px-y', (mid * -els[i].f).toFixed(1) + 'px');
    }
  }
  function onScroll() {
    if (!ticking) { ticking = true; requestAnimationFrame(update); }
  }
  collect();
  update();
  window.addEventListener('scroll', onScroll, { passive: true });
  window.addEventListener('resize', onScroll, { passive: true });
})();
