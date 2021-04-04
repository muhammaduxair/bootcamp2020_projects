import { Grid } from "@material-ui/core";
import React from "react";
import Layout from "../components/Layout";
import * as styles from "./recipes.module.scss";
import { useStaticQuery, graphql } from "gatsby";
import RecipeCart from "../components/RecipeCart";
import Head from "../components/Head";

const Recipes = () => {
  const data = useStaticQuery(graphql`
    query MyQuery {
      allContentfulRecipesPost(sort: { fields: publishedDate, order: DESC }) {
        nodes {
          title
          slug
          publishedDate(fromNow: true)
          desc
          bannerImage {
            file {
              url
            }
            title
          }
        }
      }
    }
  `);

  return (
    <Layout>
      <Head title="Recipes" />
      <Grid container className={styles.recipesWrapper}>
        <Grid
          item
          lg={12}
          xl={12}
          md={12}
          sm={12}
          xs={12}
          className={styles.header}
        >
          <h1>Recipes</h1>
        </Grid>
        {data.allContentfulRecipesPost.nodes.map((v, i) => (
          <RecipeCart
            key={i}
            imgSrc={v.bannerImage.file.url}
            imgTitle={v.bannerImage.title}
            title={v.title}
            publishDate={v.publishedDate}
            description={v.desc}
            slug={v.slug}
          />
        ))}
      </Grid>
    </Layout>
  );
};

export default Recipes;
