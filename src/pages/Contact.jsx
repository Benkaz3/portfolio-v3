import ContactForm from "../components/ContactForm";
import styled from "styled-components";
import theme from "../styles/theme";
import { FaLinkedin, FaGithub } from "react-icons/fa";
import Heading from "../components/Heading";
import Paragraph from "../components/Paragraph";
import Container from "../components/Container";

export default function Contact() {
  return (
    <Container>
      <Heading level={1}>Contact</Heading>
      <Paragraph>Got a question? Or just say hi!</Paragraph>
      <ContactForm />
      <SocialIconContainer>
          <LinkIcon href="#" >
            <FaLinkedin />
          </LinkIcon>
          <LinkIcon href="#" >
            <FaGithub />
          </LinkIcon>
      </SocialIconContainer>
    </Container>
  );
}


const SocialIconContainer = styled.div`
  color: ${theme.colors.primaryText};
  display: flex;
  justify-content: center; 
  gap: ${theme.spacing.md};
  margin-bottom: 2rem; 
`
const LinkIcon = styled.a`
  background-color: none;
  font-size: 1.7rem;
  transition: all 0.4s ease-in-out;
  cursor: pointer;
  color: #333;

  &:hover,
  &:focus {
    color: ${theme.colors.accent};
    scale: 1.2;
  }
`

