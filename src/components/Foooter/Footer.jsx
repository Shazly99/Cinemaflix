import jwtDecode from 'jwt-decode';
import React, { useState, useEffect } from 'react'
import { Col, Container, Row } from 'react-bootstrap';
import icon from "../../assets/Img";
import './footer.scss'
import { Link } from 'react-router-dom';
function Footer() {
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
      <div className="footer">
        <Container>
          <Row className='d-flex gap-5   '>
            <Col xl={2} className='d-flex flex-column gap-5'>
              <img src={icon.logoFooter} className='w-100' />
              <Link to={'/profile'} className='footer__btn'>Hi {userData.first_name}</Link>
            </Col>


            <Col xl={2} className='d-flex flex-column gap-1'>
              <h3>THE BASICS</h3>
              <ul>
                <li> About TMDB</li>
                <li> Contact Us </li>
                <li> Support Forums </li>
                <li> API </li>
                <li> System Status </li>
              </ul>
            </Col>


            <Col xl={2} className='d-flex flex-column gap-2'>
              <h3>GET INVOLVED </h3>
              <ul>
                <li>  Contribution Bible</li>
                <li> Add New Movie </li>
                <li> Add New TV Show </li> 
              </ul>
            </Col>

            <Col xl={2} className='d-flex flex-column gap-2'>
              <h3>COMMUNITY</h3>
              <ul>
                <li>Guidelines</li>
                <li> Discussions</li>
                <li>Leaderboard</li> 
                <li>Twitter</li> 
              </ul>
            </Col>

            <Col xl={2} className='d-flex flex-column gap-2'>
              <h3>LEGAL</h3>
              <ul>
                <li>Terms of Use</li>
                <li> API Terms of Use</li>
                <li>Privacy Policy</li>  
              </ul>
            </Col>
          </Row>
        </Container>
      </div>
    </>
  )
}

export default Footer