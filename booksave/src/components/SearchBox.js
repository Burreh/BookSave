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
            <div className="form-outline" id="search-bar">
                <form className="form-inline my-2 my-lg-0" onSubmit={handleSubmit}>
                    <div className="input-group">
                        <input className="form-control "
                            type="search"

                            placeholder="Search..."
                            aria-label="Search..."
                            onChange={(event) => props.setSearch(event.target.value)}
                        />
                        <button type='submit' className='btn btn-primary'>
                            <i className="fa fa-search"></i>
                        </button>
                    </div>
                </form>
            </div>
        </div>
    )
}