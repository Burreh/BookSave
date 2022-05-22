import React from 'react'
import Book from './Book'
import SaveFavourite from './SaveFavourite'

export default function BookList({ books, onFavourite }) {

    return (
        <div>
            {books.map((book, index) => (
                <Book key={index} book={book} onFavourite={onFavourite} />
            ))}
            <SaveFavourite />
        </div>
    )
}
