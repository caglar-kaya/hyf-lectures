import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <p>My first app with React</p>
        <img src={logo} className="App-logo" alt="logo" />
        <p>Created by Caglar Kaya - Duinrell - 2022</p>
        <a
          className="App-link"
          href="https://www.hackyourfuture.net/"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React at HackYourFuture
        </a>
      </header>
    </div>
  );
}

export default App;
