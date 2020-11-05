import React from 'react';
import { Nav, NavLink, NavIcon,Bars } from './NavbarStyles';

const Navbar = () => {
    return (
      <>
        <Nav>
            <NavLink to='/'>Earle's Pizza</NavLink>
            <NavIcon>
              <p>Menu</p>
              <Bars />
            </NavIcon>
        </Nav>
      </>
    )
}

export default Navbar;
