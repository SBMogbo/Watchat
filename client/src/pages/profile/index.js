// profile page
import "./style.css";
import {Row, Col, Card, Image} from "react-bootstrap";
import ProfileMovieCard from "../../components/ProfileMovieCard";
import ProfileRecommend from "../../components/ProfileRecommendsCard";


function Profile() {
    return (
        <div className="container">
            <Row>
                <Col className="left-top" sm={3}>
                    <Image src="https://image.shutterstock.com/image-vector/user-avatar-icon-sign-profile-260nw-1145752283.jpg" roundedCircle/>
                </Col>

                <Col className="right-top"
                    sm={9}>
                    <Row>
                        <Col className="username"
                            sm={4}>
                            <Card>
                                <Card.Header>
                                    WatchatUser001
                                </Card.Header>
                            </Card>
                        </Col>
                    </Row>
                    <Row>
                        <Col className="profile-recommend">
                            <ProfileRecommend/>
                        </Col>
                    </Row>
                </Col>
            </Row>

            <Row className="movie-cards">
                <Col sm={4}>
                    <ProfileMovieCard/>
                </Col>
                <Col sm={4}>
                    <ProfileMovieCard/>
                </Col>
                <Col sm={4}>
                    <ProfileMovieCard/>
                </Col>
            </Row>
        </div>

    )
}

export default Profile;
