import "./style.css";
import {Card, Row, Col} from "react-bootstrap";





function ProfileMovieCard() {
    return(
      <>
      <Card>
          <Card.Header>
              Movie
          </Card.Header>
          <Card.Body>
              <Row>
                <Col sm={6}>
                <Card.Img src="https://image.shutterstock.com/image-photo/photo-old-movie-projector-260nw-92369284.jpg"/>
                </Col>
                
              </Row>
            
          </Card.Body>
      </Card>
      </>
    )
}

export default ProfileMovieCard;