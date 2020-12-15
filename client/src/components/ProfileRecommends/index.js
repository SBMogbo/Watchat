import "./style.css";
import { Card, Col, Row } from "react-bootstrap"




function ProfileRecommends(props) {
    // console.log(props.reviews)
    return (

        <Card style={{ backgroundColor: "#696969", border: "none", borderRadius: "10px",}}>
            <Card.Header style={{ color: "white" }}>
                <h5>Recommend</h5>
            </Card.Header>
            <Card.Text className="scroll-rev" style={{ paddingBottom:"190px", paddingLeft:"10px", paddingTop:"10px", backgroundColor: "#dbd8e3", borderRadius: "10px", boxShadow: "20px 20px 10px rgba(0,0,0,0.75)" }}>
                <Row>
                    {
                        props.reviews.map(review => (
                            <Col key={review._id} sm={2}>
                                <Card.Img  style={{ cursor: "pointer", marginTop:"15px" }} variant="bottom" src={review.recommendedMoviePoster} />
                            </Col>
                        ))
                    }
                </Row>
            </Card.Text>
        </Card>

    )
}

export default ProfileRecommends;