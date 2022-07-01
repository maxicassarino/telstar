import './App.css';
import ItemCount from './components/ItemCount/ItemCount'
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import NavBar from './components/NavBar/NavBar';

let miProd = {name: "World Cup Ball"};
let stock = 5;
const initial = 1

function App() {
  
  const onAdd = (count) => {
    alert("Agregaste " + count + " items al carrito")
  }

  return (
    <>
      <NavBar/>
      <ItemListContainer saludo="Bienvenido a TELSTAR" />
      <ItemCount miProd={miProd} stock={stock} initial={initial} onAdd={onAdd}/>
    </>
  );
}

export default App;