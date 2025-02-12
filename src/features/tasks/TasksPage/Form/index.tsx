import {nanoid} from "@reduxjs/toolkit";
import React, {ButtonHTMLAttributes, FormEventHandler, useRef, useState} from "react";
import {useDispatch} from "react-redux";
import {addTask} from "../../tasksSlice";
import styled, {css} from "styled-components";
import {Input} from "../../Input";

const FormStyled = styled.form`
    display: flex;
    justify-content: space-around;
    padding: 20px;
    background: white;
`;

const Button = styled.button`
    border: none;
    background-color: hsl(180, 100%, 25%);
    color: #fff;
    font-size: small;
    font-weight: 700;
    padding: 6px 8px;
    cursor: pointer;
    transition: 1.5s all;

    &:hover {
        transform: scale(1.1);
        background-color: hsl(180, 100%, 35%);
    }

    @media (max-width: 767px) {
        width: 100%;
        display: block;
        margin: 0;
    }

    ${(props: { primary?: boolean } & ButtonHTMLAttributes<HTMLButtonElement>) =>
            props.primary &&
            css`
                background: #000;
                color: pink;
            `}
`;

const Form = () => {
    const [newTaskContent, setNewTaskContent] = useState("");
    const inputRef = useRef<HTMLInputElement>(null);
    const focusInput = () => {
        inputRef.current!.focus();
    };

    const dispatch = useDispatch();

    const onFormSubmit: FormEventHandler<HTMLFormElement> = (event) => {
        event.preventDefault();

        dispatch(
            addTask({
                content: newTaskContent.trim(),
                done: false,
                id: nanoid(),
            })
        );

        setNewTaskContent("");
        inputRef.current!.focus();
    };

    return (
        <FormStyled onSubmit={onFormSubmit}>
            <Input
                ref={inputRef}
                value={newTaskContent}
                type="text"
                placeholder="Co jest do zrobienia?"
                autoFocus
                required
                onChange={({target}) => setNewTaskContent(target.value)}
            />
            <Button onClick={focusInput}>Dodaj zadanie</Button>
        </FormStyled>
    );
};
export default Form;
