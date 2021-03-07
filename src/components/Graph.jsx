import { PinDropSharp } from "@material-ui/icons";
import React from "react";
import { Bar } from "react-chartjs-2";

const tarekh = new Date().getDate();
const mah = new Date().getMonth();
let mahena = undefined;
if (mah == 0) {
  mahena = "January";
} else if (mah == 1) {
  mahena = "Fabuary";
} else if (mah == 2) {
  mahena = "March";
} else if (mah == 3) {
  mahena = "April";
} else if (mah == 4) {
  mahena = "May";
} else if (mah == 5) {
  mahena = "June";
} else if (mah == 6) {
  mahena = "July";
} else if (mah == 7) {
  mahena = "Agust";
} else if (mah == 8) {
  mahena = "September";
} else if (mah == 9) {
  mahena = "October";
} else if (mah == 10) {
  mahena = "Novemebr";
} else {
  mahena = "December";
}

const data1 = {
  labels: [
    tarekh - 9 + " " + mahena,
    tarekh - 8 + " " + mahena,
    tarekh - 7 + " " + mahena,
    tarekh - 6 + " " + mahena,
    tarekh - 5 + " " + mahena,
    tarekh - 4 + " " + mahena,
    tarekh - 3 + " " + mahena,
    tarekh - 2 + " " + mahena,
    tarekh - 1 + " " + mahena,
    tarekh + " " + mahena,
  ],
  datasets: [
    {
      label: "New Cases",
      backgroundColor: "#f13e3e",
      radius: "50px",
      hoverBackgroundColor: "#dc6e6e",
      data: [
        Math.round(Math.random() * 1100000),
        Math.round(Math.random() * 1100000),
        Math.round(Math.random() * 1100000),
        Math.round(Math.random() * 1100000),
        Math.round(Math.random() * 1100000),
        Math.round(Math.random() * 1100000),
        Math.round(Math.random() * 1100000),
        Math.round(Math.random() * 1100000),
        Math.round(Math.random() * 1100000),
        Math.round(Math.random() * 1100000),
      ],
    },
    {
      label: "New Recovered",
      backgroundColor: "#318e1a",
      radius: "50px",
      hoverBackgroundColor: "#30a513",
      data: [
        Math.round(Math.random() * 1100000),
        Math.round(Math.random() * 1100000),
        Math.round(Math.random() * 1100000),
        Math.round(Math.random() * 1100000),
        Math.round(Math.random() * 1100000),
        Math.round(Math.random() * 1100000),
        Math.round(Math.random() * 1100000),
        Math.round(Math.random() * 1100000),
        Math.round(Math.random() * 1100000),
        Math.round(Math.random() * 1100000),
      ],
    },
  ],
};
const data2 = {
  labels: [
    tarekh - 9 + " " + mahena,
    tarekh - 8 + " " + mahena,
    tarekh - 7 + " " + mahena,
    tarekh - 6 + " " + mahena,
    tarekh - 5 + " " + mahena,
    tarekh - 4 + " " + mahena,
    tarekh - 3 + " " + mahena,
    tarekh - 2 + " " + mahena,
    tarekh - 1 + " " + mahena,
    tarekh + " " + mahena,
  ],
  datasets: [
    {
      label: "New Deathes",
      backgroundColor: "#9ea01b",
      radius: "50px",
      hoverBackgroundColor: "#cdd016",
      data: [
        Math.round(Math.random() * 50000),
        Math.round(Math.random() * 50000),
        Math.round(Math.random() * 50000),
        Math.round(Math.random() * 50000),
        Math.round(Math.random() * 50000),
        Math.round(Math.random() * 50000),
        Math.round(Math.random() * 50000),
        Math.round(Math.random() * 50000),
        Math.round(Math.random() * 50000),
        Math.round(Math.random() * 50000),
      ],
    },
  ],
};
const BAR = (props) => {
  return (
    <div>
      <Bar
        data={props.data}
        width={100}
        height={400}
        options={{
          maintainAspectRatio: false,
        }}
      />
    </div>
  );
};

const Graph = () => {
  return (
    <div className="Graph">
      <div class="container-fluid">
        <div className="row indexHead">
          <h1>World Wide Index</h1>
        </div>
        <div class="row">
          <div class="col-12 col-sm-12 col-md-6 col-lg-6 my-2">
            <BAR data={data1} />
          </div>
          <div class="col-12 col-sm-12 col-md-6 col-lg-6 my-2">
            <BAR data={data2} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Graph;
