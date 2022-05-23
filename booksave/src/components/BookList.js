import React from 'react'
import SaveBook from './SaveBook'
import Favourites from './Favourites'

export default function BookList({ books, onFavourite, button }) {

    return (
        <div>
            {books.map((book, index) => (
                <SaveBook key={index} book={book} onFavourite={onFavourite} button={button} />
            ))}
        </div>
    )
}
