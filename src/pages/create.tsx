import React, { useState } from "react";
import Lolly from "../components/Lolly";
import Layout from "../components/Layout";
import * as styles from "./create.module.css";
import { Button } from "@material-ui/core";
import { useFormik } from "formik";
import * as yup from "yup";
import { useMutation, gql } from "@apollo/client";
import { navigate } from "@reach/router";

// ==========================================
const SEND_LOLLY = gql`
  mutation(
    $receiver: String!
    $message: String!
    $sender: String!
    $c1: String!
    $c2: String!
    $c3: String!
  ) {
    sendLolly(
      receiver: $receiver
      message: $message
      sender: $sender
      c1: $c1
      c2: $c2
      c3: $c3
    ) {
      receiver
      message
      sender
      c1
      c2
      c3
      url
    }
  }
`;
// ==========================================

const Create = () => {
  const [lolliesColor, setLolliesColor] = useState({
    c1: "#d52358",
    c2: "#e95946",
    c3: "#deaa43",
  });
  const [sendLolly] = useMutation(SEND_LOLLY);
  const bttnREF = React.useRef<HTMLButtonElement>(null);
  //   ========= form validation ================
  const [valInd, setValInd] = useState<boolean>(false);
  const formik = useFormik({
    initialValues: { receiver: "", message: "", sender: "" },
    onSubmit: async (values) => {
      bttnREF.current.innerText = "Freezing...";
      bttnREF.current.setAttribute("disabled", "");
      const res = await sendLolly({
        variables: { ...values, ...lolliesColor },
      });
      await navigate(`/lolly/${res.data.sendLolly.url}`, { replace: true });
    },
    validationSchema: yup.object({
      receiver: yup.string().required("please add reciever name"),
      message: yup.string().required("please enter something!"),
      sender: yup.string().required("please enter your name"),
    }),
  });
  //   ==========================================
  //   =========== functions ====================
  const submitForm = () => {
    setValInd(true);
    formik.submitForm();
  };
  // =========================================
  return (
    <Layout>
      <div className={styles.createBox}>
        <section className={styles.section1}>
          <Lolly
            width="170px"
            height="420px"
            fillTop={lolliesColor.c1}
            fillMiddle={lolliesColor.c2}
            fillBottom={lolliesColor.c3}
            className={styles.lolly}
          />
          <div>
            <label htmlFor="colorPicker1">
              <input
                type="color"
                name="colorPicker1"
                value={lolliesColor.c1}
                onChange={(e) =>
                  setLolliesColor({ ...lolliesColor, c1: e.target.value })
                }
              />
            </label>
            <label htmlFor="colorPicker2">
              <input
                type="color"
                name="colorPicker2"
                value={lolliesColor.c2}
                onChange={(e) =>
                  setLolliesColor({ ...lolliesColor, c2: e.target.value })
                }
              />
            </label>
            <label htmlFor="colorPicker3">
              <input
                type="color"
                name="colorPicker3"
                value={lolliesColor.c3}
                onChange={(e) =>
                  setLolliesColor({ ...lolliesColor, c3: e.target.value })
                }
              />
            </label>
          </div>
        </section>
        <section className={styles.formBox}>
          <div className={styles.labelDIV}>
            <label>
              To
              <input
                type="text"
                name="receiver"
                placeholder="A lolly for"
                value={formik.values.receiver}
                onChange={formik.handleChange}
              />
              <p>{valInd && formik.errors.receiver}</p>
            </label>
            <label>
              Enter something nice
              <textarea
                name="message"
                value={formik.values.message}
                onChange={formik.handleChange}
              />
              <p>{valInd && formik.errors.message}</p>
            </label>
            <label>
              From
              <input
                type="text"
                name="sender"
                placeholder="from your friend"
                value={formik.values.sender}
                onChange={formik.handleChange}
              />
              <p>{valInd && formik.errors.sender}</p>
            </label>
          </div>
          <div className={styles.buttonDIV}>
            <Button className={styles.bttn} onClick={submitForm} ref={bttnREF}>
              Freeze Lolly
            </Button>
          </div>
        </section>
      </div>
    </Layout>
  );
};
export default Create;
