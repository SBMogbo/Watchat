import { Card } from "react-bootstrap";
import { useHistory } from "react-router";
import { useDispatch } from "react-redux";
import { setMovieId } from "../../utils/AppSlice";
import { setUser } from "../../utils/AppSlice";

function MovieCard(props) {
  const history = useHistory();
  const dispatch = useDispatch();
  const userId = localStorage.getItem("authorization-token")

  function onClick() {
    // props.onMovieClick(props.id)
    dispatch(setMovieId(props.id))
    dispatch(setUser(userId))
    history.push("/movieDetails")
  }

  return (
    <Card id={props.id} onClick={onClick} style={{ backgroundColor: "transparent", border: "none", cursor:"pointer"}}>
      <Card.Img variant="top" src={props.poster} />
      <Card.Text style={{ color: "white", paddingTop: "13px", justifyContent:"center" }}>
        <span>{props.title}</span>
      </Card.Text>
    </Card>
  )

}

export default MovieCard;