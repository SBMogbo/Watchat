import { Card } from "react-bootstrap";



function RecommendedCard() {
    return(
    <>
<Card style={{backgroundColor:"transparent", border:"none" }}>
    <Card.Body >
      <Card.Text style={{color:"white"}}>
        <h5>Recommended</h5>
        <p>Might also like</p>
      </Card.Text>
    </Card.Body>
    <Card.Img style={{cursor:"pointer"}}className="image-card"variant="bottom" src="https://image.shutterstock.com/image-photo/photo-old-movie-projector-260nw-92369284.jpg" />
  </Card>
    </>
    )
}

export default RecommendedCard;