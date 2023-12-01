import { StyledHeading, Heading2, Heading3 } from '../styles/Heading.styled'
const Heading = ({ level, children, ...props }) => {
 if (level === 2) {
    return <Heading2 {...props}>{children}</Heading2>;
  } else if (level === 3) {
    return <Heading3 {...props}>{children}</Heading3>;
  } else {
    return <StyledHeading {...props}>{children}</StyledHeading>;
  }
  };
  
  export default Heading