import { MouseEventHandler } from "react";
import DoneSVG from "../assets/done.svg";
import TrashSVG from "../assets/trash.svg";
import UndoneSVG from "../assets/cross.svg";

interface TodoInt {
  value: string;
  done: boolean;
  serial?: number;
  onClickDone?: MouseEventHandler;
  onClickDel?: MouseEventHandler;
}

const Todo = ({ value, done, onClickDel, onClickDone, serial }: TodoInt) => {
  return (
    <div className="todoContainer">
      <span>
        <p style={done ? { backgroundColor: "#07061f9c" } : {}}>{serial}</p>
        <p
          style={
            done ? { textDecoration: "line-through", color: "#07061f9c" } : {}
          }
        >
          {value}
        </p>
      </span>
      <span>
        <img
          src={done ? UndoneSVG : DoneSVG}
          alt="done_svg_image"
          onClick={onClickDone}
        />
        <img src={TrashSVG} alt="trash_svg_image" onClick={onClickDel} />
      </span>
    </div>
  );
};
export default Todo;

export const EmptyTodo = () => (
  <div
    className="todoContainer"
    style={{ display: "flex", justifyContent: "center" }}
  >
    <span>
      <p
        style={{
          width: "100%",
          backgroundColor: "transparent",
          color: "#07061f",
        }}
      >
        Task List is Empty!
      </p>
    </span>
  </div>
);
