import React from "react";
import useForm from "../../hooks/useForm";

const TodoAdd = ({ handleAddTodo }) => {
  const [{ description }, handleInputChange, reset] = useForm({
    description: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();

    if (description.trim().length <= 1) {
      return;
    }

    const newTodo = {
      id: new Date().getTime(),
      desc: description,
      done: false,
    };

    handleAddTodo(newTodo);
    reset();
  };
  return (
    <>
      <h4>Agregar tarea</h4>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="description"
          placeholder="aprender..."
          autoComplete="off"
          className="form-control"
          value={description}
          onChange={handleInputChange}
        />
        <button type="submit" className="btn btn-success btn-block mt-2">
          Agregar
        </button>
      </form>
    </>
  );
};

export default TodoAdd;
