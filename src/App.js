import './App.css';
import ItemCount from './components/ItemCount/ItemCount'
import { ItemDetailContainer } from './components/ItemDetailContainer/ItemDetailContainer';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import NavBar from './components/NavBar/NavBar';
import { BrowserRouter, Routes, Route } from "react-router-dom"

let miProd = {name: "World Cup Ball"};
let stock = 5;
const initial = 1

function App() {
  
  const onAdd = (count) => {
    alert("Agregaste " + count + " items al carrito")
  }

  return (
    <>
      <BrowserRouter>
        <NavBar/>
        <Routes>
          <Route path='/' element={<ItemListContainer/>}/>
          <Route path='/category/:categoryId' element={<ItemListContainer/>}/>
          <Route path='/item/:itemId' element={<ItemDetailContainer/>}/>
        </Routes>
        <ItemCount miProd={miProd} stock={stock} initial={initial} onAdd={onAdd}/>
      </BrowserRouter>
    </>
  );
}

export default App;