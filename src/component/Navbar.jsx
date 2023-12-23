import React from 'react'
import styled from 'styled-components'
import { useNavigate } from 'react-router-dom';

const NavbarCont = styled.div`
    height: 50px;
    background-color: #003580;
    display: flex;
    justify-content: center;
`;
const NavbarWrapper = styled.div`
    width: 100%;
    max-width: 1024px;
    color: white;
    display: flex;
    align-items: center;
    justify-content: space-between;
`;
const NavbarLogo = styled.span`
    font-weight: 500;
`;
const NavItems = styled.div``;
const NavButton = styled.button`
    margin-left: 20px;
    border: none;
    padding:5px 10px ;
    cursor: pointer;
    color: #003580;
`;

const Navbar = () => {

    const navigate = useNavigate();

  return (
    <NavbarCont>
        <NavbarWrapper>
        <NavbarLogo>
            Ticket Booking App
        </NavbarLogo>
        <NavItems>
    <NavButton onClick={()=>navigate("/signup")}>Register</NavButton>
    <NavButton onClick={()=>navigate("/signin")}>Login</NavButton>
        </NavItems>
        </NavbarWrapper>
    </NavbarCont>
  )
}

export default Navbar