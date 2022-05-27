import React from 'react'

export default function Book({ book, onDelete }) {

    return (
        <>
            {/* If imagelinks is undefined, don't show those books' covers */}
            {book.volumeInfo.imageLinks !== undefined &&
                <>
                    <img src={book.volumeInfo.imageLinks.thumbnail} alt={book.volumeInfo.title} />
                    <button
                        className="btn btn-danger"
                        onClick={() => onDelete(book)}
                        style={{ cursor: 'pointer' }}
                    >Delete
                    </button>
                </>
            }
        </>
    )
}
