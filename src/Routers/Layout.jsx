import React from 'react'
import { Toaster } from 'react-hot-toast'
import { Outlet } from 'react-router-dom'
import Component from '../constants/Component';

function Layout({ userData, logoutApp }) {

  return (
    <div className='position-relative'>

      <Component.DetectOffline />

      <Toaster
        position="top-center"
        reverseOrder={false}
        toastOptions={{
          duration: 3000,
          style: {
            fontFamily: ' Arial, Helvetica, sans-serif',
            textTransform: 'capitalize',
            zIndex: '9999',
            background: '#fff',
            color: '#333',
          },
        }}
        containerStyle={{
          top: 60
        }}
      />
      
      <Component.NavBarComp userData={userData} logoutApp={logoutApp} />
      <div className='Outlet'>
        <Outlet></Outlet>
      </div>
      <Component.Footer />


    </div>
  )
}

export default Layout
