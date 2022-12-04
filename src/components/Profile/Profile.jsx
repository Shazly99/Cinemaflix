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
            <h1>Welcome  {userData.first_name} {userData.last_name}</h1>
            <h2> First Name : {userData.first_name}</h2>
            <h2 className='text-  '> Last Name : {userData.last_name} </h2>
            <h2 className='text-  '>Email :  {userData.email} </h2>
            <h2 className='text-  '>Age :  {userData.age} </h2>
 
          </Col>
        </Row>
      </Container>

    </>
  )
}

export default Profile
