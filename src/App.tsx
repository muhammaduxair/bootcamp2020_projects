import { useState, useRef, useEffect } from "react";
import "./main.css";

// INTERFACES AREA
interface TrackerData {
  text: string;
  sign: string;
  amount: string;
}

const App = () => {
  const historyBoxRef = useRef<HTMLDivElement>(null);
  const textInputRef = useRef<HTMLInputElement>(null);

  const [DATA, setDATA] = useState<TrackerData[]>([]);
  const [trakingData, setTrackingData] = useState<TrackerData>({
    text: "",
    amount: "",
    sign: "",
  });
  const [yourBalance, setYourBalance] = useState<number>(0);
  const [income, setIncome] = useState<number>(0);
  const [expense, setExpense] = useState<number>(0);

  useEffect(() => {
    const storageData: any = localStorage.getItem("DATA");
    const realData: TrackerData[] = JSON.parse(storageData);
    realData !== null && setDATA(realData);
  }, []);
  useEffect(() => {
    historyBoxRef.current?.scrollTo(0, historyBoxRef.current.scrollHeight);
    let b: number = 0;
    let i: number = 0;
    let e: number = 0;
    DATA.map((v) => {
      const target = Number.parseFloat(v.amount);
      b += target;
      target > 0 ? (i += target) : (e += target);
    });
    setYourBalance(b);
    setIncome(i);
    setExpense(e);
    localStorage.setItem("DATA", JSON.stringify(DATA));
    textInputRef.current?.focus();
  }, [DATA]);

  // functions area
  const amountGetHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    const signChecker: string = event.target.value.slice(0, 1);
    setTrackingData({
      ...trakingData,
      sign: signChecker === "-" ? "-" : "+",
      amount: event.target.value,
    });
  };
  const addingDataHandler = () => {
    if (trakingData.amount !== "" && trakingData.text !== "") {
      setDATA([...DATA, trakingData]);
      setTrackingData({ amount: "", sign: "", text: "" });
    }
  };
  const delHistoryHandler = (index: number) => {
    const filterData = DATA.filter((v, i) => {
      return i !== index ? v : null;
    });
    setDATA(filterData);
  };

  return (
    <div className="main_box">
      <div className="tracker_box">
        <div className="header">
          <h1>Expense Tracker</h1>
        </div>
        <div className="screen">
          <h2>Your Balance</h2>
          <h1>PKR {yourBalance === 0 ? "00" : yourBalance.toString()}</h1>
        </div>
        <div className="detail_screen">
          <div className="income">
            <h2>INCOME</h2>
            <h1>PKR {income === 0 ? "00" : income.toString()}</h1>
          </div>
          <div className="expense">
            <h2>EXPENSE</h2>
            <h1>PKR {expense === 0 ? "00" : expense.toString()}</h1>
          </div>
        </div>
        <div className="History" ref={historyBoxRef}>
          <h1>History</h1>
          <hr />
          <div className="history_box">
            <ul>
              {DATA &&
                DATA.map((v, i) => (
                  <li key={i}>
                    <div
                      className={`del bg-${v.sign === "+" ? "green" : "red"}`}
                      onClick={() => delHistoryHandler(i)}
                    >
                      <img
                        src="https://i.ibb.co/FVFZ6PJ/delete.png"
                        style={{ width: "100%" }}
                      />
                    </div>
                    <div
                      className={`txt br-${v.sign === "+" ? "green" : "red"}`}
                    >
                      <span>{v.text}</span>
                      <span>
                        {v.sign}
                        {v.amount.slice(0, 1) === "-"
                          ? v.amount.slice(1, v.amount.length)
                          : v.amount}
                      </span>
                    </div>
                  </li>
                ))}
            </ul>
          </div>
        </div>
        <div className="Add_trans">
          <h1>Add Transaction</h1>
          <hr />
          <h2>Text:</h2>
          <input
            type="text"
            placeholder="Enter Text"
            required
            onChange={(e) =>
              setTrackingData({ ...trakingData, text: e.target.value })
            }
            value={trakingData.text}
            ref={textInputRef}
          />
          <h3>
            Amount: <span>(please add amount with sign)</span>
          </h3>
          <span>(negative - expense, Positive + income)</span>
          <input
            type="number"
            placeholder="Enter Amount"
            required
            onChange={amountGetHandler}
            value={trakingData.amount}
            onKeyPress={(e) => (e.key === "Enter" ? addingDataHandler() : "")}
          />
        </div>
        <div className="bttn">
          <button onClick={addingDataHandler}>Add Transaction</button>
        </div>
      </div>
    </div>
  );
};

export default App;
