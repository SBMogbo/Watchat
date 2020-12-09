// watched page
import { Row, Col } from "react-bootstrap";
import "./style.css";
import CategoryButtons from "../../components/CategoryButtons/index";
import { useEffect, useState } from "react";
import MovieCard from "../../components/MovieCard";
import API from "../../utils/API";
import {useHistory} from "react-router";
import {useDispatch} from "react-redux";
import {setMovieId} from "../../utils/AppSlice";




function Watched(props) {
    const [results, setResults] = useState('')
    const history = useHistory();
    const dispatch = useDispatch();
    function onClick() {
        
        // console.log()
        dispatch(setMovieId(results[1].id))
        history.push("/reviews")
    }

    useEffect(() => {
        API.getWatchedList()
            .then((res) => {
                const response = res.data;
                let results = response;
                // console.log(results)
                // map through the array
                results = results.map((result) => {
                    // store each movie information in a new object
                    result = {
                        key: result.movieId,
                        id: result.movieId,
                        poster: result.poster,
                        title: result.movieTitle,
                        // year: result.Year,
                        // type: result.Type,
                    };
                    return result;
                });
                // console.log("response", response)
                // console.log("movies", results)
                setResults(results)
            })
            .catch((err) => {
                console.log('ERROR ' + err);
            });
    
}, [])

return (results.length === 0) ? (
    <div className="container">
        <Row className="title-row">
            <Col >
                <h1>Watched</h1>
            </Col>
        </Row>
        <Row className="buttons-row">
            <Col>
                <CategoryButtons />
            </Col>
        </Row>
    </div>
) : (
        <div className="container">
            <Row className="title-row">
                <Col >
                    <h1>Watched</h1>
                </Col>
            </Row>
            <Row className="buttons-row">
                <Col>
                    <CategoryButtons />
                </Col>
            </Row>
            <Row>
                {results.map(result => {
                    return (
                        <Col md="3" key={result.id}>
                            <MovieCard
                                onMovieClick={props.onMovieClick}
                                id={result.id}
                                title={result.title}
                                poster={result.poster}
                            />
                            <button id={result.id} onClick={onClick}>Leave a Review</button>
                        </Col>
                    )
                })}
            </Row>
        </div>
    )
}


export default Watched; 