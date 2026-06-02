
import React,{useEffect,useState} from 'react';
import {API_URL} from './config';

function App(){
 const [books,setBooks]=useState([]);

 useEffect(()=>{
  fetch(`${API_URL}/books`)
   .then(r=>r.json())
   .then(setBooks);
 },[]);

 return (
  <div style={{padding:'20px'}}>
   <h1>AWS Online Book Store</h1>
   {books.map(book=>(
    <div key={book.id}>
      <h3>{book.title}</h3>
      <p>{book.author}</p>
      <p>₹{book.price}</p>
    </div>
   ))}
  </div>
 );
}

export default App;
