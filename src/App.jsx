import React from "react";
import "./Style/main.css";
import Navbar from "./components/navbar";
import MainScreen from "./components/MainScreen";
import CountingScreen from "./components/CountingScreen";
import Graph from "./components/Graph";
import Footer from "./components/Footer";

const App = () => {
  return (
    <>
      <Navbar />
      <MainScreen />
      <CountingScreen />
      <Graph />
      <Footer />
    </>
  );
};

export default App;
