import {StyledContainer} from "./styled";

interface ContainerProps {
    children: any;
}

const Container = ({children}: ContainerProps) => (
    <StyledContainer>{children}</StyledContainer>
);

export default Container;
