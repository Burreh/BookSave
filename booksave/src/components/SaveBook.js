import React from 'react'

export default function SaveBook({ book, onFavourite }) {

    const bookInfo = book.volumeInfo;

    return (
        <div className='book-box'>
            {/* If imagelinks is undefined, don't show those books' covers */}
            {bookInfo.imageLinks !== undefined &&
                <>
                    <img src={bookInfo.imageLinks.thumbnail}
                        alt={bookInfo.title} />
                    <div>
                        <p>{bookInfo.title}</p>
                    </div>
                    <button onClick={() => onFavourite(book)}
                        style={{ cursor: 'pointer' }}>Save</button>
                </>
            }


        </div>
    )
}
