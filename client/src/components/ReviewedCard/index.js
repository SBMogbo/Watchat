import { useState } from "react";
import { Card, Button, InputGroup } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { setReviewTitle, setReview } from "../../utils/AppSlice";
import { IconButton } from "@material-ui/core"
import { useSelector } from "react-redux";

function ReviewedCard(props) {

    return (
        <>
            <div className="container">
                <Card className="text-left" style={{ backgroundColor: "#564d4d", border: "none" }}>
                    <Card.Body>
                        <Card.Title style={{ padding: "20px 10px", color: "white", }}>{props.reviewTitle}</Card.Title>
                        <Card.Text size="sm" className="mb-3" style={{ backgroundColor: "#dbd8e3", color: "black" , boxShadow: "20px 20px 10px rgba(0,0,0,0.75)", paddingBottom:"260px", borderRadius:"10px" }}>
                            <p style={{margin:"0px 10px", paddingTop:"10px"}}>{props.review}</p>
                        </Card.Text>
                        
                    </Card.Body>
                </Card>
            </div>

        </>
    )
}

export default ReviewedCard
