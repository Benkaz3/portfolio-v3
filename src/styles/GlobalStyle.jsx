import { createGlobalStyle } from 'styled-components';
import theme from './theme';
import { normalize } from 'styled-normalize';

const GlobalStyle = createGlobalStyle`
  ${normalize}

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  html {
    font-size: ${theme.fontSize.font16};
    scroll-behavior: smooth;
  }


  body {
    font-family: ${theme.fontRoboto};
    font-size: 16px; 
    font-weight: ${theme.fontWeight.regular};
    line-height: ${theme.lineHeight.default};
    color: ${theme.colors.primaryText};
    background-color: ${theme.colors.primaryBackground};
  }

  h1, h2, h3, h4, h5, h6, button {
    font-family: ${theme.fontRoboto};
  }

  a {
    text-decoration: none; 
  }

  li {
    list-style: none; 
  }
`;

export default GlobalStyle;