import React, { useRef } from 'react'

export default function SearchBox({ setSearch }) {
    const inputValue = useRef();

    // Changes the search value whenever a user submits
    const handleSubmit = (event) => {
        event.preventDefault();
        if (inputValue.current.value !== '') {
            setSearch(inputValue.current.value.toLowerCase());
        }
    }

    return (
        <div className="input-group">
            <div className="form-outline" id="search-bar">
                <form className="form-inline my-2 my-lg-0" onSubmit={handleSubmit}>
                    <div className="input-group">
                        <input className="form-control"
                            id="search-input"
                            type="search"
                            placeholder="Search..."
                            aria-label="Search..."
                            ref={inputValue}
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