import React from 'react'
import DeleteBook from './DeleteBook'
import Favourites from './Favourites'

export default function BookList({ books, onDelete, button }) {

    return (
        <div>
            {books.map((book, index) => (
                <DeleteBook key={index} book={book} onDelete={onDelete} button={button} />
            ))}
        </div>
    )
}

