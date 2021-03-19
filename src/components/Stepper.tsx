import React from "react";
import { makeStyles, Theme, createStyles } from "@material-ui/core/styles";
import Stepper from "@material-ui/core/Stepper";
import Step from "@material-ui/core/Step";
import StepLabel from "@material-ui/core/StepLabel";
import Button from "@material-ui/core/Button";
import FormTextInput from "./Form";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      width: "100%",
    },
    instructions: {
      marginTop: theme.spacing(1),
      marginBottom: theme.spacing(1),
    },
  })
);

function getSteps() {
  return ["Personal Info", "Account Setup", "Final Step"];
}

export default function StepperBox() {
  const classes = useStyles();
  const [activeStep, setActiveStep] = React.useState(0);
  const steps = getSteps();

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const handleReset = () => {
    setActiveStep(0);
  };

  return (
    <div className={classes.root}>
      <Stepper activeStep={activeStep} alternativeLabel>
        {steps.map((label) => (
          <Step key={label}>
            <StepLabel>{label}</StepLabel>
          </Step>
        ))}
      </Stepper>
      <div style={{ boxShadow: "2px 2px 10px rgba(0,0,0,.2)", padding: 20 }}>
        {activeStep === steps.length ? (
          <div className="FINISH_FORM">
            <h2>Your Form Has Been Successfully Submited!</h2>
            <Button
              className="FINISH_BTTN"
              onClick={handleReset}
              variant="outlined"
              color="primary"
            >
              Go To Home
            </Button>
          </div>
        ) : (
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            <FormTextInput
              steperNum={activeStep}
              steps={steps}
              onNext={handleNext}
              onBack={handleBack}
            />
          </div>
        )}
      </div>
    </div>
  );
}
