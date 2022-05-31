import React from 'react'
import FinishedBook from './FinishedBook'

export default function FinishList({ books }) {

    return (
        <>
            <h2 className="heading">Finished</h2>
            <div className="book-list">
                {books?.map((book, index) => (
                    <FinishedBook key={index} book={book} />
                ))}
            </div>
        </>
    )
}