import { BrowserRouter, Route, Routes } from "react-router-dom";

import Category from "./pages/Category";
import Todo from "./pages/Todo";
import { useState } from "react";

function App() {
  const [todos, setTodos] = useState([]);
  const [categories, setCategory] = useState([]);
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={
            <Category categories={categories} setCategory={setCategory} />
          }
        />
        <Route
          path="/todo/:category"
          element={<Todo todos={todos} setTodos={setTodos} />}
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
