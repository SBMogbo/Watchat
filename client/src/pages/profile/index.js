// profile page
import "./style.css";
import { Row, Col, Card, Image } from "react-bootstrap";
import ProfileMovieCard from "../../components/ProfileMovieCard";
import ProfileRecommends from "../../components/ProfileRecommends";
import Navbar from "../../components/Navbar/Navbar";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import API from "../../utils/API";
// import Avatars from '@dicebear/avatars';
// import sprites from '@dicebear/avatars-identicon-sprites';

let options = {
    colors: ["amber", "blue", "red", "green", "pink", "blueGrey"]
};
// let avatars = new Avatars(sprites, options);
// let svg = avatars.create('custom-seed');
// var randColor = options.colors[Math.floor(Math.random() * options.colors.length)];

// console.log(avatars);

function Profile() {
    const reduxDispatch = useDispatch();
    const user = useSelector(state => state.user)
    const [watchedResults, setWatchedResults] = useState([])
    const [toWatchResults, setToWatchResults] = useState([])
    const [recommendedResults, setRecommendedResults] = useState([])
    const [reviewedResults, setReviewedResults] = useState([])

    async function getProfileReviews() {
        const response = await API.getReviewsListByUser(user.id);
        const recommendedResults = response.data;
        const mappedResults = recommendedResults.map((result) => {
            result = {
                userId: result.user.id,
                username: result.user.username,
                movieId: result.movieId,
                movieTitle: result.movieTitle,
                poster: result.poster,
                recommendationId: result.recommendationId,
                review: result.review,
                reviewTitle: result.reviewTitle,
            };
            return result;
        });

        setRecommendedResults(mappedResults);
        // replace with loop
        return getMovieInfo(mappedResults[0].movieId);

            // .catch((err) => {
            //     console.log('ERROR ' + err);
            // });
        // console.log(recommendedResults)
    }

    async function getMovieInfo(movieId) {
        return API.omdbSearchById(movieId)
            .then((response) => {
                console.log(response);
                let results = response;
                const reviewedResults = {
                    key: results.imdbID,
                    id: results.imdbID,
                    poster: results.Poster,
                    title: results.Title,
                };
                setReviewedResults(reviewedResults);
                // console.log(reviewedResults)
            })
            .catch((err) => {
                console.log('ERROR ' + err);
            });
    }

    async function getProfileWatchedList() {
        return API.getWatchedListByUser(user.id).then((res) => {
            const response = res.data;
            let watchedResults = response;
            // console.log(results)
            // map through the array
            watchedResults = watchedResults.map((result) => { // store each movie information in a new object
                result = {
                    key: result.movieId,
                    id: result.movieId,
                    poster: result.poster,
                    title: result.movieTitle,
                    // year: result.Year,
                    // type: result.Type,
                };
                return result;
            });
            // console.log("response", response)
            // console.log("movies", results)
            setWatchedResults(watchedResults);
            // console.log(watchedResults)
        }).catch((err) => {
            console.log('ERROR ' + err);
        });
    }

    async function getProfileToWatchList() {
        return API.getToWatchListByUser(user.id)
            .then((res) => {
                const response = res.data;
                let toWatchResults = response;
                // console.log(results)
                // map through the array
                toWatchResults = toWatchResults.map((result) => {
                    // store each movie information in a new object
                    result = {
                        key: result.movieId,
                        id: result.movieId,
                        poster: result.poster,
                        title: result.movieTitle,
                        // year: result.Year,
                        // type: result.Type,
                    };
                    return result;
                });
                // console.log("response", response)
                // console.log("movies", results)
                setToWatchResults(toWatchResults);
                // console.log(toWatchResults)
            }).catch((err) => {
            })
            .catch((err) => {
                console.log('ERROR ' + err);
            });
    }



    useEffect(() => {
        getProfileReviews();
        getProfileWatchedList();
        getProfileToWatchList();
    }, [])

    return (
        <>
            <div className="container">
                <Row>
                    <Col className="left-top" sm={3}>
                        <Image src="https://avatars.dicebear.com/api/identicon/:jojoj.svg " roundedCircle />
                    </Col>

                    <Col className="right-top"
                        sm={9}>
                        <Row>
                            <Col className="username"
                                sm={4}>
                                <Card style={{ backgroundColor: "transparent", border: "none", marginTop: "20px" }}>
                                    <Card.Header style={{ color: "white" }}>
                                        <h3>{user.username}</h3>
                                    </Card.Header>
                                </Card>
                            </Col>
                        </Row>
                        <Row>
                            <Col className="profile-recommend">
                                <ProfileRecommends
                                    poster={recommendedResults[0]?.poster}
                                />
                            </Col>
                        </Row>
                    </Col>
                </Row>

                <Row className="movie-cards">
                    <Col sm={4}>
                        <ProfileMovieCard
                            cardTitle="Watched List"
                            poster={watchedResults[0]?.poster}
                        />
                    </Col>
                    <Col sm={4}>
                        <ProfileMovieCard
                            cardTitle="To Watch List"
                            poster={toWatchResults[0]?.poster}
                        />
                    </Col>
                    <Col sm={4}>
                        <ProfileMovieCard
                            cardTitle="Reviewed List"
                            poster={reviewedResults?.poster}
                        />
                    </Col>
                </Row>
            </div>
        </>

    )
}

export default Profile;
