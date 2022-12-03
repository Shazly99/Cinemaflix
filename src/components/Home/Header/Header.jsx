import React from 'react'
import '../Movies.scss'
import img from "../../../assets/Img";
function Header() {
  let data=[
    {image:img.bg2},
    {image:img.bgheader},
    {image:img.bg3},
    {image:img.bg4},
    {image:img.bg5},
    {image:img.bg6},
  ]
  console.log();
  return (
    <>
      <div className='position-relative d-flex justify-content-center align-items-center'>
        <img src={data?.map(e=>e.image)[Math.floor(Math.random()*6)]}  className='header__img w-100 rounded-bottom' alt="" srcset="" />
        <div className="header__content position-absolute">
          <h1>Welcome .</h1>
          <h2>Millions of movies, TV shows and people to discover. Explore now.
          </h2>
        </div>
      </div>

    </>
  )
}

export default Header