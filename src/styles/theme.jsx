import { css } from "styled-components"
const theme = {
    colors: {
        primary: '#ff6b08',
        secondary: `#b7b7b7`,
        text: `#333`,
        backgroundPrimary: `#F0F0F0FF`,
        backgroundSecondary: `#e9e9e9`,
        accent: `#333333`,

    },
    fontRoboto: `'Roboto', san-serif`,
    fontSize: {
        font12: '12px',
        font14: '14px',
        font16: '16px',
        font18: '18px',
        font20: '20px',
        font24: '24px',
        font28: '28px',
        font42: '41px',
        font48: '48px',
        font96: '96px',
        font12r: '12rem',
    },

    fontWeight: {
        regular: '400',
        medium: '500',
        bold: '700',
        extraBold: '900',
    },

    lineHeight: {
        default: '1.7',
        heading: '1.2',
        headingHero: '0.85',
    },

    letterSpacing: {
        wide: '0.025em',
        wider: '0.05em'
    },

    spacing: {
      sm: '0.5em',
      md: '1em',
      lg: '2em',
      xl: '4em',
      xxl: '6em'
    },
  
    borderRadius: {
      medium: '6px',
      small: '4px',
      nav: '50px'
    }, 
  
    breakpoints: {
      mobileS: `max-width: 330px`,
      mobileM: `max-width: 400px`,
      mobileL: `max-width: 480px`,
      tabletS: `max-width: 600px`,
      tabletL: `max-width: 768px`,
      desktopXS: `max-width: 900px`,
      desktopS: `max-width: 1080px`,
      desktopM: `max-width: 1200px`,
      desktopL: `max-width: 1400px`,
    },
    
    zIndex: {
      header: 100,
      modal: 200,
      overlay: 150,
    },

    gradientText: {
      background: 'linear-gradient(to right, #f32170, #ff6b08, #cf23cf, #eedd44)',
      WebkitTextFillColor: 'transparent',
      WebkitBackgroundClip: 'text',
      transition: 'height 0.3s ease, color 0.3s ease, opacity 0.3s ease',
    },

    boxShadow: {
      navBar: '',
      card: '',
    }
  };
  
export default theme;

// Utility function to generate media queries
export const breakpoints = Object.keys(theme.breakpoints).reduce((acc, label) => {
  acc[label] = (...args) => css`
    @media screen and (${theme.breakpoints[label]}) {
      ${css(...args)};
    }
  `;
  return acc;
}, {});