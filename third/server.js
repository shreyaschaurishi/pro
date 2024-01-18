const express = require('express');
const bodyParser = require('body-parser');
const mysql = require('mysql');

const app = express();
const port = 5000;

app.use(bodyParser.json());

const db = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'root123',
  database: 'test',
});

db.connect((err) => {
  if (err) {
    console.log('Error connecting to MySQL:', err);
  } else {
    console.log('Connected to MySQL');
  }
});

// Create Fruit table if not exists
db.query(`
  CREATE TABLE IF NOT EXISTS Fruit (
    id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
    color VARCHAR(50),
    taste VARCHAR(50),
    quantity INT,
    price DECIMAL(10, 2) NOT NULL
  )
`, (err) => {
  if (err) {
    console.log('Error creating table:', err);
  }
});

// CRUD operations

// Insert a new fruit
app.post('/api/addFruit', (req, res) => {
  const { name, color, taste, quantity, price } = req.body;
  const sql = 'INSERT INTO Fruit (name, color, taste, quantity, price) VALUES (?, ?, ?, ?, ?)';
  db.query(sql, [name, color, taste, quantity, price], (err, result) => {
    if (err) {
      console.log('Error inserting data:', err);
      res.status(500).json({ success: false, message: 'Failed to add fruit' });
    } else {
      console.log('Fruit added successfully');
      res.json({ success: true, message: 'Fruit added successfully' });
    }
  });
});

// Update a fruit
app.put('/api/updateFruit/:id', (req, res) => {
  const { name, color, taste, quantity, price } = req.body;
  const fruitId = req.params.id;
  const sql = 'UPDATE Fruit SET name=?, color=?, taste=?, quantity=?, price=? WHERE id=?';
  db.query(sql, [name, color, taste, quantity, price, fruitId], (err, result) => {
    if (err) {
      console.log('Error updating data:', err);
      res.status(500).json({ success: false, message: 'Failed to update fruit' });
    } else {
      console.log('Fruit updated successfully');
      res.json({ success: true, message: 'Fruit updated successfully' });
    }
  });
});

// Delete a fruit
app.delete('/api/deleteFruit/:id', (req, res) => {
  const fruitId = req.params.id;
  const sql = 'DELETE FROM Fruit WHERE id=?';
  db.query(sql, [fruitId], (err, result) => {
    if (err) {
      console.log('Error deleting data:', err);
      res.status(500).json({ success: false, message: 'Failed to delete fruit' });
    } else {
      console.log('Fruit deleted successfully');
      res.json({ success: true, message: 'Fruit deleted successfully' });
    }
  });
});

// Get all fruits
app.get('/api/getAllFruits', (req, res) => {
  const sql = 'SELECT * FROM Fruit';
  db.query(sql, (err, result) => {
    if (err) {
      console.log('Error fetching data:', err);
      res.status(500).json({ success: false, message: 'Failed to fetch fruits' });
    } else {
      res.json({ success: true, fruits: result });
    }
  });
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
