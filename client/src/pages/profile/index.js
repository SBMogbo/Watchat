// profile page
import "./style.css";
import {Row, Col, Card, Image, Nav } from "react-bootstrap";
import ProfileMovieCard from "../../components/ProfileMovieCard";
import ProfileRecommend from "../../components/ProfileRecommendsCard";
import Navbar from "../../components/Navbar/Navbar";


function Profile() {
    return (
        <>
        <Navbar />
        <div className="container">
            <Row>
                <Col className="left-top" sm={3}>
                    <Image src="https://image.shutterstock.com/image-vector/user-avatar-icon-sign-profile-260nw-1145752283.jpg" roundedCircle />
                </Col>

                <Col className="right-top"
                    sm={9}>
                    <Row>
                        <Col className="username"
                            sm={4}>
                            <Card style={{backgroundColor:"transparent", border:"none", marginTop:"20px"}}>
                                <Card.Header style={{ color:"white"}}>
                                    <h3>User001</h3>
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
        </>

    )
}

export default Profile;
