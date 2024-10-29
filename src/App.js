import React from "react";
import { Route, Switch } from "react-router-dom";
import {
  HashRouter,
  Redirect,
} from "react-router-dom/cjs/react-router-dom.min";
import TaskPage from "./features/tasks/TaskPage";
import TasksPage from "./features/tasks/TasksPage";
import Author from "./features/author/Author";
import { StyledNavLinks } from "./styled";

const App = () => (
  <HashRouter>
    <nav>
      <ul>
        <li>
          <StyledNavLinks activeClassName="active" to="/zadania">
            Zadania
          </StyledNavLinks>
        </li>
        <li>
          <StyledNavLinks activeClassName="active" to="/author">
            O autorze
          </StyledNavLinks>
        </li>
      </ul>
      <Switch>
        <Route path="/zadania/:id">
          <TaskPage />
        </Route>
        <Route path="/zadania">
          <TasksPage />
        </Route>
        <Route path="/author">
          <Author />
        </Route>
        <Route path="/">
          <Redirect to="/zadania" />
        </Route>
      </Switch>
    </nav>
  </HashRouter>
);

export default App;
