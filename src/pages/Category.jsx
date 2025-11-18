import CategoryForm from "../components/CategoryForm";
import CategoryList from "../components/CategoryList";
import NotFound from "../components/NotFound";

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
        <NotFound message={` Please add category.`} />
      )}
    </div>
  );
};

export default Category;
