import './App.css';
import alternativeAirlinesLogo from "./images/logos/alternative-airlines.jpg"
import burgerMenu from './icons/menu.svg'

function App() {
  return (
    <div className="App">
      <header className="header">
        <a href="/">
          <img src={alternativeAirlinesLogo} className="header-logo" alt="alternative airlines logo"></img>
        </a>
        <div className='header-burger-menu'>
          <img src={burgerMenu} />
        </div>
      </header>
      <div className="hero-banner">
        <h1>Search and book flights to Australia</h1>
        <h2>Buy now and pay later</h2>
      </div>
    </div>
  );
}

export default App;
