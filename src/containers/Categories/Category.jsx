import gear from "../../assets/gear.png";

import "./Category.css";

function Category({ border }) {
  const borderClass = border ? "category curved-border" : "category";

  return (
    <div className={borderClass}>
      <img src={gear}></img>
      <h4>Calculated Weather</h4>
      <div className="category-text">
        Some text here some text here here some text here some text here here
      </div>
    </div>
  );
}

export default Category;
