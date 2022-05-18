import React, { useState, useEffect } from 'react'
import './style/App.css';

export default function App() {
  const [data, setData] = useState([]);

  useEffect(() => {
    // TEST
    //fetch('http://www.omdbapi.com/?i=tt3896198&apikey=96da8d24')
    // GDBdGMGvhAIUBM38hfoifg3V5MIB3h8H
    fetch('https://api.nytimes.com/svc/books/v3/lists/current/hardcover-fiction.json?api-key=GDBdGMGvhAIUBM38hfoifg3V5MIB3h8H')
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