import React from 'react'
import SaveBook from './SaveBook'

export default function BookList({ books, onFavourite }) {

    return (
        <div className='book-list'>
            {books?.map((book, index) => (
                <SaveBook key={index} book={book} onFavourite={onFavourite} />
            ))}
        </div>
    )
}
