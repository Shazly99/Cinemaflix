import React from 'react'
import { Row, Col, Card, Badge } from 'react-bootstrap'
import { Link } from 'react-router-dom';
import '../Movies.scss'
import avatar from "../../../assets/Img.js";

function Cards({ movie ,size,type}) {

  let { id, title, vote_average, poster_path, media_type, overview } = movie;


  return (
    <>

      <Col xl={size} md={4} className="card__item overflow-hidden  text-center position-relative">
        <div className="item position-relative rounded-3 overflow-hidden">
          {poster_path?
            <img className=' w-100  shadow-lg' variant="top" src={process.env.REACT_APP_IMAGE_MASTER_PATH + poster_path} />:
            <img src={avatar.avatar} className='avatar2 w-100  shadow-lg   d-flex justify-content-center align-items-center' />
          }
          <Link to={`/details/${id}/${media_type===undefined?type:media_type}`} >
            <div className="overlay">
              <p >{overview.split(' ').splice(0, 15).join(' ')}</p>
              {/* <span>{release_date}</span> */}
            </div>
          </Link>
        </div>
        <span className="vote  position-absolute ">{vote_average.toFixed(1)}</span>
        <p className='text-dark'>{title}</p>
      </Col>
    </>
  )
}

export default Cards