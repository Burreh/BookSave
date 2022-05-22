import React from 'react'

export default function SearchBox(props) {

    const handleSubmit = (event) => {
        event.preventDefault();
        // Runs the function getBooks() from App.js
        // which fetches data from Google API
        props.getBooks()
    }

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input
                    type='text'
                    onChange={(event) => props.setSearch(event.target.value)}
                    className='form-control'
                    placeholder='Search for a book...'
                />
                <button type='submit' className='btn btn-primary'>Search</button>
            </form>
        </div>
    )
}
