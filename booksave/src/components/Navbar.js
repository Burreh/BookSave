import React from 'react'
import { Link } from 'react-router-dom';

export default function Navbar() {
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                    <li className="nav-item">
                        <Link to="/">Home</Link> |{" "}
                    </li>

                    <li className="nav-item">
                        <Link to="/To-read">To-read-list</Link>
                    </li>
                </ul>
            </div>

        </nav >
    )
}
