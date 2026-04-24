import React from 'react'
import Icon from '../Icon'
import RR from '../../assets/RR-logo.jpg'
 
import './styles.scss'

const SocialMediaIcons:React.FC = () => {
    return (
        <div className='social-media-container'>
            <img src={RR} alt="RR Logo" height="40" />
            <Icon name="facebook" width={30} height={30} />
            <Icon name="youtube" width={30} height={30} />
            <Icon name="instagram" width={30} height={30} />
        </div>
    )
}

export default SocialMediaIcons