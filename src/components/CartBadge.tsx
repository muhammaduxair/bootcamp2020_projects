import React from "react";
import Badge from "@material-ui/core/Badge";
import { Theme, withStyles, createStyles } from "@material-ui/core/styles";
import IconButton from "@material-ui/core/IconButton";
import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";
import { useHistory } from "react-router";

const StyledBadge = withStyles((theme: Theme) =>
  createStyles({
    badge: {
      right: 0,
      top: 10,
      fontSize: 14,
    },
  })
)(Badge);

interface Props {
  count: number;
}

export default function CartBadge({ count }: Props) {
  const HISTORY = useHistory();

  return (
    <IconButton aria-label="cart" onClick={() => HISTORY.push("/checkout")}>
      <StyledBadge badgeContent={count} color="secondary">
        <ShoppingCartIcon className="CART_ICON" />
      </StyledBadge>
    </IconButton>
  );
}
