import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import { ShirtsInterface } from "./dataTypes";

export default function CART(props: ShirtsInterface) {
  return (
    <Card className="CART_CONTAINER">
      <CardActionArea>
        <img className="CART_IMG" src={props.url} alt="shirt-image" />
        <CardContent style={{ padding: "0 16px" }}>
          <h5 className="CART_TITLE">{props.name}</h5>
          <Typography variant="body2" color="textSecondary" component="p">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab ipsa
            molestias quis aperiam.
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          padding: "15px",
        }}
      >
        <Button
          variant="contained"
          className={props.add ? "CART_BUTTON_TRUE" : "CART_BUTTON_FALSE"}
          onClick={props.handleClick && props.handleClick}
        >
          {props.add ? "remove" : "Add to Cart"}
        </Button>
        <p className="CART_PRICE">PKR {props.price}</p>
      </CardActions>
    </Card>
  );
}
