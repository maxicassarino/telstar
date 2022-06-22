import React from 'react'
import { useState } from 'react';
import './ItemCount.css'

export default function ItemCount ({miProd, Stock}) {
    const [maxStock, setMaxStock] = useState(Stock)
    function aumentarStock(){
        setMaxStock(maxStock + 1);
    }
    function restarStock(){
        setMaxStock(maxStock - 1);
    }
    function agregarStock(){
        alert('Productos Agregados al Carrito');
    }
    return (
        <div>
            <p>Producto: {JSON.stringify(miProd)}</p>
            <div className='Stock'>
                <div onClick={() => restarStock()} className='Boton'>
                    <center>-</center>
                </div>
                <p>Stock: {maxStock}</p>
                <div onClick={() => aumentarStock()} className='Boton'>
                    <center>+</center>
                </div>
            </div>
            <div onClick={() => agregarStock()} id='Carrito'>Agregar al Carrito</div>
        </div>
    )
}
