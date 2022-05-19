import React, { useState, useEffect } from 'react';
import './style/App.css';
import axios from 'axios';
import keys from './keys.json';
import BookList from './components/BookList';
import Navbar from './components/Navbar';
import SearchBox from './components/SearchBox';

export default function App() {
  const [result, setResult] = useState([]);
  // For SearchBox
  const [search, setSearch] = useState('');

  // The function is outside the useEffect hook 
  // since the useEffect callback should be a synchronous function
  const getBooks = async () => {
    // GET data from Google book API using axios
    await axios.get(`https://www.googleapis.com/books/v1/volumes?q=${search}n&key=${keys.maps}&maxResults=30`)
      .then(data => {
        // &filter=free-ebooks
        console.log(data.data.items);
        setResult(data.data.items);
      })
      .catch(error => {
        console.log(error);
      });
  };
  // TODO Update the useEffect hook to run whenever the value (=search) changes
  useEffect(() => {
    getBooks()
  }, []);

  return (
    <div className="container">
      <Navbar />
      <SearchBox search={search} setSearch={setSearch} />
      <BookList books={result} />
    </div>
  );
}