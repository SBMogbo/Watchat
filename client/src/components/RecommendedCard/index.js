import { Card } from "react-bootstrap";
import API from "../../utils/API";



function RecommendedCard(props) {
  function onSearchClick() {
    API.omdbSearch
  }
    return(
    <>
<Card>
    <Card.Body>
      <Card.Text>
        <h5>Recommended</h5>
        <input placeholder="Movie Title"></input>
        <button onSearchClick={onSearchClick}>search</button>
      </Card.Text>
    </Card.Body>
    <Card.Img variant="bottom" src="https://image.shutterstock.com/image-photo/photo-old-movie-projector-260nw-92369284.jpg" />
  </Card>
    </>
    )
}

export default RecommendedCard;