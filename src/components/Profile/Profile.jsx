import React ,{useState,useEffect}from 'react'
import jwtDecode from 'jwt-decode';
import { Col, Container, Row } from 'react-bootstrap';
import "./proflie.scss";
const Profile = () => {
  const [userData, setUserData] = useState('');
  function getData() {
    let token = localStorage.getItem('token');
    let decodeTocken = jwtDecode(token);
    setUserData(decodeTocken);
  }
  useEffect(() => {
    getData()
  }, []) 
  return (
    <>

      <Container className='   d-flex justify-content-center align-item-center'>
        <Row> 
          <Col className='profile__data   p-5 d-flex flex-column gap-3'>
            <h1 className='text-center'> Welcome, {userData.first_name}{' '}{userData.last_name} </h1>
            <h2> first_name : {userData.first_name}</h2>
            <h3>last_name : {userData.last_name}</h3>
            <h3>Current age : {userData.age}</h3>
            <h3>My email : {userData.email}</h3>
          </Col>
        </Row>
      </Container>

    </>
  )
}

export default Profile
