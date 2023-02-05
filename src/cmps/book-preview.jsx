import React, { useEffect, useState } from "react";
import { bookService } from "../services/book.service";

export const BookPreview = ({ book, setBooks, books }) => {
  const [isChecked, setIsChecked] = useState(book?.isWished || false)

  useEffect(() => {
    setIsChecked(book?.isWished || false)
  }, [book])

 async function handleWishBook({ target }) {
    book.isWished = target.checked
    await bookService.save(book)
    setBooks([...books])
  }

  if (!book) return <h1>Loading...</h1>
  return (
    <div className="book-preview">
      <div className="book-header">
        <h4>{book.title}</h4>
        <input type="checkbox" name="isWished" id="wish-book" defaultChecked={isChecked} onChange={handleWishBook} />
      </div>

      <hr />

      <p className="book-auth">{book.author}</p>
      <p className="book-desc">{book.description}</p>
      <p>Rating: {book.rating}</p>
      <p>Price: ${book.price}</p>

    </div>)
}
