import styled from "styled-components";
import {
    BiChevronRight, BiSearch, BiHomeAlt,
    BiBarChartAlt2, BiBell, BiPieChartAlt,
    BiHeart, BiWallet, BiCog,
    BiLogOut, BiMoon, BiSun
} from "react-icons/bi";
import { Link } from "react-router-dom";

export const Nav = styled.nav`
    position: fixed;
    top: 0;
    left: 0;
    width: ${({ close }) => close ? "88px" : "250px"};
    height: 100%;
    padding: 10px 14px;
    background-color: ${({ theme }) => theme.sidebarColor};
    transition: all 0.5s ease;
    z-index: 100;
`;

export const NavHeader = styled.header`
    position: relative;
`;

export const HeaderWrapper = styled.div`
    display: flex;
    align-items: center;
`;

export const ImgWrapper = styled.span`
    display: flex;
    justify-content: center;
    align-items: center;
    min-width: 60px;
    border-radius: 6px;
`;

export const HeaderImg = styled.img`
    width: 40px;
    border-radius: 6px;
`;

export const HeaderTextWrapper = styled.div`
    display: flex;
    flex-direction: column;
    font-size: 17px;
    font-weight: 500;
    white-space: nowrap;
    color: ${({ theme }) => theme.textColor};
    opacity: ${({ close }) => close ? "0" : "1"};
    transition: all 0.3s ease;
`;

export const HeaderName = styled.span`
    font-size: 18px;
    font-weight: 600;
    margin-top: 2px;
`;

export const HeaderTitle = styled.span`
    display: block;
    font-size: 16px;
    margin-top: -2px;
`;

export const ArrowIcon = styled(BiChevronRight)`
    display: flex;
    justify-content: center;
    align-items: center;
    position: absolute;
    top: 50%;
    right: -25px;
    transform: ${({ close }) => close ? "translateY(-50%) rotate(0deg)" : "translateY(-50%) rotate(180deg)"};
    width: 25px;
    height: 25px;
    background-color: ${({ theme }) => theme.primaryColor};
    color: ${({ theme }) => theme.id === "light" ? theme.sidebarColor : theme.textColor};
    border-radius: 50%;
    cursor: pointer;
    transition: all 0.5s ease;
`;

export const NavContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    height: calc(100% - 55px);
    overflow-y: scroll;

    &::-webkit-scrollbar {
        display: none;
    }
`;

export const NavMenu = styled.div`
    margin-top: 40px;
`;

export const SearchWrapper = styled.li`
    display: flex;
    align-items: center;
    height: 50px;
    list-style: none;
    margin-top: 10px;
    background-color: ${({ theme }) => theme.primaryColorLight};
    border-radius: 6px;
    cursor: pointer;
    transition: all 0.5s ease;
`;

export const IconWrapper = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    min-width: 60px;
`;

export const SearchIcon = styled(BiSearch)`
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100%;
    border-radius: 6px;
    font-size: 20px;
    color: ${({ theme }) => theme.textColor};
    transition: all 0.3s ease;
`;

export const SearchInput = styled.input`
    width: 100%;
    height: 100%;
    background-color: ${({ theme }) => theme.primaryColorLight};
    color: ${({ theme }) => theme.textColor};
    outline: none;
    border: none;
    border-radius: 6px;
    font-size: 17px;
    font-weight: 500;
    transition: all 0.5s ease;
`;

export const NavList = styled.ul``;

export const NavItem = styled.li`
    display: flex;
    align-items: center;
    height: 50px;
    list-style: none;
    margin-top: 10px;
`;

export const HomeIcon = styled(BiHomeAlt)`
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100%;
    min-width: 20px;
    border-radius: 6px;
    color: ${({ theme }) => theme.textColor};
    transition: all 0.3s ease;
`;

export const NavText = styled.span`
    font-size: 17px;
    font-weight: 500;
    white-space: nowrap;
    color: ${({ theme }) => theme.textColor};
    opacity: ${({ close }) => close ? "0" : "1"};
    transition: all 0.3s ease;
`;

export const BarChartIcon = styled(BiBarChartAlt2)`
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100%;
    min-width: 20px;
    border-radius: 6px;
    color: ${({ theme }) => theme.textColor};
    transition: all 0.3s ease;
`;

export const BellIcon = styled(BiBell)`
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100%;
    min-width: 20px;
    border-radius: 6px;
    color: ${({ theme }) => theme.textColor};
    transition: all 0.3s ease;
`;

export const PieChartIcon = styled(BiPieChartAlt)`
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100%;
    min-width: 20px;
    border-radius: 6px;
    color: ${({ theme }) => theme.textColor};
    transition: all 0.3s ease;
`;

export const HeartIcon = styled(BiHeart)`
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100%;
    min-width: 20px;
    border-radius: 6px;
    color: ${({ theme }) => theme.textColor};
    transition: all 0.3s ease;
`;

export const WalletIcon = styled(BiWallet)`
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100%;
    min-width: 20px;
    border-radius: 6px;
    color: ${({ theme }) => theme.textColor};
    transition: all 0.3s ease;
`;

export const GearIcon = styled(BiCog)`
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100%;
    min-width: 20px;
    border-radius: 6px;
    color: ${({ theme }) => theme.textColor};
    transition: all 0.3s ease;
`;

export const NavBottom = styled.div``;

export const LogoutWrapper = styled.li`
    display: flex;
    align-items: center;
    height: 50px;
    list-style: none;
    margin-top: 10px;
`;

export const LogoutIcon = styled(BiLogOut)`
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100%;
    min-width: 20px;
    border-radius: 6px;
    color: ${({ theme }) => theme.textColor};
    transition: all 0.3s ease;
`;

export const ModeWrapper = styled.li`
    display: flex;
    align-items: center;
    height: 50px;
    list-style: none;
    margin-top: 10px;
    background-color: ${({ theme }) => theme.primaryColorLight};
    border-radius: 6px;
    position: relative;
    transition: all 0.5s ease;
`;

export const SunMoonWrapper = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 60px;
    height: 50px;
`;

export const MoonIcon = styled(BiMoon)`
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100%;
    min-width: 20px;
    border-radius: 6px;
    color: ${({ theme }) => theme.textColor};
    opacity: ${({ close }) => close ? "0" : "1"};
    transition: all 0.3s ease;
    position: absolute;
`;

export const SunIcon = styled(BiSun)`
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100%;
    min-width: 20px;
    border-radius: 6px;
    color: ${({ theme }) => theme.textColor};
    opacity: ${({ close }) => close ? "0" : "1"};
    transition: all 0.3s ease;
    position: absolute;
`;

export const ModeText = styled.span`
    font-size: 17px;
    font-weight: 500;
    white-space: nowrap;
    color: ${({ theme }) => theme.textColor};
    opacity: ${({ close }) => close ? "0" : "1"};
    transition: all 0.3s ease;
`;

export const ToggleWrapper = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100%;
    min-width: 60px;
    position: absolute;
    right: 0;
    border-radius: 6px;
    cursor: pointer;
`;

export const ToggleSwitch = styled.span`
    position: relative;
    width: 40px;
    height: 22px;
    background-color: ${({ theme }) => theme.toggleColor};
    border-radius: 25px;
    transition: all 0.5s ease;

    &::before {
        content: "";
        position: absolute;
        top: 50%;
        left: ${({ theme }) => theme.id === "light" ? "5px" : "20px"};
        transform: translateY(-50%);
        width: 15px;
        height: 15px;
        background-color: ${({ theme }) => theme.sidebarColor};
        border-radius: 50%;
        transition: all 0.4s ease;
    }
`;

export const NavLink = styled(Link)`
    display: flex;
    align-items: center;
    width: 100%;
    height: 100%;
    background-color: transparent;
    list-style: none;
    text-decoration: none;
    border-radius: 6px;
    transition: all 0.3s ease;

    &:hover {
        background-color: ${({ theme }) => theme.primaryColor};

        ${SearchIcon}, 
        ${HomeIcon}, 
        ${BarChartIcon}, 
        ${BellIcon}, 
        ${PieChartIcon}, 
        ${HeartIcon}, 
        ${WalletIcon}, 
        ${GearIcon},
        ${LogoutIcon},
        ${NavText},
        ${ModeText} {
            color: ${({ theme }) => theme.id === "light" ? theme.sidebarColor : theme.textColor};
        }
    }
`;