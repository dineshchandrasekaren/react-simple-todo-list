import { useParams } from "react-router-dom";
import TodoForm from "../components/TodoForm";
import { useState } from "react";
import TodoList from "../components/TodoList";

const Todo = () => {
  const [todos, setTodos] = useState([]);
  const [editTodo, setEditTodo] = useState({});
  const { category } = useParams();
  return (
    <div>
      <TodoForm
        addTodo={(todo) => {
          if (editTodo) {
            setTodos((p) =>
              p.map((t) => {
                if (editTodo.id === t.id) {
                  return { ...todo };
                } else {
                  return t;
                }
              })
            );
          }
          todo.isCompleted = false;
          setTodos((p) => [...p, todo]);
        }}
        value={editTodo}
      />
      <TodoList
        todos={todos}
        onDelete={(id) => {
          setTodos((p) => p.filter((todo) => todo.id !== id));
        }}
        onEdit={(todo) => {
          setEditTodo(todo);
        }}
      />
    </div>
  );
};

export default Todo;
