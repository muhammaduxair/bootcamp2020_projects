import React from "react";
import { Button } from "@material-ui/core";

const BUTTON = (props) => {
  return (
    <Button
      style={
        props.active === true
          ? { color: "#fff", backgroundColor: "rgb(233, 59, 59)" }
          : {}
      }
      id="MATERIAL_BUTTON"
      fullWidth
      onClick={props.onClick}
    >
      {props.text}
    </Button>
  );
};

export default BUTTON;
