import { Card } from "react-bootstrap";


function MovieCard() {
    return (
        <>
        <Card>
    <Card.Img variant="top" src="https://image.shutterstock.com/image-photo/photo-old-movie-projector-260nw-92369284.jpg" />
    
      <Card.Text>
       <p>Title</p>
      </Card.Text>
   
  </Card>
        </>
    )
}

export default MovieCard;