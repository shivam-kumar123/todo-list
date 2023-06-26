import React, { useState } from 'react';
import { FaTrash } from 'react-icons/fa';

function ListItem() {
  const [newItem, setNewItem] = useState('');
  const [list, setList] = useState([]);

  // get new item on user input
  const getNewItem = (e) => {
    setNewItem(e.target.value);
  };

  // save new item to list on button click
  const addNewItem = () => {
    setList([
      ...list,
      {
        id: list.length,
        value: newItem,
      },
    ]);
    setNewItem('');
  };

  // delete an item from the list
  const deleteItem = (itemId) => {
    const updatedList = list.filter((item) => item.id !== itemId);
    setList(updatedList);
  };

  return (
    <div>
      {list.map((item) => (
        <div key={item.id}>
          <span>{item.value}</span>
          <button onClick={() => deleteItem(item.id)}>
            <FaTrash />
          </button>
          <hr />
        </div>
      ))}
      <input type="text" value={newItem} onChange={getNewItem} />
      <button onClick={addNewItem}>Add New Item</button>
    </div>
  );
}

export default ListItem;
