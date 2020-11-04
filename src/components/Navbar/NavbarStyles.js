import styled from 'styled-components';

export const Nav = styled.nav`
    display:flex;
    justify-content:center;
    font-weight:700;
    background:transparent;
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