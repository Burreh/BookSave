import React from 'react'

export default function Book({ book }) {

    return (
        <>
            {/* If imagelinks not defined, then show those books' covers */}
            {book.volumeInfo.imageLinks !== undefined &&
                <img src={book.volumeInfo.imageLinks.thumbnail} alt={book.volumeInfo.title} />
            }
        </>
    )
}
