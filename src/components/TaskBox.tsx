import { useEffect, useRef, useState } from "react";
import Button from "./Button";
import Todo, { EmptyTodo } from "./Todo";

interface TaskListInt {
  value: string;
  done: boolean;
}

const TaskBox = () => {
  let [inputValue, setInputValue] = useState<string>("");
  let [taskList, setTaskList] = useState<TaskListInt[]>([]);
  const inpRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    const TodoData = localStorage.getItem("TODO_LIST");
    TodoData && setTaskList(JSON.parse(TodoData));
  }, []);
  useEffect(() => {
    inpRef.current?.focus();
    localStorage.setItem("TODO_LIST", JSON.stringify(taskList));
  }, [taskList]);

  const handleAddTodo = () => {
    setTaskList([...taskList, { done: false, value: inputValue }]);
    setInputValue("");
  };
  const handleDoneTodo = (i: number) => {
    if (taskList[i].done) {
      setTaskList((old) => {
        old[i].done = false;
        return [...old];
      });
    } else {
      setTaskList((old) => {
        old[i].done = true;
        return [...old];
      });
    }
  };
  const handleDelTodo = (i: number) => {
    let filterDelData = taskList.filter((v, ind) => {
      return ind !== i;
    });
    setTaskList(filterDelData);
  };

  return (
    <div className="taskBoxContainer">
      <h1>TaskBox App</h1>
      <input
        type="text"
        placeholder="Type Something!"
        onChange={(e) => setInputValue(e.target.value)}
        value={inputValue}
        ref={inpRef}
        onKeyDown={(e) => e.keyCode === 13 && handleAddTodo()}
      />
      <span>
        <Button className="addBtn" title="Add Task" onClick={handleAddTodo} />
        <Button
          className="clearBtn"
          title="Clear List"
          style={{ marginRight: 0 }}
          onClick={() => setTimeout(() => setTaskList([]), 200)}
        />
      </span>
      <div>
        {taskList.length ? (
          taskList.map((v, i) => (
            <Todo
              key={i}
              value={v.value}
              serial={i}
              done={v.done}
              onClickDone={() => handleDoneTodo(i)}
              onClickDel={() => handleDelTodo(i)}
            />
          ))
        ) : (
          <EmptyTodo />
        )}
      </div>
    </div>
  );
};

export default TaskBox;
