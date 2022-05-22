import React from 'react'
import Book from './Book'
import Favourites from './Favourites'

export default function BookList({ books, onFavourite }) {

    return (
        <div>
            {books.map((book, index) => (
                <Book key={index} book={book} onFavourite={onFavourite} />
            ))}
            <Favourites />
        </div>
    )
}
