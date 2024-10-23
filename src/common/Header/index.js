import styled from "styled-components";

const StyledHeader = styled.header`
  padding-left: 20px;
`;

const Header = () => (
  <StyledHeader>
    <h1>Lista zadań do zrobienia</h1>
  </StyledHeader>
);

export default Header;
