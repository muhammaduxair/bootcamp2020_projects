import React from "react";
import { Grid } from "@material-ui/core";
import * as styles from "./sidebar.module.scss";
import { FavoriteOutlined } from "@material-ui/icons";
import { useStaticQuery, graphql, Link } from "gatsby";

const Sidebar = () => {
  const data = useStaticQuery(graphql`
    query {
      allContentfulRecipesPost(sort: { fields: publishedDate, order: DESC }) {
        nodes {
          title
          slug
          publishedDate(formatString: "Do MMMM YYYY")
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
    <Grid item xs={12} sm={12} md={4} lg={4} xl={4} className={styles.sideBar}>
      <h1>popular post</h1>
      <div>
        {data.allContentfulRecipesPost.nodes.map((v, i) => (
          <Link to={`/recipes/${v.slug}`} key={i}>
            <div>
              <span>
                <img src={v.bannerImage.file.url} alt={v.bannerImage.title} />
              </span>
              <span>
                <h2>{v.title}</h2>
                <p>{v.publishedDate}</p>
                <span>
                  <FavoriteOutlined className={styles.icon} />
                  <p>5</p>
                </span>
              </span>
            </div>
          </Link>
        ))}
      </div>
      <span>
        <h1>Categories</h1>
        <div>
          <h1>Mutton</h1>
          <h1>Chciken</h1>
          <h1>Beef</h1>
          <h1>Vegetables</h1>
          <h1>Sweets</h1>
          <h1>Biryani</h1>
        </div>
      </span>
    </Grid>
  );
};
export default Sidebar;
