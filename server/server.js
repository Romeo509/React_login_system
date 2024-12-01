const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const mysql = require('mysql2');

const app = express();
const PORT = 5000;

// Middleware
app.use(cors()); // Allow cross-origin requests
app.use(bodyParser.json()); // Parse JSON request bodies

// MySQL connection setup
const db = mysql.createConnection({
  host: 'localhost',
  user: 'root',  // default user for XAMPP
  password: '',  // no password for default XAMPP setup
  database: 'authy'  // database name 'authy'
});

// Connect to MySQL
db.connect((err) => {
  if (err) {
    console.error('Error connecting to the database:', err);
    return;
  }
  console.log('Connected to the MySQL database');
  
  // Create the table if it doesn't exist
  const createTableQuery = `
    CREATE TABLE IF NOT EXISTS users (
      id INT AUTO_INCREMENT PRIMARY KEY,
      name VARCHAR(255) NOT NULL,
      password VARCHAR(255) NOT NULL
    )
  `;
  
  db.query(createTableQuery, (err) => {
    if (err) {
      console.error('Error creating table:', err);
    } else {
      console.log('Table "users" created or already exists');
    }
  });
});

// POST /users to save user credentials
app.post('/users', (req, res) => {
  const { name, password } = req.body;

  // Check if name and password are provided
  if (!name || !password) {
    return res.status(400).json({ error: 'Name and password are required' });
  }

  // Insert new user into the database
  const insertQuery = 'INSERT INTO users (name, password) VALUES (?, ?)';
  db.query(insertQuery, [name, password], (err, result) => {
    if (err) {
      console.error('Error saving user:', err);
      return res.status(500).json({ error: 'Error saving user' });
    }
    res.status(201).json({ message: 'User created successfully' });
  });
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
