import { Grid } from "@material-ui/core";
import React from "react";
import { Link } from "gatsby";

const Layout = ({ children }) => {
  React.useEffect(() => {
    document.title = "Virtual Lolly For Everyone";
  }, []);

  return (
    <Grid container className="mainContainer">
      <Grid
        item
        xl={7}
        lg={7}
        md={7}
        sm={10}
        xs={12}
        className="LayoutContainer"
      >
        <div>
          <Link to="/">virtual lollypop</Link>
          <p>lollies for everyone</p>
        </div>
        <div>{children}</div>
        <div className="footer">
          <p>
            Virtual Lollipop for Everyone Built and Hosted in{" "}
            <a href="https://www.netlify.com/" target="_">
              Netlify
            </a>{" "}
            and{" "}
            <a href="https://www.gatsbyjs.com/" target="_">
              GatsbyJS
            </a>{" "}
            by{" "}
            <a href="https://github.com/muhammaduxair" target="_">
              Muhammad Uzair
            </a>
          </p>
        </div>
      </Grid>
    </Grid>
  );
};
export default Layout;
