const express = require('express');
const cors = require('cors');
const mysql = require('mysql2');

const app = express();

app.use(cors());
app.use(express.json());

const db = mysql.createConnection({
  host: 'YOUR-RDS-ENDPOINT',
  user: 'admin',
  password: 'admin123',
  database: 'bookstore'
});

db.connect(err => {
  if (err) {
    console.log(err);
  } else {
    console.log('Database Connected');
  }
});

app.get('/health', (req, res) => {
  res.status(200).send('OK');
});

app.get('/books', (req, res) => {
  db.query('SELECT * FROM books', (err, result) => {
    if (err) return res.status(500).json(err);
    res.json(result);
  });
});

app.post('/books', (req, res) => {
  const { title, author } = req.body;

  db.query(
    'INSERT INTO books(title,author) VALUES(?,?)',
    [title, author],
    (err) => {
      if (err) return res.status(500).json(err);

      res.json({
        message: 'Book Added'
      });
    }
  );
});

app.delete('/books/:id', (req, res) => {

  db.query(
    'DELETE FROM books WHERE id=?',
    [req.params.id],
    (err) => {

      if (err)
        return res.status(500).json(err);

      res.json({
        message: 'Book Deleted'
      });
    });
});

app.listen(3000, () => {
  console.log('Server Running On Port 3000');
});