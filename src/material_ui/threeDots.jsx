import React, { useEffect, useState } from "react";
import IconButton from "@material-ui/core/IconButton";
import Menu from "@material-ui/core/Menu";
import MenuItem from "@material-ui/core/MenuItem";
import MoreVertIcon from "@material-ui/icons/MoreVert";

export default function ThreeDots(props) {
  const [anchorEl, setAnchorEl] = React.useState(null);
  let [DATA, setDATA] = useState({
    Countries: [{ Country: "" }],
  });
  const open = Boolean(anchorEl);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = (index) => {
    setAnchorEl(null);
  };

  useEffect(() => {
    if (props.coronaData !== undefined) {
      setDATA(props.coronaData);
    }
  }, [props.coronaData]);

  return (
    <div>
      <IconButton
        aria-label="more"
        aria-controls="long-menu"
        aria-haspopup="true"
        onClick={handleClick}
        className={props.className}
      >
        <MoreVertIcon />
      </IconButton>
      <Menu
        id="long-menu"
        anchorEl={anchorEl}
        keepMounted
        open={open}
        onClose={handleClose}
        PaperProps={{
          style: {
            maxHeight: "300px",
            width: "25ch",
          },
        }}
      >
        {DATA.Countries.map((val, ind) => (
          <MenuItem key={ind} onClick={() => handleClose(ind)}>
            {val.Country}
          </MenuItem>
        ))}
      </Menu>
    </div>
  );
}
