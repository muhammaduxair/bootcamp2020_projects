import { Grid, Button } from "@material-ui/core";
import { ArrowRightAlt } from "@material-ui/icons";
import { Link, useStaticQuery, graphql } from "gatsby";
import React from "react";
import Head from "../components/Head";
import Layout from "../components/Layout";
import RecipeCart from "../components/RecipeCart";
import Sidebar from "../components/Sidebar";
import * as styles from "./home.module.scss";

const IndexPage = () => {
  const data = useStaticQuery(graphql`
    query {
      allContentfulRecipesPost(sort: { fields: publishedDate, order: DESC }) {
        nodes {
          title
          slug
          publishedDate(formatString: "Do MMMM YYYY")
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
      <Head title="Home" />
      <Grid container className={styles.mainWrapper}>
        <Grid item xs={12} sm={12} md={6} lg={6} xl={6} className={styles.left}>
          <h1>Delicious Food Recipes</h1>
          <h2>The Best Pakistani Palette</h2>
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nobis
            assumenda, unde inventore mollitia aspernatur eos. Dolorum neque
            quam, repudiandae unde omnis mollitia illo facilis, nisi nulla
            dignissimos, aliquid veritatis quibusdam impedit dolorem libero?
            Numquam quaerat dolorum perferendis, alias delectus qui repellendus
            dolor quis ea modi vitae provident totam odit nemo?
          </p>
          <Link to="/recipes">
            <Button className={styles.aboutBtn}>
              Recipes <ArrowRightAlt className={styles.aboutbtnArrow} />
            </Button>
          </Link>
        </Grid>
        <Grid
          item
          xs={12}
          sm={12}
          md={6}
          lg={6}
          xl={6}
          className={styles.right}
        >
          <img
            src="https://i.pinimg.com/originals/ae/35/6d/ae356d90959e741d73aba36870b35855.jpg"
            alt="food_image"
          />
        </Grid>
      </Grid>
      {/* ======================================= */}
      <Grid container className={styles.bottomArea} justify="space-between">
        <Grid
          item
          xs={12}
          sm={12}
          md={8}
          lg={8}
          xl={8}
          className={styles.first}
        >
          <h1>Delicious Recipes</h1>
          {data.allContentfulRecipesPost.nodes.map((v, i) => (
            <RecipeCart
              key={i}
              imgSrc={v.bannerImage.file.url}
              imgTitle={v.bannerImage.title}
              title={v.title}
              description={v.desc}
              slug={v.slug}
              titleStyle={{ fontSize: 36 }}
            />
          ))}
        </Grid>
        <Sidebar />
      </Grid>
    </Layout>
  );
};

export default IndexPage;
