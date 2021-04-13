import React from "react";
import Layout from "../components/Layout";
import { Router } from "@reach/router";
import Default from "../components/Default";
import ParamLolly from "../components/ParamLolly";

const Lollies = () => {
  return (
    <Layout>
      <Router basepath="/lolly">
        <ParamLolly path="/:id" />
        <Default path="/" />
      </Router>
    </Layout>
  );
};
export default Lollies;
