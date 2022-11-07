import Card from "react-bootstrap/Card";
import { Link } from "react-router-dom";
import React from 'react'
import "./cards.css";

function Cards({ id, img, name, description, price }) {
  return (
    <div className="cards col-md-4">
      <Card className='card'>
      <Card.Img variant="top" src={img} style={{ width: '100%', objectFit: 'fill'}} />
      <Card.Body>
        <Card.Title>{name}</Card.Title>
        <p className='price'>${price}</p>
        <Card.Text>
            {description}
        </Card.Text>
      </Card.Body>
       <Link to={`/detail/${id}`} className="btn btn-primary">
        Ver detalle
      </Link>
      </Card>
    </div>
  );
}

export default Cards;
