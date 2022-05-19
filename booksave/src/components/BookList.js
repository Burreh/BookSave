import React from 'react'
import Book from './Book'

export default function BookList({ books }) {

    return (
        <div>
            {books.map((book, index) => (
                <Book key={index} book={book} />
            ))}
        </div>
    )
}
