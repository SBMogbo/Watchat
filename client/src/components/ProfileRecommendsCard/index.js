import "./style.css";
import {Card, Col, Row} from "react-bootstrap"




function ProfileRecommend() {
    return(
        
        <Card style={{backgroundColor:"transparent", border:"none", borderRadius:"10px", boxShadow:"20px 20px 10px rgba(0,0,0,0.75"}}>
            <Card.Header  style={{color:"white", backgroundColor:"#696969", borderRadius:"10px"}}>
            <Card.Title style={{ color: "white", marginTop:"10px" }}>Recommends</Card.Title>
            </Card.Header>
            <Card.Text className="scroll-text" style={{ backgroundColor:"#dbd8e3", paddingBottom:"120px", borderRadius:"10px", border:"none"}}>
                <Row>
                    <Col sm={2}>
                    <Card.Img style={{cursor:"pointer", margin:"15px 15px"}}variant="bottom" src="https://image.shutterstock.com/image-photo/photo-old-movie-projector-260nw-92369284.jpg" />
                        </Col>
                    <Col sm={2}>

                    <Card.Img style={{cursor:"pointer", margin:"15px 15px"}}variant="bottom" src="https://image.shutterstock.com/image-photo/photo-old-movie-projector-260nw-92369284.jpg" />
                    </Col>

                    <Col sm={2}>
                    <Card.Img style={{cursor:"pointer", margin:"15px 15px"}}variant="bottom" src="https://image.shutterstock.com/image-photo/photo-old-movie-projector-260nw-92369284.jpg" />
                    </Col>

                    <Col sm={2}>
                    <Card.Img style={{cursor:"pointer", margin:"15px 15px"}}variant="bottom" src="https://image.shutterstock.com/image-photo/photo-old-movie-projector-260nw-92369284.jpg" /> 
                    </Col>

                    <Col sm={2}>
                    <Card.Img style={{cursor:"pointer", margin:"15px 15px"}}variant="bottom" src="https://image.shutterstock.com/image-photo/photo-old-movie-projector-260nw-92369284.jpg" />
                    </Col>
                   
                    
                    
                </Row>
            </Card.Text>
        </Card>
        
    )
}

export default ProfileRecommend;