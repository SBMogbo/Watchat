import { useState } from "react";
import { Card, Button, InputGroup } from "react-bootstrap";
import "./style.css";
import { useDispatch } from "react-redux";
import { setReviewTitle, setReview } from "../../utils/AppSlice";

//
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
                <Card className="text-left">
                    <Card.Body>
                        <Card.Title className="review-title">Leave a Review</Card.Title>
                        <InputGroup size="sm" className="mb-3">
                            <div className="form-group">
                                <input value={title} type="text" onChange={(e) => setTitle(e.target.value)} placeholder="Review Title"></input>
                                <textarea value={reviewInput} type="text" onChange={(e) => setReviewInput(e.target.value)} placeholder="Write your review..." className="form-control" id="exampleFormControlTextarea1" rows="20" cols="90" />
                            </div>
                        </InputGroup>
                        <Button onClick={reviewGlobalStore} variant="primary" className="button-right">Submit</Button>
                    </Card.Body>
                </Card>
            </div>

        </>
    )
}

export default ReviewCard
