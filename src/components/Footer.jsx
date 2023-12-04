import styled from "styled-components";
import { FaLinkedinIn, FaTwitter, FaInstagram, FaGithub } from "react-icons/fa";
import theme from "../styles/theme";

const StyledFooter = styled.div`
  padding: 4rem;
  text-align: center;

  div {
    display: flex;
    gap: ${theme.spacing.md};
    justify-content: center;
  }

  div a {
    font-size: ${theme.fontSize.font24};
    transition: all 0.4s ease-in-out;

    &:hover,
    &:focus {
      cursor: pointer;
      color: #ff6b08;
      scale: 1.1;
    }
  }

  p {
    font-size: ${props => props.theme.fontSize.font12};
  }

  p a {
    color: ${props => props.theme.colors.primary};
  }
  .social-links {
    a {
      color: ${props => props.theme.colors.text};
      &:visited {
        color: #ff6b08;
      }
    }
  }
`;
export default function Footer() {
  return (
    <StyledFooter>
      <div className="social-links">
        <a
          href="https://www.linkedin.com/in/dungtran83/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaLinkedinIn />
        </a>
        <a
          href="https://twitter.com/benkaz3x"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaTwitter />
        </a>
        <a
          href="https://www.instagram.com/phongcanfly/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaInstagram />
        </a>
        <a
          href="https://github.com/Benkaz3"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaGithub />
        </a>
      </div>
      <p>
        Designed in
        <a href="https://www.figma.com/" target="_blank" rel="noreferrer">
          {" "}
          Figma
        </a>
        . Coded in
        <a
          href="https://code.visualstudio.com/"
          target="_blank"
          rel="noreferrer"
        >
          {" "}
          Visual Studio Code
        </a>
        . Built with
        <a href="https://react.dev/" target="_blank" rel="noreferrer">
          {" "}
          React
        </a>
        ,
        <a
          href="https://styled-components.com/"
          target="_blank"
          rel="noreferrer"
        >
          {" "}
          Framer Motion
        </a>
        , and
        <a href="https://www.framer.com/" target="_blank" rel="noreferrer">
          {" "}
          Styled Components
        </a>
        .
      </p>
      <p>© 2023 Dung Tran</p>
    </StyledFooter>
  );
}
