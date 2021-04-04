import React from "react";
import { withStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";

const CssTextField = withStyles({
  root: {
    "& label.Mui-focused": {
      color: "black",
    },
    "& .MuiInput-underline:after": {
      borderBottomColor: "black",
    },
  },
})(TextField);

interface InputFieldINT {
  label: string;
  rows?: number;
  multiline?: boolean;
  className?: string;
  style?: React.CSSProperties;
}

export default function TextInputField(props: InputFieldINT) {
  return (
    <CssTextField
      id="custom-css-standard-input"
      label={props.label}
      fullWidth
      rows={props.rows && props.rows}
      multiline={props.multiline ? true : false}
      style={props.style}
      className={props.className}
    />
  );
}
