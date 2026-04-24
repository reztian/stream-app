import React from 'react'
import { Routes, Route, Navigate } from 'react-router-dom'
import MainPage from '../../pages/MainPage'
import NavMenu from '../NavMenu';


const AppRouter: React.FC = () => {
  const routes = [
    {
      path: '/', element: <MainPage />
    },
    {
      path: '/events', element: <h1>Events Page</h1>
    },
    {
      path: '/store', element: <h1>Store Page</h1>
    },
    {
      path: '/support', element: <h1>Support Page</h1>
    },
    {
      path: '*', element: <Navigate to="/" replace />
    }

  ];
  return (
    <>
      <NavMenu />
      <Routes>
        {routes.map((route, index) => (
          <Route key={index} path={route.path} element={route.element} />
        ))}
      </Routes>
    </>

  )
}

export default AppRouter