import styled from 'styled-components';
import { NavLink as Link } from 'react-router-dom';
import { FaPizzaSlice } from 'react-icons/fa';

export const Nav = styled.nav`
    display:flex;
    justify-content:center;
    font-weight:700;
    background:blue;
    height:80px;
`;

export const NavLink = styled(Link)`
    display:flex;
    color:#f8f8ff;
    align-items: center;
    font-size 2rem;
    text-decoration:none;
    cursor:pointer;

    @media screen and (max-width:411px){
        position:absolute;
        top:10px;
        left:25px;
    }
`;

export const NavIcon = styled.div`
    display:block;
    position:absolute;
    otp:0;
    right:0;
    cursor:pointer;
    color:#f8f8ff;

    p {
        transform: translate(-175%, 100%);
        font-weight:bold;
    }
`;

export const Bars = styled(FaPizzaSlice)`
    font-size:2rem;
    transform: translate(-50%, -15%);
`;