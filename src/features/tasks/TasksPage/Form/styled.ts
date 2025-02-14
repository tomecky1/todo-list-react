import styled, {css} from "styled-components";
import {ButtonHTMLAttributes} from "react";

export const FormStyled = styled.form`
    display: flex;
    justify-content: space-around;
    padding: 20px;
    background: white;
`;

export const Button = styled.button`
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