import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  html {
    box-sizing: border-box;
  }

  *,
  *:before,
  *:after {
    box-sizing: inherit;
  }

  body {
    font-family: "Montserrat", sans-serif;
    font-size: 16px;
    line-height: 1.7;
    background-color: #ddd;
  }

  .section__title {
    padding: 20px;
    background: white;
  }

  .section__item--h2 {
    margin: 0;
    padding: 20px;
  }

  .todoList {
    padding: 10px 20px;
    margin-top: 20px;
    background-color: #fff;
  }

  .section__item--h2 {
    display: inline;
    width: 100%;
  }

  .buttons {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    transition: 1s;
  }

  .buttonGetTasks {
    border: 0;
    color: teal;
    background-color: #fff;
    transition: 1.5s all;
  }

  .buttonGetTasks:disabled {
    cursor: not-allowed;
    opacity: 0.5;
  }

  .buttonGetTasks:hover {
    color: hsl(180, 100%, 35%);
  }

  .buttonHideDone {
    border: 0;
    color: teal;
    background-color: #fff;
    transition: 1.5s all;
  }

  .buttonHideDone:hover {
    color: hsl(180, 100%, 35%);
  }

  .buttonDoneAllTasks {
    border: 0;
    color: teal;
    background-color: #fff;
    transition: 1.5s all;
  }

  .buttonDoneAllTasks:hover {
    color: hsl(180, 100%, 35%);
  }

  .list {
    list-style: none;
    padding: 0;
    text-align: start;
    transition: 1s;
    margin-top: 0;
  }

  .list__item {
    display: grid;
    grid-template-columns: auto 1fr auto;
    align-self: start;
    grid-gap: 20px;
    border-bottom: 2px solid #ddd;
    padding: 10px;
    text-align: left;
  }

  .list__item--done {
    text-decoration: line-through;
  }

  .list__item--hidden {
    display: none;
  }

  .buttonRemove {
    width: 40px;
    height: 40px;
    border: none;
    background-color: crimson;
    color: #fff;
    font-weight: 700;
    padding: 10px;
    cursor: pointer;
  }

  .buttonRemove:hover {
    background-color: #ff0000;
  }

  .buttonCheck {
    width: 40px;
    height: 40px;
    border: none;
    background-color: green;
    color: #fff;
    font-weight: 700;
    padding: 10px;
    cursor: pointer;
  }

  .buttonCheck:hover {
    background-color: hsl(120, 100%, 35%);
  }

  @media (max-width: 767px) {
    .form {
      display: flex;
      justify-content: space-between;
      flex-wrap: wrap;
    }

    .form__button {
      margin-top: 30px;
      border: none;
      background-color: teal;
      color: #fff;
      font-weight: 700;
      padding: 10px 20px;
      cursor: pointer;
      width: 100%;
    }

    .form__input {
      border: 2px solid #f2f2f2;
      flex-basis: 100%;
    }

    .buttons {
      display: flex;
      flex-direction: column;
      flex-wrap: wrap;
      transition: 1s;
    }

    .js-buttons {
      text-align: center;
    }
  }

  .loadingText {
    color: rgb(85, 85, 85);
    padding: 10px;
    text-align: center;
    background-color: #fff;
    align-content: center;
  }
`;
