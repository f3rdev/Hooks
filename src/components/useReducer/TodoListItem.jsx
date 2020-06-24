import React from "react";

const TodoListItem = ({ todo, index, handleToggle, handleDelete }) => {
  return (
    <li
      className="list-group-item"
      key={todo.id}
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
      }}
    >
      <p
        onClick={() => handleToggle(todo.id)}
        className="text-danger"
        style={{
          margin: 0,
          textDecoration: todo.done && "line-through",
          cursor: "pointer",
        }}
      >
        {index + 1}. {todo.desc}
      </p>
      <button onClick={() => handleDelete(todo.id)} className="btn btn-danger">
        Borrar
      </button>
    </li>
  );
};

export default TodoListItem;
