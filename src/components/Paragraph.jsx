import { StyledParagraph } from "../styles/Paragraph.styled"

const Paragraph = ({ children, ...props}) => {
    return <StyledParagraph {...props}>{children}</StyledParagraph>
}
export default Paragraph