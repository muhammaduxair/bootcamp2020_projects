import { Grid } from "@material-ui/core";
import React from "react";
import Layout from "../components/Layout";
import Sidebar from "../components/Sidebar";
import * as styles from "./recipeTemp.module.scss";
import { graphql } from "gatsby";
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";
import Head from "../components/Head";

export const query = graphql`
  query($slug: String!) {
    contentfulRecipesPost(slug: { eq: $slug }) {
      title
      publishedDate(formatString: "Do MMMM YYYY")
      bannerImage {
        file {
          url
        }
        title
      }
      richData {
        raw
      }
    }
  }
`;

const Recipe = ({ data }) => {
  const res = data.contentfulRecipesPost;

  return (
    <Layout>
      <Head title={res.title} />
      <Grid container className={styles.recipeTemp}>
        <Grid
          item
          xs={12}
          sm={12}
          md={8}
          lg={8}
          xl={8}
          className={styles.firstGrid}
        >
          <div>
            <h1>{res.title}</h1>
            <p>published on: {res.publishedDate}</p>
          </div>
          <div>
            <img
              src={res.bannerImage.file.url}
              alt={res.bannerImage.title.replace(" ", "-")}
            />
            <div>{documentToReactComponents(JSON.parse(res.richData.raw))}</div>
          </div>
        </Grid>
        <Sidebar />
      </Grid>
    </Layout>
  );
};
export default Recipe;
