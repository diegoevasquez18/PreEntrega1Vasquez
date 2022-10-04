import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';
import './cards2.css'


function Cards({prod}) {
  return (
    <div className="cards col-md-4" >
        <Card.Img variant="top" src={prod.img} />
        <Card.Body>
          <Card.Title>{prod.name}</Card.Title>
          <Card.Text>
            {prod.description}
          </Card.Text>
          <h3 >${prod.price}</h3>
        </Card.Body>
        <Link to={`/detail/${prod.id}`} className="btn btn-primary">Ver detalle</Link>
    </div>
  );
}

export default Cards;