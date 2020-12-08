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
                            <Card>
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
                            <Card>
                                <Card.Header>
                                    IMDB RATINGS
                                </Card.Header>
                                <Card.Body>
                                    <Row>
                                        Ratings
                                    </Row>
                                    <Row>
                                        Genre
                                    </Row>
                                    <Row>
                                        Age Rating
                                    </Row>
                                </Card.Body>
                            </Card>
                        </Col>
                    </Row>
                </Col>
                <Col classnaMe="right-side"
                    sm={8}>
                    <Row>
                        <Col>
                            <Card>
                                <Card.Header>
                                    Availabe on...
                                </Card.Header>
                                <Card.Body>
                                    <Button>
                                        Youtube
                                    </Button>
                                </Card.Body>
                            </Card>
                        </Col>
                    </Row>
                    <Row>
                        <Col>
                            <Card>
                                <Card.Header>
                                    See what others have said
                                </Card.Header>
                                <Card.Body className="user-reviews">
                                    User1234: This movie is great!!

                                </Card.Body>
                            </Card>
                        </Col>
                    </Row>
                    <Row>
                        <Col>
                            <ProfileRecommend/>
                        </Col>

                    </Row>
                </Col>
            </Row>
        </div>
    )
}

export default MovieDetails;
