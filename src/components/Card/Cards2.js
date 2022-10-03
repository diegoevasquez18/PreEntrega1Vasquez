import Card from 'react-bootstrap/Card';
import CardGroup from 'react-bootstrap/CardGroup';
import { Link } from 'react-router-dom';


function Cards({prod}) {
  return (
    <CardGroup>
      <Card>
        <Card.Img variant="top" src={prod.img} />
        <Card.Body>
          <Card.Title>{prod.name}</Card.Title>
          <Card.Text>
            {prod.description}
          </Card.Text>
        </Card.Body>
        <Card.Footer>
          <small className="text-muted">{prod.price}</small>
        </Card.Footer>
        <Link to={`/detail/${prod.id}`} className="btn btn-primary">Ver detalle</Link>
      </Card>
    </CardGroup>
  );
}

export default Cards;