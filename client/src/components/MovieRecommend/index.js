import "./style.css";
import {Card, Col, Row} from "react-bootstrap"




function MovieRecommend(props) {
    return(
        
        <Card style={{ backgroundColor: "#696969", border: "none", borderRadius: "10px", boxShadow: "20px 20px 10px rgba(0,0,0,0.75" }}>
                                    <Card.Header style={{ color: "white", backgroundColor: "#696969", borderRadius: "10px" }}>
                                        <Card.Title style={{ color: "white", marginTop: "10px" }}>Recommends</Card.Title>
                                    </Card.Header>
                                    <Card.Text className="scroll-rec" style={{ backgroundColor: "#dbd8e3", paddingBottom: "160px", paddingTop:'10px', borderRadius: "10px", border: "none" }}>
                                    <Row>
                    {
                        props.reviews.map(review => (
                            <Col key={review._id} sm={2}>
                                <Card.Img  style={{ cursor: "pointer", marginTop:"10px" }} variant="bottom" src={review.recommendedMoviePoster} />
                            </Col>
                        ))
                    }
                </Row>
                                    
                                    </Card.Text>
                                </Card>
        
    )
}

export default MovieRecommend;