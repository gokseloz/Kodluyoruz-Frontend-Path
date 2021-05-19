import React from "react";
import "./TodoItem.css";

function TodoItem(props) {
  const { content, todos, setTodos, id, key } = props;

  const lineThrough = (e) => {
    e.target.classList.toggle("lineThrough");
  };

  const removeItem = (e) => {
    console.log(e);
    let newTodos = todos.filter((todo) => todo.id !== e);
    setTodos(newTodos);
    localStorage.setItem("wholeTodos", JSON.stringify(newTodos));
  };

  return (
    <>
      <div className="todoItem" key={key}>
        <div onClick={lineThrough}>{content}</div>
        <button className="btn btn-danger" onClick={() => removeItem(id)}>
          Delete
        </button>
      </div>
    </>
  );
}

export default TodoItem;
