import styled from "styled-components";

const StyledHeader = styled.header`
  padding-left: 20px;
`;

const Header = ({ title }) => (
  <StyledHeader>
    <h1>{title}</h1>
  </StyledHeader>
);

export default Header;
