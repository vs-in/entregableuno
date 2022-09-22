import logo from './logo.svg';
import './App.css';

// importaciones
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import NavBar from './components/NavBar/NavBar'

// Funcion React JS
function App() {
  return (
    <div className="App">
      <header>
        <nav>
        <NavBar></NavBar>
        <ItemListContainer greeting={"Electro ML"}/>
        </nav>
      </header>
      
    </div>
  );
}

// Exporto
export default App;
