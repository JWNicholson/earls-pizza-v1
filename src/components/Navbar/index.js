import React from 'react';
import { Nav, NavLink, NavIcon,Bars } from './NavbarStyles';

const Navbar = ({toggle}) => {
    return (
      <>
        <Nav>
            <NavLink to='/'>Earle's Pizza</NavLink>
            <NavIcon onClick={toggle}>
              <p>Menu</p>
              <Bars />
            </NavIcon>
        </Nav>
      </>
    )
}

export default Navbar;
