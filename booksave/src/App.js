import React, { useState } from 'react';
import './style/App.css';
import axios from 'axios';
import keys from './keys.json';
import BookList from './components/BookList';
import Navbar from './components/Navbar';
import SearchBox from './components/SearchBox';


export default function App() {
  const [result, setResult] = useState([]);
  const [search, setSearch] = useState('');
  const [favourites, setFavourites] = useState([]);

  // GET data from Google book API using axios
  const getBooks = () => {
    axios.get(`https://www.googleapis.com/books/v1/volumes?q=${search}n&key=${keys.maps}&maxResults=30`)
      .then(response => {
        // &filter=free-ebooks
        console.log(response.data.items);
        setResult(response.data.items);
      })
      .catch(error => {
        console.log(error);
      });
  };

  // TODO add favourite book to the list
  const addFavouriteBook = (book) => {
    const newFavourite = [...favourites, book];
    setFavourites(newFavourite);
  };

  return (
    <div className="container">
      <Navbar />
      <SearchBox setSearch={setSearch} getBooks={getBooks} />
      <BookList
        books={result}
        onFavourite={addFavouriteBook} />
    </div>
  );
}