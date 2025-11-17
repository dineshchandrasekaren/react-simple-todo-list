import { BrowserRouter, Route, Routes } from "react-router-dom";

import Category from "./pages/Category";
import Todo from "./pages/Todo";
import { useState } from "react";

function App() {
  const [todos, setTodos] = useState([]);
  const [catogories, setCategories] = useState([]);
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Category />} />
        <Route path="/todo/:category" element={<Todo />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
