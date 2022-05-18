import React from 'react'
import Book from './Book'

export default function BookList() {

    return (
        <div>
            <ul className="list-group">
                {/* {books.map((book, index) => (
                    <Book key={'book' + index} book={book} />
                ))} */}
            </ul>
        </div>
    )
}
