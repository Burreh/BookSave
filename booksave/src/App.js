import React, { useState, useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container';
import './style/App.css';
import keys from './keys.json';
import BookList from './components/BookList';
import ToReadList from './components/ToReadList';
import Header from './components/Header';
import SearchBox from './components/SearchBox';
import FinishList from './components/FinishList';

const axios = require('axios').default;

export default function App() {
  const [result, setResult] = useState([]);
  const [search, setSearch] = useState('');
  const [favourites, setFavourites] = useState([]);
  const [booksRead, setBooksRead] = useState([]);

  // GET data from Google book API using axios
  const getBooks = () => {
    axios.get(`https://www.googleapis.com/books/v1/volumes?q=${search}n&key=${keys.maps}&maxResults=36`)
      .then(response => {
        setResult(response.data.items);
      })
      .catch(error => {
        console.log(error.message);
      });
  };

  useEffect(() => {
    // Run function getBooks() data when page gets initially rendered
    getBooks();

    const bookFavourites = localStorage.getItem('faves');
    if (bookFavourites !== undefined) {
      setFavourites(JSON.parse(bookFavourites));
    }

    const bookFinished = localStorage.getItem('finished');
    if (bookFinished !== undefined) {
      setBooksRead(JSON.parse(bookFinished));
    }

    // Stop page from re-rendering with empty array
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

  const finishReading = (book) => {
    const newReadList = [...booksRead, book];
    setBooksRead(newReadList);

    deleteFavourite(book)
    localStorage.setItem('finished', JSON.stringify(newReadList));
  };

  return (
    <>
      <Header />
      <Container fluid="md">
        <SearchBox
          setSearch={setSearch}
          getBooks={getBooks} />
        <Routes>
          <Route path="/" element={
            <BookList
              books={result}
              onFavourite={addFavouriteBook} />} />
          <Route path="/To-read" element={
            <ToReadList
              books={favourites}
              onDelete={deleteFavourite}
              onFinish={finishReading} />} />
          <Route path="/Finished-reading" element={
            <FinishList
              books={booksRead} />} />
        </Routes>
      </Container >
    </>
  );
}