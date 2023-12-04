import { createGlobalStyle } from 'styled-components';
import { normalize } from 'styled-normalize';

const GlobalStyle = createGlobalStyle`
  ${normalize}

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  html {
    font-size: ${props => props.theme.fontSize.font16};
    scroll-behavior: smooth;
  }


  body {
    font-family: ${props => props.theme.fontRoboto};
    font-size: ${props =>  props.theme.fontSize.font16}; 
    font-weight: ${props => props.theme.fontWeight.regular};
    line-height: ${props => props.theme.lineHeight.default};
    color: ${props => props.theme.colors.text};
    background-color: ${props => props.theme.colors.backgroundPrimary};
  }

  h1, h2, h3, h4, h5, h6, button {
    font-family: inherit;
  }

  a {
    text-decoration: none; 
  }

  li {
    list-style: none; 
  }
`;

export default GlobalStyle;