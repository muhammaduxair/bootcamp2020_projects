import TextField from "@material-ui/core/TextField";

interface dateInt {
  error?: boolean;
  helperText?: string;
  handleChange?: any;
  name?: string;
}

export default function DatePicker(props: dateInt) {
  return (
    <TextField
      id="date"
      label="Birthday"
      type="date"
      InputLabelProps={{
        shrink: true,
      }}
      className="DATE_PICKER"
      name={props.name && props.name}
      error={props.error ? true : false}
      helperText={props.helperText && props.helperText}
      onChange={props.handleChange && props.handleChange}
    />
  );
}
