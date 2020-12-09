// watchlist
import {Row, Col} from "react-bootstrap";
import "./style.css";
import CategoryButtons from "../../components/CategoryButtons/index";
import Navbar from "../../components/Navbar/Navbar";



function Watchlist () {
    return (
        <>
        <Navbar />
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
        </>
    )
}

export default Watchlist; 