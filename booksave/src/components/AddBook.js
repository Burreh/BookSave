import React from 'react'
import { Card, Button } from 'react-bootstrap'
import { toast } from 'react-toastify';

export default function AddBook({ book, onFavourite }) {
    const bookInfo = book.volumeInfo;
    const toastId = React.useRef(null);

    // Displays a toast ("pop-up") when a user adds a book
    const notify = () => {
        if (!toast.isActive(toastId.current)) {
            toastId.current = toast.info("Book added!", {
                theme: 'colored',
                position: toast.POSITION.TOP_CENTER
            });
        }
    }

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
                        <Button variant="primary" onClick={() => { onFavourite(book); notify() }}>Add To-Read</Button>
                    </Card.Body>
                </Card>
            }
        </div>
    )
}
