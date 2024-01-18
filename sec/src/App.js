import React, { useState, useEffect } from 'react';
import axios from 'axios';

const App = () => {
  const [fruitData, setFruitData] = useState([]);
  const [newFruit, setNewFruit] = useState({
    name: '',
    color: '',
    taste: '',
    quantity: 0,
    price: 0.0
  });

  useEffect(() => {
    fetchFruits();
  }, []);

  const fetchFruits = async () => {
    try {
      const response = await axios.get('http://localhost:3001/api/fruits');
      setFruitData(response.data);
    } catch (error) {
      console.error('Error fetching fruits:', error.message);
    }
  };

  const handleInputChange = (e) => {
    setNewFruit({ ...newFruit, [e.target.name]: e.target.value });
  };

  const handleAddFruit = async () => {
    try {
      const response = await axios.post('http://localhost:3001/api/fruit', newFruit);
      console.log(response.data);
      fetchFruits();
    } catch (error) {
      console.error('Error adding fruit:', error.message);
    }
  };

  return (
    <div>
      <h1>Fruit Bazar</h1>
      <div>
        <h2>Add Fruit</h2>
        <label>Name:</label>
        <input type="text" name="name" onChange={handleInputChange} value={newFruit.name} />

        <label>Color:</label>
        <input type="text" name="color" onChange={handleInputChange} value={newFruit.color} />

        <label>Taste:</label>
        <input type="text" name="taste" onChange={handleInputChange} value={newFruit.taste} />

        <label>Quantity:</label>
        <input type="number" name="quantity" onChange={handleInputChange} value={newFruit.quantity} />

        <label>Price:</label>
        <input type="number" step="0.01" name="price" onChange={handleInputChange} value={newFruit.price} />

        <button onClick={handleAddFruit}>Add Fruit</button>
      </div>
      <div>
        <h2>Display Fruits</h2>
        <table>
          <thead>
            <tr>
              <th>ID</th>
              <th>Name</th>
              <th>Color</th>
              <th>Taste</th>
              <th>Quantity</th>
              <th>Price</th>
            </tr>
          </thead>
          <tbody>
            {fruitData.map((fruit) => (
              <tr key={fruit.id}>
                <td>{fruit.id}</td>
                <td>{fruit.name}</td>
                <td>{fruit.color}</td>
                <td>{fruit.taste}</td>
                <td>{fruit.quantity}</td>
                <td>{fruit.price}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default App;
