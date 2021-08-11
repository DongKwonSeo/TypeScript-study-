import React, { FC, useState } from "react";
import { ChangeEvent } from "react";
import "./App.css";

const App: FC = () => {
  return (
    <div className="App">
      <div className="header">
        <div className="inputContainer">
          <input
            type="text"
            placeholder="Task.."
            name="task"
            onChange={handleChange}
          />
          <input
            type="text"
            name="deadline"
            placeholder="Deadline (in Days)..."
            onChange={handleChange}
          />
        </div>
        <button>Add Task</button>
      </div>
      <div className="todoList"></div>
    </div>
  );
};

export default App;
