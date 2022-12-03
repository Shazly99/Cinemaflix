import React from 'react'
import   '../Movies.scss'

function HeaderCard({ type }) {
  return (
    <>
      <div className="HeaderCard__content text-dark">
        <h2 className='fw-bold'>Trending  {type}  <br/> to Watch Right Now</h2>
        <p>Most Watched {type} By days</p>
      </div>
    </>
  )
}

export default HeaderCard
