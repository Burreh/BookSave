import React from 'react'
import DeleteBook from './DeleteBook'

export default function ToReadList({ books, onDelete, onFinish }) {

    return (
        <>
            <h2 className="heading">To-Read</h2>
            <div className="book-list">
                {books?.map((book, index) => (
                    <DeleteBook key={index} book={book} onDelete={onDelete} onFinish={onFinish} />
                ))}
            </div>
        </>
    )
}