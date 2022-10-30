import Card from "react-bootstrap/Card";
import { Link } from "react-router-dom";
import "./cards.css";

function Cards({ id, img, name, description, price }) {
  return (
    <div className="cards col-md-4">
      <Card.Img variant="top" src={img} />
      <Card.Body>
        <Card.Title>{name}</Card.Title>
        <Card.Text className="cardText">{description}</Card.Text>
        <h3>${price}</h3>
      </Card.Body>
      <Link to={`/detail/${id}`} className="btn btn-primary">
        Ver detalle
      </Link>
    </div>
  );
}

export default Cards;
