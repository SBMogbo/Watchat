// review page
import "./style.css";
import ReviewCard from "../../components/ReviewCard";
import { Row, Col } from "react-bootstrap";
import MovieCard from "../../components/MovieCard";
import RecommendedCard from "../../components/RecommendedCard/index";
import { useEffect, useState } from "react";
import API from "../../utils/API";
import { useSelector } from "react-redux";



function Reviews(props) {
    const [results, setResults] = useState('')
    const movieId = useSelector(state => state.movieId)
    const recommendedId = useSelector(state => state.recommendedId);
    const reviewTitle = useSelector(state => state.reviewTitle);
    const review = useSelector(state => state.review);
    const userId = localStorage.getItem("authorization-token")
    function saveReview(props) {
        API.saveToReviewsList(
            userId,
            movieId,
            results.poster,
            results.title,
            reviewTitle,
            review,
            recommendedId
        )
            .then(res => {
                console.log('Added to Reviewed list successful')
                // props.history.push("/viewReviewPage")
            })
            .catch(err => console.log(err));
    }

    useEffect(() => {
        API.omdbSearchById(movieId)
            .then((res) => {
                const response = res;
                let results = response;
                const result = {
                    key: results.imdbID,
                    id: results.imdbID,
                    poster: results.Poster,
                    title: results.Title,
                };
                setResults(result)
            })
            .catch((err) => {
                console.log('ERROR ' + err);
            });
    }, [movieId])
    return (
        <>
            <div className="container">
                <Row className="title-row">
                    <Col>
                        <h1>Reviews</h1>
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

                                    id={results.id}
                                    title={results.title}
                                    poster={results.poster}
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
                        <ReviewCard saveReview={saveReview} />

                    </Col>
                </Row>
            </div>
        </>
    )
}

export default Reviews;
