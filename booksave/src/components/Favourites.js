import React from 'react'
import DeleteBook from './DeleteBook'

export default function BookList({ books, onDelete, button }) {

    return (
        <div>
            <h2>Favourites</h2>
            {books?.map((book, index) => (
                <DeleteBook key={index} book={book} onDelete={onDelete} button={button} />
            ))}
        </div>
    )
}