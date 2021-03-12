import "../css/main.css";
import "../css/bootstrap.min.css";
import Header from "./Header";
import Body from "./Body";
import { useSelector, useDispatch } from "react-redux";
import { actionType, dataInter } from "../interfaces/interface";
import { useEffect } from "react";

const App = () => {
  const STATE = useSelector((state: dataInter[]) => state);
  const Dispatch = useDispatch();

  useEffect(() => {
    const Data = localStorage.getItem("DATA");
    if (Data) {
      Dispatch<actionType>({ type: "ADD_LOCAL", payload: JSON.parse(Data) });
    }
  }, []);
  useEffect(() => {
    localStorage.setItem("DATA", JSON.stringify(STATE));
  }, [STATE]);

  return (
    <div className="container-fluid MAIN_CONTAINER">
      <Header />
      <Body />
    </div>
  );
};
export default App;
