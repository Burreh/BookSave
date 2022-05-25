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
                <form className="form-inline my-2 my-lg-0" onSubmit={handleSubmit}>
                    <div className="input-group">
                        <input className="form-control"
                            id="address-bar"
                            type="search"
                            placeholder="Search..."
                            aria-label="Search..."
                            onChange={(event) => props.setSearch(event.target.value)}
                        />
                        <div className="input-group-append">
                            <button type='submit' className='btn btn-primary'>
                                <i className="fa fa-search"></i>
                            </button>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    )
}