import { TechStack } from "../styles/About.styled";
import content from "../assets/content";
import IMAGES from "../images/images";
import Heading from "../components/Heading"
import Container from "../components/Container"
import Paragraph from "../components/Paragraph";
import { ImageContainer, ImageOverlay, Headshot } from "../styles/About.styled";
import {
  FaEnvira,
  FaReact,
  FaJs,
  FaHtml5,
  FaCss3Alt,
  FaNodeJs
} from "react-icons/fa6";
import {  SiExpress } from 'react-icons/si'

export default function About() {
  const techStack = [
    { icon: FaHtml5, color: "tomato", name: 'HTML' },
    { icon: FaCss3Alt, color: "royalblue", name: 'CSS' },
    { icon: FaJs, color: "gold", name: 'JS' },
    { icon: FaNodeJs, color: "limegreen", name: 'Node' },
    { icon: FaReact, color: "steelblue", name: 'React' },
    { icon: SiExpress, color: "lightslategrey", name: 'Express' },
    { icon: FaEnvira, color: "green", name: 'MongoDB' },
  ];
  
  return (
    <Container>
      <Heading level={1}>About me</Heading>
      <Paragraph>{content.author.about.paraOne}</Paragraph>
      <Paragraph>{content.author.about.paraTwo}</Paragraph>
      <Paragraph>{content.author.about.paraThree}</Paragraph>
      <Paragraph>{content.author.about.paraFour}</Paragraph>
      <TechStack>
        {techStack.map(({ icon: Icon, color, name }, index) => (
          <div key={index}>
            <Icon className="tech-logo" style={{ color}} />
            <p>{name}</p>
          </div>
        ))}
      </TechStack>
      <ImageContainer>
        <ImageOverlay>
          <Headshot src={IMAGES.headshot} alt=""/>
        </ImageOverlay>
      </ImageContainer>
    </Container>
  );
}

