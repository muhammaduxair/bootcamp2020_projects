import React, { useEffect, useReducer, useState } from "react";
import ThreeDots from "../material_ui/threeDots";
import { MainReducer, INITIAL_DATA } from "../Reducer";

const CountingScreen = () => {
  const [state, dispatch] = useReducer(MainReducer, INITIAL_DATA);
  const [worldWideData, setWorldWideData] = useState({});

  useEffect(() => {
    async function fetchApi() {
      const res = await fetch("https://api.covid19api.com/summary");
      const data = await res.json();
      dispatch({ type: "ADD", payload: data });
      setWorldWideData(data.Global);
    }
    fetchApi();
  }, []);

  return (
    <div className="CountingScreen">
      <div class="container-fluid">
        <div class="row">
          <div class="col HEADER">
            <h1>WORLD WIDE DATA</h1>
            <div className="threeDots">
              <ThreeDots className="moreVert" coronaData={state} />
            </div>
          </div>
        </div>
        <div class="row">
          {Object.entries(worldWideData).map((val, ind) => {
            return (
              <div className="col-12 col-sm-12 col-md-4 col-lg-4" key={ind}>
                <div className={`renderBoxes renderBoxes${ind}`}>
                  <h1>{val[1]}</h1>
                  <p>{val[0]}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};
export default CountingScreen;
