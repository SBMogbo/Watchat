import "./style.css";
import { Card, Row, Col } from "react-bootstrap";


function ProfileMovieCard() {
  
    return(
      <>
      <Card bsStyle="default" style={{marginBottom:"40px", border:"none", borderRadius:"10px", backgroundColor:"#696969", boxShadow:"20px 20px 10px rgba(0,0,0,0.75)"}}>
          <Card.Header style={{color:"white"}}>
          <h5>{props.cardTitle}</h5>
          </Card.Header>
          <Card.Body className="scroll-movie" style={{paddingBottom:"260px", backgroundColor:"#dbd8e3", borderRadius:"10px"}}>
              
                
              <Row >
            {props.movies.map(movie => (
              <Col style={{marginBottom:"15px"}} key={movie._id} sm={6} >
                <Card.Img src={movie.poster} style={{ cursor: "pointer" }} />
              </Col>
            ))}
          </Row>
          
            
          </Card.Body>

      </Card>
    </>
  )
}

export default ProfileMovieCard;