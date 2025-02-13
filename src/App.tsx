import React from "react";
import {BrowserRouter, Redirect, Route, Switch} from "react-router-dom";
import TaskPage from "./features/tasks/TaskPage";
import TasksPage from "./features/tasks/TasksPage";
import Author from "./features/author/Author";
import {Navigation, StyledNavLinks} from "./styled";

const App = () => (
    <BrowserRouter basename="/todo-list-react">
        <nav>
            <Navigation>
                <li>
                    <StyledNavLinks activeClassName="active" to="/zadania">
                        Zadania
                    </StyledNavLinks>
                </li>
                <li>
                    <StyledNavLinks activeClassName="active" to="/autor">
                        O autorze
                    </StyledNavLinks>
                </li>
            </Navigation>
            <Switch>
                <Route path="/zadania/:id">
                    <TaskPage/>
                </Route>
                <Route path="/zadania">
                    <TasksPage/>
                </Route>
                <Route path="/autor">
                    <Author/>
                </Route>
                <Route path="/">
                    <Redirect to="/zadania"/>
                </Route>
            </Switch>
        </nav>
    </BrowserRouter>
);

export default App;
