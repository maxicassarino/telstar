import React from 'react'
import { getArray } from '../helpers/getArray';
import { array } from '../../data/data';
import './ItemListContainer.css'
import { useEffect } from 'react';
import { useState } from 'react';
import { ItemList } from './ItemList';

const ItemListContainer = ({saludo}) => {

    const [items, setItems] = useState([])
    const [loading, setLoading] = useState([true])

    useEffect(() => {
        setLoading(true)
        getArray(array)
            .then(res => setItems(res))
            .catch(err => console.log(err))
            .finally(() => setLoading(false))
    }, [])

    return (
        
        <div>
            <center>
                <h3 id='Titulo'>{saludo}</h3>
            </center>
            <div id='item-list-container'>
                {
                    loading?
                    <div>Cargando...</div>
                :
                    <ItemList items={items}/>
                }
            </div>
        </div>
        
    )
}

export default ItemListContainer