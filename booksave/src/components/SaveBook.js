import React from 'react'

export default function SaveBook({ book, onFavourite }) {

    return (
        <>
            {/* If imagelinks is undefined, don't show those books' covers */}
            {book.volumeInfo.imageLinks !== undefined &&
                <>
                    <img src={book.volumeInfo.imageLinks.thumbnail} alt={book.volumeInfo.title} />
                    <button onClick={() => onFavourite(book)}
                        style={{ cursor: 'pointer' }}>Save</button>
                </>
            }
        </>
    )
}