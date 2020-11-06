import React from 'react';
import { Icon, SidebarContainer, CloseIcon, SidebarMenu, SidebarLink, SideBtnWrap, SidebarRoute } from './SidebarStyles';

const Sidebar = ({isOpen, toggle}) => {
    return (
      <SidebarContainer isOpen={isOpen} onClick={toggle}>
          <Icon>
          <CloseIcon />
            <SidebarMenu>
                <SidebarLink to="/">Pizza</SidebarLink>
                <SidebarLink to="/">Sides</SidebarLink>
                <SidebarLink to="/">Full Menu</SidebarLink>
            </SidebarMenu>
            <SideBtnWrap>
                <SidebarRoute to="/">Place Order</SidebarRoute>
            </SideBtnWrap>
          </Icon>
      </SidebarContainer>
    )
}

export default Sidebar;
