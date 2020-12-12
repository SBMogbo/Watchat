import "./style.css";
import {Card, Col, Row} from "react-bootstrap"




function ProfileRecommends(props) {
    return(
        
        <Card style={{backgroundColor:"transparent", border:"none", borderRadius:"10px", padding: 10, margin: 10}}>
            <Card.Header  style={{color:"white"}}>
                <h5>Recommends</h5>
            </Card.Header>
            <Card.Body bsStyle="default" style={{paddingBottom:"120px", backgroundColor:"#dbd8e3", borderRadius:"10px", boxShadow:"20px 20px 10px rgba(0,0,0,0.75)"}}>
                <Row>
                    <Col sm={2}>
                    <Card.Img style={{cursor:"pointer"}}variant="bottom" src={props.poster} />
                    </Col>
                </Row>
            </Card.Body>
        </Card>
        
    )
}

export default ProfileRecommends;