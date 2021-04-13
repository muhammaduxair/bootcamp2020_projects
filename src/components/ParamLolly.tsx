import React from "react";
import { gql, useQuery } from "@apollo/client";
import * as styles from "./paramlolly.module.css";
import Lolly from "./Lolly";
import { Link } from "gatsby";
import Loader from "react-loader-spinner";
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";

const GET_LOLLY = gql`
  query($id: ID!) {
    data_by_id(id: $id) {
      receiver
      message
      sender
      c1
      c2
      c3
    }
  }
`;

const ParamLolly = ({ id }) => {
  const { error, loading, data } = useQuery(GET_LOLLY, {
    variables: { id },
  });

  if (loading) {
    return (
      <div style={{ display: "flex", justifyContent: "center" }}>
        <Loader
          type="ThreeDots"
          color="#fff"
          height={100}
          width={100}
          timeout={20000} //3 secs
        />
      </div>
    );
  }
  if (error) {
    return (
      <h1 style={{ textAlign: "center", color: "#fff", fontSize: 45 }}>
        404 | Page Not Found
      </h1>
    );
  }
  const realdata = data.data_by_id;

  return (
    <div className={styles.createBox}>
      <section className={styles.section1}>
        <Lolly
          width="170px"
          height="420px"
          fillTop={realdata.c1}
          fillMiddle={realdata.c2}
          fillBottom={realdata.c3}
          className={styles.lolly}
        />
      </section>
      <section className={styles.formBox}>
        <div className={styles.urlBox}>
          <p>Share This Link With Your Friend</p>
          <p>{window.location.href}</p>
        </div>
        <div className={styles.dataBox}>
          <p>{realdata.receiver}</p>
          <p>{realdata.message}</p>
          <p>— {realdata.sender}</p>
        </div>
        <p>
          {realdata.sender} made this virtual lollipop for you. You can{" "}
          <Link to="/create">make your own</Link> to send to a friend who
          deserve some sugary treat which won't rot their teeth...
        </p>
      </section>
    </div>
  );
};
export default ParamLolly;
