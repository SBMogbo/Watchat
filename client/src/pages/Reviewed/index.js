import "./style.css";
import { Row ,Col } from "react-bootstrap";
import MovieCard from "../../components/MovieCard";
import RecommendedCard from "../../components/RecommendedCard/index";
import ReviewedCard from "../../components/ReviewedPostCard/index";
import { useSelector } from "react-redux";



function Reviewed() {
    const username = useSelector(state => state.user.username)
        
    return (
        <>
            <div className="container">
                <Row className="title-row">
                    <Col>
                        <h1>Reviewed</h1>
                    </Col>
                </Row>
                <Row className="username-row">
                    <Col style={{ color: "white" }}>
                        <h5>{username}</h5>

                    </Col>
                </Row>
                <Row>
                    <Col className="sidebar" sm={3}>
                        <Row>
                            <h5>Movie Reviewed</h5>
                        </Row>
                        <Row className="movieCard-row">
                            <Col>
                                <MovieCard
                                />
                            </Col>
                        </Row>
                        <Row>
                            <h5>Recommended</h5>
                        </Row>
                        <Row className="recommend-row">
                            <Col>
                                <MovieCard />
                            </Col>
                        </Row>

                    </Col>
                    <Col className="review-area" sm={9}>
                        <ReviewedCard  />

                    </Col>
                </Row>
            </div>
        </>
    )
}

export default Reviewed;
