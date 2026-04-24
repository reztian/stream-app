import React from 'react'
import { Button, Container, Nav } from 'react-bootstrap';
import NavMenu from '../../components/NavMenu';
import Banner from '../Banner';
import MainContent from '../MainContent';
import './styles.scss'

const MainPage = () => {
  return (
    <div className='main-page-container'>
      <NavMenu />
      <div className='scroll-container'>
        <Banner />
        <MainContent />
      </div>
    </div>
  )
}

export default MainPage