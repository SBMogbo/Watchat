// watched page
import {Row, Col} from "react-bootstrap";
import "./style.css";
import CategoryButtons from "../../components/CategoryButtons/index";
import {useEffect, useState} from "react";
import MovieCard from "../../components/MovieCard";
import API from "../../utils/API";
import {useHistory} from "react-router";
import {useDispatch, useSelector} from "react-redux";
import {setMovieId} from "../../utils/AppSlice";
import {IconButton} from "@material-ui/core"
import {Button} from "react-bootstrap";

function Watched(props) {
    const userId = useSelector(state => state.user.id)
    const [results, setResults] = useState('')
    const history = useHistory();
    const dispatch = useDispatch();
    function onClick(e) { // console.log()
        dispatch(setMovieId(e.target.id))
        history.push("/reviews")
    }
    useEffect(() => {
        API.getWatchedListByUser(userId).then((res) => {
            const response = res.data;
            let results = response;
            // console.log(results)
            // map through the array
            results = results.map((result) => { // store each movie information in a new object
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
        }).catch((err) => {
            console.log('ERROR ' + err);
        });

    }, [])
    return(results.length === 0) ? (
        <div className="container">
            <Row className="title-row">
                <Col>
                    <h1>Watched</h1>
                </Col>
            </Row>
            <Row className="buttons-row">
                <Col>
                    <CategoryButtons/>
                </Col>
            </Row>
        </div>
    ) : (
        <div className="container">
            <Row className="title-row">
                <Col>
                    <h1>Watched</h1>
                </Col>
            </Row>
            <Row className="buttons-row">
                <Col style={
                    {marginBottom: "30px"}
                }>
                    <CategoryButtons/>
                </Col>
            </Row>
            <Row> {
                results.map(result => {
                    return (
                        <Col style={
                                {marginBottom: "30px"}
                            }
                            md="3"
                            key={
                                result.id
                        }>
                            <MovieCard onMovieClick={
                                    props.onMovieClick
                                }
                                id={
                                    result.id
                                }
                                title={
                                    result.title
                                }
                                poster={
                                    result.poster
                                }/>
                            <Row  style={
                                        {justifyContent: "center"}}>
                                    <IconButton>
                                        <Button variant="outline-info"
                                            id={
                                                result.id
                                            }
                                            onClick={onClick}>Leave a Review</Button>
                                    </IconButton>
                            </Row>

                        </Col>
                    )
                })
            } </Row>
        </div>

    )
}


export default Watched;
