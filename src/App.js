// import logo from './logo.svg';
import './App.css';
// import MyKeys from './Components/Keys';
import TitleCount from './Components/ReactCounter';
import MySort from './Components/ReactSort';
import React from 'react';
// import ReactSort from './Components/ReactSort';
import Timer from './Components/Timer';
const sampleData = ["Banana", "Orange", "Apple", "Mango", "Kiwi"];
function App() {
  return (
    <div className="App">
      <header className="App-header">
        {/* <img src={logo} className="App-logo" alt="logo" /> */}
        <p>
          This is a simple react site to test deploying on Github Pages! 
          <br></br><br></br>
          Below we have some basic ReactJS examples for fun:
        </p>
        
        <p> Here is an example of a counter component.</p>
          <TitleCount/>
          <p> Here is an example of a sorting component.</p>
          <MySort data={sampleData}/>
          <p> Here is an example of a simple timer.</p>
          <Timer/>
          {/* </ul> */}
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          React Docs
          
        </a>
      </header>
    </div>
  );
}

export default App;
