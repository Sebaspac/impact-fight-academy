# PRODUCT.md — Impact Fight Academy

## Was es ist
Website der **IMPACT Sport & Fight Academy** (Marke: „Impact Boxing Studio"), einem
Kampfsportstudio in München-Giesing. Gegründet 2006 von Slave Savic. Statisches HTML,
lokal unter `http://localhost:8080`, ausgeliefert aus dem Projektstamm.

## Wer es besucht und warum (Mode: Persuade)
- **Interessenten** (Erwachsene, Eltern, Jugendliche): wollen wissen, ob das Studio zu
  ihnen passt, was es kostet, und ein **kostenloses Probetraining** vereinbaren.
- **Mitglieder**: schauen den Trainingsplan und Neuigkeiten nach.
Konversionsziel jeder Seite: Probetraining vereinbaren / Kontakt aufnehmen.

## Produktwahrheit (nie erfinden, nie verändern)
- Gegründet 2006 von Slave Savic. 20 Jahre Erfahrung. Familiäre Atmosphäre.
- Werte: Disziplin, Respekt, Fairness, Familiäre Atmosphäre, Wissen vermitteln,
  über seine Grenzen hinauszugehen, geistige/körperliche Stärke.
- Sportarten: Boxen, Kickboxen, Muay Thai (Thaiboxen), BJJ. Kurse für Kinder (ab 4),
  Jugendliche und Erwachsene. Kein Sparringszwang.
- 8 Trainer: Slave, Tuncay, Felix, Ali, Carina, Marko, David, Bobby (Fotos in assets/img/trainer/).
- Wettkämpfer: Marko Kraljevic (Profiboxer, 4:0), David Ayiti (Profiboxer, 4:0).
- Seit 2013 offizieller Partner von Jochen Schweizer.
- Adresse: Pfälzer-Wald-Str. 65 / Rückgebäude, 81539 München (Giesing).
- Telefon: +49 89 600 621 38 · Mobil: +49 178 851 315 6.
- Erste Probestunde kostenlos, Leihausrüstung vorhanden, wird nach Benutzung desinfiziert.
- Aktueller Hinweis: „Für August gilt ein anderer Trainingsplan. Ab dem 24.08 bis
  einschließlich 06.09 ist die Academy geschlossen!"
- Preise: siehe INHALT_PREISE.md (vom Inhaber geliefert, exakt übernehmen).
- Impressum/Datenschutz: INHALT_IMPRESSUM.md / INHALT_DATENSCHUTZ.md (exakt übernehmen).

## Sprache & Ton
Deutsch, Du-Form für Sportinhalte, Sie-Form nur wo die Quelltexte sie nutzen
(Personal Training, Datenschutz). Kurz, direkt, ohne Marketing-Floskeln.
Originaltexte inkl. Eigenheiten („bedeuet", „Ergeiz", „Zirkelraining") wortgetreu.

## Technische Constraints
- Statisches HTML/CSS/JS, keine Build-Pipeline, kein Backend, kein CMS.
- **Keine externen Anfragen zur Laufzeit** (keine CDNs, keine Karten-Tiles, keine
  Webfont-Server). Schriften werden lokal aus assets/fonts/ geladen.
  Einzige Ausnahmen: Social-Profile (Facebook/Instagram, werden später getauscht)
  und das YouTube-Video **erst nach Klick** (youtube-nocookie, DSGVO-Einwilligung).
- Bilder liegen als austauschbare Dateien unter assets/img/ (FORM-System, BILDER.md).
  `?form` an einer URL blendet die Kennzeichnung ein — muss erhalten bleiben.
- Kontaktformular: statisch; Absenden erzeugt eine vorbefüllte E-Mail (mailto).
- Seiten: index, training, personaltraining, kids_teens, preise, kontakt,
  news (enthält auch die Galerie, Anker #news / #galerie), probetraining,
  impressum, datenschutz.
