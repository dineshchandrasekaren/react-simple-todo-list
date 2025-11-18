import { useEffect, useState } from "react";
import Button from "./Button";
const reset = {
  todo: "",
  date: "",
};
const TodoForm = ({ addTodo, value }) => {
  const [newTodo, setNewTodo] = useState(reset);
  useEffect(() => {
    if (value) {
      setNewTodo(value);
    }
  }, [value]);
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
          setNewTodo(reset);
        } else {
          alert("Please add todo to submit");
        }
      }}
    >
      <input
        type="text"
        id="todo"
        placeholder="todo"
        onChange={handleChange}
        value={newTodo.todo}
      />
      <input
        type="date"
        id="date"
        placeholder="date"
        onChange={handleChange}
        value={newTodo.date}
      />

      <Button type="submit">{value ? "Update" : "Add"}</Button>
    </form>
  );
};

export default TodoForm;
