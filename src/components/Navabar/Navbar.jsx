import React, { useState } from 'react'
import { Container, Navbar, Nav, Form, Figure } from 'react-bootstrap'
import { LinkContainer } from 'react-router-bootstrap';
import logo from "../../assets/Img/logoM.svg";
import { IconContext } from "react-icons";
import Icon from "../../constants/Icons";
import icon from "../../assets/Img";
function NavBarComp({ userData, logoutApp }) {
 


  return (
    <>
      <Navbar fixed="top" collapseOnSelect expand="lg" className=' Navbar' variant="dark">
        <Container fluid >
          <Navbar.Brand  >
            <Figure.Image
              src={icon.logo}
              className='w-75'
            />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          {/* 'home', 'about', 'movies', 'people', 'tvShow', 'networks' */}
          <Navbar.Collapse id="responsive-navbar-nav">
            {
              <Nav className="me-auto" as='ul'>
                {userData &&
                  ['home' , 'movies', 'people', 'tvShow', 'networks'].map((nav, index) => {
                    return (
                      <LinkContainer key={index} to={nav == 'home' ? '' : nav} as='li' >
                        <Nav.Link eventKey={index} className='nav-link ' style={{ cursor: 'pointer' }}>{nav.charAt(0).toUpperCase() + nav.slice(1)}</Nav.Link>
                      </LinkContainer>
                    )
                  })
                }
              </Nav>
            }
            {/* search input  */}
            <Navbar.Collapse className='gap-4'>
              <Nav as='ul' className="ms-auto social__media__icons " >
          
              </Nav>
              {/* social__media__icons  */}
              <Nav as='ul' className='social__media__icons'>
                <IconContext.Provider value={{ color: 'white', size: '1em' }} >
                  <Nav.Link className='nav-link '  >
                    <Icon.facebook />
                  </Nav.Link>
                  <Nav.Link className='nav-link '  >
                    <Icon.instagram />
                  </Nav.Link>
                  <Nav.Link className='nav-link '  >
                    <Icon.youtube />
                  </Nav.Link>
                  <Nav.Link className='nav-link '  >
                    <Icon.tiktok />
                  </Nav.Link>

                </IconContext.Provider>
              </Nav>
              {/* Login , Register , logout , profile */}
              <Nav as='ul'>
                {userData ?
                <Nav>
                   <LinkContainer to={'profile'} as='li'>
                      <Nav.Link eventKey={0} className='nav-link ' style={{ cursor: 'pointer' }}>profile</Nav.Link>
                    </LinkContainer>
                    <LinkContainer to={'/login'} as='li'>
                      <Nav.Link onClick={logoutApp} eventKey={1} className='nav-link ' style={{ cursor: 'pointer' }}>Logout</Nav.Link>
                    </LinkContainer>
                </Nav>
                  :
                  ['login', 'register'].map((nav, index) => {
                    return (
                      <LinkContainer key={index} to={nav} as='li'>
                        <Nav.Link eventKey={index} className='nav-link ' style={{ cursor: 'pointer' }}>{nav.charAt(0).toUpperCase() + nav.slice(1)}</Nav.Link>
                      </LinkContainer>)
                  })
                }

              </Nav>
            </Navbar.Collapse>

          </Navbar.Collapse>
        </Container>
      </Navbar>


    </>
  )
}

export default NavBarComp