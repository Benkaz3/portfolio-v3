import styled from "styled-components"
import { breakpoints } from "../styles/theme"
import { motion } from "framer-motion"

const ShuffleText = ({ text }) => {
    return (
      <HeroText>
        <h1>I build</h1>
        <ShuffleTextContainer
          key={text}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: -1 }}
          exit={{ opacity: 0, y: -10 }}
          transition={{ delay: 0.1, duration: 0.2, ease: "easeInOut" }}
        >
          <GradientText>{text}</GradientText>
        </ShuffleTextContainer>
      </HeroText>
    )
  }

export default ShuffleText

//Styles
const HeroText = styled.div`
  text-align: center;
  h1 {
    font-size: ${props => props.theme.fontSize.font24};
    margin: 0;

    ${breakpoints.mobileL`
    font-size: 20px;
  `}
  }
`;

const ShuffleTextContainer = styled(motion.div)`
`;

const GradientText = styled.p`
  color: ${props => props.theme.colors.text};
  font-weight: ${props => props.theme.fontWeight.extraBold};
  font-size: 12rem;
  line-height: 0.8; 
  background: linear-gradient(to right, #f32170, #ff6b08, #cf23cf, #eedd44);
  -webkit-text-fill-color: transparent;
  -webkit-background-clip: text;
  transition: height 0.3s ease, color 0.3s ease, opacity 0.3s ease;

  ${breakpoints.tabletL`
    font-size: 8rem;
  `}
  ${breakpoints.mobileL`
    font-size: 5rem;
  `}
  ${breakpoints.mobileS`
    font-size: 4rem;
  `}
`