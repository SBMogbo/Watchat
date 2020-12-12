import "./style.css";
import { Row, Col } from "react-bootstrap";
import MovieCard from "../../components/MovieCard";
import RecommendedCard from "../../components/RecommendedCard/index";
import ReviewedCard from "../../components/ReviewedCard/index";
import { useSelector } from "react-redux";
import { useEffect, useState } from "react";
import API from "../../utils/API";
import { useLocation, useParams } from "react-router";



function Review(props) {
    const username = useSelector(state => state.user.username)
    const user = useSelector(state => state.user)
    const movieId = useSelector(state => state.movieId)
    const [results, setResults] = useState('')
    const [review, setReview] = useState({});

    const routerParams = useParams();

    useEffect(() => {

        API.getReview(routerParams.id)
            .then((res) => {
                setReview(res.data);
            })
            .catch((err) => {
                console.log('ERROR ' + err);
            });
    }, [])
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
                                    id={review.reviewedMovieId}
                                    title={review.reviewedMovieTitle}
                                    poster={review.reviewedMoviePoster} />
                            </Col>
                        </Row>
                        <Row>
                            <h5>Recommended</h5>
                        </Row>
                        <Row className="recommend-row">
                            <Col>
                                <MovieCard
                                    id={review.recommendedMovieId}
                                    title={review.recommendedMovieTitle}
                                    poster={review.recommendedMoviePoster} />
                            </Col>
                        </Row>

                    </Col>
                    <Col className="review-area" sm={9}>
                        <ReviewedCard
                            reviewTitle={review.reviewTitle}
                            review={review.review}
                        />

                    </Col>
                </Row>
            </div>
        </>
    )
}

export default Review;
