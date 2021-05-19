import React, { useState } from "react";
import TodoList from "./components/TodoList/TodoList";
import "./App.css";
import Form from "./components/Form/Form";
import TodoHeader from "./components/TodoHeader/TodoHeader";

const App = () => {
  const [userInput, setUserInput] = useState("");
  const [todos, setTodos] = useState(
    JSON.parse(localStorage.getItem("wholeTodos")) || []
  );

  const addItem = () => {
    const currentValue = userInput;

    if (userInput !== "") {
      const userInputs = {
        id: Math.random(),
        content: currentValue,
      };

      setTodos([...todos, userInputs]);
      setUserInput("");
      localStorage.setItem("wholeTodos",JSON.stringify([...todos, userInputs]));
    }
  };

  const onInputChange = (e) => {
    const newVal = e.target.value;
    setUserInput(newVal);
  };

  const x = todos.length;

  return (
    <div className="App">
      <TodoHeader name="TodoList" />
      <Form
        userInput={userInput}
        onInputChange={onInputChange}
        addItem={addItem}
      />
      <h5 className="todoCounter">
        {x} task{x <= 1 ? "" : "s"} remaining
      </h5>
      {todos.length > 0 && (
        <div className="list">
          <TodoList todos={todos} setTodos={setTodos} />
        </div>
      )}
    </div>
  );
};

export default App;
