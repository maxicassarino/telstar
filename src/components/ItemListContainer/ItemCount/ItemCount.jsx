import React from 'react'
import { useState } from 'react';
import './ItemCount.css'

export default function ItemCount ({miProd, stock, initial, onAdd}) {

    const [count, setCount] = useState(initial)

    const Add = () => {
        setCount(count + 1)
    }
    const Res = () => {
        setCount(count - 1)
    }
    


    return (
        <div className='ItemCount'>
            <div className='Count'>
                <button onClick={Add} disabled={count === stock}>+</button>
                <h3>{count}</h3>
                <button onClick={Res} disabled={count === initial}>-</button>
            </div>
            <button className='add' onClick={() => onAdd (count)}>Agregar al Carrito</button>
        </div>
    )
}
