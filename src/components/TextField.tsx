import React from "react";
import { withStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";

const CssTextField = withStyles({
  root: {
    "& .MuiFormLabel-root": {
      fontSize: 22,
    },
    "& .MuiInputBase-input": {
      color: "#000000d2",
      fontSize: 25,
    },
    "& label.Mui-focused": {
      color: "#000000d2",
    },
    "& .MuiInput-underline:after": {
      borderBottomColor: "#000000d2",
    },
  },
})(TextField);

interface InputFieldINT {
  label: string;
  className?: string;
  style?: React.CSSProperties;
  handleChange?: (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => void;
  value?: String;
}

export default function TextInputField(props: InputFieldINT) {
  return (
    <CssTextField
      id="custom-css-standard-input"
      label={props.label}
      fullWidth
      style={props.style}
      className={props.className}
      autoComplete="off"
      onChange={props.handleChange && props.handleChange}
      value={props.value && props.value}
    />
  );
}
