import { Card } from "react-bootstrap";
import API from "../../utils/API";
import MovieCard from "../MovieCard";
import { useDispatch } from "react-redux";
import { setRecommendedId, setSearch, setPoster, setMovieTitle } from "../../utils/AppSlice";
import { useState } from "react";

function RecommendedCard(props) {
  const [results, setResults] = useState('')
  const [query, setQuery] = useState('');
  const dispatch = useDispatch();
  const movieSearchFunc = (event) => {
    event.preventDefault();
    // console.log("query", { query })
    // console.log("results", { results })
    if (!query?.trim()) return;
    // props?.onSearch(query);
    const search = {
      location: window.location.hash,
      query,
    };
    dispatch(setSearch(search));
    setQuery('')

    API.omdbSearch(search.query)
      .then((res) => {
        // console.log("res", { res })

        const response = res.Search;
        let results = response[1];
        // map through the array

        // store each movie information in a new object
        const result = {
          key: results.imdbID,
          id: results.imdbID,
          poster: results.Poster,
          title: results.Title,
          // year: results.Year,
          // type: results.Type,
        }


        console.log(results)
        // console.log("response", response)
        // console.log("movies", results)
        setResults(result)
        dispatch(setRecommendedId(result.id));
        console.log(results.Poster)
        dispatch(setPoster(results.Poster));
        dispatch(setMovieTitle(results.Title));
      })
      .catch((err) => {
        console.log('ERROR ' + err);
      });
    
  };
  // console.log(results)
  return (results.length === 0) ? (
    <>

      <Card style={{ backgroundColor: "transparent", border: "none" }}>
        <Card.Body>
          <Card.Text style={{ color: "white" }}>
            <h5>Recommended</h5>
            <form onSubmit={movieSearchFunc}>
              <input value={query} type="text" onChange={(e) => setQuery(e.target.value)} placeholder="Movie Title"></input>
            </form>
            <button onClick={movieSearchFunc}>search</button>
          </Card.Text>
        </Card.Body>
      </Card>
    </>
  ) : (
      <>
        <Card style={{ backgroundColor: "transparent", border: "none" }}>
          <Card.Body>
            <Card.Text style={{ color: "white" }}>
              <h5>Recommended</h5>
              <form onSubmit={movieSearchFunc}>
                <input value={query} type="text" onChange={(e) => setQuery(e.target.value)} placeholder="Movie Title"></input>
              </form>
              <button onClick={movieSearchFunc}>search</button>
            </Card.Text>
          </Card.Body>
          <MovieCard
            onMovieClick={props.onMovieClick}
            id={results.id}
            title={results.title}
            poster={results.poster}
          />
        </Card>
      </>
    )
}

export default RecommendedCard;

//send recommended movie.id back to reviews page