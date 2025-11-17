import { useState } from "react";
import Button from "./Button";

const TodoForm = ({ addTodo, value }) => {
  const [newTodo, setNewTodo] = useState(
    value
      ? value
      : {
          id: Date.now(),
          todo: "",
          date: "",
        }
  );
  const handleChange = ({ target }) => {
    const { id, value } = target;
    setNewTodo((p) => ({ ...p, [id]: value }));
  };
  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        const { todo, date } = newTodo;
        if (todo.trim() && date) {
          addTodo(newTodo);
          setNewTodo({
            id: Date.now(),
            todo: "",
            date: "",
          });
        } else {
          alert("Please add todo to submit");
        }
      }}
    >
      <input
        type="text"
        id="todo"
        onChange={handleChange}
        value={newTodo.todo}
      />
      <input
        type="date"
        id="date"
        onChange={handleChange}
        value={newTodo.date}
      />

      <Button type="submit">Add</Button>
    </form>
  );
};

export default TodoForm;
