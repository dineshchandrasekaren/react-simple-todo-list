import Button from "./Button";

const TodoList = ({ todos, onEdit, onDelete }) => {
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
          <tr>
            <td>{todo.todo}</td>
            <td>{todo.date}</td>
            <td>
              <Button
                onClick={() => {
                  onEdit(todo);
                }}
              >
                Edit
              </Button>
            </td>
            <td>
              <Button
                onClick={() => {
                  onDelete(todo.id);
                }}
              >
                Delete
              </Button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default TodoList;
