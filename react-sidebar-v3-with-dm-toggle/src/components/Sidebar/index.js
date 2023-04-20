import React, { useState } from 'react';
import { lightTheme, darkTheme } from './Themes';
import {
    Nav, NavHeader, HeaderWrapper,
    ImgWrapper, HeaderImg, HeaderTextWrapper,
    HeaderName, HeaderTitle, ArrowIcon, NavContainer,
    NavMenu, SearchWrapper, IconWrapper, SearchIcon,
    SearchInput, NavList, NavItem,
    NavLink, HomeIcon, NavText,
    BarChartIcon, BellIcon, PieChartIcon,
    HeartIcon, WalletIcon, GearIcon,
    NavBottom, LogoutWrapper, LogoutIcon,
    ModeWrapper, SunMoonWrapper, MoonIcon,
    SunIcon, ModeText, ToggleWrapper,
    ToggleSwitch
} from './SidebarStyles';
import { ThemeProvider } from 'styled-components';

const Sidebar = () => {
    // States, references
    const [theme, setTheme] = useState(lightTheme);
    const [close, setClose] = useState(false);

    // Method to change the theme from light to dark
    const toggleTheme = () => {
        (theme === lightTheme) ? setTheme(darkTheme) : setTheme(lightTheme);
    }

    return (
        <>
            <ThemeProvider theme={theme}>
                <Nav close={close}>
                    <NavHeader>
                        <HeaderWrapper>
                            <ImgWrapper>
                                <HeaderImg src="images/logo.svg" alt="Logo" />
                            </ImgWrapper>
                            <HeaderTextWrapper close={close}>
                                <HeaderName>CodingLab</HeaderName>
                                <HeaderTitle>Web Developer</HeaderTitle>
                            </HeaderTextWrapper>
                        </HeaderWrapper>
                        <ArrowIcon close={close} onClick={() => setClose(!close)} />
                    </NavHeader>
                    {/* Sidebar menu */}
                    <NavContainer>
                        <NavMenu>
                            <SearchWrapper>
                                <IconWrapper><SearchIcon /></IconWrapper>
                                <SearchInput placeholder="Search..." />
                            </SearchWrapper>
                            <NavList>
                                <NavItem>
                                    <NavLink to="/">
                                        <IconWrapper><HomeIcon /></IconWrapper>
                                        <NavText close={close}>Dashboard</NavText>
                                    </NavLink>
                                </NavItem>
                                <NavItem>
                                    <NavLink to="/">
                                        <IconWrapper><BarChartIcon /></IconWrapper>
                                        <NavText close={close}>Revenue</NavText>
                                    </NavLink>
                                </NavItem>
                                <NavItem>
                                    <NavLink to="/">
                                        <IconWrapper><BellIcon /></IconWrapper>
                                        <NavText close={close}>Notifications</NavText>
                                    </NavLink>
                                </NavItem>
                                <NavItem>
                                    <NavLink to="/">
                                        <IconWrapper><PieChartIcon /></IconWrapper>
                                        <NavText close={close}>Analytics</NavText>
                                    </NavLink>
                                </NavItem>
                                <NavItem>
                                    <NavLink to="/">
                                        <IconWrapper><HeartIcon /></IconWrapper>
                                        <NavText close={close}>Favorites</NavText>
                                    </NavLink>
                                </NavItem>
                                <NavItem>
                                    <NavLink to="/">
                                        <IconWrapper><WalletIcon /></IconWrapper>
                                        <NavText close={close}>Wallets</NavText>
                                    </NavLink>
                                </NavItem>
                                <NavItem>
                                    <NavLink to="/">
                                        <IconWrapper><GearIcon /></IconWrapper>
                                        <NavText close={close}>Settings</NavText>
                                    </NavLink>
                                </NavItem>
                            </NavList>
                        </NavMenu>
                        <NavBottom>
                            <LogoutWrapper>
                                <NavLink to="/">
                                    <IconWrapper><LogoutIcon /></IconWrapper>
                                    <NavText close={close}>Logout</NavText>
                                </NavLink>
                            </LogoutWrapper>
                            <ModeWrapper>
                                <SunMoonWrapper>
                                    {theme === lightTheme ? <MoonIcon close={close} /> : <SunIcon close={close} />}
                                </SunMoonWrapper>
                                <ModeText close={close}>
                                    {theme === lightTheme ? "Dark Mode" : "Light Mode"}
                                </ModeText>
                                <ToggleWrapper>
                                    <ToggleSwitch onClick={() => toggleTheme()}>
                                    </ToggleSwitch>
                                </ToggleWrapper>
                            </ModeWrapper>
                        </NavBottom>
                    </NavContainer>
                </Nav>
            </ThemeProvider>
        </>
    )
}

export default Sidebar