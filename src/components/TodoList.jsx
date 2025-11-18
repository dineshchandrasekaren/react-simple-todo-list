import Button from "./Button";

const TodoList = ({ todos, onEdit, onDelete, onComplete, editedTodo }) => {
  return (
    <table>
      <thead>
        <tr>
          <th>Todo</th>
          <th>Date</th>
          <th></th>
          <th></th>
          <th></th>
        </tr>
      </thead>
      <tbody>
        {todos.map((todo) => (
          <tr className={todo.isCompleted ? "completed" : ""}>
            <td>{todo.todo}</td>
            <td>{todo.date}</td>

            <td>
              {
                <Button
                  disabled={todo.isCompleted}
                  onClick={() => {
                    onEdit(todo);
                  }}
                >
                  Edit
                </Button>
              }
              <Button
                disabled={editedTodo}
                onClick={() => {
                  onDelete(todo.id);
                }}
                className="red-button"
              >
                Delete
              </Button>
            </td>
            <td>
              <Button
                disabled={editedTodo}
                onClick={() => {
                  onComplete(todo.id);
                }}
              >
                {todo.isCompleted ? "Mark as incompleted" : "Mark as completed"}
              </Button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default TodoList;
