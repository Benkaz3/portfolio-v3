import styled, { css } from "styled-components";
import theme from "./theme";
import { Link } from "react-router-dom"

const media = {
  tablet: (...args) => css`
    @media (max-width: 768px) {
      ${css(...args)}
    }
  `,
  mobileM: (...args) => css`
  @media (max-width: 524px) {
    ${css(...args)}
  }
`, 
  laptop: (...args) => css`
    @media (min-width: 1024px) {
      ${css(...args)}
    }
  `
};

export const CardWrapper = styled.div`
  width: 100%;
  padding: 0;
  margin-bottom: 2rem; 
  border-radius: 5px; 
  display: flex; 
  flex-direction: column;
  gap: ${theme.spacing.md};
  align-items: center;
  background-color: ${props => props.theme.colors.backgroundSecondary};
  text-align: center;

  ${media.laptop`
      flex-direction: row; 
      &:nth-child(even) {
        flex-direction: row-reverse; 
      }
    `}
`
export const ProjectInfo = styled.div`
    text-align: left;
    padding: 1em;
`
export const Image = styled.img`
    width: 100%;
    object-fit: contain;
    border-radius: ${props => props.theme.borderRadius.medium};

    ${media.laptop`
      width: 50%; 
    `}
`
export const ProjectName = styled.h3`
  font-weight: ${theme.fontWeight.medium};
    font-size: ${theme.fontSize.font20};
`
export const ProjectDesc = styled.p`
  font-size: ${theme.fontSize.font20};
`
export const Technologies = styled.ul`
  width: 100%;
    margin: auto;
    display: flex;

    justify-content: start; 
    flex-wrap: wrap;
    align-items: center;
    gap: 0.5em;
    padding:1rem 0;
    list-style-type: none;

    & > li {
      display: flex;
    flex-direction: column;
    justify-content: center;
      & > p {
        font-size: ${theme.fontSize.font12};
    text-align: center;
    color: ${theme.colors.primaryText};
    padding: 0.1em 0.7em;
    background-color: ${theme.colors.tagBackground};
    border-radius: ${props => props.theme.borderRadius.nav};
    background: linear-gradient(to right, #f32170, #ff6b08, #cf23cf, #eedd44);
    -webkit-text-fill-color: transparent;
    -webkit-background-clip: text;
    border: 1px solid ${props => props.theme.colors.secondary};
      }
    }
`

export const StyledLink = styled(Link)`
  color: #3d3d3d;
  text-decoration: none;
  position: relative;
  transition: height 0.3s ease, color 0.3s ease, opacity 0.3s ease;

  &:hover {
    color: #ff6b08;
  }

  &:after {
    content: "";
    position: absolute;
    bottom: -2px;
    left: 0;
    width: 100%;
    height: 2px;
    background-color: #ff6b08;
  }
  
  &:hover:after {
    background-color: #3d3d3d;
  }
`
export const LinkContainer = styled.div`
  display: flex; 
  gap: 1rem; 
  padding: 0.5rem 0 1rem 0; 
`

