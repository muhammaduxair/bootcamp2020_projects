import { StateInterface, ActionsType } from "./dataTypes";
import { useSelector, useDispatch } from "react-redux";
import { Grid } from "@material-ui/core";
import CART from "./Cart";
import CartBadge from "./CartBadge";

const Home = () => {
  const cartData = useSelector((state: StateInterface) => state.CartData);
  const basketData = useSelector((state: StateInterface) => state.BasketData);
  const Dispatch = useDispatch();

  return (
    <Grid container className="MAIN_CONTAINER">
      <Grid item lg="auto" className="HEADER_WRAPPER">
        <div>
          <h1>Shopping Basket</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe
            distinctio nihil pariatur harum autem nostrum laudantium placeat!
            Explicabo odio omnis totam beatae.
          </p>
        </div>
      </Grid>
      <Grid container justify="center" className="BODY_WRAPPER">
        {cartData.length > 0 &&
          cartData.map((v, i) => (
            <Grid
              className="CARTS"
              key={i}
              item
              xs={12}
              sm={6}
              md={4}
              lg={3}
              xl={3}
            >
              <div>
                <CART
                  url={v.url}
                  name={v.name}
                  price={v.price}
                  add={v.add}
                  id={v.id}
                  handleClick={() =>
                    Dispatch<ActionsType>({
                      type: "add",
                      payload: i,
                    })
                  }
                />
              </div>
            </Grid>
          ))}
      </Grid>
      <div className="CART_BOX">
        <CartBadge count={basketData.length} />
      </div>
    </Grid>
  );
};
export default Home;
