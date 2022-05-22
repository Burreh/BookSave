import React from 'react'

export default function Book({ book, onFavourite }) {

    return (
        <>
            {/* If imagelinks is undefined, don't show those books' covers */}
            {book.volumeInfo.imageLinks !== undefined &&
                <img src={book.volumeInfo.imageLinks.thumbnail} alt={book.volumeInfo.title}
                    onClick={() => onFavourite(book)}
                    style={{ cursor: 'pointer' }}
                />
            }
        </>
    )
}
