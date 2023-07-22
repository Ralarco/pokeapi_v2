import './App.css';
import Header from './components/Header';
import ListaPokemones from './components/ListaPokemones';
import NavCategorias from './components/NavCategorias';

function App() {
  return (
    <div className="App">
       <Header />
       <NavCategorias />
       <ListaPokemones />
    </div>
  );
}

export default App;
