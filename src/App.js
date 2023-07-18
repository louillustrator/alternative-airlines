import './App.css';
import HeroBanner from './components/HeroBanner';
import InfoBanner from './components/InfoBanner';
import Nav from './components/Nav.js'

function App() {
  return (
    <div className="App">
      <header className="header">
        <Nav />
      </header>
      <HeroBanner />
      <InfoBanner />
    </div>
  );
}

export default App;
