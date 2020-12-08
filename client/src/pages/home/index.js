import React
// , { useState } 
 from "react";
import { Row, Col } from "react-bootstrap";
import "./style.css";
import CategoryButtons from "../../components/CategoryButtons/index";
import PlatformButtons from "../../components/PlatformButtons";
// import MovieCard from "../../components/MovieCard";
// import API from "../../utils/API";
// import { propTypes } from "react-bootstrap/esm/Image";


function Home() {
    // const [movies, setMovies] = useState([]);
    // const [query, setQuery] = useState('');
    // const [response, setResponse] = useState([]);

    // const movieSearchFunc = (event) => {
    //     event.preventDefault();
    //     // setResponse([])
    //     // setMovies([]);
    //     if (!query?.trim()) return;
    //     API.omdbSearch(query)
    //         .then((res) => {
    //             setResponse(res.Search);
    //             let results = res.Search;
    //             // map through the array
    //             results = results.map((result) => {
    //                 // store each movie information in a new object
    //                 result = {
    //                     key: result.imdbID,
    //                     id: result.imdbID,
    //                     poster: result.Poster,
    //                     title: result.Title,
    //                     // year: result.Year,
    //                     // type: result.Type,
    //                 };
    //                 return result;
    //             });
    //             // reset the sate of the empty movies array to the new arrays of objects with properties geting back from the response
    //             setMovies(results);
    //             console.log("response", response)
    //             console.log("movies", movies)
    //         })
    //         .catch((err) => {
    //             console.log('ERROR ' + err);
    //         });
    // };

    // setQuery("matrix")
    // movieSearchFunc()
    return (
        <>

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

                {/* <Row>
                    <Col md="3">
                        <MovieCard
                        // id={movies.imdbID}
                        // title={movies.Title}
                        // poster={movies.Poster}
                        />
                    </Col>
                    <Col md="3">
                        <MovieCard />
                    </Col>
                    <Col md="3">
                        <MovieCard />
                    </Col>
                    <Col md="3">
                        <MovieCard />
                    </Col>
                </Row> */}
            </div>

        </>
    )
}

export default Home;
