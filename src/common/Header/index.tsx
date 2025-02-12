import styled from "styled-components";
import {ReactNode} from "react";

const StyledHeader = styled.header`
    padding-left: 20px;
`;

interface HeaderProps {
    title: ReactNode
}

const Header = ({title}: HeaderProps) => (
    <StyledHeader>
        <h1>{title}</h1>
    </StyledHeader>
);

export default Header;
