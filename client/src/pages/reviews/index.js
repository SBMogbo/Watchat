// review page
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
    const userId = localStorage.getItem("authorization-token")
    function saveToReviewsList(props) {
        API.saveToReviewsList(userId, movieId, results.poster, results.title
            // reviewTitle, review, recommendationId
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
                // map through the array

                // store each movie information in a new object
                const result = {
                    key: results.imdbID,
                    id: results.imdbID,
                    poster: results.Poster,
                    title: results.Title,
                    // type: results.Type,
                    // imdbRating: results.imdbRating,
                    // rated: results.Rated,
                    // genre: results.Genre
                };
                setResults(result)
            })
            .catch((err) => {
                console.log('ERROR ' + err);
            });
    }, [movieId])
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
                <Col className="sidebar" sm={3}>
                    <div className="movieCard">
                        <MovieCard
                            onMovieClick={""}
                            id={results.id}
                            title={results.title}
                            poster={results.poster}
                        />
                    </div>
                    <div className="recommendedCard">
                        <RecommendedCard />
                    </div>

                </Col>
                <Col className="review-area" sm={9}>
                    <ReviewCard />
                </Col>
            </Row>


        </div>

    )
}

export default Reviews;
