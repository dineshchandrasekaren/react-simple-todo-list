import { useState } from "react";
import CategoryForm from "../components/CategoryForm";
import CategoryList from "../components/CategoryList";

const Category = ({ categories, setCategory }) => {
  return (
    <div className="center-page ">
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
