import React, { useContext, useEffect } from 'react'
import { Container, Row, Col } from 'react-bootstrap';
import avatar from "../../assets/Img.js";
import { useSelector, useDispatch } from 'react-redux';
import { getPersons } from './../../Redux/personSlice';
import { Link } from 'react-router-dom';

function People() {

  let dispatch = useDispatch()
  let { personData } = useSelector((state) => state.person)

  useEffect(() => {
    dispatch(getPersons())
  }, [])

  return (
    <>
      <Container>
        <Row>
          {
            personData?.map((item, index) => (
              <Col xl={2} md={3} className='overflow-hidden mt-3 text-center position-relative' key={index}>
                <div className='item position-relative rounded-3 overflow-hidden'>
        
                    {
                      item?.profile_path ?
                        <img src={`${process.env.REACT_APP_IMAGE_MASTER_PATH}/${item.profile_path}`} className=' rounded-2 w-100' /> :
                        <img src={avatar.avatar} className='avatar2 w-100  shadow-lg d-flex justify-content-center align-items-center' />
                    } 
                </div>
                <span>{item.name}</span>
              </Col>
            ))
          }
        </Row>
      </Container>
    </>
  )
}

export default People
