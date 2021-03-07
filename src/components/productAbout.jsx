import React from "react";
import Navbar from "./Navbar";
import { Grid } from "@material-ui/core";
import { useParams } from "react-router-dom";
import ShoeData from "./shoesData.json";
import Footer from "./Footer";
import Error from "./Error";

const ProductAbout = () => {
  const { id } = useParams();
  const data = ShoeData[id];
  if (!data) {
    return <Error />;
  }
  return (
    <div className="Product-about">
      <Navbar />
      <div className="About_Box">
        <Grid container spacing={3} className="aboutProductGridLayout">
          <Grid item xs={12} sm={12} md={4} lg={4} className="firstGrid">
            <img src={data.url} alt="shoe image" />
          </Grid>
          <Grid item xs={12} sm={12} md={8} lg={8}>
            <h1 className="underH1">{data.name}</h1>
            <p className="underP">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus
              velit explicabo deserunt eveniet ad adipisci, fuga accusantium
              officia eum enim fugit molestias, autem aspernatur? Fugiat magni
              sed sint eos exercitationem, repellat deserunt molestiae minima id
              ad reiciendis nemo corrupti deleniti voluptatum eligendi
              consequuntur sequi non perspiciatis! Laudantium vero, possimus a
              optio doloribus consequuntur rerum, consequatur inventore,
              voluptatibus iusto iste. Consectetur id vel vero culpa dicta
              molestias excepturi facere odio dolore! Ad expedita aliquam beatae
              itaque, magnam sed delectus iusto deserunt possimus, doloremque
              totam molestias. Nulla illum ex neque et ipsum consequatur odio
              eius saepe corporis, culpa tempora exercitationem blanditiis
              officiis cumque. Nisi delectus officiis, quo cum odit quam tempore
              dolore modi animi doloribus magni a molestiae quos magnam
              dignissimos minima. Voluptatum accusamus officiis optio et quasi,
              beatae labore eligendi vero ducimus esse quibusdam voluptates
              sequi aut tempore rem! Enim libero ipsa aliquid voluptatum error
              doloremque ipsum tempora. Quae, quibusdam. Eos.
            </p>
          </Grid>
          <Grid item xs={12} sm={6} md={4} lg={4} className="PriceAbout">
            <h1>{data.price}</h1>
          </Grid>
        </Grid>
      </div>
      <div className="aboutFooter">
        <Footer />
      </div>
    </div>
  );
};
export default ProductAbout;
