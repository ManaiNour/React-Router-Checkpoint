import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';
import './card.css'

function CardPr({ props }) {
    let movie = props
    return (
        <Card style={{ width: '25rem', margin: "20px" }}>
            <Card.Img variant="top" src={movie.image} style={{ height: "250px", width: "250px", padding: "10px 10px", justifyContent: "center", alignItems: "center" }} />
            <Card.Body>
                <Card.Title style={{ fontSize: "30px", justifyContent: "center", alignItems: "center" }}>{movie.title}</Card.Title>
                <Card.Text>{movie.plot}</Card.Text>
                <Link to={movie.trailer} target="_blank" className="btn-link">Watch Trailer</Link>            
                </Card.Body>
        </Card>
    );
}

export default CardPr; 