import React from "react";
import TodoItem from "../TodoItem/TodoItem";
import "./TodoList.css";

function TodoList(props) {
  const { todos, setTodos } = props;
  return (
    <div>
      <ul>
        {todos.map((todo) => {
          return (
            <li className="list-group-item">
              <TodoItem
                todos={todos}
                setTodos={setTodos}
                content={todo.content}
                key={todo.id}
                id={todo.id}
              />
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default TodoList;
