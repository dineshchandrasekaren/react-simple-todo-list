import { useState } from "react";
import CategoryForm from "../components/CategoryForm";
import CategoryList from "../components/CategoryList";

const Category = () => {
  const [categories, setCategory] = useState([]);

  return (
    <div className="category">
      <CategoryForm
        onAddCategory={(category) => {
          setCategory((p) => [...p, category]);
        }}
      />
      {categories.length ? (
        <CategoryList categories={categories} />
      ) : (
        <h4 style={{ textAlign: "center", padding: "40px 0", color: "grey" }}>
          Please add category
        </h4>
      )}
    </div>
  );
};

export default Category;
