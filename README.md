# Impact Fight Academy — Website

Statische Website der IMPACT Sport & Fight Academy (München-Giesing).
Reines HTML/CSS/JS, kein Build-Schritt, kein Backend, kein CMS.

## Lokal ansehen

```bash
python3 -m http.server 8080
```

Danach `http://localhost:8080/index.html` im Browser öffnen.

## Seiten

`index.html` · `training.html` · `personaltraining.html` · `kids_teens.html` ·
`preise.html` · `kontakt.html` · `news.html` · `galerie.html` ·
`probetraining.html` · `impressum.html` · `datenschutz.html`

## Struktur

- `assets/css/` — `site.css` (Design-System), `fonts.css` (lokale Web­fonts)
- `assets/js/` — `site.js` (Navigation, Parallax, YouTube-Einwilligung, Lightbox, Kontaktformular)
- `assets/img/` — austauschbare Bild-Dateien, siehe `BILDER.md`
- `assets/fonts/` — Barlow Condensed, Inter (lokal, keine Web­font-Server zur Laufzeit)
- `TEMPLATE.html` — Kopf-/Fuß-Vorlage für neue Seiten
- `BILDER.md` — Bildplätze pro Seite (`?form` an eine URL zeigt sie im Browser an)
- `PRODUCT.md` — Produktfakten, Zielgruppen, technische Leitplanken

## Bild austauschen

Datei unter `assets/img/…` durch eine gleichnamige Datei ersetzen. Das HTML
muss dafür nicht geändert werden.
