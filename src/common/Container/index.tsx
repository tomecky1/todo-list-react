import {StyledContainer} from "./styled";
import {ReactNode} from "react";

interface ContainerProps {
    children: ReactNode;
}

const Container = ({children}: ContainerProps) => (
    <StyledContainer>{children}</StyledContainer>
);

export default Container;
