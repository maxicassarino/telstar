import React from 'react'
import ItemCount from './ItemCount/ItemCount'
import './ItemListContainer.css'

let miProd = {name: "Telstar Ball", price: 5000};
let Stock = 1;

const ItemListContainer = ({saludo}) => {
    return (
        <div>
            <center>
                <h2>{saludo}</h2>
                <ItemCount miProd={miProd} Stock={Stock}/>
            </center>
        </div>
        
    )
}

export default ItemListContainer