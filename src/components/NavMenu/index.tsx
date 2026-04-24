import React from 'react'
import { Button, Container, Nav, Navbar } from 'react-bootstrap'
import logo from '../../assets/RR-logo-label.jpg'
import SocialMediaIcons from '../SocialMediaIcons'

import './styles.scss'

const NavMenu: React.FC = () => {
    return (
        <Navbar className="nav-bar" data-bs-theme="dark">
            <div className='nav-container'>
                <Navbar.Brand href="#home">
                    <img src={logo} alt="RR Logo" height="40" />
                </Navbar.Brand>
                <Nav>
                    <Nav.Link href="#about">ABOUT</Nav.Link>
                    <Nav.Link href="#event">EVENT</Nav.Link>
                    <Nav.Link href="#store">STORE</Nav.Link>
                    <Nav.Link href="#support">SUPPORT</Nav.Link>
                </Nav>
                <Button onClick={() => console.log("Login clicked!")} size='sm'>LOGIN</Button>
                <SocialMediaIcons />
            </div>
        </Navbar>
    )
}

export default NavMenu