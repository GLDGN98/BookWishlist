import React, { useEffect, useState } from "react";
import { bookService } from "../services/book.service";

export const BookPreview = ({ book }) => {
  // if (!book.isWished) book.isWished = false
  // console.log

  // const [isChecked, setIsChecked] = useState(book?.isWished)

  useEffect(() => {
    // setIsChecked(book.isWished)
  }, [book])

  function handleWishBook({ target }) {
    book.isWished = target.checked
    bookService.save(book)
  }

  if (!book) return <h1>Loading...</h1>
  return (
    <div className="book-preview">
      <div>
        <h3>{book.title}</h3>
        <input type="checkbox" name="isWished" id="wish-book" onChange={handleWishBook} />
      </div>

      <hr />

      <p>{book.author}</p>
      <p className="book-desc">{book.description}</p>
      <p>Rating: {book.rating}</p>
      <p>Price: ${book.price}</p>

    </div>)
}
