// profile page
import "./style.css";
import { Row, Col, Card, Image } from "react-bootstrap";
import ProfileMovieCard from "../../components/ProfileMovieCard";
import ProfileRecommends from "../../components/ProfileRecommends";
import Navbar from "../../components/Navbar/Navbar";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import API from "../../utils/API";
import { useParams } from "react-router";
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
    const routerParams = useParams();
    const user = useSelector(state => state.user)

    const [watchedResults, setWatchedResults] = useState([])
    const [toWatchResults, setToWatchResults] = useState([])
    const [reviewedResults, setReviewedResults] = useState([])
    const [username, setUsername] = useState([])
    const userId = routerParams.id ?? user.id
    // console.log(routerParams)

    async function getProfileReviews() {
        const response = await API.getReviewsListByUser(userId);

        let reviews = response.data;
        reviews = reviews.map(x => ({
            ...x,
            poster: x.reviewedMoviePoster,
            movieId: x.reviewedMovieId,
            movieTitle: x.reviewedMovieTitle,
        }));
        setReviewedResults(reviews);
        // console.log(reviews)

    }


    async function getProfileWatchedList() {
        return API.getWatchedListByUser(userId)
            .then((res) => {
                let movies = res.data;
                movies = movies.map(x => ({
                    ...x,
                    poster: x.poster,
                    movieId: x.movieId,
                    movieTitle: x.movieTitle,
                }));
                setWatchedResults(movies);
                // console.log(movies)
            }).catch((err) => {
                console.log('ERROR ' + err);
            });
    }

    async function getProfileToWatchList() {
        return API.getToWatchListByUser(userId)
        .then((res) => {
            let movies = res.data;
            movies = movies.map(x => ({
                ...x,
                poster: x.poster,
                movieId: x.movieId,
                movieTitle: x.movieTitle,
            }));
            setToWatchResults(movies);
            // console.log(movies)
        }).catch((err) => {
            console.log('ERROR ' + err);
        });
}

    function getUser() {
        API.getUser(userId)
            .then((res) => {
                const response = res.data;
                console.log(response)
                setUsername(response.username)
            })
    }

    useEffect(() => {
        getProfileReviews();
        getProfileWatchedList();
        getProfileToWatchList();
        getUser()
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
                                 <Card style={{backgroundColor:"#696969", border:"none", marginTop:"20px"}}>
                                    <Card.Header style={{ color: "white" }}>
                                        <h3>{username}</h3>
                                    </Card.Header>
                                </Card>
                            </Col>
                        </Row>
                        <Row>
                            <Col className="profile-recommend">
                                <ProfileRecommends
                                    reviews={reviewedResults.filter(x => x.recommendedMovieId)}
                                />
                            </Col>
                        </Row>
                    </Col>
                </Row>

                <Row className="movie-cards">
                    <Col sm={4}>
                        <ProfileMovieCard cardTitle="Watched List" movies={watchedResults}/>
                    </Col>
                    <Col sm={4}>
                        <ProfileMovieCard cardTitle="To Watch List" movies={toWatchResults}/>
                    </Col>
                    <Col sm={4}>
                        <ProfileMovieCard cardTitle="Reviewed List" movies={reviewedResults} />
                    </Col>
                </Row>
            </div>
        </>

    )
}

export default Profile;
