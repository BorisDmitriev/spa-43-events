# React | state

### 1. Was ist der Unterschied zwischen den `Funktionskomponenten` und den `Klassenkomponenten` von React?

#### Funktionskomponenten

Die Funktionskomponenten werden mit Funktionen gebaut. Es ist die einfachere, bisher aber auch weniger mächtige Variante. Funktionskomponenten bestehen nur aus einer Funktion, die – vergleichbar mit der render-Methode bei Klassenkomponenten – eine DOM-Repräsentation zurückliefern. 

#### Klassenkomponenten
   
Die Komponenten werden mit Klassen gebaut. Eine Klassenkomponente erweitert React.Component und muss in jedem Fall eine render-Methode besitzen. Diese render-Methode gibt eine DOM-Repräsentation zurück, die beschreibt, wie die Komponente gerade aussehen soll. 

### 2.  Was ist der Komponenten-`State` (Komponenten-Zustand)?

State ist dafür da um veränderlichen Zustand umzusetzen. Auf ihn kann mittels this.state lesend zugegriffen werden. Um Änderungen am lokalen Zustand durchzuführen, muss die Methode this.setState aufgerufen werden. Nach einem Aufruf wird React ein Neu-Rendering der Komponente veranlassen. 

## Übung

##### Aufgabe 1.
Erstelle mit dem npm-Paket [create-react-app](https://facebook.github.io/create-react-app/docs/getting-started) ein neues Projekt mit dem Namen `react-state-example`.
Erstelle innerhalb des Verzeichnisses `src` ein neues Verzeichnis `components`, um deine neuen Komponenten zu speichern.
Erstelle die Datei `src/components/User.js` und aktualisiere die Datei `src/App.js`, wie im Code in diesem Git beschrieben.

##### Aufgabe 2.
Füge die zusätzliche Eigenschaft `bootcamp: 'Ironhack'` zum `state` der Stammkomponente (`App.js`) hinzu.
Übergib diesen Wert als Requisite und zeige ihn in einem zusätzlichen `<h2>`-Tag in der `<User />`-Komponente an, so dass dort steht: 'Welcome to Ironhack'.

##### Aufgabe 3.
Bearbeite die Methode `clickHandler()` in der Stammkomponente `App.js`, um die Eigenschaft `state` alle 5 Klicks auf eine zufällige Farbe zu ändern. Verwende die mitgelieferte Funktion `colorMapper`, um den HEX-Farbstring zu erhalten.

##### Aufgabe 4.
Erstelle eine neue Klassenkomponente `Navbar.js`, die einen `State` mit einer Eigenschaft `username: 'YOUR NAME'` hat.
Zeige diesen Wert in dem `<p>`-Tag an, der in der Navbar angezeigt wird.
Du kannst das folgende Snippet für deine Komponentenelemente verwenden.
Wenn du fertig bist, importiere die Komponente `Navbar` in die Komponente `App.js` und füge sie als erstes Element ein, damit sie oben auf der Seite angezeigt wird.

```js
// Navbar.js
   <nav id='navbar'>
     <ul>
       <a href="#"><li>Home</li></a>
       <a href="#"><li>Contact</li></a>
       <a href="#"><li>About</li></a>
     </ul>

     <div className="nav-details">
        <p data-testid="nav-username">{name}</p>
     </div>
```


```css
#navbar {
  display: flex;
  align-items: center;
  justify-content: space-between;
  background:  #352275;
  padding: 0px 40px;
}

#navbar li {
  list-style: none;
  display: inline-block;
  margin: 0px 40px; 
  font-size: 22px;
  color:white;
}

div.nav-details > * {
  display: inline-block;
  color: royalblue;
  font-size: 22px;
}
```
## Zusätzliche Ressourcen

[DOM Events in React -  reactjs.org](https://reactjs.org/docs/events.html)

[Function vs. class components](https://medium.com/@Zwenza/functional-vs-class-components-in-react-231e3fbd7108)

[Understanding the Fundamentals of State in React](https://medium.com/the-andela-way/understanding-the-fundamentals-of-state-in-react-79c711be677f)

[Binding event handlers in React components](https://medium.freecodecamp.org/this-is-why-we-need-to-bind-event-handlers-in-class-components-in-react-f7ea1a6f93eb)
