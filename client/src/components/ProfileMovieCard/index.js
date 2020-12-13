import "./style.css";
import { Card, Row, Col } from "react-bootstrap";





function ProfileMovieCard(props) {
console.log(props)
  return (
    <>
      <Card bsStyle="default" style={{ marginBottom: "40px", border: "none", borderRadius: "10px", backgroundColor: "transparent" }}>
        <Card.Header style={{ color: "white" }}>
          <h5>{props.cardTitle}</h5>
        </Card.Header>
        <Card.Body bsStyle="default" style={{ paddingBottom: "260px", backgroundColor: "#dbd8e3", borderRadius: "10px", boxShadow: "20px 20px 10px rgba(0,0,0,0.75)" }}>
          <Row >
            {props.movies.map(review => (
              <Col sm={6} >
                <Card.Img src={review.poster} style={{ cursor: "pointer" }} />
              </Col>
            ))}
          </Row>
        </Card.Body>

      </Card>
    </>
  )
}

export default ProfileMovieCard;