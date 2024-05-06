import React, { useState } from 'react';
import 'tailwindcss/tailwind.css';

function ItemItem({ item, onDelete }) {
  return (
    <div className="flex justify-between items-center bg-gray-200 p-4 mb-2">
      <span>{item}</span>
      <button className="px-3 py-1 bg-red-500 text-white rounded" onClick={onDelete}>Delete</button>
    </div>
  );
}

function App() {
  const [items, setItems] = useState([]);
  const [inputValue, setInputValue] = useState('');

  const handleAddItem = () => {
    if (inputValue.trim() !== '') {
      setItems([...items, inputValue]);
      setInputValue('');
    }
  };

  const handleDeleteItem = (index) => {
    const updatedItems = items.filter((_, i) => i !== index);
    setItems(updatedItems);
  };

  return (
    <div className="container mx-auto mt-8">
       <h1 className="text-2xl font-bold mb-4">Hello</h1>         
       
      {/* bold */}

      <div className="space-y-2">
        {items.map((item, index) => (
          <ItemItem
            key={index}
            item={item}
            onDelete={() => handleDeleteItem(index)}
          />
        ))}
      </div>
      <div className="flex space-x-2">
        <input
          type="text"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          placeholder="Write.."
          className="border rounded px-3 py-2 w-3/4"
        />
        <button onClick={handleAddItem} className="px-4 py-2 bg-red-500 text-white rounded">Add</button>
      </div>
    </div>
  );
}

export default App;
