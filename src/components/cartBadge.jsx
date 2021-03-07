import React from "react";
import Badge from "@material-ui/core/Badge";
import { withStyles } from "@material-ui/core/styles";
import IconButton from "@material-ui/core/IconButton";
import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";

const StyledBadge = withStyles((theme) => ({
  badge: {
    right: -3,
    top: 13,
    border: `2px solid ${theme.palette.background.paper}`,
    padding: "0 4px",
  },
}))(Badge);

export default function CartBadge(props) {
  return (
    <IconButton
      aria-label="cart"
      className={props.className}
      data-aos={props.data_aos}
    >
      <StyledBadge badgeContent={props.count} color="secondary">
        <ShoppingCartIcon className="cartICON" />
      </StyledBadge>
    </IconButton>
  );
}
