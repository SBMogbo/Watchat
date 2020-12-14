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

                <Card className="text-left" style={{backgroundColor:'transparent', border:"none"}}>
                    <Card.Header style={{backgroundColor: "#696969", border: "none", borderRadius:"10px", boxShadow: "20px 20px 10px rgba(0,0,0,0.75)" }}>
                    <Card.Title style={{ padding: "20px 10px", color: "white" }}>{props.reviewTitle}</Card.Title>
                    </Card.Header>
                    
                        <Card.Text size="sm" className="mb-3" style={{ backgroundColor: "#dbd8e3", color: "black" , paddingBottom:"260px", borderRadius:"10px", boxShadow: "20px 20px 10px rgba(0,0,0,0.75)"  }}>
                            <p style={{margin:"0px 10px", paddingTop:"10px"}}>{props.review}</p>
                        </Card.Text>
                        
                </Card>
            </div>

        </>
    )
}

export default ReviewedCard
