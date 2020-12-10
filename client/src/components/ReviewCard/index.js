import {Card, Button, InputGroup} from "react-bootstrap";
import "./style.css";
import {IconButton} from "@material-ui/core"


function ReviewCard() {
    return (
        <>
            <div className="container">
                <Card className="text-left" style={{backgroundColor:"#564d4d", border:"none"}}>
                    <Card.Body>
                        <Card.Title style={{padding:"20px 10px", color:"white", }}>Leave a Review</Card.Title>
                        <InputGroup size="sm" className="mb-3" style={{boxShadow:"10px 10px 10px rgba(0,0,0,0.75)"}}>
                            <div className="form-group">
                                <textarea style={{backgroundColor:"#dbd8e3", color:"black"}} placeholder="Write your review..." className="form-control" id="exampleFormControlTextarea1" rows="20" cols="90"/>
                            </div>
                        </InputGroup>
                        <IconButton>
                            <Button variant="outline-light" style={{borderRadius:"10px"}}>Submit</Button>
                        </IconButton>
                    </Card.Body>
                </Card>
            </div>

        </>
    )
}

export default ReviewCard
