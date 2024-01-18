import React, { useState, useEffect } from 'react';
import axios from 'axios';

function App() {
  const [name, setName] = useState('');
  const [price, setPrice] = useState('');
  const [message, setMessage] = useState('');
  const [fruits, setFruits] = useState([]);

  useEffect(() => {
    fetchAllFruits();
  }, []);

  const fetchAllFruits = () => {
    axios.get('http://localhost:5000/api/getAllFruits')
      .then(response => {
        if (response.data.success) {
          setFruits(response.data.fruits);
        } else {
          console.log(response.data.message);
        }
      })
      .catch(error => {
        console.error('Error fetching data:', error);
      });
  };

  const addFruit = () => {
    axios.post('http://localhost:5000/api/addFruit', { name, price })
      .then(response => {
        setMessage(response.data.message);
        fetchAllFruits(); // Refresh the list after adding a new fruit
      })
      .catch(error => {
        console.error('Error adding fruit:', error);
      });
  };

  return (
    <div className="App">
      <h1>Fruit Bazar</h1>
      <div>
        <h2>Add Fruit</h2>
        <label>Name: <input type="text" value={name} onChange={(e) => setName(e.target.value)} /></label>
        <label>Price: <input type="text" value={price} onChange={(e) => setPrice(e.target.value)} /></label>
        <button onClick={addFruit}>Add Fruit</button>
        <p>{message}</p>
      </div>

      <div>
        <h2>All Fruits</h2>
        <table>
          <thead>
            <tr>
              <th>ID</th>
              <th>Name</th>
              <th>Price</th>
            </tr>
          </thead>
          <tbody>
            {fruits.map(fruit => (
              <tr key={fruit.id}>
                <td>{fruit.id}</td>
                <td>{fruit.name}</td>
                <td>{fruit.price}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default App;
