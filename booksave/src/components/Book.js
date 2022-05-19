import React from 'react'

export default function Book({ book }) {
    return (
        <img src={book.volumeInfo.imageLinks.thumbnail}
            alt={book.volumeInfo.title} />
    )
}
