import React, { useState, useEffect } from 'react';
import './style/App.css';
import axios from 'axios';
import keys from './keys.json';
import BookList from './components/BookList';
import Navbar from './components/Navbar';

export default function App() {
  const [result, setResult] = useState([]);

  useEffect(() => {
    axios.get('https://www.googleapis.com/books/v1/volumes?q=colleen&key=' + keys.maps + "&maxResults=40")
      .then(data => {
        // &filter=free-ebooks
        console.log(data.data.items)
        setResult(data.data.items);
      })

  }, []);

  return (
    <div className="container">
      <Navbar />
      <BookList books={result} />
    </div>
  );
}