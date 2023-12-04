import styled from "styled-components"
import { breakpoints } from "../styles/theme";

const TechItem = ({ Icon, color, name }) => (
    <TechItemContainer>
      <TechIcon>
        <Icon style={{ color }} />
      </TechIcon>
      <p>{name}</p>
    </TechItemContainer>
  );

export default TechItem

//styles
const TechItemContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  p {
    font-size: 1rem;

    ${breakpoints.mobileL`
      font-size: 0.9rem;
    `}
    ${breakpoints.mobileS`
      font-size: 0.8rem;
    `}
  }
`;

const TechIcon = styled.div`
  font-size: 2rem; 

  ${breakpoints.mobileL`
    font-size: 1.5rem;
  `}
 
`;
