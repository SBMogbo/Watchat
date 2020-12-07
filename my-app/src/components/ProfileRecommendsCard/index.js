import {Card, Row, Col} from "react-bootstrap";
import "./style.css";


function ProfileRecommend() {
    return(
        <Card>
            <Card.Header>
                Recommends
            </Card.Header>
            <Card.Body className="card-body">
                <Row>
                    <Col sm={2}>
                    <Card.Img variant="bottom" src="https://image.shutterstock.com/image-photo/photo-old-movie-projector-260nw-92369284.jpg" />
                    </Col>
                </Row>
            </Card.Body>
        </Card>
    )
}

export default ProfileRecommend;