import React from 'react'
import ItemCount from './ItemCount/ItemCount'
import './ItemListContainer.css'

let miProd = {name: "Telstar Ball", price: 5000};
let Stock = 1;

const ItemListContainer = (props) => {
    return (
        <div>
            <center>
                <h2>{props.saludo}</h2>
                <ItemCount miProd={miProd} Stock={Stock}/>
            </center>
        </div>
        
    )
}

export default ItemListContainer