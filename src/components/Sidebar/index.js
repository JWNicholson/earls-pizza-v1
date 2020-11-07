import React from 'react';
import { Icon, SidebarContainer, CloseIcon, SidebarMenu, SidebarLink, SideBtnWrap, SidebarRoute } from './SidebarStyles';

const Sidebar = ({isOpen, toggle}) => {
    return (
      <SidebarContainer isOpen={isOpen} onClick={toggle}>
          <Icon>
          <CloseIcon />
            <SidebarMenu>
                <SidebarLink to="/">Pizza</SidebarLink>
                <SidebarLink to="/">Sandwiches</SidebarLink>
                <SidebarLink to="/">Beverages</SidebarLink>
            </SidebarMenu>
            <SideBtnWrap>
                <SidebarRoute to="/">Place Order</SidebarRoute>
            </SideBtnWrap>
          </Icon>
      </SidebarContainer>
    )
}

export default Sidebar;
