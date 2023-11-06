import React from 'react';
import logo from './logo.svg';
import './App.css';


function App() {


  return (
    <div>
      This is App component
      <Rating/>
      <Accordion/>
    </div>
  );
}


function Rating() {
  return (
    <>
      <Star/>
      <Star/>
      <Star/>
      <Star/>
      <Star/>
    </>
  );
}

function Accordion() {
  return (
    <>
      <h3>start</h3>
      <ul>
        <li>1</li>
        <li>2</li>
        <li>3</li>
      </ul>
    </>
  );
}

function Star() {
  return (
    <div>Star</div>
  );
}



export default App;
