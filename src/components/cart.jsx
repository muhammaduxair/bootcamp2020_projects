import React from "react";
import Navbar from "./Navbar";
import { Button, Grid } from "@material-ui/core";
import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";

const Cart = () => {
  const DATA = useSelector((state) => state);
  const Dispatch = useDispatch();
  console.log(DATA);

  useEffect(() => {
    Dispatch({ type: "REMOVE_COUNT", payload: 0 });
  }, []);

  let chargesSum = 0;
  for (let i = 0; i < DATA.charges.length; i++) {
    chargesSum += DATA.charges[i];
  }
  let subtotalSum = 0;
  for (let i = 0; i < DATA.selectData.length; i++) {
    subtotalSum += DATA.selectData[i].price;
  }
  if (DATA.selectData.length !== 0) {
    return (
      <div className="Cart_box">
        <Navbar />
        <div className="content-area">
          <Grid container spacing={3} className="gridLayoutCart">
            <Grid item xs={12} sm={12} md={7} lg={7} className="firstGridCart">
              {DATA.selectData.map((v, i) => {
                return (
                  <div className="listBar" key={i}>
                    <div className="imgBox">
                      <img src={v.url} alt="image" />
                    </div>
                    <div className="name_and_price">
                      <h1>{v.name}</h1>
                      <h2>{"PKR " + v.price}</h2>
                    </div>
                  </div>
                );
              })}
              <Button
                className="clearCart"
                onClick={() => Dispatch({ type: "CLEAR_CART" })}
              >
                Clear Cart
              </Button>
            </Grid>
            <Grid item xs={12} sm={12} md={5} lg={4} className="secondGridCart">
              <div className="calculate_box">
                <h1>Billing Process</h1>
                <hr />
                <div className="subtotal">
                  <h2>Subtotal</h2>
                  <h2>PKR {subtotalSum !== 0 ? subtotalSum : "00"}</h2>
                </div>
                <div className="charges">
                  <h2>Charges</h2>
                  <h2>PKR {chargesSum !== 0 ? chargesSum : "00"}</h2>
                </div>
                <div className="total">
                  <h2>Total</h2>
                  <h2>
                    PKR {subtotalSum !== 0 ? subtotalSum + chargesSum : "00"}
                  </h2>
                </div>
                <hr />
                <Button className="checkoutBtn">Checkout</Button>
              </div>
            </Grid>
          </Grid>
        </div>
      </div>
    );
  } else {
    return (
      <div className="Cart_box">
        <Navbar />
        <div className="content-area">
          <h1>Cart is Empty</h1>
        </div>
      </div>
    );
  }
};

export default Cart;
