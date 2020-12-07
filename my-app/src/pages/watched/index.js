// watched page
import {Row, Col} from "react-bootstrap";
import "./style.css";
import CategoryButtons from "../../components/CategoryButtons/index";




function Watched () {
    return (
        <div className="container">
            <Row className="title-row">
                <Col>
                <h1>Watched</h1>
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

export default Watched; 