import React from 'react'
import { Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';

function CardTv({ tvShow }) {

    let { id, media_type, name, vote_average, poster_path, release_date, overview } = tvShow;

    return (
        <>
            <Col xl={2} md={3} className="card__item overflow-hidden  text-center position-relative">
                <div className="item position-relative rounded-3 overflow-hidden">
                    <img className=' w-100  shadow-lg' variant="top" src={process.env.REACT_APP_IMAGE_MASTER_PATH + poster_path} />
                    <Link to={`/details/${id}/tv`}  >
                        <div className="overlay">
                            <p >{overview.split(' ').splice(0, 15).join(' ')}</p>
                            {/* <span>{release_date}</span> */}
                        </div>
                    </Link>
                </div>
                <span className="vote  position-absolute ">{vote_average.toFixed(1)}</span>
                <p className='text-dark'>{name}</p>
            </Col>

        </>
    )
}

export default CardTv