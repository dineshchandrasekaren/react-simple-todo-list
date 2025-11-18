import { Link, useParams } from "react-router-dom";
import TodoForm from "../components/TodoForm";
import { useState } from "react";
import TodoList from "../components/TodoList";
import Button from "../components/Button";

const Todo = ({ todos, setTodos }) => {
  const [editTodo, setEditTodo] = useState("");
  const { category } = useParams();

  const filteredTodo = todos.filter((t) => t.category === category);
  return (
    <div className="center-page ">
      <Link to="/">
        <Button>Back to category</Button>
      </Link>
      <TodoForm
        addTodo={(todo) => {
          if (editTodo) {
            setTodos((p) =>
              p.map((t) => (editTodo.id === t.id ? { ...todo } : t))
            );
            setEditTodo("");
          } else {
            setTodos((p) => [
              ...p,
              { ...todo, id: Date.now(), isCompleted: false, category },
            ]);
          }
        }}
        value={editTodo}
      />
      {filteredTodo.length ? (
        <TodoList
          todos={filteredTodo}
          onDelete={(id) => {
            setTodos((p) => p.filter((todo) => todo.id !== id));
          }}
          onComplete={(id) => {
            setTodos((p) =>
              p.map((todo) =>
                todo.id === id
                  ? { ...todo, isCompleted: !todo.isCompleted }
                  : todo
              )
            );
          }}
          onEdit={(todo) => {
            setEditTodo(todo);
          }}
        />
      ) : (
        <h4 style={{ textAlign: "center", padding: "40px 0", color: "grey" }}>
          Please add Todo
        </h4>
      )}
    </div>
  );
};

export default Todo;
