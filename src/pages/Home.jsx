import styled from "styled-components";
import { breakpoints } from "../styles/theme";
import { AnimatePresence } from "framer-motion";
import { useState, useEffect, useRef } from "react";
import content from "../assets/content";
import { FaEnvira, FaReact, FaJs, FaHtml5, FaCss3Alt, FaNodeJs } from "react-icons/fa6";
import { SiExpress } from "react-icons/si";
import Button from "../components/Button/Button";
import Container from "../components/Container";
import ShuffleText from "../components/ShuffleText";
import TechItem from "../components/TechItem";

export default function Home() {
  const skills = ["APPS.", "WEBS.", "WARES."];
  const [currentIndex, setCurrentIndex] = useState(0);
  const intervalRef = useRef(null);

  const shuffleNextItem = () => {
    setCurrentIndex((prevIndex) => {
      const nextIndex = (prevIndex + 1) % skills.length;
      if (nextIndex === skills.length - 1) {
        clearInterval(intervalRef.current);
      }
      return nextIndex;
    });
  };

  useEffect(() => {
    intervalRef.current = setInterval(shuffleNextItem, 2000);
    return () => clearInterval(intervalRef.current);
  }, []);


  const getCurrentSkill = () => skills[currentIndex];

  const techStack = [
    { icon: FaHtml5, color: "tomato", name: "HTML" },
    { icon: FaCss3Alt, color: "royalblue", name: "CSS" },
    { icon: FaJs, color: "gold", name: "JS" },
    { icon: FaReact, color: "steelblue", name: "React" },
    { icon: FaNodeJs, color: "limegreen", name: "Node" },
    { icon: SiExpress, color: "lightslategrey", name: "Express" },
    { icon: FaEnvira, color: "green", name: "MongoDB" },
  ];

  return (
    <HomeContainer> 
        <HeroText>
            <AnimatePresence mode="wait">
              <ShuffleText text={ getCurrentSkill() } />
            </AnimatePresence>
        </HeroText>
        <IntroText>
          <p>{content.author.heroPara}</p>
        </IntroText>
        <TechStack>
          {techStack.map(({ icon: Icon, color, name }, index) => (
            <TechItem key={index} Icon={Icon} color={color} name={name} />
          ))}
        </TechStack>
        <Button to="contact">Say hello</Button>
    </HomeContainer>
  );
}

// styles
const HomeContainer = styled(Container)`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 90vh;
  margin-top: 70px; 
`

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

const IntroText = styled.p`
  font-size: 2rem;
  margin: 2rem 0;
  color: ${props => props.theme.colors.primaryText};
  text-align: center;

  ${breakpoints.tabletL`
    font-size: 1.5rem;
  `}
  ${breakpoints.mobileL`
    font-size: 1.2rem;
  `}
`;

const TechStack = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 2rem;
  justify-content: center;
  padding: 2rem auto;
  align-items: center;
`;