import styled, { css } from "styled-components";
import theme from "./theme";
import Container from "../components/Container"

const media = {
  tablet: (...args) => css`
    @media (max-width: 768px) {
      ${css(...args)}
    }
  `,
  mobileL: (...args) => css`
    @media (max-width: 425px) {
      ${css(...args)}
    }
  `,
  mobileM: (...args) => css`
  @media (max-width: 375px) {
    ${css(...args)}
  }
  `,
  mobileS: (...args) => css`
  @media (max-width: 320px) {
    ${css(...args)}
  }`
};

export const HomeContainer = styled(Container)`
  display: flex;
  justify-content: center;
  align-items: center; 
  height: 90vh; 

  ${media.mobileL`
  margin: 0;
  margin-top: 2rem; 
  `}
  ${media.mobileM`
  padding: 0;
  `}
`
export const StyledHome = styled.div`
  width: 100%;
  height: auto; 
  justify-content: center;
  display: flex; 
  flex-direction: column;
`;

export const HeroText = styled.div`
  text-align: center;

  h1 {
    font-size: 2rem;
    /* font-size: 1.7rem; */
    margin-bottom: 1rem;
    color: ${theme.colors.text};

    ${media.tablet`
      font-size: 2rem;
    `}
    ${media.mobileL`
      font-size: 1.7rem;
    `}
    ${media.mobileS`
      font-size: 1.5rem; 
    `}
  }

  .shuffle-text-container .hero-text {
    color: ${theme.colors.hero};
    padding-bottom: none;
    font-weight: ${theme.fontWeight.extraBold};
    font-size: 12rem;
    line-height: 0.85;
    /* gradient text */
    background: linear-gradient(to right, #f32170, #ff6b08, #cf23cf, #eedd44);
    -webkit-text-fill-color: transparent;
    -webkit-background-clip: text;
    transition: height 0.3s ease, color 0.3s ease, opacity 0.3s ease;

    ${media.tablet`
      font-size: 8rem;
    `}
    ${media.mobileL`
      font-size: 5rem;
    `}
  }
`;
export const IntroText = styled.p`
  font-size: 2rem;
  margin-bottom: 2rem;
  color: ${theme.colors.text};
  text-align: center;

  ${media.tablet`
    font-size: 1.5rem;
  `}
  ${media.mobileM`
    font-size: 1.2rem;
  `}
  ${media.mobileL`
    font-size: 1.2rem;
  `}
  ${media.mobileS`
    font-size: 1rem;
  `}
`;


export const TechStack = styled.div`
  display: flex;
  flex-wrap: wrap; 
  gap: 2rem;
  justify-content: center;
  padding: 2rem auto;
  align-items: center;

  & > div {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center; 
  }
  .tech-logo {
    width: 2rem;
    height: auto;

    ${media.tablet`
      width: 2.5rem;
    `}
    ${media.mobileL`
      width: 2rem;
    `}
    ${media.mobileS`
      width: 1.5rem;
    `}
  }
  p {
    font-size: 1rem;

    ${media.tablet`
      font-size: 1rem;
    `}
    ${media.mobileL`
      font-size: 0.8rem;
    `}
    ${media.mobileS`
      font-size: 0.7rem;
    `}
  }
`;
