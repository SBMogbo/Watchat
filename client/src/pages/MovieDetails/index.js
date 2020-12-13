// main
import "./style.css";
import { Row, Col, Card, Button } from "react-bootstrap";
import ProfileRecommend from "../../components/ProfileRecommendsCard";
import API from "../../utils/API"
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import {IconButton} from "@material-ui/core";



function MovieDetails(props) {
    const [results, setResults] = useState('')
    const movieId = useSelector(state => state.movieId)
    const user = useSelector(state => state.user)
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
    }, [movieId])
    return (
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
                                <Card.Header style={{backgroundColor:"#696969", borderRadius:"10px"}}>
                                    <h5 style={{paddingTop:"5px"}}>Info:</h5>
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
                            <Card className="platform-card" style={{ color:"white", backgroundColor: "#696969", border: "none", borderRadius:"10px"}}>
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
                            <Card className="user-card" style={{ backgroundColor: "#696969", border: "none", borderRadius: "10px" }}>
                                <Card.Header style={{ color:"white"}}>
                                    See what others have said
                                </Card.Header>
                                <Card.Body className="scroll-reviews" style={{ backgroundColor: "#dbd8e3", borderRadius: "10px", boxShadow: "10px 10px 10px rgba(0,0,0,0.75)" }}>
                                    User1234: This movie is great!!
                                
                                </Card.Body>
                            </Card>
                        </Col>
                    </Row>
                    <Row>
                        <Col className="recommend-card">
                        <Card style={{backgroundColor:"transparent", border:"none", borderRadius:"10px", boxShadow:"20px 20px 10px rgba(0,0,0,0.75"}}>
            <Card.Header  style={{color:"white", backgroundColor:"#696969", borderRadius:"10px"}}>
            <Card.Title style={{ color: "white", marginTop:"10px" }}>Recommends</Card.Title>
            </Card.Header>
            <Card.Text className="scroll-rec" style={{ backgroundColor:"#dbd8e3", paddingBottom:"120px", borderRadius:"10px", border:"none"}}>
                <Row>
                    <Col sm={2}>
                    <Card.Img style={{cursor:"pointer", margin:"15px 15px"}}variant="bottom" src="https://image.shutterstock.com/image-photo/photo-old-movie-projector-260nw-92369284.jpg" />
                        </Col>
                    <Col sm={2}>

                    <Card.Img style={{cursor:"pointer", margin:"15px 15px"}}variant="bottom" src="https://image.shutterstock.com/image-photo/photo-old-movie-projector-260nw-92369284.jpg" />
                    </Col>

                    <Col sm={2}>
                    <Card.Img style={{cursor:"pointer", margin:"15px 15px"}}variant="bottom" src="https://image.shutterstock.com/image-photo/photo-old-movie-projector-260nw-92369284.jpg" />
                    </Col>

                    <Col sm={2}>
                    <Card.Img style={{cursor:"pointer", margin:"15px 15px"}}variant="bottom" src="https://image.shutterstock.com/image-photo/photo-old-movie-projector-260nw-92369284.jpg" /> 
                    </Col>

                    <Col sm={2}>
                    <Card.Img style={{cursor:"pointer", margin:"15px 15px"}}variant="bottom" src="https://image.shutterstock.com/image-photo/photo-old-movie-projector-260nw-92369284.jpg" />
                    </Col>
                   
                    
                </Row>
            </Card.Text>
        </Card>
                        </Col>
                    </Row>
                </Col>
            </Row>
        </div>
    )
}

export default MovieDetails;
