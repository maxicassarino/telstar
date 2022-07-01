import React from 'react'
import ItemCount from './ItemCount/ItemCount'
import './ItemListContainer.css'

let miProd = {name: "Telstar Ball", price: 5000};
let stock = 5;
const initial = 1

const ItemListContainer = ({saludo}) => {

    const onAdd = (count) => {
        alert("Agregaste " + count + " items al carrito")
    }

    return (
        <div>
            <center>
                <h3 className='Titulo'>{saludo}</h3>
                <ItemCount miProd={miProd} stock={stock} initial={initial} onAdd={onAdd}/>
            </center>
        </div>
        
    )
}

export default ItemListContainer