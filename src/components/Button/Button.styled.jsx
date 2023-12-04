import styled, { css } from "styled-components";
import { Link } from "react-router-dom"
import { breakpoints } from "../../styles/theme";


export const StyledButton = styled(Link)`
  background-clip: padding-box;
  background-color: #fa6400;
  border: 1px solid transparent;
  border-radius: .25rem;
  box-shadow: rgba(0, 0, 0, 0.02) 0 1px 3px 0;
  box-sizing: border-box;
  color: #fff;
  cursor: pointer;
  display: inline-flex;
  font-size: 24px;
  font-weight: 400;
  justify-content: center;
  line-height: 1.25;
  min-height: 3rem;
  padding: calc(1rem - 1px) calc(3rem - 1px);
  position: relative;
  text-decoration: none;
  transition: all 250ms;
  user-select: none;
  -webkit-user-select: none;
  touch-action: manipulation;
  vertical-align: baseline;
  margin: 2rem 0; 
  
  &:hover,
  &:focus {
    background-color: #fb8332;
    box-shadow: rgba(0, 0, 0, 0.1) 0 4px 12px;
  }

  &:hover {
    transform: translateY(-1px);
  }

  &:active {
    background-color: #c85000;
    box-shadow: rgba(0, 0, 0, .06) 0 2px 4px;
    transform: translateY(0);
  }

  ${breakpoints.mobileL`
    font-size: 1rem;
    width: 100%; 
  `}
`


