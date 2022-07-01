import React from 'react'
import { Card, Button } from 'react-bootstrap'

export const Item = ({title, description, price, pictureUrl}) => {
    return (
        <Card style={{ width: '18rem' }} id="Item">
            <Card.Img variant="top" src={pictureUrl} />
            <Card.Body>
                <Card.Title>{title}</Card.Title>
                <Card.Text>Precio: ${price}</Card.Text>
                <Card.Text>{description}</Card.Text>
                <Button variant="primary">Ver más</Button>
            </Card.Body>
        </Card>
    )
}
