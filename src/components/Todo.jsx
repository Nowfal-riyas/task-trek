import React, { useState } from "react";

const Todo = () => {
  //   const countarr1 = useState(0);
  //   const count = countarr1[0];
  //   const setCount = countarr1[1];

  const [count, setCount] = useState(0);
  const [input, setInput] = useState("");
  const tasks = ["Task 1", "Task 2", "Task 3", "Task 4"];
  const handleClick = () => {
    setCount(count + 1);
  };
  const handleChange = (event) => {
    setInput(event.target.value);
  };

  return (
    <>
      <h1>Task:{count}</h1>
      <input type="text" onChange={handleChange} />
      <button onClick={handleClick} value="Add new task">
        Add Task
      </button>
      <p>Task:{input}</p>
      <ul>
        {tasks.map((task) => (
          <li key={task}>{task}</li>
        ))}
      </ul>
    </>
  );
};

export default Todo;
