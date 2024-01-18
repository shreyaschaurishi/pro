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
db.query(`CREATE TABLE IF NOT EXISTS Fruit (id INT AUTO_INCREMENT PRIMARY KEY, name VARCHAR(255), price DECIMAL(10, 2))`, (err) => {
  if (err) {
    console.log('Error creating table:', err);
  }
});

app.post('/api/addFruit', (req, res) => {
  const { name, price } = req.body;
  const sql = 'INSERT INTO Fruit (name, price) VALUES (?, ?)';
  db.query(sql, [name, price], (err, result) => {
    if (err) {
      console.log('Error inserting data:', err);
      res.status(500).json({ success: false, message: 'Failed to add fruit' });
    } else {
      console.log('Fruit added successfully');
      res.json({ success: true, message: 'Fruit added successfully' });
    }
  });
});

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
