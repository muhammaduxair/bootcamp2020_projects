import { actionType } from "../interfaces/interface";
import { useSelector, useDispatch } from "react-redux";
import { useRef } from "react";

interface compInt {
  keyNum: number;
  title: string;
  id: number;
  message: string;
  edit?: boolean;
  handleEdit?: () => void;
  handleDel?: () => void;
}

const COMP = (props: compInt) => {
  const Disptach = useDispatch();
  const INPREF = useRef<HTMLInputElement>(null);

  return (
    <div className="col col-12 col-sm-6 col-md-6 col-lg-4 col-xl-3 BODY_COLUMN">
      <div className="DIARY_BOX">
        <div className="TITLE_BOX">
          <p>{props.title}</p>
          <p>
            {props.keyNum < 10 ? "0" + props.keyNum.toString() : props.keyNum}
          </p>
        </div>
        <div className="MESSAGE_BOX">
          <input
            type="text"
            value={props.message.toString()}
            readOnly={props.edit ? false : true}
            onChange={(e) =>
              Disptach<actionType>({
                type: "EDIT_VALUE",
                payload: { v: e.target.value, id: props.id },
              })
            }
            ref={INPREF}
          />
          <span>
            <button
              className="btn btn-success"
              onClick={() => {
                INPREF.current?.focus();
                return props.handleEdit && props.handleEdit();
              }}
            >
              {props.edit ? "save" : "edit"}
            </button>
            <button
              className="btn btn-danger"
              onClick={props.handleDel && props.handleDel}
            >
              delete
            </button>
          </span>
        </div>
      </div>
    </div>
  );
};

const Body = () => {
  const state_data = useSelector((state: compInt[]) => state);
  const Dispatch = useDispatch();

  if (!state_data.length) {
    return (
      <div className="row BODY_CONTAINER">
        <h2>Cart is Empty</h2>
      </div>
    );
  }
  return (
    <div className="row BODY_CONTAINER">
      {state_data.map((v, i) => (
        <COMP
          key={i}
          keyNum={i}
          id={v.id}
          title={v.title}
          message={v.message}
          handleEdit={() => {
            Dispatch<actionType>({ type: "CHANGE_EDIT", payload: v.id });
          }}
          handleDel={() =>
            Dispatch<actionType>({ type: "DELETE", payload: v.id })
          }
          edit={v.edit}
        />
      ))}
    </div>
  );
};
export default Body;
