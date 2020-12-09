import {Card} from "react-bootstrap";
import {useHistory} from "react-router";
import {useDispatch} from "react-redux";
import {setMovieId} from "../../utils/AppSlice";


function MovieCard(props) {
  const history = useHistory();
  const dispatch = useDispatch();

  function onClick() {
    props.onMovieClick(props.id)
    dispatch(setMovieId(props.id))
    history.push("/movieDetails")
  }

  return (
      <Card id={props.id} onClick={onClick}>
        <Card.Img variant="top" src={props.poster}/>
        <Card.Text>
          <span>{props.title}</span>
        </Card.Text>
      </Card>
  )
}

export default MovieCard;