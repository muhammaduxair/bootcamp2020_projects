import React from "react";
import * as styles from "../components/default.module.css";
import Layout from "../components/Layout";

const NotFound = () => {
  return (
    <Layout>
      <div className={styles.defaultBox}>
        <h1>404 | Page not Found</h1>
      </div>
    </Layout>
  );
};
export default NotFound;
