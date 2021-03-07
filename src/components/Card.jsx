import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";

const useStyles = makeStyles({
  root: {
    maxWidth: 250,
    margin: "0 auto",
    boxShadow: "0 0 7px rgba(0,0,0,.3)",
    borderRadius: 10,
  },
  media: {
    height: 140,
  },
});

export default function CardComp(props) {
  let [cnd, setCND] = useState(false);
  const history = useHistory();
  const classes = useStyles();

  return (
    <Card className={classes.root}>
      <CardActionArea
        onClick={() => history.push(`/products/${props.clickLearn}`)}
      >
        <CardMedia
          style={{
            background: "rgb(86, 180, 139)",
            background:
              "linear-gradient(90deg,rgba(86, 180, 139, 1) 18%,rgba(0, 212, 255, 1) 53%,rgba(0, 134, 161, 1) 100%)",
            padding: "5px",
            display: "flex",
            justifyContent: "center",
            alignItems: "flex-end",
          }}
          className={classes.media}
          title="Contemplative Reptile"
        >
          <img
            src={props.imgSrc}
            alt="shoes images"
            style={{ width: "100%" }}
          />
        </CardMedia>
        <CardContent>
          <Typography gutterBottom variant="h6" component="h2">
            {props.title}
          </Typography>
          <Typography variant="p" color="textSecondary" component="h3">
            {"PKR " + props.price}
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions
        style={{
          display: "flex",
          justifyContent: "space-around",
        }}
      >
        <Button
          size="small"
          onClick={() => {
            props.clickBttn();
            setCND(true);
          }}
          className="cardsBttn"
          style={cnd === true ? { background: "green" } : {}}
        >
          Add to Cart
        </Button>
        <Button
          onClick={() => history.push(`/products/${props.clickLearn}`)}
          size="small"
          className="cardsBttn"
        >
          Learn More
        </Button>
      </CardActions>
    </Card>
  );
}
