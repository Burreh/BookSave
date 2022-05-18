import React, { useState, useEffect } from 'react'
import './style/App.css';

export default function App() {
  const [data, setData] = useState([]);

  useEffect(() => {
    // TEST
    //fetch('http://www.omdbapi.com/?i=tt3896198&apikey=96da8d24')
    fetch('https://www.googleapis.com/books/v1/volumes/s1gVAAAAYAAJ')
      .then(res => res.json())
      .then(data => setData(data))

  }, [])
  return (
    <div className="container">
      <h1>BookSave</h1>
      <pre>{JSON.stringify(data, null, 2)}</pre>
    </div>
  );
}
