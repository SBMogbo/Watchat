import { Card, Row } from "react-bootstrap";
import "./style.css"
import { useHistory } from "react-router";
import { useDispatch } from "react-redux";
import { setMovieId, setMovieTitle, setPoster } from "../../utils/AppSlice";
import { setUser } from "../../utils/AppSlice";

function MovieCard(props) {
  const history = useHistory();
  const dispatch = useDispatch();
  const userId = localStorage.getItem("authorization-token")

  function onClick() {
    // props.onMovieClick(props.id)
    dispatch(setMovieId(props.id))
    dispatch(setMovieTitle(props.title))
    dispatch(setPoster(props.poster))
    // dispatch(setUser(userId))
    history.push("/movieDetails")
  }

  return (
    <Card id={props.id} onClick={onClick} style={{ backgroundColor: "transparent", border: "none", cursor:"pointer"}}>
      <Card.Img variant="top" className="movieImage"src={props.poster}  style={{boxShadow: "20px 20px 10px rgba(0,0,0,0.75)"}} />
      <Card.Text style={{ color: "white", paddingTop: "25px", justifyContent:"center" }}>
        <Row style={{justifyContent:"center"}}>
        <span>{props.title}</span>
        </Row>
        
      </Card.Text>
    </Card>
  )

}

export default MovieCard;