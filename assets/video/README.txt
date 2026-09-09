Videos für die Website.

Video austauschen/einsetzen:
Die Datei mit genau diesem Namen hier ablegen — das HTML muss nicht
angefasst werden:

  hero.mp4                  Startseite, großes Video im Kopfbereich
  kids-probetraining.mp4    Kinder & Jugendliche (kids_teens.html)


HERO-VIDEO (hero.mp4) — worauf es ankommt

Das Video läuft automatisch, stumm und in Dauerschleife hinter der
Überschrift. Es ist Kulisse, kein Film zum Zuschauen. Daraus folgt:

  Format      MP4 (H.264 + AAC), damit es überall läuft
  Auflösung   1920x1080. Mehr bringt nichts, es wird beschnitten.
  Länge       8 bis 15 Sekunden. Es läuft in Schleife — kürzer wirkt
              hektisch, länger lädt unnötig lange.
  Dateigröße  unter 6 MB. Das Video lädt bei JEDEM Besuch der Startseite
              mit. 20 MB kosten Mobilnutzer spürbar Zeit und Datenvolumen.
  Ton         egal, er wird stumm geschaltet (Browser erlauben
              automatisches Abspielen nur ohne Ton).
  Bildinhalt  ruhige, langsame Bewegung. Schnelle Schnitte lenken von der
              Schrift ab. Die untere Hälfte wird dunkel überblendet, dort
              geht Bildinhalt verloren — das Wesentliche gehört nach oben.
  Schleife    Anfang und Ende sollten zusammenpassen, sonst springt es
              sichtbar.

Solange hero.mp4 fehlt, zeigt die Startseite das Bild darunter
(assets/img/hero/hero.jpg). Die Seite sieht dann vollständig aus, nur eben
ohne Bewegung — kaputt wirkt sie nie.

Das Bild darunter sollte idealerweise ein Standbild aus dem Video sein,
dann ist der Übergang beim Start unsichtbar. Zum Austauschen das <img> im
Hero von index.html anpassen.

Kein Ton, keine Untertitel nötig: das Video transportiert keine Information,
die sonst verloren ginge (deshalb steht der ganze Block auf aria-hidden).


FERNSEHBEITRAG (sat1-bayernsport.mp4)

Anklickbares Video im Abschnitt "Möchtest du uns kennenlernen?" auf der
Startseite. Anders als hero.mp4 läuft es NICHT automatisch, hat Ton und
wird in einem eigenen Player gezeigt — dort ist die 640x360-Auflösung
der Quelle nahezu 1:1 und damit scharf.

Geschnitten aus dem gelieferten SAT.1-Bayern-Beitrag: Sekunde 10,5 bis 158.
Weggeschnitten sind der GlücksSpirale-Sponsorenspot am Anfang (0-10 s) und
Werbung plus "BAYERNSPORT"-Abspann am Ende (ab 158 s).

Posterbild: assets/img/video/bericht-poster.jpg (Gruppenaufnahme, Sek. 160).

WICHTIG: Die Nutzungsrechte an diesem Beitrag liegen beim Sender. Vor dem
Livegang eine schriftliche Freigabe von SAT.1 Bayern einholen.
