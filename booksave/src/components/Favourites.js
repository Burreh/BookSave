import React from 'react'
import DeleteBook from './DeleteBook'

export default function BookList({ books, onDelete }) {

    return (
        <>
            <h2>Favourites</h2>
            <div className="book-list">
                {books?.map((book, index) => (
                    <DeleteBook key={index} book={book} onDelete={onDelete} />
                ))}
            </div>
        </>
    )
}