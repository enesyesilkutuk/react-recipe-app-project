import React, { useState} from 'react'
import { Hamburger, Logo, Nav, MenuLink, Menu } from './NavbarStyles';
// import { GiHamburgerMenu } from "react-icons/gi"

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <Nav>
      <Logo to="/home">
        <i>{"<Clarusway>"}</i>
        <span>recipe</span>
      </Logo>
      <Hamburger onClick={() => setIsOpen(!isOpen)}>
        <span />
        <span />
        <span />
        {/* <GiHamburgerMenu /> */}
      </Hamburger>
      <Menu state={isOpen}>
      <MenuLink onClick={() => setIsOpen(!isOpen)} to="/about">About</MenuLink>
      <MenuLink to="/about">Github</MenuLink>
      <MenuLink to="/" onClick={() => setIsOpen(!isOpen)}  onMouseUp={() => sessionStorage.clear()} >Logout</MenuLink>
      </Menu>
    </Nav>
  )
}

export default Navbar

