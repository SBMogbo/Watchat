// review page
import "./style.css";
import ReviewCard from "../../components/ReviewCard";
import {Row, Col} from "react-bootstrap";
import MovieCard from "../../components/MovieCard";
import RecommendedCard from "../../components/RecommendedCard/index";



function Reviews() {
    return (
        <div className="container">
            <Row classname="title-row">
                <Col>
                    <h1>Reviews</h1>
                </Col>
            </Row>
            <Row classname="username-row">
                <Col>
                    <h5>Username</h5>
                </Col>
            </Row>

            <Row>
                <Col className="sidebar"
                    sm={3}>
                    <Row className="movieCard-row">

                        <Col>
                            <MovieCard/>
                        </Col>
                    </Row>

                    <Row className="recommend-row">
                        <Col>
                            <RecommendedCard/>
                        </Col>
                    </Row>
                </Col>

                <Col className="review-area"
                    sm={9}>
                    <ReviewCard/>
                </Col>
            </Row>


        </div>

    )
}

export default Reviews;
