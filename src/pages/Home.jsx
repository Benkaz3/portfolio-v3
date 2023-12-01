import {
  HomeContainer,
  StyledHome,
  HeroText,
  IntroText,
  TechStack
} from "../styles/Home.styled";
import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect, useRef } from "react";
import content from "../assets/content";
import {
  FaEnvira,
  FaReact,
  FaJs,
  FaHtml5,
  FaCss3Alt,
  FaNodeJs,
} from "react-icons/fa6";
import { SiExpress } from "react-icons/si";
import Button from "../components/Button/Button";

export default function Home() {
  const skills = ["APPS.", "WEBS.", "STUFF."];
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

  const SkillVariants = {
    hidden: { opacity: 0, y: 10 },
    visible: { opacity: 1, y: -1 },
    exit: { opacity: 0, y: -10 },
    transition: { delay: 0.1, duration: 0.2, ease: "easeInOut" },
  };

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
      <StyledHome>
        <HeroText>
          <h1>
            I build
            <AnimatePresence mode="wait">
              <motion.div
                className="shuffle-text-container"
                key={getCurrentSkill()}
                variants={SkillVariants}
                initial="hidden"
                animate="visible"
                exit="exit"
                transition="transition"
              >
                <p className="hero-text">{getCurrentSkill()}</p>
              </motion.div>
            </AnimatePresence>
          </h1>
        </HeroText>
        <IntroText>
          <p>{content.author.heroPara}</p>
        </IntroText>
        <TechStack>
          {techStack.map(({ icon: Icon, color, name }, index) => (
            <div key={index}>
              <Icon className="tech-logo" style={{ color }} />
              <p>{name}</p>
            </div>
          ))}
        </TechStack>
        <Button to="contact">
          Say hello
        </Button>
      </StyledHome>
    </HomeContainer>
  );
}

{/* <span>&rarr;</span> */}
