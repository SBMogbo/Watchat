import { useState } from "react";
import { Card, Button, InputGroup, Row } from "react-bootstrap";
import "./style.css";
import { useDispatch } from "react-redux";
import { setReviewTitle, setReview } from "../../utils/AppSlice";
import { IconButton } from "@material-ui/core"
import { useSelector } from "react-redux";

function ReviewCard(props) {

    const tempReviewTitle = useSelector(state => state.reviewTitle);
    const tempReview = useSelector(state => state.review);
    // console.log(tempReviewTitle)
    // console.log(tempReview)
    // const [reviewTitle, setReviewTitle] = useState('')
    const [title, setTitle] = useState('');
    // const [review, setReview] = useState('')
    const [reviewInput, setReviewInput] = useState('');
    const dispatch = useDispatch();
    const reviewGlobalStore = (event) => {
        event.preventDefault();
        if (!title?.trim()) return;
        if (!reviewInput?.trim()) return;
        const reviewTitle = title
        dispatch(setReviewTitle(reviewTitle));
        console.log(reviewTitle)
        console.log(tempReviewTitle)
        setTitle('')

        const review = reviewInput
        dispatch(setReview(review));
        setReviewInput('')

        props.saveReview()
    }

    return (
        <>
            <div className="container">
                <Card className="text-left" style={{ backgroundColor: "#564d4d", border: "none" }}>
                    <Card.Body>
                        <Card.Title style={{ padding: "20px 10px", color: "white", }}>Leave a Review</Card.Title>
                        <InputGroup size="sm" className="mb-3" >
                         <div className="form-group">

                                <input style={{marginBottom:"20px", backgroundColor:"#dbd8e3", borderRadius:"5px"}} value={title} type="text" onChange={(e) => setTitle(e.target.value)} placeholder="Review Title"></input>
                                <textarea style={{ backgroundColor: "#dbd8e3", color: "black", boxShadow: "10px 10px 10px rgba(0,0,0,0.75)"}} value={reviewInput} type="text" onChange={(e) => setReviewInput(e.target.value)} placeholder="Write your review..." className="form-control" id="exampleFormControlTextarea1" rows="20" cols="90" />
                            </div>
                        </InputGroup>
                    </Card.Body>
                    <Row>
                    <IconButton>
                            <Button onClick={reviewGlobalStore} variant="outline-info" style={{ borderRadius: "10px" }} className="button-right">Submit</Button>
                        </IconButton>
                    </Row>
                </Card>
            </div>

        </>
    )
}

export default ReviewCard
