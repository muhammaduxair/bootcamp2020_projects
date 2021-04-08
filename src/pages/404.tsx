import { Button } from "@material-ui/core";
import { Link } from "gatsby";
import React from "react";
import Layout from "../components/Layout";

const NotFound = () => {
  React.useEffect(() => {
    document.title = "Error Page";
  }, []);

  return (
    <Layout>
      <div
        style={{
          display: "flex",
          alignItems: "center",
          flexDirection: "column",
        }}
      >
        <h1>404 Page Not Found</h1>
        <Button
          variant="contained"
          style={{ backgroundColor: "#000000d2", marginTop: 20 }}
        >
          <Link to="/" style={{ textDecoration: "none", color: "#fff" }}>
            Go to Home
          </Link>
        </Button>
      </div>
    </Layout>
  );
};
export default NotFound;
