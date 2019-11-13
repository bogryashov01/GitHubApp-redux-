import React from 'react';
import './style.css';
import { Container, Row, Col } from 'reactstrap';
import { Link } from 'react-router-dom'
const Followers = (props) => {
  const { followers, onClick } = props;
  return (
    <Container>
      <Row>
        {followers.map((follower) => {
          return (
            <Col xs="6" sm="4" md='4' className='col_cont' key={follower.id}>
              <Link to={`/${follower.login}/profile`} onClick={onClick}>
              <div className="follower_profile">
                <img src={follower.avatar_url} alt="follower"/>
                <h4>name:{follower.login}</h4>
              </div>
              </Link>
            </Col>
          )
        })}
      </Row>
    </Container>
  )
}
export default Followers;