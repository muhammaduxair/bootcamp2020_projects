import React from "react";
import Lolly from "../components/Lolly";
import Color from "../client-config/Color.json";
import Layout from "../components/Layout";
import * as styles from "./home.module.css";
import { Button } from "@material-ui/core";
import { Link } from "gatsby";

const Home = () => {
  return (
    <Layout>
      <div className={styles.homeContainer}>
        {Object.values(Color).map((v, i) => (
          <Lolly
            key={i}
            width="150px"
            height="350px"
            fillTop={v.top}
            fillMiddle={v.middle}
            fillBottom={v.bottom}
          />
        ))}
      </div>
      <div className={styles.buttonDIV}>
        <Link to="/create">
          <Button className={styles.createButton}>Create Your Own Lolly</Button>
        </Link>
      </div>
    </Layout>
  );
};
export default Home;
