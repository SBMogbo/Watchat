// main
import "./style.css";
import {
    Row,
    Col,
    Card,
    Button,
} from "react-bootstrap";
import ProfileRecommend from "../../components/ProfileRecommendsCard";
import API from "../../utils/API"
import { useEffect, useState } from "react";
import {useSelector} from "react-redux";



function MovieDetails(props) {
    const [results, setResults] = useState('')
    const movieId = useSelector( state => state.movieId)





    useEffect(() => {
        API.omdbSearchById(movieId)
            .then((res) => {
                const response = res;
                let results = response;
                // map through the array

                // store each movie information in a new object
                const result = {
                    key: results.imdbID,
                    id: results.imdbID,
                    poster: results.Poster,
                    title: results.Title,
                    type: results.Type,
                    imdbRating: results.imdbRating,
                    rated: results.Rated,
                    genre: results.Genre
                };
                setResults(result)
            })
            .catch((err) => {
                console.log('ERROR ' + err);
            });
    }, [movieId])
    return (
        <div className="container">
            <Row>
                <Col className="left-side"
                    sm={4}>
                    <Row>
                        <Col>
                            <Card>
                                <Card.Img src={results.poster}>

                                </Card.Img>
                                <Card.Footer>
                                <button id={results.id}>Seen</button>
                                <button id={results.id}>My List</button>
                                </Card.Footer>
                            </Card>
                        </Col>
                    </Row>
                    <Row>
                        <Col>
                            <Card>
                                <Card.Header>
                                Info
                                </Card.Header>
                                <Card.Body>
                                    <Row>
                                    Name: {results.title}
                                    </Row>
                                    <Row>
                                    IMDB Rating: {results.imdbRating}
                                    </Row>
                                    <Row>
                                    Rated: {results.rated}
                                    </Row>
                                    <Row>
                                    Genre: {results.genre}
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
                            <ProfileRecommend />
                        </Col>

                    </Row>
                </Col>
            </Row>
        </div>
    )
}

export default MovieDetails;
