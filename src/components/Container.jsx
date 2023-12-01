import { StyledContainer } from "../styles/Container.styled"

const Container = ({ children, ...props}) => {
    return <StyledContainer { ...props}>{children}</StyledContainer>
}

export default Container