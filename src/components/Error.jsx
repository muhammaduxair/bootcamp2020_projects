import React from "react";
import { useHistory } from "react-router-dom";

const Error = () => {
  const history = useHistory();
  return (
    <div
      style={{
        background: "rgb(86, 180, 139)",
        background:
          "linear-gradient(90deg,rgba(86, 180, 139, 1) 18%,rgba(0, 212, 255, 1) 53%,rgba(0, 134, 161, 1) 100%)",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
        width: "100vw",
        height: "100vh",
      }}
    >
      <h1 style={{ color: "#fff", fontSize: "40px", textAlign: "center" }}>
        404 Page Not Found
      </h1>
      <button
        onClick={() => history.push("/")}
        style={{
          padding: "5px 20px",
          fontSize: "25px",
          background: "#126d60",
          border: "2px solid #fff",
          borderRadius: "10px",
          outline: "none",
          color: "#fff",
          marginTop: "10px",
        }}
      >
        Go to Home
      </button>
    </div>
  );
};

export default Error;
