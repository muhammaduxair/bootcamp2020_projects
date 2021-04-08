import { Button } from "@material-ui/core";
import { graphql } from "gatsby";
import React from "react";
import { useQuery, useMutation } from "@apollo/client";
import gql from "graphql-tag";
import Layout from "../components/Layout";
import TextInputField from "../components/TextField";
import * as styles from "./main.module.css";
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";
import Loader from "react-loader-spinner";

const GET_TODO = gql`
  query {
    allTodo {
      ref
      data {
        message
        status
      }
    }
  }
`;
const ADD_TODO = gql`
  mutation addTodo($message: String!) {
    addTodo(message: $message) {
      data {
        message
        status
      }
    }
  }
`;
const UPDATE_STATUS_BY_ID = gql`
  mutation updateStatusByID($id: ID!, $status: Boolean!) {
    updateStatusByID(id: $id, status: $status) {
      ref
      data {
        status
        message
      }
    }
  }
`;
const DEL_TODO = gql`
  mutation deleteByID($id: ID!) {
    deleteByID(id: $id) {
      data {
        message
        status
      }
    }
  }
`;
const UPDATE_MESSAGE_BY_ID = gql`
  mutation updateMessageByID($id: ID!, $message: String!) {
    updateMessageByID(id: $id, message: $message) {
      data {
        message
        status
      }
    }
  }
`;

interface TodoDataList {
  id: string;
  message: string;
  status: boolean;
}
const IndexPage = (props) => {
  const imgList = props.data.allFile.nodes;
  // ========================================
  const [inputValue, setInputValue] = React.useState<string>("");
  const [todoDataList, setTodoDataList] = React.useState<TodoDataList[]>([]);
  const [loadStatus, setLoadStatus] = React.useState<boolean>(false);
  // ========================================

  // ========================================
  const { error, loading, data } = useQuery(GET_TODO);
  const [addTodo] = useMutation(ADD_TODO);
  const [updateStatusByID] = useMutation(UPDATE_STATUS_BY_ID);
  const [updateMessageByID] = useMutation(UPDATE_MESSAGE_BY_ID);
  const [deleteByID] = useMutation(DEL_TODO);
  // =========================================

  React.useEffect(() => {
    let ddd: TodoDataList[] = [];
    data &&
      data.allTodo.map((v) => {
        const id: string = JSON.parse(v.ref)["@ref"].id;
        const msg: string = v.data.message;
        const sts: boolean = v.data.status;
        ddd.push({ id: id, message: msg, status: sts });
      });
    setTodoDataList(ddd);
    setLoadStatus(false);
  }, [data]);

  React.useEffect(() => {
    document.title = "Serverless Todo App";
  }, []);

  // =========================================
  const addTodoFunc = () => {
    if (inputValue) {
      addTodo({
        variables: { message: inputValue },
        refetchQueries: [{ query: GET_TODO }],
      });
      setInputValue("");
      setLoadStatus(true);
    } else {
      alert("Please Enter Something");
    }
  };
  const changeStatus = (id, status) => {
    updateStatusByID({
      variables: { id: id, status: !status },
      refetchQueries: [{ query: GET_TODO }],
    });
    setLoadStatus(true);
  };
  const updateMsg = (id) => {
    const res = prompt("Enter Update Message");
    if (res) {
      updateMessageByID({
        variables: { id: id, message: res },
        refetchQueries: [{ query: GET_TODO }],
      });
      setLoadStatus(true);
    }
  };
  const delTodo = (id) => {
    deleteByID({
      variables: { id: id },
      refetchQueries: [{ query: GET_TODO }],
    });
    setLoadStatus(true);
  };
  // =========================================
  // =========================================
  if (loading) {
    return (
      <Layout>
        <div style={{ display: "flex", justifyContent: "center" }}>
          <Loader
            type="TailSpin"
            color="#000000d2"
            height={150}
            width={150}
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
        <div style={{ display: "flex", justifyContent: "center" }}>
          <h1>Something Wrong Please Reload The Page</h1>
        </div>
      </Layout>
    );
  }
  // ===========================================
  // console.log(todoDataList);
  // ===========================================
  return (
    <Layout>
      <div className={styles.headDIV}>
        <TextInputField
          label="Enter Something"
          handleChange={(e) => setInputValue(e.target.value)}
          value={inputValue}
        />
        <Button
          className={styles.addBtn}
          variant="outlined"
          onClick={addTodoFunc}
        >
          Add Todo
        </Button>
      </div>
      <div className={styles.todoBox}>
        {loadStatus ? (
          <div style={{ display: "flex", justifyContent: "center" }}>
            <Loader
              type="TailSpin"
              color="#000000d2"
              height={150}
              width={150}
              timeout={10000}
            />
          </div>
        ) : todoDataList.length ? (
          todoDataList.map((v, i) => (
            <div
              className={v.status ? styles.todoList : styles.todoListFalse}
              key={i}
            >
              <span>
                <img
                  src={v.status ? imgList[0].publicURL : imgList[3].publicURL}
                  alt={v.status ? "check-mark" : "cross-mark"}
                  title={v.status ? "done" : "undo"}
                  onClick={() => changeStatus(v.id, v.status)}
                />
                <p>{v.message}</p>
              </span>
              <span>
                <img
                  src={imgList[1].publicURL}
                  alt="edit-icon"
                  title="edit"
                  onClick={() => updateMsg(v.id)}
                />
                <img
                  src={imgList[2].publicURL}
                  alt="delete-icon"
                  title="delete"
                  onClick={() => delTodo(v.id)}
                />
              </span>
            </div>
          ))
        ) : (
          <div className={styles.emptyList}>
            <p>Todo List is Empty</p>
          </div>
        )}
      </div>
    </Layout>
  );
};
export default IndexPage;

export const query = graphql`
  query MyQuery {
    allFile {
      nodes {
        publicURL
      }
    }
  }
`;
