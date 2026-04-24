import React from 'react'
import Banner from '../Banner';
import MainContent from '../MainContent';

import './styles.scss'

const MainPage:React.FC = () => {
  return (
    <div className='main-page-container'>
      <div className='scroll-container'>
        <Banner />
        <MainContent />
      </div>
    </div>
  )
}

export default MainPage