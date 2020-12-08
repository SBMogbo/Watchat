// home
import {Row, Col} from "react-bootstrap";
import "./style.css";
import CategoryButtons from "../../components/CategoryButtons/index";
import PlatformButtons from "../../components/PlatformButtons";


function Home() {
    
    return (
        <>

            <div className="container">
                <Row className="title-row">
                    <Col>
                        <h1>Home</h1>
                    </Col>
                </Row>

                <Row className="platform-buttons">
                    <Col>
                        <PlatformButtons/>
                    </Col>
                </Row>


                <Row className="buttons-row">
                    <Col>
                        <CategoryButtons/>
                    </Col>
                </Row>
            </div>

        </>
    )
}

export default Home;
