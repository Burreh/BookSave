import React from 'react'
import Card from 'react-bootstrap/Card'
import { Link } from 'react-router-dom';

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
                        <button
                            className="btn btn-danger"
                            onClick={() => onDelete(book)}
                            style={{ cursor: 'pointer' }}
                        >Delete
                        </button>
                    </Card.Body>
                </Card>
            }
        </div>
    )
}
