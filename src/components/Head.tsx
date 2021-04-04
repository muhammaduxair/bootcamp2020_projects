import React from "react";
import { Helmet } from "react-helmet";

interface headInt {
  title: string;
}

const Head = ({ title }: headInt) => <Helmet title={`${title} | Foodxup`} />;
export default Head;
