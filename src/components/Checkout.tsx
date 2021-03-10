import { Grid, Button } from "@material-ui/core";
import { Clear } from "@material-ui/icons";
import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { StateInterface, ActionsType } from "./dataTypes";

interface Total {
  subtotal: number;
  charges: number;
  total: number;
}

const Checkout = () => {
  const basketData = useSelector((state: StateInterface) => state.BasketData);
  const Dispatch = useDispatch();

  const [total, setTotal] = useState<Total>({
    subtotal: 0,
    charges: 0,
    total: 0,
  });

  useEffect(() => {
    let tot = 0;
    let chr = basketData.length * 50;
    basketData.map((v) => {
      tot += v.price;
    });
    setTotal({ subtotal: tot, charges: chr, total: tot + chr });
  }, [basketData]);

  const delItem = (i: number, id: number) => {
    Dispatch<ActionsType>({
      type: "delItem",
      payload: { indexNumber: i, id: id },
    });
  };
  const clearCart = () => {
    Dispatch<ActionsType>({ type: "delList" });
  };

  return (
    <Grid container className="CHECKOUT_CONTAINER">
      <Grid item className="CHECKOUT_HEADER" lg="auto">
        <div>
          <h1>Checkout Cart</h1>
        </div>
      </Grid>
      <Grid container className="CHECKOUT_BODY">
        {basketData.length > 0 ? (
          <Grid
            item
            className="CHECKOUT_BODY_LEFT"
            xs={12}
            sm={12}
            md={7}
            lg={7}
            xl={7}
          >
            {basketData.map((v, i) => (
              <div key={i}>
                <img src={v.url} alt="shirt_image" />
                <span>
                  <h2>{v.name}</h2>
                  <h3>PKR {v.price}</h3>
                </span>
                <Clear
                  className="CROSS_BTTN"
                  onClick={() => delItem(i, v.id)}
                />
              </div>
            ))}
            <Button className="BTTN BTTN_RED" onClick={clearCart}>
              Clear Cart
            </Button>
          </Grid>
        ) : (
          <div style={{ display: "flex", justifyContent: "center" }}>
            <h1>Cart is Empty</h1>
          </div>
        )}
        <Grid
          item
          className="CHECKOUT_BODY_RIGHT"
          xs={12}
          sm={12}
          md={4}
          lg={4}
          xl={4}
        >
          <div>
            <h1>Billing Process</h1>
            <span>
              <h3>Subtotal</h3>
              <h3>PKR {total.subtotal}</h3>
            </span>
            <span>
              <h3>Charges</h3>
              <h3>PKR {total.charges}</h3>
            </span>
            <span>
              <h3>Total</h3>
              <h3>PKR {total.total}</h3>
            </span>
            <Button className="BTTN">Checkout</Button>
          </div>
        </Grid>
      </Grid>
    </Grid>
  );
};
export default Checkout;
