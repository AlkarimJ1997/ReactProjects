import React, { useState } from 'react';
import {
    SidebarLink, SubMenuWrapper, SubMenuSpan,
    DropdownLink
} from './SidebarItemStyles';

const SidebarItem = ({ item }) => {
    // States, references
    const [isOpen, setIsOpen] = useState(false);

    // Method to toggle submenu dropdown
    const toggle = () => setIsOpen(!isOpen);

    return (
        <>
            <SidebarLink to={item.path} onClick={item.subMenu && toggle}>
                <SubMenuWrapper>
                    {item.icon}
                    <SubMenuSpan>{item.title}</SubMenuSpan>
                </SubMenuWrapper>
                <SubMenuWrapper>
                    {item.subMenu && isOpen ? item.iconOpened : item.subMenu ? item.iconClosed : null}
                </SubMenuWrapper>
            </SidebarLink>
            {isOpen && item.subMenu.map((item, idx) => {
                return (
                    <DropdownLink key={idx} to={item.path}>
                        {item.icon}
                        <SubMenuSpan>{item.title}</SubMenuSpan>
                    </DropdownLink>
                )
            })}
        </>
    )
}

export default SidebarItem