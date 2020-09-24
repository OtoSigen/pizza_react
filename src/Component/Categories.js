import React, { useState } from "react";
import "../scss/components/_categories.scss";

function Categories({ items }) {
  const [activeItem, setActiveItem] = useState();
  const onSelectItem = (index) => {
    setActiveItem(index);
  };

  return (
    <div className="categories">
      <ul>
        <li
          className={activeItem === null ? "active" : ""}
          onClick={() => onSelectItem(null)}
        >
          Все
        </li>
        {items.map((item, index) => (
          <li
            className={activeItem === index ? "active" : ""}
            onClick={() => onSelectItem(index)}
            key={`${index}_${item}`}
          >
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Categories;
