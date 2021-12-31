import React from "react";
import { FaTrashAlt } from "react-icons/fa";
function LineItem({ item , handleCheck, handleDelete }) {
  return (
    <div>
      <li className="item">
        <input
          type="checkbox"
          name=""
          id=""
          checked={item.checked}
          onChange={() => handleCheck(item.id)}
        />
        <label
          style={item.checked ? { textDecoration: "line-through" } : null}
          onDoubleClick={() => handleCheck(item.id)}
        >
          {item.item}
        </label>
        <FaTrashAlt
          onClick={() => handleDelete(item.id)}
          role="button"
          tabIndex="0"
          aria-label={`Delete ${item.item}`}
        />
      </li>
    </div>
  );
}

export default LineItem;
