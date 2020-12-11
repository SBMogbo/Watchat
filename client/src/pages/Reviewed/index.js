import "./style.css";
import { Row ,Col } from "react-bootstrap";
import MovieCard from "../../components/MovieCard";
import RecommendedCard from "../../components/RecommendedCard/index";
import ReviewedCard from "../../components/ReviewedPostCard/index";;




function Reviewed() {

        
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
                        <h5>Username</h5>

                    </Col>
                </Row>
                <Row>
                    <Col className="sidebar" sm={3}>
                        <Row className="movieCard-row">
                            <Col>
                                <MovieCard
                                />
                            </Col>
                        </Row>
                        <Row className="recommend-row">
                            <Col>
                                <RecommendedCard />
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
