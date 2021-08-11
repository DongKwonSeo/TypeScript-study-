import React, { FC, useState } from "react";
import { ChangeEvent } from "react";
import "./App.css";
import TodoTask from "./components/TodoTask";
import { ITask } from "./interfaces";

const App: FC = () => {
  const [task, setTask] = useState<string>("");
  const [deadline, setDeadline] = useState<number>(0);
  const [todoList, setTodolist] = useState<ITask[]>([]);

  const handleChange = (e: ChangeEvent<HTMLInputElement>): void => {
    if (e.target.name === "task") {
      setTask(e.target.value);
    } else {
      setDeadline(Number(e.target.value));
    }
  };
  const addTask = (): void => {
    const newTask = { taskName: task, deadline };
    setTodolist([...todoList, newTask]);
    setTask("");
    setDeadline(0);
  };

  const completeTask = (taskNameTodelete: string): void => {
    setTodolist(
      todoList.filter((task) => {
        return task.taskName != taskNameTodelete;
      })
    );
  };

  return (
    <div className="App">
      <div className="header">
        <div className="inputContainer">
          <input
            type="text"
            placeholder="Task.."
            name="task"
            value={task}
            onChange={handleChange}
          />
          <input
            type="number"
            name="deadline"
            value={deadline}
            placeholder="Deadline (in Days)..."
            onChange={handleChange}
          />
        </div>
        <button onClick={addTask}>Add Task</button>
      </div>
      <div className="todoList">
        {todoList.map((task: ITask, key: number) => {
          return <TodoTask key={key} task={task} completeTask={completeTask} />;
        })}
      </div>
    </div>
  );
};

export default App;
