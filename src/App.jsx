import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./components/Home";
import "./components/css/main.css";
import Product from "./components/Product";
import ProductAbout from "./components/productAbout";
import Error from "./components/Error";
import Cart from "./components/cart";
import { Provider } from "react-redux";
import store from "./components/store/store";
import AOS from "aos";
import "aos/dist/aos.css";
AOS.init({
  duration: 1000,
  easing: "ease",
  once: true,
  offset: 100,
});

function App() {
  return (
    <Provider store={store}>
      <Router>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/products" component={Product} />
          <Route path="/products/:id" component={ProductAbout} />
          <Route path="/cart" component={Cart} />
          <Route path="*" component={Error} />
        </Switch>
      </Router>
    </Provider>
  );
}

export default App;
