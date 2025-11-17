import { useState } from "react";
import Button from "./Button";

const CategoryForm = ({ onAddCategory }) => {
  const [category, setCategory] = useState("");
  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        const value = category.trim();
        if (value) {
          onAddCategory(value);
          setCategory("");
        } else {
          alert("Please enter the category");
        }
      }}
    >
      <input
        type="text"
        placeholder="category"
        onChange={(e) => {
          setCategory(e.target.value);
        }}
        value={category}
      />
      <Button type="submit">Add</Button>
    </form>
  );
};

export default CategoryForm;
