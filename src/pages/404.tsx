import React from "react";
import { Link } from "gatsby";
import Layout from "../components/Layout";
import * as styles from "./error.module.scss";
import Head from "../components/Head";

const NotFound = () => (
  <Layout>
    <Head title="Page Not Found" />
    <div className={styles.error}>
      <h1>Ops! 404 Page Not Found</h1>
      <p>
        Something Went Wrong Please Go to <Link to="/">Home</Link>
      </p>
    </div>
  </Layout>
);

export default NotFound;
