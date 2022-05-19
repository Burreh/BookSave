import React, { useState, useEffect } from 'react';
import './style/App.css';
import Navbar from './components/Navbar';
import BookList from './components/BookList';
import axios from 'axios';
import keys from './keys.json';


export default function App() {
  const [data, setData] = useState([]);

  useEffect(() => {
    // TEST
    //fetch('http://www.omdbapi.com/?i=tt3896198&apikey=96da8d24')
    // GDBdGMGvhAIUBM38hfoifg3V5MIB3h8H
    axios.get('https://www.googleapis.com/books/v1/volumes?q=flowers&projection=lite&key=' + keys.maps)
      .then(data => { console.log(data) })

  }, []);

  return (
    <div className="container">
      <Navbar />
      <pre>{data}</pre>
      <BookList />
    </div>
  );
}