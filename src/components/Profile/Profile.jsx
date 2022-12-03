import React from 'react'
import jwtDecode from 'jwt-decode';
import { Col, Container, Row } from 'react-bootstrap';
import "./proflie.scss";
const Profile = ({ userData }) => {
  let { first_name, last_name, age, email } = userData;
  return (
    <>

      <Container className='vh-100'>
        <Row>
            {/* <Col xs lg="2">

            </Col> */}
          <Col className='profile__data   p-5 d-flex flex-column gap-3'>
            <h1 className='text-center'> Welcome, {first_name}{' '}{last_name} </h1>
            <h2> first_name : {first_name}</h2>
            <h3>last_name : {last_name}</h3>
            <h3>Current age : {age}</h3>
            <h3>My email : {email}</h3>
          </Col>
        </Row>
      </Container>

    </>
  )
}

export default Profile
