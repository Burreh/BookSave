import React, { useState, useEffect } from 'react';
import './style/App.css';
import Navbar from './components/Navbar';
import BookList from './components/BookList';
import axios from 'axios';
import keys from './keys.json';


export default function App() {
  const [result, setResult] = useState([]);


  useEffect(() => {
    axios.get('https://www.googleapis.com/books/v1/volumes?q=colleen&filter=free-ebooks&key=' + keys.maps + "&maxResults=40")
      .then(data => {
        console.log(data.data.items)
        setResult(data.data.items);
      })

  }, []);

  return (
    <div className="container">
      <Navbar />
      {result.map(book => (
        <img src={book.volumeInfo.imageLinks.thumbnail} alt={book.title} />
      ))}
      <BookList />
    </div>
  );
}