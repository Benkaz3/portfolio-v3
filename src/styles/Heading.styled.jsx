import styled, { css }from 'styled-components'

const media = {
  mobile: (...args) => css`
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
  }
`
};

export const StyledHeading = styled.h1`
  margin: 0;
  font-size: 3rem; 
  font-weight: bold;
  color: #333;
  background: linear-gradient(to right, #f32170, #ff6b08, #cf23cf, #eedd44);
    -webkit-text-fill-color: transparent;
    -webkit-background-clip: text;

  ${media.mobileL`
    font-size: 2rem; 
  `}

  ${media.mobileS`
    font-size: 1.5rem; 
  `}
`;
export const Heading2 = styled.h2`
    margin: 0;
  font-size: 24px;
  font-weight: bold;
  color: #333;
`

export const Heading3 = styled.h3`
    margin: 0;
  font-size: 18px;
  font-weight: bold;
  color: #333;
`