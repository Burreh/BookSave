import React, { useState, useEffect } from 'react';
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
  console.log(favourites)

  // GET data from Google book API using axios
  const getBooks = () => {
    axios.get(`https://www.googleapis.com/books/v1/volumes?q=${search}n&key=${keys.maps}&maxResults=30`)
      .then(response => {
        // &filter=free-ebooks
        setResult(response.data.items);
      })
      .catch(error => {
        console.log(error);
      });
  };

  useEffect(() => {
    const bookFavourites = JSON.parse(
      localStorage.getItem('faves')
    );

    setFavourites(bookFavourites);
  }, []);

  const saveToLocalStorage = (items) => {
    localStorage.setItem('faves', JSON.stringify(items));
  };

  const addFavouriteBook = (book) => {
    const newFavouriteList = [...favourites, book];
    setFavourites(newFavouriteList);
    saveToLocalStorage(newFavouriteList);
  };

  /*const removeFavouriteMovie = (movie) => {
    const newFavouriteList = favourites.filter(
      (favourite) => favourite.imdbID !== movie.imdbID
    );

    setFavourites(newFavouriteList);
    saveToLocalStorage(newFavouriteList);
  };
*/






  return (
    <div className="container">
      <Navbar />
      <SearchBox setSearch={setSearch} getBooks={getBooks} />
      <BookList
        books={result}
        onFavourite={addFavouriteBook} />
      <h2>Favourites</h2>
      <BookList
        books={favourites}>
      </BookList>
    </div >
  );
}

