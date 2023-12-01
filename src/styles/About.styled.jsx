import styled from 'styled-components'

export const TechStack = styled.div`
  display: flex;
  flex-wrap: wrap; 
  gap: 2rem;
  justify-content: center;
  overflow: hidden;
  margin: 2rem 0; 
  padding: 2rem auto;
  align-items: center;

  & > div {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center; 
  }
  .tech-logo {
    width: 25px;
    height: auto;
  }
  p {
    font-size: 12px;
  }
`;

export const ImageContainer = styled.div`
  margin: 0 auto; 
  width: 40%;
  height: auto; 
`
export const ImageOverlay = styled.div`

`
export const Headshot = styled.img`
  display: block;
  width: 100%;
  height: auto;
  border-radius: 5px; 
`