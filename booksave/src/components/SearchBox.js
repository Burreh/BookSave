import React from 'react'

export default function SearchBox(props) {

    const handleSubmit = e => {
        e.preventDefault();

    }

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input
                    type='text'
                    onChange={(e) => props.setSearch(e.target.value)}
                    className='form-control'
                    placeholder='Search for a book...'
                >
                </input>
                <button type='submit' className='btn btn-primary'>Search</button>
            </form>
        </div>
    )
}
