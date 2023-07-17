import './App.css';
import alternativeAirlinesLogo from "./images/logos/alternative-airlines.jpg"
import Nav from './components/Nav.js'

function App() {
  return (
    <div className="App">
      <header className="header">

        <Nav />
      </header>
      <div className="hero-banner">
        <h1>Search and book flights to Australia</h1>
        <h2>Buy your flights now and pay later</h2>
      </div>
    </div>
  );
}

export default App;
