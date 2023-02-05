import React, { useEffect, useState } from "react";
import { bookService } from "../services/book.service";
import { MdStar, MdStarBorder } from "react-icons/md";

export const BookPreview = ({ book, setBooks, books }) => {
  const [isChecked, setIsChecked] = useState(book?.isWished || false)

  useEffect(() => {
    setIsChecked(book?.isWished || false)
  }, [book])

  async function handleWishBook({ target }) {
    setIsChecked(target.checked);
    book.isWished = target.checked
    await bookService.save(book)
    setBooks([...books])
  }

  function ratingToStar(rating) {
    let rounderRating = Math.round(rating)
    let starRating = []
    while (rounderRating > 0) {
      starRating.push(<MdStar style={{ color: 'gold' }} />)
      rounderRating -= 1
    }
    if (starRating.length < 5) {
      while (starRating.length < 5) {
        starRating.push(<MdStarBorder />)
      }
    }
    return starRating
  }

  if (!book) return <h1>No more books to show😥</h1>
  return (
    <div className="book-preview">
      <div className="book-header">
        <h4>{book.title}</h4>
        <input type="checkbox" name="isWished" id="wish-book" checked={isChecked} onChange={handleWishBook} />
      </div>

      <hr />

      <p className="book-auth">{book.author}</p>
      <p className="book-desc">{book.description}</p>
      <p>Rating: <span className="rating">{ratingToStar(book.rating)}</span></p>
      <p>Price: ${book.price}</p>

    </div>)
}
