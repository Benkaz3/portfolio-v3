import { FaExternalLinkAlt, FaGithub } from "react-icons/fa";
import { 
  CardWrapper, 
  Image, 
  ProjectInfo,
  ProjectName,
  ProjectDesc,
  Technologies,
  LinkContainer,
  StyledLink,
 } from "../styles/Works.styled";
import Heading from "../components/Heading";
import Container from "../components/Container"
import { useInView } from "react-intersection-observer";
import content from "../assets/content";
import { useState, useEffect, useRef } from "react";
import styled from "styled-components";


export default function Works() {

  const worksSectionRef = useRef()

  const [featuredProjects, setFeaturedProjects] = useState([]);

  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });

  const cardVariants = {
    hidden: { opacity: 0, y: 70 },
    visible: { opacity: 1, y: 0 },
    transition: { delay: 0.3, ease: "easeOut", type: "linear", duration: 1 },
  };

  useEffect(() => {
    setFeaturedProjects(content.featuredProjects);
  }, []);

  const featureProjectElements = featuredProjects.map((project) => (
    <CardWrapper key={project.id}>
      <Image src={project.image} alt="project screenshot" />
      <ProjectInfo className="project-info">
        <ProjectName>{project.name}</ProjectName>
        <ProjectDesc>{project.desc}</ProjectDesc>
        <Technologies>
          {project.techIcons.map((icon, index) => (
            <li key={index}>
              <p>{icon.text}</p>
            </li>
          ))}
        </Technologies>     
        <LinkContainer>
            {project.externalLinks.map((link, index)=> (
              <StyledLink
                key={index} 
                to={link.link} 
                target="_blank" 
                rel="noopener noreferrer"
              >
                {link.text}
              </StyledLink>
            ))}
        </LinkContainer>
      </ProjectInfo>

    </CardWrapper>
  ));

  return (
    <WorksContainer ref={worksSectionRef}>
        <Heading special={true}>Featured Projects</Heading>
        {featureProjectElements}
    </WorksContainer>
  );
}

const WorksContainer = styled(Container)`
  max-width: 1024px; 
`