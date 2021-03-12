import { useEffect, useRef, useState } from "react";
import { useDispatch } from "react-redux";
import { dataInter, actionType } from "../interfaces/interface";

const FormComp = () => {
  const [data, setData] = useState<dataInter>({
    title: "",
    message: "",
    id: 0,
    edit: false,
  });
  const Dispatch = useDispatch();
  const inputRef = useRef<HTMLInputElement>(null);

  const addDATA = () => {
    if (!data.title || !data.message) {
      alert("Please Fill Data");
    } else {
      Dispatch<actionType>({ type: "ADD", payload: data });
      setData({ ...data, title: "", message: "" });
      inputRef.current?.focus();
    }
  };

  useEffect(() => {
    inputRef.current?.focus();
  }, []);

  return (
    <>
      <h1>Add Diary</h1>
      <form className="row g-3 needs-validation">
        <div>
          <label form="inputEmail4" className="form-label">
            Enter Title
          </label>
          <input
            type="text"
            id="inputEmail4"
            onChange={(e) => setData({ ...data, title: e.target.value })}
            value={data.title}
            ref={inputRef}
          />
        </div>
        <div>
          <label form="exampleFormControlTextarea1" className="form-label">
            Enter Message
          </label>
          <textarea
            id="exampleFormControlTextarea1"
            rows={3}
            style={{
              resize: "none",
              width: "100%",
              height: 140,
            }}
            onChange={(e) => setData({ ...data, message: e.target.value })}
            value={data.message}
          ></textarea>
        </div>
        <div>
          <button type="button" className="btn btn-danger" onClick={addDATA}>
            Add Diary
          </button>
        </div>
      </form>
    </>
  );
};

export default FormComp;
