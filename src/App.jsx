import Home from "./components/Home";
import Page from "./components/Page";
import "./app.css";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import { useState } from "react";

const App = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/:fruit" component={Page} />
      </Switch>
    </BrowserRouter>
  );
};

export default App;
