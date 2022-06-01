import React from 'react'
import { Card, Button } from 'react-bootstrap'

export default function SaveBook({ book, onFavourite }) {

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
                        <Button variant="outline-primary"
                            onClick={() => onFavourite(book)}
                        >Add To-Read
                        </Button>
                    </Card.Body>
                </Card>
            }
        </div>
    )
}
