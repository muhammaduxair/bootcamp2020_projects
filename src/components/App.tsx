import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Checkout from "./Checkout";
import Home from "./Home";
import "./main.css";
import Shirts from "./shirst.json";
import { useDispatch } from "react-redux";
import { useEffect } from "react";
import { ActionsType } from "./dataTypes";

const App = () => {
  const Dispatch = useDispatch();
  useEffect(() => {
    Dispatch<ActionsType>({ type: "add_shirts", payload: Shirts });
  }, []);

  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/checkout" component={Checkout} />
      </Switch>
    </Router>
  );
};
export default App;
