# Next.js Lecture HdM Master
This repository contains all files and exercises created as part of the lecture "143404 Entwicklung von Web-Anwendungen". You will work with a Ne(x)tflix Clone to learn about the features and advantages of Next.js.

## Getting Started
To follow along please complete the following steps:

1. Install node.js: [https://nodejs.org/en/download](https://nodejs.org/en/download)
2. Open a terminal and cd into the directory of this repository.
3. Install Node dependencies ```npm install```
4. Run the development server ```npm run dev```
5. Open [https://localhost:3000](https://localhost:3000) with your browser.

# Lecture 17.05.2023
## Topics
- Next.js Introduction
- Recap React
- Installation: ```npx create-next-app```
- Typescript
- React Router vs. Routing with Next.js
- Styling with Tailwind

# Lecture 24.05.2023
## Topics
- Rückblick Next.js/Einstieg (Vivi)
- Übung 1/ Modals (Vivi)
- App-Routing (Vivi)
- (Übung / Umstellung auf Next 13)
- Static-side rendering (Marvin)
- Server-side rendering (Marvin)
- Übung 2 (Marvin)
- SEO (Caro)
- (Übung)


# Excercises

## Excercise 1/ Recap React: Rows / Map
Die ```Row.tsx```-Komponente soll alle Filme eines bestimmten Genres als Thumbnails in einer Side-Scrollbar anzeigen. Die einzelnen Filme werden der Row über die ```movies```-Prop (Liste von ```Movie```-Objekten) übergeben. 

### Aufgabe:
Erzeuge dynamisch alle ```Thumbnail```-Objekte einer Row, indem für jeden Eintrag in der ```movies```-Liste ein Thumbnail erzeugt wird. Nutze hierfür die [```map()```-Funktion](https://react.dev/reference/react/Children#children-map) und die bereits existierende ```Thumbnail.tsx```-Komponente.

### Tipp: 
Das gesamte Tailwind CSS-Styling für die ```Row.tsx```-Komponente existiert bereits und muss nicht angepasst werden.

## Excercise 2/ Customizing Head with Recoil States
Der ```<title>``` der Webseite (Name des Browser-Tabs) soll sich mit dem Klicken auf den Info-Button des Banners an den Namen des angezeigten Films anpassen. 

### Beispiel: 
Vorher "Home - Nextflix" -> Klick auf Banner Info-Button -> "Star Wars Episode VI - Nextflix"

Gegeben ist das ```currentMovieState```-Atom in ```atoms/movieStateAtom.ts```. Dieser State beschreibt den zuletzt geklickten Film, dessen Name im Webseiten-Titel angezeigt werden soll.

### Aufgabe:
1. In ```index.tsx```: 
Erstelle eine [```<Head>```-Komponente](https://nextjs.org/docs/pages/api-reference/components/head) mit einem ```<title>``` namens 
"Home - Nextflix" 
2. In ```Banner.tsx```:
Erstelle die  Setter-Funktion ```const setCurrentMovie```, die den ```currentMovieState```-State setzt bzw. überschreibt. Nutze hierfür den ```useSetRecoilState```-Hook von Recoil.
Die Setter-Funktion soll bei jedem Klicken auf den Info-Button ausgeführt werden und den aktuellen Banner-Film im ```currentMovieState```-State speichern.
3. In ```index.tsx```:
Erstelle eine Variable, die zum ```currentMovieState``` subscribed ist. Nutze hierfür die ```useRecoilValue```-Funktion von Recoil.
Ergänze die ```<title>```-Komponente im ```<Head>``` um den Titel des Films, der in ```currentMovieState``` gespeichert ist, sofern dieser nicht ```null``` ist. Der Titel soll das Format "*Titel des gedrückten Banner-Films* - Nextflix" annehmen.
4. Bonus-Aufgabe:
Implementiere die selbe Funktion für das Klicken auf ein Thumbnail in der ```Thumbnail.tsx```-Komponente. Der Titel soll das Format "*Titel des gedrückten Thumbnail-Films* - Nextflix" annehmen.

 
### Tipp: 
Innerhalb von ```<title>``` bzw. TSX-Code können Bedingungen verwendet werden:
```{`${object1?.title || 'Text in case first condition is undefined'}`} ```

## Excercise 3/ Routing

### Aufgabe:
Erstelle für jeden Button des Headers in Nextflix eine Nested Route im ```browse```-Ordner des ```pages```-Ordners: ​
#### TV Shows, Movies, New & Popular und My List​

Nutze anschließend die Built-in Component ```<Link>```, um mit einem Klick auf den jeweiligen Button zu den entsprechenden Routen zu gelangen. Gerne kannst du für deine neuen Pages den Code aus dem ```pageTemplate.tsx```-File verwenden.​

### Bonus Aufgabe:
Erstelle eine weitere Seite ```accounts.tsx``` im ```pages```-Ordner auf welche man durch Klick auf das Account-Logo (oben rechts auf der Home-Seite) gelangt.​

### Verwendete Files und Ordner:
```pages```-Ordner, ```browse```-Ordner, ```Header.tsx```

## Excercise 4/ Styling with Tailwind

### Aufgabe:
Style die ```accounts.tsx```-Seite mithilfe von tailwindcss, damit sie wie im Screenshot aussieht.
Verwende dafür den bereits vorbereiteten ```AccountImage``` – Component. Außerdem kannst du mit den Bildern im ```public```-Ordner arbeiten. Beim Styling hilft dir das Cheatsheet für tailwindcss. 
### Tipp:
Du solltest mit dem Gridsystem von tailwindcss arbeiten.

### Bonus Aufgabe: 
Mach die Seite responsive, sodass diese auf kleinen und großen Bildschirmen gut aussieht. 
### Tipp: 
Verwende Breakpoints mithilfe von tailwindcss.

### Verwendete Files und Ordner:
```pages/accounts.tsx```, ```components/AccountImage.tsx```, ```public/Marvin.png``` , ```public/Vivi.png```, ```public/Caro.png```   
Du musst ausschließlich in ```account.tsx``` Code hinzufügen.

## Exercise 5/ Recap last week: Styling Tailwind
Style die ```Modal.tsx```-Seite, mithilfe verschiedener Tailwind-Klassen, damit die Texte wie im Screenshot angeordnet sind. Das Modal findest du bereits fertig vorbereitet im ```components```-Ordner, nur das Styling muss noch angepasst werden.
Als Hilfe kannst du wieder das Tailwind-Cheatsheet verwenden.

## Exercise 6/

## Exercise 7/SEO
Öffne Google Lighthouse im Google Chrome Browser und schau dir die SEO-Ergebnisse für die ```index.tsx``` - und die ```player.tsx``` - Seite an.
Folge den Tipps von Lighthouse, um die ```player.tsx``` - Seite zu verbessern sodass die Seite zum Schluss auch 100% optimiert ist.


## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.

## Features:
- Seitenbasiertes Routing (neue Seiten können durch das Anlegen von Komponenten in /pages erstellt werden)
- Eingebauter Router (React Router obsolet)
- API Routen (Backend Code mit Node.js unter /pages/api)
- Schnelle Builds für development / production 
- Bild- und Schriftartoptimierung
- Built-in ESLint und TypeScript Support

## TODO: Research React, ReactDOM, Server-side Rendering
