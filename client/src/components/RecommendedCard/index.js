import { Card } from "react-bootstrap";



function RecommendedCard() {
    return(
    <>
<Card>
    <Card.Body>
      <Card.Text>
        <h5>Recommended</h5>
        <p>Might also like</p>
      </Card.Text>
    </Card.Body>
    <Card.Img variant="bottom" src="https://image.shutterstock.com/image-photo/photo-old-movie-projector-260nw-92369284.jpg" />
  </Card>
    </>
    )
}

export default RecommendedCard;