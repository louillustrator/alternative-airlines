import './App.css';
import HeroBanner from './components/HeroBanner';
import Nav from './components/Nav.js'

function App() {
  return (
    <div className="App">
      <header className="header">

        <Nav />
      </header>
      <HeroBanner />
    </div>
  );
}

export default App;
