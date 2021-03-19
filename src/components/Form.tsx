import {
  TextField,
  FormLabel,
  FormControl,
  RadioGroup,
  FormControlLabel,
  Radio,
  Checkbox,
  Button,
} from "@material-ui/core";
import { useState } from "react";
import DatePicker from "./DatePicker";
import { useFormik } from "formik";
import * as yup from "yup";
import { isNullishCoalesce } from "typescript";

interface FieldInt {
  label: string;
  style?: object;
  error?: boolean;
  helperText?: string;
  type?: string;
  name?: string;
  value?: string | number;
  handleChange?: any;
}
const FIELD = (props: FieldInt) => {
  return (
    <TextField
      style={props.style}
      label={props.label}
      error={props.error ? true : false}
      color="primary"
      helperText={props.helperText}
      type={props.type && props.type}
      className="FORM_BOX_TEXT_FIELD"
      name={props.name && props.name}
      value={props.value && props.value}
      onChange={props.handleChange && props.handleChange}
      autoComplete="off"
    />
  );
};

interface SteperInt {
  steperNum: number;
  steps: any[];
  onNext: any;
  onBack: any;
}
interface qualificationInt {
  val: string;
  label: string;
}
// ====================
// ====================
// ====================
export default function FormTextInput({
  steperNum,
  steps,
  onNext,
  onBack,
}: SteperInt) {
  const [qualification] = useState<qualificationInt[]>([
    { val: "matric", label: "Matric" },
    { val: "intermediate", label: "Intermediate" },
    { val: "under-graduate", label: "Under Graduate" },
    { val: "graduate", label: "Graduate" },
    { val: "post-graduate", label: "Post Graduate" },
  ]);
  const [gender] = useState<string[]>(["male", "female", "other"]);
  let [valid, setValid] = useState<boolean>(false);
  // ==========================
  // ==========================
  const formik1 = useFormik({
    initialValues: {
      email: "",
      firstName: "",
      lastName: "",
      dob: "",
    },
    onSubmit: (values) => {
      console.log(values);
      onNext();
      setValid(false);
    },
    validationSchema: yup.object({
      email: yup.string().email().required("Email Adress is Required!"),
      firstName: yup
        .string()
        .min(2, "Too Short!")
        .max(12, "Too Long!")
        .required("Required"),
      lastName: yup
        .string()
        .min(2, "Too Short!")
        .max(12, "Too Long!")
        .required("Required"),
      dob: yup.string().required("This Field is Required!"),
    }),
  });
  const formik2 = useFormik({
    initialValues: { password: "", re_password: "", phone: "", whatsapp: "" },
    onSubmit: (val) => {
      console.log(val);
      onNext();
      setValid(false);
    },
    validationSchema: yup.object({
      password: yup
        .string()
        .min(6, "Too Short! Password")
        .max(16, "Too Long!")
        .required("Password is Must Required!"),
      re_password: yup
        .string()
        .oneOf([yup.ref("password")], "Passwords must match")
        .required("Required!"),
      phone: yup
        .string()
        .min(10, "This Phone Number is Wrong!")
        .max(12, "This Phone Number is Wrong!")
        .required("Required"),
      whatsapp: yup
        .string()
        .min(10, "This Phone Number is Wrong!")
        .max(12, "This Phone Number is Wrong!")
        .required("Required"),
    }),
  });
  const formik3 = useFormik({
    initialValues: {
      qualification: "",
      gender: "",
      description: "",
      agree: false,
    },
    onSubmit: (val) => {
      console.log(val);
      onNext();
      setValid(false);
    },
    validationSchema: yup.object({
      qualification: yup.string().required("Required Field!"),
      gender: yup.string().required("Required Field!"),
      description: yup
        .string()
        .min(56, "Too Short!")
        .max(250, "Too Long!")
        .required("Required!"),
      agree: yup.boolean().oneOf([true], "Field must be checked"),
    }),
  });
  // ==========================
  // ==========================
  if (steperNum === 0) {
    return (
      <>
        <form className="FORM_BOX">
          <span>
            <FIELD
              label="Enter First Name"
              name="firstName"
              value={formik1.values.firstName}
              handleChange={formik1.handleChange}
              helperText={valid ? formik1.errors.firstName : ""}
              error={valid && formik1.errors.firstName ? true : false}
            />
            <FIELD
              label="Enter Last Name"
              name="lastName"
              value={formik1.values.lastName}
              handleChange={formik1.handleChange}
              helperText={valid ? formik1.errors.lastName : ""}
              error={valid && formik1.errors.lastName ? true : false}
            />
          </span>
          <span>
            <FIELD
              label="Enter Email Adress"
              name="email"
              value={formik1.values.email}
              handleChange={formik1.handleChange}
              helperText={valid ? formik1.errors.email : ""}
              error={valid && formik1.errors.email ? true : false}
            />
            <DatePicker
              handleChange={formik1.handleChange}
              error={valid && formik1.errors.dob ? true : false}
              helperText={valid ? formik1.errors.dob : ""}
              name="dob"
            />
          </span>
        </form>
        <div className="BUTTON_CONTROL">
          <Button disabled className="BACK_BUTTON">
            Back
          </Button>
          <Button
            variant="contained"
            color="primary"
            className="NEXT_BUTTON"
            onClick={() => {
              setValid(true);
              formik1.submitForm();
            }}
          >
            {steperNum === steps.length - 1 ? "Finish" : "Next"}
          </Button>
        </div>
      </>
    );
  } else if (steperNum === 1) {
    return (
      <>
        <form className="FORM_BOX">
          <span>
            <FIELD
              label="Enter Password"
              type="password"
              name="password"
              value={formik2.values.password}
              handleChange={formik2.handleChange}
              helperText={valid ? formik2.errors.password : ""}
              error={valid && formik2.errors.password ? true : false}
            />
            <FIELD
              label="Re-enter Password"
              type="password"
              name="re_password"
              value={formik2.values.re_password}
              handleChange={formik2.handleChange}
              helperText={valid ? formik2.errors.re_password : ""}
              error={valid && formik2.errors.re_password ? true : false}
            />
          </span>
          <span>
            <FIELD
              label="Enter Phone No."
              type="number"
              name="phone"
              value={formik2.values.phone}
              handleChange={formik2.handleChange}
              helperText={valid ? formik2.errors.phone : ""}
              error={valid && formik2.errors.phone ? true : false}
            />
            <FIELD
              label="Enter Whatsapp No."
              type="number"
              name="whatsapp"
              value={formik2.values.whatsapp}
              handleChange={formik2.handleChange}
              helperText={valid ? formik2.errors.whatsapp : ""}
              error={valid && formik2.errors.whatsapp ? true : false}
            />
          </span>
        </form>
        <div className="BUTTON_CONTROL">
          <Button
            disabled={false}
            className="BACK_BUTTON"
            onClick={() => onBack()}
          >
            Back
          </Button>
          <Button
            variant="contained"
            color="primary"
            className="NEXT_BUTTON"
            onClick={() => {
              setValid(true);
              formik2.submitForm();
            }}
          >
            {steperNum === steps.length - 1 ? "Finish" : "Next"}
          </Button>
        </div>
      </>
    );
  } else if (steperNum === 2) {
    return (
      <>
        <div className="finalStepBox">
          <div>
            <FormControl component="fieldset" style={{ width: "60%" }}>
              <FormLabel
                component="legend"
                style={{ marginBottom: 5, fontWeight: "bold" }}
              >
                {valid && formik3.errors.qualification
                  ? formik3.errors.qualification
                  : "Select Qualification"}
              </FormLabel>
              <RadioGroup
                aria-label="qualification"
                name="qualification"
                value={formik3.values.qualification}
                onChange={formik3.handleChange}
                style={{
                  display: "flex",
                  flexDirection: "row",
                  flexWrap: "wrap",
                }}
              >
                {qualification.map((v, i) => {
                  return (
                    <FormControlLabel
                      key={i}
                      value={v.val}
                      control={<Radio color="primary" />}
                      label={v.label}
                    />
                  );
                })}
              </RadioGroup>
            </FormControl>
            <FormControl component="fieldset" style={{ width: "40%" }}>
              <FormLabel
                component="legend"
                style={{ marginBottom: 5, fontWeight: "bold" }}
              >
                {valid && formik3.errors.gender
                  ? formik3.errors.gender
                  : "Select Gender"}
              </FormLabel>
              <RadioGroup
                aria-label="gender"
                name="gender"
                value={formik3.values.gender}
                onChange={formik3.handleChange}
                style={{
                  display: "flex",
                  flexDirection: "row",
                  flexWrap: "wrap",
                }}
              >
                {gender.map((v, i) => {
                  return (
                    <FormControlLabel
                      key={i}
                      value={v}
                      control={<Radio color="primary" />}
                      label={v.slice(0, 1).toUpperCase() + v.slice(1)}
                    />
                  );
                })}
              </RadioGroup>
            </FormControl>
          </div>
          <TextField
            id="outlined-multiline-static"
            label="Description (min:56, max:250 letters)"
            multiline
            rows={5}
            variant="outlined"
            className="TEXT_AREA"
            name="description"
            value={formik3.values.description}
            onChange={formik3.handleChange}
            helperText={valid && formik3.errors.description}
            error={valid && formik3.errors.description ? true : false}
          />
          <FormControlLabel
            control={
              <Checkbox
                checked={formik3.values.agree}
                onChange={formik3.handleChange}
                name="agree"
                color="primary"
              />
            }
            label="i understand! and agree to the terms and conditions"
          />
          <p style={{ marginTop: 0, color: "red" }}>
            {valid && formik3.errors.agree ? formik3.errors.agree : ""}
          </p>
        </div>
        <div className="BUTTON_CONTROL">
          <Button
            disabled={false}
            className="BACK_BUTTON"
            onClick={() => onBack()}
          >
            Back
          </Button>
          <Button
            variant="contained"
            color="primary"
            className="NEXT_BUTTON"
            onClick={() => {
              setValid(true);
              formik3.submitForm();
            }}
          >
            {steperNum === steps.length - 1 ? "Finish" : "Next"}
          </Button>
        </div>
      </>
    );
  } else {
    return <h2>Complete</h2>;
  }
}
