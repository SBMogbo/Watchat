// profile page
import "./style.css";
import {Row, Col, Card, Image} from "react-bootstrap";
import ProfileMovieCard from "../../components/ProfileMovieCard";
import ProfileRecommend from "../../components/ProfileRecommendsCard";
import Avatars from '@dicebear/avatars';
import sprites from '@dicebear/avatars-identicon-sprites';



let options = {
    colors:["amber","blue","red","green","pink","blueGrey"]
};
let avatars = new Avatars(sprites, options);
let svg = avatars.create('custom-seed');
var randColor = options.colors[Math.floor(Math.random() * options.colors.length)];

console.log(avatars);



function Profile() {
    return (
        <div className="container">
            <Row>
                <Col className="left-top" sm={3}>
                    <Image src="https://avatars.dicebear.com/api/identicon/:jojoj.svg " roundedCircle/>
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
