import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { API_URL } from './api';

function App() {

  const [books, setBooks] = useState([]);
  const [title, setTitle] = useState('');
  const [author, setAuthor] = useState('');

  const loadBooks = async () => {
    const res = await axios.get(API_URL);
    setBooks(res.data);
  };

  useEffect(() => {
    loadBooks();
  }, []);

  const addBook = async () => {

    await axios.post(
      API_URL,
      {
        title,
        author
      }
    );

    loadBooks();
  };

  return (
    <div style={{ padding: '20px' }}>

      <h1>Book Store</h1>

      <input
        placeholder="Title"
        onChange={(e) => setTitle(e.target.value)}
      />

      <input
        placeholder="Author"
        onChange={(e) => setAuthor(e.target.value)}
      />

      <button onClick={addBook}>
        Add Book
      </button>

      <ul>

        {
          books.map(book => (
            <li key={book.id}>
              {book.title} - {book.author}
            </li>
          ))
        }

      </ul>

    </div>
  );
}

export default App;