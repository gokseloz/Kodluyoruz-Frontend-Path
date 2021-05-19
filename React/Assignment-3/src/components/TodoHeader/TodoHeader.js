import React from "react";
import "./TodoHeader.css";

const TodoHeader = ({ name }) => {
  return (
    <>
      <h1>{name}</h1>
    </>
  );
};

export default TodoHeader;
