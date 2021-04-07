import React from "react";
import { Grid } from "@material-ui/core";
import * as styles from "./layout.module.css";

interface LayoutInt {
  children: React.ReactNode;
}
const Layout = ({ children }: LayoutInt) => {
  return (
    <Grid container className={styles.mainBox}>
      <Grid item lg="auto" className={styles.Header}>
        <h1>FaunaDB Crud</h1>
      </Grid>
      <Grid item xl={6} lg={6} md={7} sm={8} xs={11} className={styles.Body}>
        {children}
      </Grid>
    </Grid>
  );
};

export default Layout;
