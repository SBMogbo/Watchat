
import { Card } from "react-bootstrap";


function MovieCard() {
    return (
        <>
        <Card style={{backgroundColor:"transparent", border:"none"}}>
    <Card.Img variant="top" src="https://image.shutterstock.com/image-photo/photo-old-movie-projector-260nw-92369284.jpg" />
    
      <Card.Text style={{color:"white", paddingTop:"13px", alignItems:'center'}}>
       <p>Title</p>
      </Card.Text>
   
  </Card>
        </>
    )
}

export default MovieCard;