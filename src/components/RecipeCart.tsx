import React from "react";
import { Grid, Button } from "@material-ui/core";
import { Link } from "gatsby";
import * as styles from "./recipeCart.module.scss";

interface RecipeCartInt {
  imgSrc?: string;
  imgTitle: string;
  title?: string;
  publishDate?: string;
  description?: string;
  slug?: string;
  titleStyle?: React.CSSProperties;
}

const RecipeCart = (props: RecipeCartInt) => {
  return (
    <Grid
      item
      xs={12}
      sm={12}
      md={6}
      lg={6}
      xl={6}
      className={styles.recipeBox}
    >
      <section>
        <img src={props.imgSrc} alt={props.imgTitle} />
        <div>
          <div>
            <h1 style={props.titleStyle}>{props.title}</h1>
            <h2>{props.publishDate}</h2>
          </div>
          <p>{props.description}</p>
          <Link to={`/recipes/${props.slug}`}>
            <Button className={styles.bttn}>Read More</Button>
          </Link>
        </div>
      </section>
    </Grid>
  );
};

export default RecipeCart;
