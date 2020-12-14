import React, { useEffect, useState } from "react";
import { Row, Col } from "react-bootstrap";
import "./style.css";
import CategoryButtons from "../../components/CategoryButtons/index";
import PlatformButtons from "../../components/PlatformButtons";
import MovieCard from "../../components/MovieCard";
import API from "../../utils/API";
import { useSelector } from "react-redux";
// import { propTypes } from "react-bootstrap/esm/Image";


function Home(props) {
    const [results, setResults] = useState('')
    const search = useSelector(state => state.search);

    useEffect(() => {
        if (search && search.location === window.location.hash) {
            API.omdbSearch(search.query)
                .then((res) => {
                    const response = res.Search;
                    let results = response;
                    console.log(response)
                    // map through the array
                    results = results.map((result) => {
                        // store each movie information in a new object
                        result = {
                            key: result.imdbID,
                            id: result.imdbID,
                            poster: result.Poster,
                            title: result.Title,
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
        };
    }, [search])

    return (results.length === 0) ? (
        <div className="container">
            <Row className="title-row">
                <Col >
                    <h1>Home</h1>
                </Col>
            </Row>
            <Row className="platform-buttons">
                <Col>
                    <PlatformButtons />
                </Col>
            </Row>
            <Row className="buttons-row">
                <Col>
                    <CategoryButtons />
                </Col>
            </Row>
            <Row>
                <Col style={{ marginBottom: "25px" }} md="3">
                    <MovieCard
                        onMovieClick={props.onMovieClick}
                        id={"tt0111161"}
                        title={"The Shawshank Redemption"}
                        poster={"https://m.media-amazon.com/images/M/MV5BMDFkYTc0MGEtZmNhMC00ZDIzLWFmNTEtODM1ZmRlYWMwMWFmXkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_SX300.jpg"}
                    />
                </Col>
                <Col style={{ marginBottom: "25px" }} md="3">
                    <MovieCard
                        onMovieClick={props.onMovieClick}
                        id={"tt0068646"}
                        title={"The Godfather"}
                        poster={"https://m.media-amazon.com/images/M/MV5BM2MyNjYxNmUtYTAwNi00MTYxLWJmNWYtYzZlODY3ZTk3OTFlXkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_SX300.jpg"}
                    />
                </Col>
                <Col style={{ marginBottom: "25px" }} md="3">
                    <MovieCard
                        onMovieClick={props.onMovieClick}
                        id={"tt1375666"}
                        title={"Inception"}
                        poster={"https://m.media-amazon.com/images/M/MV5BMjAxMzY3NjcxNF5BMl5BanBnXkFtZTcwNTI5OTM0Mw@@._V1_SX300.jpg"}
                    />
                </Col>
                <Col style={{ marginBottom: "25px" }} md="3">
                    <MovieCard
                        onMovieClick={props.onMovieClick}
                        id={"tt0120737"}
                        title={"The Lord of the Rings: The Fellowship of the Ring"}
                        poster={"https://m.media-amazon.com/images/M/MV5BN2EyZjM3NzUtNWUzMi00MTgxLWI0NTctMzY4M2VlOTdjZWRiXkEyXkFqcGdeQXVyNDUzOTQ5MjY@._V1_SX300.jpg"}
                    />
                </Col>
                <Col style={{ marginBottom: "25px" }} md="3">
                    <MovieCard
                        onMovieClick={props.onMovieClick}
                        id={"tt0076759"}
                        title={"Star Wars: Episode IV - A New Hope"}
                        poster={"https://m.media-amazon.com/images/M/MV5BNzVlY2MwMjktM2E4OS00Y2Y3LWE3ZjctYzhkZGM3YzA1ZWM2XkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_SX300.jpg"}
                    />
                </Col>
                     <Col style={{ marginBottom: "25px" }} md="3">
                    <MovieCard
                        onMovieClick={props.onMovieClick}
                        id={"tt6751668"}
                        title={"Parasite"}
                        poster={"https://m.media-amazon.com/images/M/MV5BYWZjMjk3ZTItODQ2ZC00NTY5LWE0ZDYtZTI3MjcwN2Q5NTVkXkEyXkFqcGdeQXVyODk4OTc3MTY@._V1_SX300.jpg"}
                    />
                </Col>
                        <Col style={{ marginBottom: "25px" }} md="3">
                    <MovieCard
                        onMovieClick={props.onMovieClick}
                        id={"tt0816692"}
                        title={"Interstellar"}
                        poster={"https://m.media-amazon.com/images/M/MV5BZjdkOTU3MDktN2IxOS00OGEyLWFmMjktY2FiMmZkNWIyODZiXkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_SX300.jpg"}
                    />
                </Col>
                <Col style={{ marginBottom: "25px" }} md="3">
                    <MovieCard
                        onMovieClick={props.onMovieClick}
                        id={"tt7286456"}
                        title={"Joker"}
                        poster={"https://m.media-amazon.com/images/M/MV5BNGVjNWI4ZGUtNzE0MS00YTJmLWE0ZDctN2ZiYTk2YmI3NTYyXkEyXkFqcGdeQXVyMTkxNjUyNQ@@._V1_SX300.jpg"}
                    />
                </Col>
            </Row>
        </div>
    ) : (
            <div className="container">
                <Row className="title-row">
                    <Col >
                        <h1>Home</h1>
                    </Col>
                </Row>
                <Row className="platform-buttons">
                    <Col>
                        <PlatformButtons />
                    </Col>
                </Row>
                <Row className="buttons-row">
                    <Col style={{ marginBottom: "25px" }}>
                        <CategoryButtons />
                    </Col>
                </Row>
                <Row>
                    {results.map(result => {
                        return (
                            <Col style={{ marginBottom: "25px" }} md="3" key={result.id}>
                                <MovieCard
                                    onMovieClick={props.onMovieClick}
                                    id={result.id}
                                    title={result.title}
                                    poster={result.poster}

                                />
                            </Col>
                        )
                    })}
                </Row>
            </div>
        )
}

export default Home;
