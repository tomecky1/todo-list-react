import styled, { css } from "styled-components";

export const TasksWrapper = styled.ul`
  list-style: none;
  padding: 0;
  text-align: left;
  transition: 1s;
`;

export const Items = styled.li`
  display: flex;
  justify-content: space-between;
  border: none;
  background-color: #fff;
  flex-wrap: wrap;
  border-bottom: 3px solid #f2f2f2;
  padding: 20px;

  ${({ hidden }) =>
    hidden &&
    css`
      display: none;
    `}
`;

export const Content = styled.span`
  ${({ done }) =>
    done &&
    css`
      text-decoration: line-through;
    `}
`;

export const Button = styled.button`
  border: none;
  color: white;
  width: 40px;
  height: 40px;
  padding: 0;
  transition: background 0.3s;

  ${({ toggleDone }) =>
    toggleDone &&
    css`
      background: hsl(120, 61%, 34%);

      &:hover {
        background: hsl(120, 61%, 40%);
      }
    `}

  ${({ remove }) =>
    remove &&
    css`
      background: hsl(348, 83%, 47%);

      &:hover {
        background: hsl(348, 83%, 50%);
      }
    `}
`;
