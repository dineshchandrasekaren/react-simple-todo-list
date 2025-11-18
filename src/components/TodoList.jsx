import Button from "./Button";

const TodoList = ({ todos, onEdit, onDelete, onComplete }) => {
  return (
    <table>
      <thead>
        <tr>
          <th>Todo</th>
          <th>Date</th>
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
