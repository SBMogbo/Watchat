// watchlist
import {Row, Col} from "react-bootstrap";
import "./style.css";
import CategoryButtons from "../../components/CategoryButtons/index";
import PlatformButtons from "../../components/PlatformButtons";



function Watchlist () {
    return (
        <div className="container">
            <Row className="title-row">
                <Col>
                <h1>Watchlist</h1>
                </Col>
            </Row>
            <Row className="buttons-row">
                <Col>
                <CategoryButtons />
                </Col>
            </Row>
        </div>
    )
}

export default Watchlist; 