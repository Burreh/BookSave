import React from 'react'
import Card from 'react-bootstrap/Card'

export default function SaveBook({ book, onFavourite }) {

    const bookInfo = book.volumeInfo;

    return (
        <div className='book-box'>
            {/* If imagelinks is undefined, don't show those books' covers */}
            {bookInfo.imageLinks !== undefined &&
                <Card border="dark" bg="light" style={{ width: '18rem' }}>
                    <Card.Img variant="top" src={bookInfo.imageLinks.smallThumbnail}
                        alt={bookInfo.title} />
                    <Card.Body>
                        <Card.Title>TITLE </Card.Title>
                        <Card.Text>
                            ##
                        </Card.Text>
                        <button
                            className="btn btn-primary"
                            onClick={() => onFavourite(book)}
                            style={{ cursor: 'pointer' }}
                        >Save
                        </button>
                    </Card.Body>
                </Card>
            }
        </div>
    )
}
