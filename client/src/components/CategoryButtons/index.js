import "./style.css";
import {Button} from "react-bootstrap";


function CategoryButtons() {
    return (
        <>
  <Button variant="outline-secondary">All</Button>{' '}
  <Button variant="outline-secondary">Movies</Button>{' '}
  <Button variant="outline-secondary">TV Shows</Button>{' '}
  <Button variant="outline-secondary">Documentaries</Button>{' '}
  <Button variant="outline-secondary">Genre</Button>{' '}
  <Button variant="outline-secondary">Anime</Button>{' '}
  <Button variant="outline-secondary">Year</Button>{' '}
  <Button variant="outline-secondary">Rating</Button>
</>
    )

}

export default CategoryButtons;
