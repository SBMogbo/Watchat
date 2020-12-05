//profile page
import {Row, Col} from "react-bootstrap";
import ProfileMovieCard from "../../components/ProfileMovieCard";
import ProfileRecommend from "../../components/ProfileRecommendsCard";



function Profile () {
    return (
        <div className="container">
            <Row>
                <Col className="profile-pic" sm={3}>
                    Profile Pic
                </Col>

                <Col sm={9}>
                    <Row>
                        <Col>
                        Username
                        </Col>
                    </Row>
                    <Row>
                        <Col>
                        <ProfileRecommend />
                        </Col>
                    </Row>
                </Col>
            </Row>

            <Row>
                <Col sm={4}>
                   <ProfileMovieCard />
                </Col>
                <Col sm={4}>
                   <ProfileMovieCard />
                </Col>
                <Col sm={4}>
                    <ProfileMovieCard />
                </Col>
            </Row>
        </div>
        
    )
}

export default Profile; 