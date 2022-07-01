import React from 'react'

export const ItemDetail = ({title, description, price, pictureUrl}) => {
    return (
        <div id='item-detail'>
            <div id='portada'>
                <center><img src={pictureUrl} alt={title} id='foto'/></center>
            </div>
            <div id='data'>
                <center>
                    <h1>{title}</h1>
                    <h6>{description}</h6>
                    <h4>${price}</h4>
                </center>
            </div>
        </div>
    )
}
