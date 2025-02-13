import styled from "styled-components";
import { NavLink } from "react-router-dom";

export const StyledNavLinks = styled(NavLink)`
  text-decoration: none;
  color: white;
  &.active {
    color: white;
    font-weight: bold;
  }
`;

export const Navigation = styled.nav`
  display: flex;
  justify-content: center;
  gap: 10px;
  list-style: none;
  background-color: teal;
  color: white;
  padding: 18px;
`;
