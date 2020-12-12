// main
import "./style.css";
import { Row, Col, Card, Button } from "react-bootstrap";
import ProfileRecommends from "../../components/ProfileRecommends";
import API from "../../utils/API"
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import {IconButton} from "@material-ui/core";



function MovieDetails(props) {
    const [results, setResults] = useState('')
    const movieId = useSelector(state => state.movieId)
    const user = useSelector(state => state.user)
    const [recommendedResults, setRecommendedResults] = useState('')
    function saveToWatchedList() {
        API.saveToWatchedList(user.id, movieId, results.poster, results.title)
            .then(res => {
                console.log('Added to watched list successful')
                // props.history.push("/login")
            })
            .catch(err => console.log(err));
    }
    function saveToToWatchList() {
        API.saveToToWatchList(user.id, movieId, results.poster, results.title)
            .then(res => {
                console.log('Added to toWatch list successful')
                // props.history.push("/login")
            })
            .catch(err => console.log(err));
    }



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
        API.getRewiewsListByMovie(movieId)
        .then((res) => {
            const response = res;
            let recommendedResults = response.data;
            
            recommendedResults = recommendedResults.map((result) => {
                result = {
                userId: result.user.id,
                username: result.user.username,
                movieId: result.movieId,
                movieTitle: result.movieTitle,
                poster: result.poster,
                recommendationId: result.recommendationId,
                review: result.review,
                reviewTitle: result.reviewTitle,
            };
                return result;
            });
            // console.log(recommendedResults)
            setRecommendedResults(recommendedResults)
        })
        .catch((err) => {
            console.log('ERROR ' + err);
        });
    }, [movieId])
    console.log(recommendedResults[0])
    return (recommendedResults.length === 0) ? (
        <div className="container">
        <Row>
            <Col className="left-side"
                sm={4}>
                <Row>
                    <Col>
                        <Card style={{border:"none",justifyContent:"center"}}>
                            <Card.Img  style={{boxShadow: "20px 20px 10px rgba(0,0,0,0.75)"}} src={results.poster}>

                      </Card.Img>
                           
                        </Card>
                        <Row style={{justifyContent:"center", marginTop:"20px"}}>
                        <IconButton>
                                <Button variant="outline-danger" onClick={saveToWatchedList}>Seen</Button>
                                </IconButton>
                                <IconButton>
                                <Button variant="outline-success" onClick={saveToToWatchList}>My List</Button>
                                </IconButton>
                                
                        </Row>
                    </Col>
                </Row>
                <Row>
                        <Col>
                            <Card className="Info" style={{ color:"white", border: "none", borderRadius: "10px", backgroundColor: "#564d4d", marginTop: "35px"}}>
                                <Card.Header>
                                    <h5>Info:</h5>
                                </Card.Header>
                                <Card.Body>
                                    <Row style={{marginBottom:"10px"}}>
                                        Name: {results.title}
                                    </Row>
                                    <Row style={{marginBottom:"10px"}}>
                                        IMDB Rating: {results.imdbRating}
                                    </Row >
                                    <Row style={{marginBottom:"10px"}}>
                                        Rated: {results.rated}
                                    </Row>
                                    <Row style={{marginBottom:"10px"}}>
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
                            <Card className="platform-card" style={{ color:"white", backgroundColor: "transparent", border: "none"}}>
                                <Card.Header>
                                    Availabe on...
                                </Card.Header>
                                <Card.Body bsStyle="defaault"
                                    style={
                                        { paddingBottom: "20px", backgroundColor: "#dbd8e3", borderRadius: "10px", boxShadow: "10px 10px 10px rgba(0,0,0,0.75)" }
                                    }>
                                    <Button>
                                        Youtube
                                    </Button>
                                </Card.Body>
                            </Card>
                        </Col>
                    </Row>
                    <Row>
                        <Col>
                            <Card className="user-card" style={{ backgroundColor: "transparent", border: "none", borderRadius: "10px" }}>
                                <Card.Header style={{ color:"white"}}>
                                    See what others have said
                                </Card.Header>
                                <Card.Body className="user-reviews" style={{ backgroundColor: "#dbd8e3", borderRadius: "10px", boxShadow: "10px 10px 10px rgba(0,0,0,0.75)" }}>
                                    {/* {recommendedResults[0].username} : {recommendedResults[0].reviewTitle} */}noone has reviewed this movie yet
                                </Card.Body>
                            </Card>
                        </Col>
                    </Row>
                    <Row>
                        <Col className="recommend-card">
                            {/* <ProfileRecommends 
                            recommendationId ={recommendedResults[0].recommendationId}
                            movieTitle ={recommendedResults[0].movieTitle}
                            poster ={recommendedResults[0].poster}
                            /> */}
                        </Col>
                    </Row>
                </Col>
            </Row>
        </div>
        ) : (
        <div className="container">
            <Row>
                <Col className="left-side"
                    sm={4}>
                    <Row>
                        <Col>
                            <Card style={{border:"none",justifyContent:"center"}}>
                                <Card.Img  style={{boxShadow: "20px 20px 10px rgba(0,0,0,0.75)"}} src={results.poster}>

                                </Card.Img>
                               
                            </Card>
                            <Row style={{justifyContent:"center", marginTop:"20px"}}>
                            <IconButton>
                                    <Button variant="outline-danger" onClick={saveToWatchedList}>Seen</Button>
                                    </IconButton>
                                    <IconButton>
                                    <Button variant="outline-success" onClick={saveToToWatchList}>My List</Button>
                                    </IconButton>
                                    
                            </Row>
                        </Col>
                    </Row>
                    <Row>
                        <Col>
                            <Card className="Info" style={{ color:"white", border: "none", borderRadius: "10px", backgroundColor: "#564d4d", marginTop: "35px"}}>
                                <Card.Header>
                                    <h5>Info:</h5>
                                </Card.Header>
                                <Card.Body>
                                    <Row style={{marginBottom:"10px"}}>
                                        Name: {results.title}
                                    </Row>
                                    <Row style={{marginBottom:"10px"}}>
                                        IMDB Rating: {results.imdbRating}
                                    </Row >
                                    <Row style={{marginBottom:"10px"}}>
                                        Rated: {results.rated}
                                    </Row>
                                    <Row style={{marginBottom:"10px"}}>
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
                            <Card className="platform-card" style={{ color:"white", backgroundColor: "transparent", border: "none"}}>
                                <Card.Header>
                                    Availabe on...
                                </Card.Header>
                                <Card.Body bsStyle="defaault"
                                    style={
                                        { paddingBottom: "20px", backgroundColor: "#dbd8e3", borderRadius: "10px", boxShadow: "10px 10px 10px rgba(0,0,0,0.75)" }
                                    }>
                                    <Button>
                                        Youtube
                                    </Button>
                                </Card.Body>
                            </Card>
                        </Col>
                    </Row>
                    <Row>
                        <Col>
                            <Card className="user-card" style={{ backgroundColor: "transparent", border: "none", borderRadius: "10px" }}>
                                <Card.Header style={{ color:"white"}}>
                                    See what others have said
                                </Card.Header>
                                <Card.Body className="user-reviews" style={{ backgroundColor: "#dbd8e3", borderRadius: "10px", boxShadow: "10px 10px 10px rgba(0,0,0,0.75)" }}>
                                    {recommendedResults[0].username} : {recommendedResults[0].reviewTitle}
                                </Card.Body>
                            </Card>
                        </Col>
                    </Row>
                    <Row>
                        <Col className="recommend-card">
                            <ProfileRecommends 
                            recommendationId ={recommendedResults[0].recommendationId}
                            movieTitle ={recommendedResults[0].movieTitle}
                            poster ={recommendedResults[0].poster}
                            />
                        </Col>
                    </Row>
                </Col>
            </Row>
        </div>
    )
}

export default MovieDetails;
