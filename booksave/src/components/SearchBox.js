import React from 'react'

export default function SearchBox(props) {

    const handleSubmit = (event) => {
        event.preventDefault();
        // Runs the function getBooks() from App.js
        // which fetches data from Google API
        props.getBooks()
    }

    return (
        <div className="input-group">
            <div className="form-outline">
                <form onSubmit={handleSubmit}>
                    <label className="form-label">Search</label>
                    <input
                        type='search'
                        onChange={(event) => props.setSearch(event.target.value)}
                        className='form-control'
                        placeholder='Search for a book...'
                    />

                    <button type='submit' className='btn btn-primary'>
                        <i class="fa fa-search"></i>
                    </button>

                </form>
            </div>
        </div>
    )
}
