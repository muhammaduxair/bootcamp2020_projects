import { Button, Grid } from "@material-ui/core";
import React from "react";
import Head from "../components/Head";
import Layout from "../components/Layout";
import TextInputField from "../components/TextField";
import * as styles from "./contact.module.scss";

const Contact = () => (
  <Layout>
    <Head title="Contact" />
    <Grid container className={styles.mainContactPage}>
      <Grid item xs={12} sm={12} md={6} lg={6} xl={6} className={styles.left}>
        <h1>Contact Now</h1>
        <form>
          <TextInputField
            label="Enter Your Full Name"
            className={styles.textField}
          />
          <TextInputField
            label="Enter Email adress"
            className={styles.textField}
          />
          <TextInputField
            label="Enter Message"
            rows={6}
            multiline={true}
            className={styles.textField}
          />
          <Button variant="outlined" className={styles.bttn}>
            Submit
          </Button>
        </form>
      </Grid>
      <Grid item xs={12} sm={12} md={6} lg={6} xl={6} className={styles.right}>
        <div>
          <h1>Contact Details</h1>
          <p>fax: 021-12345678</p>
          <p>phone: 021-12345678</p>
          <span>
            <p>Adress:</p>
            <p>Plot #1 New Street New Plaza DHA Karachi.</p>
          </span>
        </div>
      </Grid>
    </Grid>
  </Layout>
);

export default Contact;
