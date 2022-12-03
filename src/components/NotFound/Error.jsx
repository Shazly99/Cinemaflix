import React from 'react'
import { Link } from 'react-router-dom';
import img from "../../assets/Img.js";


import './Error.scss'

function Error() {
  return (
    <div className='notFound_page'>
      <img src={img.errorPage} alt="" />
      <p className=' text-center'>
        Seems like you're lost in space<br />
        Let us help you navigate to a safe place</p>
        <span className='notFound_page-logo'>

        <img  src={img.errorLogo} />
        </span>
        <Link to={'/'} className='notFound_page-btn'>Noxe Home</Link>
    </div>
  )
}

export default Error