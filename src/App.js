import './App.css';
import pokemon from './pokemon';
import Pokedex from './Pokedex';

function App() {
  return (
    <div className="App">
      <header>
        <h1 className="App-title">Pokedex</h1>
        <Pokedex pokemon={pokemon}/>
      </header>
    </div>
  );
}

export default App;
