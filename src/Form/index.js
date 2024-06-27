import { useState, useRef } from "react";
import styled, { css } from "styled-components";

const Input = styled.input`
  border: 2px solid #f2f2f2;
  width: 84%;
  height: 40px;
`;

const FormStyled = styled.form`
  display: flex;
  justify-content: space-around;
`;

const Button = styled.button`
  border: none;
  background-color: hsl(180, 100%, 25%);
  color: #fff;
  font-weight: 700;
  padding: 6px 8px;
  cursor: pointer;
  transition: 1.5s all;
  height: 40px;

  &:hover {
    transform: scale(1.1);
    background-color: hsl(180, 100%, 35%);
  }

  @media (max-width: 767px) {
    width: 100%;
    display: block;
    margin: 0;
  }

  ${(props) =>
    props.primary &&
    css`
      background: #000;
      color: pink;
    `}
`;

const Form = ({ addNewTask }) => {
  const [newTaskContent, setNewTaskContent] = useState("");
  const inputRef = useRef(null);
  const focusInput = () => {
    inputRef.current.focus();
  };
  const onFormSubmit = (event) => {
    event.preventDefault();
    addNewTask(newTaskContent.trim());
    setNewTaskContent("");
  };

  return (
    <FormStyled onSubmit={onFormSubmit}>
      <Input
        ref={inputRef}
        value={newTaskContent}
        type="text"
        placeholder="Co jest do zrobienia?"
        autoFocus
        onChange={({ target }) => setNewTaskContent(target.value)}
      />
      <Button onClick={focusInput}>Dodaj zadanie</Button>
      <Button primary>Główny pstrokaty przycisk</Button>
    </FormStyled>
  );
};
export default Form;
