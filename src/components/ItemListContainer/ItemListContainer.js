import React from 'react'
import ItemCount from './ItemCount/ItemCount'
import './ItemListContainer.css'

let miProd = {id:0, name: "Telstar Ball", price: 5000};
let Stock = 1;

const ItemListContainer = (props) => {
    return (
        <div>
            <center>
                <h6>{props.saludo}</h6>
                <ItemCount miProd={miProd} Stock={Stock}/>
            </center>
        </div>
        
    )
}

export default ItemListContainer