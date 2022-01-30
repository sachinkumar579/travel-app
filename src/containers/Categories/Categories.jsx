import "./Categories.css";
import Category from "./Category";

function Categories() {
  return (
    <div className="categories">
      <h4>CATEGORY</h4>
      <h2>We Offer Best Services</h2>
      <div className="groups">
        <Category></Category>
        <Category border="yes"></Category>
        <Category></Category>
        <Category></Category>
      </div>
    </div>
  );
}

export default Categories;
