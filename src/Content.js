import React from "react";
import { FaTrashAlt } from "react-icons/fa";
function Content({ items, handleCheck, handleDelete }) {

  return (
    <main>
      {items.length ? (
        <ul>
          {items.map((item) => (
            <li className="item" key={item.id}>
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
              role="button" tabIndex="0" />
            </li>
          ))}
        </ul>
        ) : (<p style={{marginTop: '2rem'}}> Your List Is Empty</p>)}
    </main>
  );
}

export default Content;
