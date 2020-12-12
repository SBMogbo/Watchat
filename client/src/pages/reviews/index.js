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
    const movieId = useSelector(state => state.movieId)
    const username = useSelector(state => state.user.username)
    const [results, setResults] = useState('')

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
                        <h5>{username}</h5>

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
                        <ReviewCard />

                    </Col>
                </Row>
            </div>
        </>
    )
}

export default Reviews;
