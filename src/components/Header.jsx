import styled from "styled-components";
import { Logo } from "../images/logo";
import theme from "../styles/theme";
import { Link, NavLink} from "react-router-dom"

import {
  FaHouse,
  FaTelegram,
  FaRocket,
  FaUser,
  FaFilePdf,
} from "react-icons/fa6";

export default function Header() {
  const activeStyles = {
    color: `#ff6b08`,
  }
  return (
    <header>

      <TopNav>
        <StyledLink to="/">
          <NameLogo>
            <Name>Dũng Trần</Name>
            <Title>Marketer | Web Developer</Title>
          </NameLogo>
        </StyledLink>
        <StyledLink to="/">
          <StyledLogo />
        </StyledLink>
      </TopNav>

      <NavMenu>
      <StyledNavLink 
          to="/"
          style={({ isActive }) => isActive ? activeStyles : null}
          >
            <FaHouse className="icon"/>
            <span className="text">Home</span>
        </StyledNavLink>
        <StyledNavLink 
          to="/works"
          style={({ isActive }) => isActive ? activeStyles : null}
          >
            <FaRocket className="icon"/>
            <span className="text">Works</span>
        </StyledNavLink>
        <StyledNavLink 
          to="/contact"
          style={({ isActive }) => isActive ? activeStyles : null}
          >
            <FaTelegram className="icon"/>
            <span className="text">Contact</span>
        </StyledNavLink>
        <StyledNavLink 
          to="/about"
          style={({ isActive }) => isActive ? activeStyles : null}
          >
            <FaUser className="icon"/>
            <span className="text">About</span>
        </StyledNavLink>
        
        {/* <StyledNavLink 
          to="/assets/resume.pdf"
          target="_blank" 
          rel="noopener noreferrer"
          >
            <FaFilePdf className="icon resume"/>
            <span className="text">Resume</span>
        </StyledNavLink> */}
      </NavMenu>
    </header>
  )
}


const TopNav = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: #f8f8f8;
  opacity: 0.99;
  font-size: 0.8rem;
  color: #333;
  padding: 0.5rem 2rem;
  box-shadow: rgba(0, 0, 0, 0.05) 0px 1px 2px 0px;
  z-index: 1000;
  color: #333;
`;

const NameLogo = styled.div`
  
`
const Name = styled.p`
  font-weight: regular; 
`
const Title = styled.p`
  font-weight: bold; 
`

const StyledLogo = styled(Logo)`
  display: flex;
  align-items: center; 
  justify-content: center;
`

const NavMenu = styled.ul`
  position: fixed;
  bottom: 0;
  left: 0;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: #f8f8f8;
  opacity: 0.99;
  font-size: 0.8rem;
  font-weight: ${theme.fontWeight.regular};
  color: #333;
  list-style: none;
  margin: 0;
  padding: 0.7rem 2rem;
  box-shadow: rgba(0, 0, 0, 0.16) 0px 1px 4px;
  z-index: 1000;
`;
const StyledLink = styled(Link)`
  color: #333;
  display: flex;
`
const StyledNavLink = styled(NavLink)`
  display: flex;
  gap: 0.3rem; 
  flex-direction: column;
  justify-content: center; 
  align-items: center;
  color: #333;
  transition: all 0.2s linear;

  &:hover {
    scale: 1.1;
    cursor: pointer;
    color: #ff6b08;
  }
   .icon{
      font-size: 1.5rem;
   }

   .resume {
      color: #ff6b08;
   }
`
