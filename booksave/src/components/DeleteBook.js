import React from 'react'
import { Card, Button } from 'react-bootstrap'

export default function SaveBook({ book, onDelete, onFinish }) {

    const bookInfo = book.volumeInfo;

    return (
        <div className='book-box'>
            {/* If imagelinks is undefined, don't show those books' covers */}
            {bookInfo.imageLinks !== undefined &&
                <Card border="primary" bg="secondary" style={{ width: '18rem' }}>
                    <a href={bookInfo.infoLink} target="_blank" rel="noreferrer">
                        <Card.Img variant="top" src={bookInfo.imageLinks.thumbnail}
                            alt={bookInfo.title} />
                    </a>
                    <Card.Body>
                        <Card.Title>{bookInfo.title}</Card.Title>
                        {/* TODO! click to save to finished */}
                        <Button variant="outline-light"
                            onclick={() => onFinish(book)}>Finish
                        </Button>
                        <Button variant="outline-danger"
                            onClick={() => onDelete(book)}>Delete
                        </Button>
                    </Card.Body>
                </Card>
            }
        </div>
    )
}
