import React from 'react'

export default function SearchBox(props) {

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(props.search);
        return props.getBooks()
    }

    const handleChange = (e) => {
        const searchValue = e.target.value;
        props.setSearch(searchValue);
    }

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input
                    type='text'
                    onChange={handleChange}
                    value={props.search}
                    className='form-control'
                    placeholder='Search for a book...'
                >
                </input>
                <button type='submit' className='btn btn-primary'>Search</button>
            </form>
        </div>
    )
}
