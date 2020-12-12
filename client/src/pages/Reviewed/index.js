import "./style.css";
import { Row, Col } from "react-bootstrap";
import MovieCard from "../../components/MovieCard";
import RecommendedCard from "../../components/RecommendedCard/index";
import ReviewedCard from "../../components/ReviewedCard/index";
import { useSelector } from "react-redux";
import { useEffect, useState } from "react";
import API from "../../utils/API";



function Reviewed() {
    const username = useSelector(state => state.user.username)
    const user = useSelector(state => state.user)
    const movieId = useSelector(state => state.movieId)
    const [results, setResults] = useState('')
    const [recommendedResults, setRecommendedResults] = useState('')
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
        // console.log(user.id)
        API.getRewiewsListByUser(user.id)
            .then((res) => {
                const response = res;
                // console.log(response.data.length)
                let recommendedResult = response.data[response.data.length - 1];
                // console.log(recommendedResult)
                setRecommendedResults(recommendedResult)
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
                                    id={results.id}
                                    title={results.title}
                                    poster={results.poster}
                                />
                            </Col>
                        </Row>
                        <Row>
                            <h5>Recommended</h5>
                        </Row>
                        <Row className="recommend-row">
                            <Col>
                                <MovieCard
                                    id={recommendedResults.movieId}
                                    title={recommendedResults.movieTitle}
                                    poster={recommendedResults.poster} />
                            </Col>
                        </Row>

                    </Col>
                    <Col className="review-area" sm={9}>
                        <ReviewedCard
                            reviewTitle={recommendedResults.reviewTitle}
                            review={recommendedResults.review}
                        />

                    </Col>
                </Row>
            </div>
        </>
    )
}

export default Reviewed;
