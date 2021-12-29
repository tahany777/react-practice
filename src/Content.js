import React from "react";
import { useState } from "react";
import { FaTrashAlt } from "react-icons/fa";
function Content() {
  // const handleNameChange = () => {
  //   const names = ["Bob", "Kevin", "Dave"];
  //   const int = Math.floor(Math.random() * 3);
  //   return names[int];
  // };
  // const handleClick = () => {
  //   console.log('You Clicked it')
  // }
  // const handleClick2 = (name) => {
  //   console.log(`${name} was clicked`)
  // }
  // const handleClick3 = (e) => {
  //   console.log(e.target.innerText)
  // }
  // const [name, setName] = useState('Tahany');
  // const handleNameChange = () => {
  //   const names = ['Tahany', "Bob", "Kevin", "Dave"];
  //   const int = Math.floor(Math.random() * 3);
  //   setName(names[int]);
  // };
  const [items, setItems] = useState([
    {
      id: 1,
      checked: true,
      item: "Item 1",
    },
    {
      id: 2,
      checked: false,
      item: "Item 2",
    },
    {
      id: 3,
      checked: false,
      item: "Item 3",
    },
  ]);
  const handleCheck = (id) => {
    const listItems = items.map((item) =>
      item.id === id ? { ...item, checked: !item.checked } : item
    );
    setItems(listItems);
    localStorage.setItem("shoppinglist", JSON.stringify(listItems));
  };
  const handleDelete = (id) => {
    const listItems = items.filter((item) => item.id !== id);
    setItems(listItems);
    localStorage.setItem("shoppinglist", JSON.stringify(listItems));
  };
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
