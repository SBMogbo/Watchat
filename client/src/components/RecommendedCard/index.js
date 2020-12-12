import { Card, Button, Row } from "react-bootstrap";
import API from "../../utils/API";
import MovieCard from "../MovieCard";
import { useDispatch } from "react-redux";
import { setRecommendedId, setSearch } from "../../utils/AppSlice";
import { useState } from "react";
import { IconButton } from "@material-ui/core"

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


        // console.log(results)
        // console.log("response", response)
        // console.log("movies", results)
        setResults(result)
      })
      .catch((err) => {
        console.log('ERROR ' + err);
      });
    dispatch(setRecommendedId(results.id));
  };
  // console.log(results)
  return (results.length === 0) ? (
    <>

      <Card style={{ backgroundColor: "transparent", border: "none" }}>
        <Card.Body>
          <Card.Text style={{ color: "white" }}>
          <Row style={{marginBottom:"10px"}}>
              <h5>Recommended</h5>
              </Row>
          
          </Card.Text>
          <Row style={{justifyContent:"center", marginBottom:"10px"}}>
          <form onSubmit={movieSearchFunc}>
              <input value={query} type="text" onChange={(e) => setQuery(e.target.value)} placeholder="Movie Title"></input>
            </form>
          </Row>
          <Row style={{marginLeft:"20px",marginBottom:"10px"}}>
          <IconButton>
            <Button onClick={movieSearchFunc} variant="outline-light">Search</Button>
            </IconButton>
          </Row>
           
        </Card.Body>
      </Card>
    </>
  ) : (
      <>
        <Card style={{ backgroundColor: "transparent", border: "none" }}>
          <Card.Body>
            <Card.Text style={{ color: "white" }}>
              <Row style={{ marginBottom:"10px"}}>
              <h5>Recommended</h5>
              </Row>
              
             
            </Card.Text>
            <Row style={{justifyContent:"center", marginBottom:"10px"}}>
            <form onSubmit={movieSearchFunc}>
                <input style={{justifyContent:"center"}} value={query} type="text" onChange={(e) => setQuery(e.target.value)} placeholder="Movie Title"></input>
              </form>
            </Row>
          
            <Row style={{marginLeft:"20px",marginBottom:"10px"}}>
              <IconButton>
            <Button style={{marginTop:"5px", justifyContent:"left"}}onClick={movieSearchFunc} variant="outline-light">Search</Button>
            </IconButton>
              </Row>
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