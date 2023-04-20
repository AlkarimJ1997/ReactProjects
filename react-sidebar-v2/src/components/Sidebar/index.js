import React, { useState } from 'react';
import SidebarItem from './SidebarItem';
import {
    Nav, NavIcon, BarsIcon,
    SidebarNav, SidebarWrapper, CloseIcon
} from './SidebarStyles';
import { SidebarData } from './Data';
import { IconContext } from 'react-icons';

const Sidebar = () => {
    // States, references
    const [isOpen, setIsOpen] = useState(false);

    return (
        <>
            <IconContext.Provider value={{ color: '#fff' }}>
                <Nav>
                    <NavIcon to="#">
                        <BarsIcon onClick={() => setIsOpen(!isOpen)} />
                    </NavIcon>
                </Nav>
                <SidebarNav isOpen={isOpen}>
                    <SidebarWrapper>
                        <NavIcon to="#">
                            <CloseIcon onClick={() => setIsOpen(!isOpen)} />
                        </NavIcon>
                        {SidebarData.map((item, idx) => {
                            return (
                                <SidebarItem key={idx} item={item} />
                            )
                        })}
                    </SidebarWrapper>
                </SidebarNav>
            </IconContext.Provider>
        </>
    )
}

export default Sidebar