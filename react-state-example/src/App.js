import React from 'react';
import './App.css';
import User from './components/User'
import Navbar from './components/Navbar'

function App() {

  const [state] = React.useState({ bootcamp: 'Ironhack' });

  // let counter = 0;
  // function clickHandler(){

  //   if(counter%5 === 0){
  //     const [backColor, setBackColor] = React.useState(colorMapper());
  //   }

  //   counter++;
    
  // }

  function colorMapper() {
    const r = Math.floor(Math.random()* 256)
    const g = Math.floor(Math.random()* 256)
    const b = Math.floor(Math.random()* 256)

    console.log('test');

    return `rgb(${r},${g},${b} )`
  }

  return (
    <div className="App">
      <header className="App-header">
          <Navbar />

          <User state={ state }/>
      </header>
    </div>
  );
}

export default App;
