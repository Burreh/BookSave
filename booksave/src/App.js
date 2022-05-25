import React, { useState, useEffect } from 'react';
import './style/App.css';
import keys from './keys.json';
import BookList from './components/BookList';
import Favourites from './components/Favourites';
import Navbar from './components/Navbar';
import SearchBox from './components/SearchBox';

const axios = require('axios').default;

export default function App() {
  const [result, setResult] = useState([]);
  const [search, setSearch] = useState('');
  const [favourites, setFavourites] = useState([]);

  // GET data from Google book API using axios
  const getBooks = () => {
    axios.get(`https://www.googleapis.com/books/v1/volumes?q=${search}n&key=${keys.maps}&maxResults=36`)
      .then(response => {
        // &filter=free-ebooks
        setResult(response.data.items);
      })
      .catch(error => {
        console.log(error.message);
      });
  };

  // Run function getBooks() data when page gets initially rendered
  useEffect(() => {
    getBooks();
    // Stop page from re-rendering with empty array
  }, []);

  useEffect(() => {
    const bookFavourites = localStorage.getItem('faves');
    if (bookFavourites !== undefined) {
      setFavourites(JSON.parse(bookFavourites));
    }
    else {
      setFavourites([]);
    }
  }, []);

  // Save the books to localStorage under the key == faves
  const saveToLocalStorage = (books) => {
    localStorage.setItem('faves', JSON.stringify(books));
  };

  const addFavouriteBook = (book) => {
    const newFavouriteList = [...favourites, book];
    setFavourites(newFavouriteList);
    saveToLocalStorage(newFavouriteList);
  };

  const deleteFavourite = (book) => {
    const newFavouriteList = favourites.filter(
      (favourite) => favourite.id !== book.id
    );

    setFavourites(newFavouriteList);
    saveToLocalStorage(newFavouriteList);
  };

  return (
    <div className="container">
      <Navbar />
      <SearchBox
        setSearch={setSearch}
        getBooks={getBooks} />
      <BookList
        books={result}
        onFavourite={addFavouriteBook} />
      <Favourites
        books={favourites}
        onDelete={deleteFavourite} />
    </div >
  );
}

