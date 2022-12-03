import React from 'react'
import { BounceLoader } from 'react-spinners'

function Loading() {
  return (
    <>
      <div className='loading vh-100  d-flex justify-content-center align-items-center' >
        <BounceLoader
          color="#36d7b7"
          loading
          size={90}
        />
      </div>

    </>
  )
}

export default Loading