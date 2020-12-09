// main
import "./style.css";
import {
    Row,
    Col,
    Card,
    Button,
} from "react-bootstrap";
import ProfileRecommend from "../../components/ProfileRecommendsCard";


function MovieDetails() {
    return (
        <div className="container">
            <Row>
                <Col className="left-side"
                    sm={4}>
                    <Row>
                        <Col>
                            <Card className="movie-card">
                                <Card.Img src="https://image.shutterstock.com/image-photo/photo-old-movie-projector-260nw-92369284.jpg">
                                    
                                </Card.Img>
                                <Card.Footer>
                                    Movie
                                </Card.Footer>
                            </Card>
                        </Col>
                    </Row>
                    <Row>
                        <Col>
                            <Card className="rating-card">
                                <Card.Header>
                                    IMDB RATINGS
                                </Card.Header>
                                <Card.Body>
                                    <Row className="rating-row">
                                        <h4>Ratings</h4>
                                    </Row>
                                    <Row className="rating-row"> 
                                        <h4> Genre</h4>
                                    </Row>
                                    <Row className="rating-row">
                                        <h4>Age Rating</h4>
                                    </Row>
                                </Card.Body>
                            </Card>
                        </Col>
                    </Row>
                </Col>
                <Col className="right-side"
                    sm={8}>
                    <Row>
                        <Col>
                            <Card className="platform-card">
                                <Card.Header>
                                    Availabe on...
                                </Card.Header>
                                <Card.Body bsStyle="defaault" style={{paddingBottom:"20px"}}>
                                    <Button >
                                        Youtube
                                    </Button>
                                </Card.Body>
                            </Card>
                        </Col>
                    </Row>
                    <Row>
                        <Col>
                            <Card className="user-card">
                                <Card.Header>
                                    See what others have said
                                </Card.Header>
                                <Card.Body bsStyle="defaault" style={{paddingBottom:"260px"}}>
                                    User1234: This movie is great!!

                                </Card.Body>
                            </Card>
                        </Col>
                    </Row>
                    <Row>
                        <Col className="recommend-card">
                            <ProfileRecommend/>
                        </Col>

                    </Row>
                </Col>
            </Row>
        </div>
    )
}

export default MovieDetails;
