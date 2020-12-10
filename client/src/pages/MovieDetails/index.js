// main
import "./style.css";
import {Row, Col, Card, Button} from "react-bootstrap";
import ProfileRecommend from "../../components/ProfileRecommendsCard";
import Navbar from "../../components/Navbar/Navbar";
import MovieCard from "../../components/MovieCard/index"



function MovieDetails() {


    return (
        <>
            <Navbar/>
            <div className="container">
                <Row>
                    <Col className="left-side"
                        sm={4}>
                        <Row>
                            <Col>
                                <MovieCard/>
                            </Col>
                        </Row>
                        <Row>
                            <Col>
                                <Card className="rating-card" style={{border:"none", borderRadius:"10px", backgroundColor:"transparent", marginTop:"95px"}}>
                                    <Card.Header style={{color:"white"}}>
                                        <h5>IMDB RATINGS</h5>
                                    </Card.Header>
                                    <Card.Body style={{backgroundColor:"#dbd8e3", borderRadius:"10px", boxShadow:"10px 10px 10px rgba(0,0,0,0.75)"}}>
                                        <Row className="rating-row">
                                            <h4>Ratings</h4>
                                        </Row>
                                        <Row className="rating-row">
                                            <h4>
                                                Genre</h4>
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
                                <Card className="platform-card" style={{backgroundColor:"transparent", border:"none", borderRadius:"10px"}}>
                                    <Card.Header style={{color:"white"}}>
                                        <h5>Availabe on...</h5>
                                    </Card.Header >
                                    <Card.Body bsStyle="defaault"
                                        style={
                                            {paddingBottom: "20px", backgroundColor:"#dbd8e3", borderRadius:"10px", boxShadow:"10px 10px 10px rgba(0,0,0,0.75)"}
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
                                <Card className="user-card" style={{backgroundColor:"transparent", border:"none", borderRadius:"10px"}}>
                                    <Card.Header style={{color:"white"}}>
                                        <h5>See what others have said</h5>
                                    </Card.Header>
                                    <Card.Body style={{backgroundColor:"#dbd8e3", borderRadius:"10px", boxShadow:"10px 10px 10px rgba(0,0,0,0.75)"}}>
                                        hjshkajhsahsajhsakjhajshhsajsha


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
        </>
    )
}

export default MovieDetails;
