import { Link } from "react-router-dom";

const CategoryList = ({ categories }) => {
  return (
    <div style={{ marginTop: "30px" }}>
      {categories.map((category) => (
        <Link style={{ textDecoration: "none" }} to={`todo/${category}`}>
          <div className="category-box">{category}</div>
        </Link>
      ))}
    </div>
  );
};

export default CategoryList;
