import React, { useEffect, useRef, useState } from "react";
import { useQuery, useMutation } from "@apollo/client";
import graphql from "graphql-tag";
import { TextField, Button } from "@material-ui/core";
import Layout from "../components/Layout";
import * as styles from "./main.module.css";
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";
import Loader from "react-loader-spinner";

const GET_DATA = graphql`
  query {
    allData {
      ref
      data {
        data
      }
    }
  }
`;
const ADD_DATA = graphql`
  mutation addData($data: String!) {
    addData(data: $data) {
      data {
        data
      }
    }
  }
`;
const UPDATE_DATA = graphql`
  mutation updateDataByID($id: ID!, $data: String!) {
    updateDataByID(id: $id, data: $data) {
      data {
        data
      }
    }
  }
`;
const DEL_DATA = graphql`
  mutation deleteByID($id: ID!) {
    deleteByID(id: $id) {
      data {
        data
      }
    }
  }
`;

const IndexPage = () => {
  const [crudData, setCrudData] = useState([]);
  const [newStatus, setNewStatus] = useState<boolean>(true);
  const [getInput, setGetInput] = useState<string>("");
  const { loading, error, data } = useQuery(GET_DATA);
  const [addData] = useMutation(ADD_DATA);
  const [updateDataByID] = useMutation(UPDATE_DATA);
  const [deleteByID] = useMutation(DEL_DATA);

  useEffect(() => {
    document.title = "Fauna CRUD";
  }, []);

  useEffect(() => {
    const realdata =
      data &&
      data.allData.map((v) => ({
        ref: JSON.parse(v.ref),
        data: v.data.data,
      }));
    realdata && setCrudData(realdata);
  }, [data]);
  //
  useEffect(() => {
    setNewStatus(true);
  }, [crudData]);

  // =============================================
  // function for mutation
  // =============================================
  const pushData = () => {
    addData({
      variables: {
        data: getInput,
      },
      refetchQueries: [{ query: GET_DATA }],
    });
    setGetInput("");
    setNewStatus(false);
  };
  const updateData = (id) => {
    let getNewData = prompt("Enter Update Data");
    if (getNewData) {
      updateDataByID({
        variables: {
          id: id["@ref"].id,
          data: getNewData,
        },
        refetchQueries: [{ query: GET_DATA }],
      });
      setNewStatus(false);
    } else {
      return "";
    }
  };
  const delData = (id) => {
    deleteByID({
      variables: {
        id: id["@ref"].id,
      },
      refetchQueries: [{ query: GET_DATA }],
    });
    setNewStatus(false);
  };
  // ============================================

  if (loading) {
    return (
      <Layout>
        <div
          style={{ width: "100%", display: "flex", justifyContent: "center" }}
        >
          <Loader
            type="TailSpin"
            color="#00BFFF"
            height={100}
            width={100}
            timeout={10000}
          />
        </div>
      </Layout>
    );
  }
  if (error) {
    console.log(error);
    return (
      <Layout>
        <div
          style={{ width: "100%", display: "flex", justifyContent: "center" }}
        >
          <h1 style={{ color: "#fff" }}>Something Worng! Please Reload</h1>
        </div>
      </Layout>
    );
  }
  return (
    <Layout>
      <div className={styles.inputField}>
        <TextField
          id="filled-secondary"
          label="Add Message"
          variant="filled"
          color="secondary"
          fullWidth
          className={styles.input}
          onChange={(e) => setGetInput(e.target.value)}
          value={getInput}
        />
        <div>
          <Button
            variant="contained"
            color="secondary"
            className={styles.Bttn}
            onClick={pushData}
          >
            +
          </Button>
        </div>
      </div>
      <div className={styles.List}>
        {newStatus ? (
          crudData.length ? (
            crudData.map((v, i) => {
              return (
                <div className={styles.ListBox} key={i}>
                  <p>{v.data}</p>
                  <div>
                    <Button
                      className={styles.upd}
                      onClick={() => updateData(v.ref)}
                    >
                      update
                    </Button>
                    <Button
                      className={styles.del}
                      onClick={() => delData(v.ref)}
                    >
                      delete
                    </Button>
                  </div>
                </div>
              );
            })
          ) : (
            <div className={styles.ListBox}>
              <h2 style={{ color: "#fff", textAlign: "center" }}>No Data</h2>
            </div>
          )
        ) : (
          <div
            style={{
              width: "100%",
              display: "flex",
              justifyContent: "center",
              paddingTop: 30,
            }}
          >
            <Loader
              type="TailSpin"
              color="#00BFFF"
              height={100}
              width={100}
              timeout={20000}
            />
          </div>
        )}
      </div>
    </Layout>
  );
};

export default IndexPage;
