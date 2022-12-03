import jwtDecode from 'jwt-decode';
import { useState, useEffect } from 'react';
import { createBrowserRouter, RouterProvider, useNavigate } from 'react-router-dom';
import Component from './constants/Component';
import './sass/App.scss';
import { Navigate } from "react-router-dom";
import TvContextProvender from './Context/TvContext';
import TvContext from './Context/TvContext';
import { Provider } from 'react-redux';
import store from './Redux/Store';

function App() {
  const [userData, setuserToken] = useState(null);

  function saveUserData() {
    let token = localStorage.getItem('token');
    let decodeTocken = jwtDecode(token);
    setuserToken(decodeTocken);
    return decodeTocken
  }
  /* -------------------------------------------------------------------------- */
  /*                    Route Guard --->  ([ProtectedRoute])                    */
  /* -------------------------------------------------------------------------- */
  const ProtectedRoute = ({ children }) => {
    if (localStorage.getItem('token')) {
      return children
    } else {
      return <Navigate to={'/login'} />
    }
  }
  function logoutApp() {
    localStorage.removeItem('token');
    setuserToken(null)
    return <Navigate to={'/login'} />
  }

  useEffect(() => {
    if (localStorage.getItem('token')) {
      saveUserData()
    } else {
      setuserToken(null)
    }
  }, [])

  const root = createBrowserRouter([{
    path: '/', element: <Component.Layout userData={userData} logoutApp={logoutApp} />, children: [
      {
        index: true,
        element:
          <ProtectedRoute>
            <Component.Home />
          </ProtectedRoute>
      },
      {
        path: 'home',
        element:
          <ProtectedRoute>
            <Component.Home />
          </ProtectedRoute>
      },
      {
        path: 'about',
        element:
          <ProtectedRoute>
            <Component.About />
          </ProtectedRoute>
      },
      {
        path: 'movies',
        element:
          <ProtectedRoute>
            <Component.Movies />
          </ProtectedRoute>
      },
      {
        path: 'people',
        element:
          <ProtectedRoute>
            <Component.People />
          </ProtectedRoute>
      },
      {
        path: 'tvShow',
        element:
          <ProtectedRoute>
            <Component.Tv />
          </ProtectedRoute>
      },
      {
        path: 'networks',
        element:
          <ProtectedRoute>
            <Component.Networks />
          </ProtectedRoute>
      },
      {
        path: 'details/:id/:type',
        element:
          <ProtectedRoute>
            <Component.MoviesDetails />
          </ProtectedRoute>
      },
      {
        path: 'Profile',
        element:
          <ProtectedRoute>
            <Component.Profile userData={userData} />
          </ProtectedRoute>
      },
      { path: 'login', element: <Component.Login saveUserData={saveUserData} /> },
      { path: 'register', element: <Component.Register /> },
      { path: '*', element: <Component.Error /> },
    ]
  }])
  return (
    <>
      <TvContext >
        <Provider store={store}>
          <RouterProvider router={root}></RouterProvider>
        </Provider>
      </TvContext>
    </>
  )


}

export default App;
