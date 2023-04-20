import React from 'react';
import {
    SidebarContainer, SidebarIcon, CloseIcon,
    SidebarMenu, SidebarLink, SidebarButtonWrapper,
    SidebarButton
} from './SidebarStyles';

const Sidebar = ({ isOpen, toggle }) => {
    return (
        <SidebarContainer isOpen={isOpen}>
            <SidebarIcon onClick={toggle}>
                <CloseIcon />
            </SidebarIcon>
            <SidebarMenu>
                <SidebarLink to="/">Pizzas</SidebarLink>
                <SidebarLink to="/">Desserts</SidebarLink>
                <SidebarLink to="/">Full Menu</SidebarLink>
            </SidebarMenu>
            <SidebarButtonWrapper>
                <SidebarButton to="/">Order Now</SidebarButton>
            </SidebarButtonWrapper>
        </SidebarContainer>
    )
}

export default Sidebar