import React, { useState, useEffect } from 'react';
import './style/App.css';
import axios from 'axios';
import keys from './keys.json';
import BookList from './components/BookList';
import Favourites from './components/Favourites';
import Navbar from './components/Navbar';
import SearchBox from './components/SearchBox';

export default function App() {
  const [result, setResult] = useState([]);
  const [search, setSearch] = useState('');
  const [favourites, setFavourites] = useState([]);

  // GET data from Google book API using axios
  const getBooks = () => {
    axios.get(`https://www.googleapis.com/books/v1/volumes?q=${search}n&key=${keys.maps}&maxResults=28`)
      .then(response => {
        // &filter=free-ebooks
        setResult(response.data.items);
        console.log(response.data.items)
      })
      .catch(error => {
        console.log(error);
      });
  };

  useEffect(() => {
    const bookFavourites = localStorage.getItem('faves');
    if (bookFavourites !== undefined) {
      setFavourites(JSON.parse(bookFavourites));
    }

  }, []);

  const saveToLocalStorage = (items) => {
    localStorage.setItem('faves', JSON.stringify(items));
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
      <SearchBox setSearch={setSearch} getBooks={getBooks} />
      <BookList
        books={result}
        onFavourite={addFavouriteBook} />
      <Favourites
        books={favourites}
        onDelete={deleteFavourite} />
    </div >
  );
}

