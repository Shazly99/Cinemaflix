import React from 'react'
import { Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import avatar from "../../../assets/Img.js";
function CardActors({ actor }) {
    let { id, media_type, name, profile_path, original_name, popularity } = actor;
    return (
        <>
            <Col xl={2} md={3} className="overflow-hidden  text-center position-relative">
                <div className="item position-relative rounded-3 overflow-hidden">
                <Link to={`/details/${id}/${media_type}`}  >
                    {
                        profile_path ? <img className=' w-100  shadow-lg' variant="top" src={process.env.REACT_APP_IMAGE_MASTER_PATH + profile_path} /> :
                            <img src={avatar.avatar} className='avatar2 w-100  shadow-lg h-100 d-flex justify-content-center align-items-center' />
                    }
                    </Link>
                    <div className="">
                        {/* <p >{overview.split(' ').splice(0, 15).join(' ')}</p> */}
                        {/* <span>{release_date}</span> */}
                    </div>
                </div>
                <span className="vote  position-absolute ">{popularity.toFixed(1)}</span>
                <p className='text-dark'>{original_name}</p>
            </Col>
        </>
    )
}

export default CardActors
