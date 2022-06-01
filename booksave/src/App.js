import React, { useState, useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container';
import './style/App.css';
import keys from './keys.json';
import BookList from './components/BookList';
import ToReadList from './components/ToReadList';
import FinishList from './components/FinishList';
import Header from './components/Header';
import SearchBox from './components/SearchBox';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const axios = require('axios').default;

export default function App() {
  const [result, setResult] = useState([]);
  const [search, setSearch] = useState('');
  const [favourites, setFavourites] = useState([]);
  const [booksRead, setBooksRead] = useState([]);

  // GET data from Google book API using axios
  const getBooks = (search) => {
    axios.get(`https://www.googleapis.com/books/v1/volumes?q=${search}n&key=${keys.maps}&maxResults=36`)
      .then(response => {
        setResult(response.data.items);
      })
      .catch(error => {
        console.log(error.message);
      });
  };

  // Re-renders each time the search (value) changes
  useEffect(() => {
    getBooks(search);
  }, [search]);

  // Renders the books from localStorage by getting their keys
  useEffect(() => {
    const bookFavourites = localStorage.getItem('faves');
    if (bookFavourites) {
      setFavourites(JSON.parse(bookFavourites));
    }

    const booksFinished = localStorage.getItem('finished');
    if (booksFinished) {
      setFavourites(JSON.parse(booksFinished));
    }
    // Stops page from re-rendering as well as crashing with empty array
  }, []);

  // Save the books to localStorage under the key == faves
  const saveToLocalStorage = (books) => {
    localStorage.setItem('faves', JSON.stringify(books));
  };

  const addFavouriteBook = (book) => {
    // includes() checks if the value is already present
    // The if condition will only be satisfied if the value (book) is not present in the array.
    if (!favourites.includes(book)) {
      const newFavouriteList = [...favourites, book];
      setFavourites(newFavouriteList);
      saveToLocalStorage(newFavouriteList);
    }
  };

  const deleteFavourite = (book) => {
    const newFavouriteList = favourites.filter(
      (favourite) => favourite.id !== book.id
    );

    setFavourites(newFavouriteList);
    saveToLocalStorage(newFavouriteList);
  };

  // Moves and removes the book from To-Read -> Finished 
  const finishReading = (book) => {
    const newFinishedList = [...booksRead, book];
    setBooksRead(newFinishedList);

    deleteFavourite(book)
    localStorage.setItem('finished', JSON.stringify(newFinishedList));
  };


  return (
    <>
      <Header />
      <Container fluid="md">
        <SearchBox
          setSearch={setSearch} />
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
        <ToastContainer autoClose={2000} />
      </Container >
    </>
  );
}