import {nanoid} from "@reduxjs/toolkit";
import React, {FormEventHandler, useRef, useState} from "react";
import {addTask} from "../../tasksSlice";
import {Input} from "../../Input";
import {Button, FormStyled} from "./styled";
import {useAppDispatch} from "../../../../hooks";


const Form = () => {
    const [newTaskContent, setNewTaskContent] = useState("");
    const inputRef = useRef<HTMLInputElement>(null);
    const focusInput = () => {
        inputRef.current!.focus();
    };

    const dispatch = useAppDispatch();

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
