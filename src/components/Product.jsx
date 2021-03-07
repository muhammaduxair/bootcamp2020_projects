import React from "react";
import Navbar from "./Navbar";
import { Grid } from "@material-ui/core";
import CardComp from "./Card";
import ShoeData from "./shoesData.json";
import Footer from "./Footer";
import { useSelector, useDispatch } from "react-redux";

const Product = () => {
  const DATA = useSelector((state) => state.count);
  const Dispatch = useDispatch();
  let arrayShoeData = Object.entries(ShoeData);

  return (
    <div className="Product-container">
      {/* <div className="navArea"> */}
      <Navbar />
      {/* </div> */}
      <div className="product-area">
        <div className="banner">
          <h1 data-aos="zoom-out-down">Product Store</h1>
        </div>
        <Grid container spacing={3} className="gridLayout">
          {arrayShoeData.map((v, i) => {
            return (
              <Grid key={i} item xs={12} sm={6} md={4} lg={3}>
                <CardComp
                  clickBttn={() => {
                    Dispatch({ type: "ADD_COUNT_NUM", payload: DATA + 1 });
                    Dispatch({ type: "ADD_DATA", payload: ShoeData[v[0]] });
                    Dispatch({ type: "ADD_CHARGES", payload: 50 });
                  }}
                  clickLearn={v[0]}
                  imgSrc={v[1].url}
                  title={v[1].name}
                  price={v[1].price}
                />
              </Grid>
            );
          })}
        </Grid>
      </div>
      <Footer />
    </div>
  );
};

export default Product;
