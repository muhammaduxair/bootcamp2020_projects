import "../css/main.css";
import { Grid } from "@material-ui/core";
import Header from "./Header";
import StepperBox from "./Stepper";

const App = () => {
  return (
    <Grid container>
      <Grid item lg={12} xl={12} sm={12} xs={12} md={12}>
        <Header />
      </Grid>
      <Grid
        item
        lg={12}
        xl={12}
        sm={12}
        xs={12}
        md={12}
        style={{ marginTop: 30 }}
      >
        <StepperBox />
      </Grid>
    </Grid>
  );
};
export default App;
