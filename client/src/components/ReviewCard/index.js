import {Card, Button, InputGroup } from "react-bootstrap";
import "./style.css";


function ReviewCard() {
    return (
        <>
            <div className="container">
                <Card className="text-left">
                    <Card.Body>
                        <Card.Title className="review-title">Leave a Review</Card.Title>
                        <InputGroup size="sm" className="mb-3">
                            <div className="form-group">
                                <input placeholder="Review Title"></input>
                                <textarea placeholder="Write your review..."className="form-control" id="exampleFormControlTextarea1" rows="20" cols="90"/>
                            </div>
                        </InputGroup>
                        <Button variant="primary" className="button-right">Submit</Button>
                    </Card.Body>
                </Card>
            </div>

        </>
    )
}

export default ReviewCard
