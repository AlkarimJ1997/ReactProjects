import React from 'react';
import {
    SidebarContainer, SidebarIcon, CloseIcon,
    SidebarWrapper, SidebarMenu, SidebarLink,
    SidebarBtnWrapper, SidebarBtn
} from './SidebarStyles';

const Sidebar = ({ isOpen, toggle }) => {
    return (
        <>
            <SidebarContainer isOpen={isOpen} onClick={toggle} >
                <SidebarIcon onClick={toggle}>
                    <CloseIcon />
                </SidebarIcon>
                <SidebarWrapper>
                    <SidebarMenu>
                        <SidebarLink to="about" onClick={toggle}>About</SidebarLink>
                        <SidebarLink to="discover" onClick={toggle}>Discover</SidebarLink>
                        <SidebarLink to="services" onClick={toggle}>Services</SidebarLink>
                        <SidebarLink to="signup" onClick={toggle}>Sign Up</SidebarLink>
                    </SidebarMenu>
                    <SidebarBtnWrapper>
                        <SidebarBtn to="/signin">Sign In</SidebarBtn>
                    </SidebarBtnWrapper>
                </SidebarWrapper>
            </SidebarContainer>
        </>
    )
}

export default Sidebar