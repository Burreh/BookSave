import React from 'react'
import { Card, Button } from 'react-bootstrap'

export default function SaveBook({ book, onDelete }) {

    const bookInfo = book.volumeInfo;
    console.log(bookInfo)

    return (
        <div className='book-box'>
            {/* If imagelinks is undefined, don't show those books' covers */}
            {bookInfo.imageLinks !== undefined &&
                <Card border="dark" bg="light" style={{ width: '18rem' }}>
                    <a href={bookInfo.infoLink} target="_blank">
                        <Card.Img variant="top" src={bookInfo.imageLinks.smallThumbnail}
                            alt={bookInfo.title} />
                    </a>
                    <Card.Body>
                        <Card.Title>TITLE </Card.Title>
                        <Card.Text>
                            #text
                        </Card.Text>
                        {/* TODO! click to save to finished */}
                        <Button variant="outline-success">
                            Finish
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
