---
path: "/anleitung-oeffentlichkeitsarbeit"
date: "2021-08-03"
title: "VP Öffentlichkeitsarbeit"
---

Als Vizepräsident Öffentlichkeitsarbeit kümmerst du dich um

* die [Erstellung des Berichtes über den letzten Clubabend](#bericht-über-den-letzten-clubabend)
* die [Pflege der kommenden Termine](#termine)
* die [Ankündigung für den nächsten Clubabend](#nächster-clubabend)
* veröffentlichen bzw. [teilen auf z.B. deiner Facebookseite](#bericht-promoten)

Klar - du kannst diese Aufgaben natürlich delegieren. Als Vorstandsmitglied ist es jedoch deine Verantwortung, dass diese Aufgaben erledigt werden. Hier erfährst du alles, was du wissen musst.

## Das RCB-Administrationswerkzeug

Du kannst es unter dem Link

https://rcb-relaunch-2020.herokuapp.com/admin/auth/login

aufrufen. Du benötigst (falls noch nicht vorhanden) einen Zugang. Du loggst dich mit deiner EMail-Adresse und deinem Passwort ein.
Hast du noch keinen Zugang, so wende dich an den Präsidenten oder den Webmaster.

![](/images/anleitung-strapi/login.png)

Nach erfolgreichem Login befindest du dich auf der Hauptseite. Von hier kannst du

- Einen Bericht über den letzten Clubabend erstellen bzw. verwalten (1)
- Die Seite für den nächsten Clubabend ändern (2)
- Die Seite für die zukünftigen Termine ändern (3)
- Alle Inhalte veröffentlichen und somit auf der Website sichtbar machen

![](/images/anleitung-strapi/nach-login.png)


## Bericht über den letzten Clubabend

Du kommst zunächst auf eine Seite mit der Liste vorhandener Beiträge. Sinnvoll ist hier über den Klick auf 'Datum' (1) den neuesten Bericht ganz oben einzusortieren. Dann siehst du den letzten Eintrag. Einen neuen Bericht stellst du über den Button (2) ein. Über die Icons (3) kannst du einen vorhanen Bericht kopieren, verändern oder löschen.

![](/images/anleitung-strapi/clubabend-admin.png)

Zum Erstellen eines Berichtes trägst du einen Titel (1) ein, der die Leser neugierig macht (evtl. Frage, provokante Äußerung/Zitat). Bei (2) trage das Datum des Clubabends ein. Wichtig ist, dass du bei (3) ein Beitragsbild einstellst. Das ist ein Pflichtfeld.

Bei Inhalt (4) trage deinen Text ein. Achtung: hier wird ein Markdown-Text erwartet.

Info: Falls du das noch nicht kennst, hast du hier die Gelegenheit, etwas cooles neues zu lernen: Schaue andere Beiträge zum Vergleich an, frage nach oder siehe Dokumentationen über Markdown an: https://commonmark.org/help/. Du wirst schnell von Markdown begeistert sein - dieser Text und alle Wiki-Seiten im Internet sind damit erstellt.

Für die wichtigsten Formatierungselemente stehen Buttons am oberen Bereich des Eingabebereiches zur Verfügung. Außerdem kannst du jederzeit 'Zur Vorschau' wechseln. Dann sieht das Ganze schon fast so aus, wie es auf der Website erscheinen wird.

Mit dem Button 'Speichern' (5) wird dein Beitrag dauerhaft in der Datenbank abgelegt und du könntest das Ganze [veröffentlichen](#veröffentlichen).

![](/images/anleitung-strapi/create-bericht.png)

Das Einstellen eines Beitragsbildes (oder eines anderen Bildes innerhalb des Beitrages) erfolgt über den Medienmanager. Du kannst entweder ein vorhandenes Bild auswählen (1) oder ein neues Bild hochladen (2). Schaue bitte erst nach, ob dein gewünschtes Bild nicht schon vorhanden ist, bevor du es hochlädst. Damit vermeidest du, dass das gleiche Bild mehrfach hochgeladen wird. Wenn du es ausgewählt hast, bestätigst du mit (3).

![](/images/anleitung-strapi/media-dialog.png)

Wenn Du ein Bild in die Mediabibliothek hinzfügen willst, hast du die Möglichkeit das Bild von einer URL zu beziehen oder von deinem Rechner hochzuladen. Ich empfehle dir, das Bild erst auf deinem Rechner abzuspeichern und es dann hochzuladen:

![](/images/anleitung-strapi/add-bild.png)



## Veröffentlichen

Wenn alle Texte eingestellt bzw. hier abgespeichert sind, muss das Ganze noch auf der Website erscheinen. Das geschieht nicht automatisch, sonern muss manuell über den Menüpunkt (1) und dem Button (2) angestoßen werden:

![](/images/anleitung-strapi/publish.png)

Es dauert normalerweise ca. 10 Minten, bis alles auf die Website übertragen wurde und dort sichtbar ist. Darüber gibt es hier leider keine Rückmeldung vom System. Nimm dir die Zeit und überprüfe anschließend durch Klick auf https://rc-bgdf.de/#clubleben , ob alles soweit erscheint, wie gewünscht. Indem du auf das Beitragsbild klickst (2) kommst du auf die Detailseite:

![](/images/anleitung-strapi/clubleben.png)

Nun kannst du einen neuen Beitrag verkünden:

## Bericht 'promoten'

[Facebook](https://facebook) ist eine optimale Socialmedia-Plattform um unsere Reichweite und Sichtbarkeit deutlich zu verbessern. Darum teile den neuen Beitrag nun auf deiner Facebook-Seite und bitte so viele Menschen wie möglich, das ebenso zu tun.

Auf der Detailseite des Berichtes klicke oben das Facebook-Icon(1). Daraufhin öffnet sich das entsprechene Fenster zum Teilen. Trage einen neugierig machenden Beitragstext ein (2) und klicke anschließend den Button 'Auf Facebook teilen' (3).

![](/images/anleitung-strapi/teilen.png)

Nach wenigen Sekunden wird dein neuer Beitrag in deine Community getragen und ist dort sichtbar.

![](/images/anleitung-strapi/fb-post.png)


## Nächster Clubabend

Trage bei (1) ein, wann der nächste Clubabend stattfindet.

Im großen Textfeld (2) trage den gesamten Ankündigungstext ein. Auch hier wird Markdowntext erwartet.

Der Vizepräsident Weiterbildung pflegt unseren [Redeplan](https://docs.google.com/spreadsheets/d/1R_ezzESz3pHakBopZBAHZ75li6HF4ucYPxeuGPPl5po/edit?pli=1#gid=670966173), dem du die Rollen für den nächsten Clubaben entnehmen kannst: https://docs.google.com/spreadsheets/d/1R_ezzESz3pHakBopZBAHZ75li6HF4ucYPxeuGPPl5po/edit?pli=1#gid=670966173

Von dort überträgst du die Infos in die (vorläufige) Agenda unten in die Tabelle eintragen.

Info: Beim Markdown kann das Gestalten von Tabellen zum Anfang eine Herausforderung sein. Die Zellenbegrenzungszeichen | stehen in der Eingbe i.d.R. nicht übereinander. Mit ein wenig Übung und der Hilfe der Vorschau gelingt es dir recht schnell.

Wenn alles wie gewünscht aussieht -> mit (3) abspeichern. Ggf. abschließend die Änderungen [veröffentlichen](#veröffentlichen).

![](/images/anleitung-strapi/naechster-clubabend.png)

## Termine

Trage im großen Textfeld (1) die Termine in Tabellenform ein. Hier wird ebenfalls Markdowntext erwartet. Auch hier kannst du jederzeit über den Button 'Vorschau' (2) jederzeit überprüfen, wie dein Markdown-Text auf der Website in etwa aussieht.

Anschließend mit (3) abspeichern und ggf. die Änderungen jetzt [veröffentlichen](#veröffentlichen).

![](/images/anleitung-strapi/termine.png)
