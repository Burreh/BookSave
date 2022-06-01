import React from 'react'
import AddBook from './AddBook'

export default function BookList({ books, onFavourite }) {

    return (
        <div className='book-list'>
            {books?.map((book, index) => (
                <AddBook key={index} book={book} onFavourite={onFavourite} />
            ))}
        </div>
    )
}
