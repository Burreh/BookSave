import React from 'react'
import { Link } from 'react-router-dom';

export default function Navbar() {
    return (
        <nav className="navbar">
            <ul>
                <li>
                    <Link to="/">Booksave</Link > {''}
                </li>

                <li>
                    <Link to="/To-read">To-read-list</Link>
                </li>
            </ul>


        </nav>
    )
}
