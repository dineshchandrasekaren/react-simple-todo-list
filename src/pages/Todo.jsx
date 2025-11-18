import { Link, useParams } from "react-router-dom";
import TodoForm from "../components/TodoForm";
import { useState } from "react";
import TodoList from "../components/TodoList";
import Button from "../components/Button";
import NotFound from "../components/NotFound";

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
        editedTodo={editTodo}
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
          editedTodo={editTodo}
        />
      ) : (
        <NotFound message={`No todo found in ${category} category.`} />
      )}
    </div>
  );
};

export default Todo;
