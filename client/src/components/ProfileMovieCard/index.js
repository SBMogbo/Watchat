import "./style.css";
import {Card, Row, Col} from "react-bootstrap";





function ProfileMovieCard() {
  
    return(
      <>
      <Card bsStyle="default" style={{marginBottom:"40px"}}>
          <Card.Header>
              Movie
          </Card.Header>
          <Card.Body bsStyle="default" style={{paddingBottom:"260px"}}>
              <Row >
                <Col sm={6} >
                <Card.Img src="https://image.shutterstock.com/image-photo/photo-old-movie-projector-260nw-92369284.jpg"/>
                </Col>
                
              </Row>
            
          </Card.Body>
      </Card>
      </>
    )
}

export default ProfileMovieCard;