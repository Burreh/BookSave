import React from 'react'
import { Link } from 'react-router-dom';
import { Navbar, Nav } from 'react-bootstrap'

export default function Header() {
    return (
        <>
            <Navbar id="navbar" bg="dark" variant="dark" expand="lg">
                <Navbar.Brand as={Link} to="/">Booksave</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                        <Nav.Link as={Link} to="/">Home</Nav.Link>
                        <Nav.Link as={Link} to="/To-read">To-Read</Nav.Link>
                        <Nav.Link as={Link} to="/Finished-reading">Finished</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        </>
    )
}