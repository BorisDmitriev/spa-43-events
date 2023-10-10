# React | state
[![Status overview badge](../../blob/badges/.github/badges/main/badge.svg)](#-results)


### 1. What is the diffference between the React's `function` components and `class` components ?

#### Function components
  
???

#### Class components
   
???

### 2.  What is the component `state` ?
   
???

## Exercise

##### Task 1.
Using the npm package [create-react-app](https://facebook.github.io/create-react-app/docs/getting-started) create new project named `react-state-example`. 
Inside off the `src` directory create a new directory `components` to store your new components.
Create file `src/components/User.js` and update the `src/App.js`, as per the code in this git.

##### Task 2.
Add additional property `bootcamp: 'Ironhack'` to the `state` of the root component (`App.js`).
Pass this value as the prop and display it in an additional `<h2>` tag in the `<User />` component so that it says : 'Welcome to Ironhack'

##### Task 3.
Edit the `clickHandler()` method in root component `App.js`, to change `state` property `backColor` to a random color every 5 clicks. Use the provided `colorMapper` function to get the HEX color string.

##### Task 4.
Create a new class component `Navbar.js`, which has a `state` with one property `username: 'YOUR NAME'`.
Display this value in the `<p>` tag which will be showing in the navbar.
You can use the below snippet for your component elements.
When done, `import` the `Navbar` component in `App.js` component and place it as the first element so that it displays on the top of the page.

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

## Additional resources

[DOM Events in React -  reactjs.org](https://reactjs.org/docs/events.html)

[Function vs. class components](https://medium.com/@Zwenza/functional-vs-class-components-in-react-231e3fbd7108)

[Understanding the Fundamentals of State in React](https://medium.com/the-andela-way/understanding-the-fundamentals-of-state-in-react-79c711be677f)

[Binding event handlers in React components](https://medium.freecodecamp.org/this-is-why-we-need-to-bind-event-handlers-in-class-components-in-react-f7ea1a6f93eb)

[//]: # (autograding info start)
# <img src="https://github.com/DCI-EdTech/autograding-setup/raw/main/assets/bot-large.svg" alt="" data-canonical-src="https://github.com/DCI-EdTech/autograding-setup/raw/main/assets/bot-large.svg" height="31" /> Results
> ⌛ Give it a minute. As long as you see the orange dot ![processing](https://raw.githubusercontent.com/DCI-EdTech/autograding-setup/main/assets/processing.svg) on top, CodeBuddy is still processing. Refresh this page to see it's current status.
>
> This is what CodeBuddy found when running your code. It is to show you what you have achieved and to give you hints on how to complete the exercise.




[🔬 Results Details](../../actions)
[🐞 Tips on Debugging](https://github.com/DCI-EdTech/autograding-setup/wiki/How-to-work-with-CodeBuddy)
[📢 Report Problem](https://docs.google.com/forms/d/e/1FAIpQLSfS8wPh6bCMTLF2wmjiE5_UhPiOEnubEwwPLN_M8zTCjx5qbg/viewform?usp=pp_url&entry.652569746=SPA-events-Iron-Hack)


[//]: # (autograding info end)