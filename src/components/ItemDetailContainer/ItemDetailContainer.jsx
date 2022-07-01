import React from 'react'
import { useEffect } from 'react';
import { getArray } from '../helpers/getArray'
import { array } from '../../data/data'
import { useState } from 'react'
import { ItemDetail } from './ItemDetail'
import "./ItemDetailContainer.css"

export const ItemDetailContainer = () => {

    const [product, setProduct] = useState({})
    const [loading, setLoading] = useState([true])

    useEffect(() => {
        getArray(array)
            .then(res => {
                const item = res.find((item) => item.id === 4)
                setProduct(item)
            })
            .catch(err => console.log(err))
            .finally(() => setLoading(false))
    }, [])

    return (
        <div id='item-detail-container'>
            {
                loading?
                    <div>Cargando...</div>
                :
                    <ItemDetail {...product}/>
            }
        </div>
    )
}
