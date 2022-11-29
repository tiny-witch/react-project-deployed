import logo from './logo.svg';
import './App.css';
import MyKeys from './Components/Keys';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        {/* <img src={logo} className="App-logo" alt="logo" /> */}
        <p>
          This is a simple react site to test deploying on Github Pages!
       
         
        </p>
        <ul>
          <MyKeys/>
          </ul>
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
