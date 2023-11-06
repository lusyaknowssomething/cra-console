import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Hello 2
        </a>
      </header>
    </div>
  );
}

// function App() {


//   return (
//     <div>
//       This is App component
//       <Rating/>
//       <Accordion/>
//     </div>
//   );
// }


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
