import React, { useEffect, useState } from "react";
import { BookList } from "../cmps/book-list";
import { WishlistBooks } from "../cmps/wishlist-books";
import { bookService } from "../services/book.service";

export const BookIndex = () => {
  const PAGE_SIZE = 1
  const [pageIdx, setPageIdx] = useState(0)
  const [book, setBook] = useState({})
  const [books, setBooks] = useState([])


  useEffect(() => {
    loadBooks()
  }, [])

  async function loadBooks() {
    const books = await bookService.query();
    const currBook = books.slice(pageIdx * PAGE_SIZE, (pageIdx + 1) * PAGE_SIZE);

    setBook(...currBook)
    setBooks(books)
  }

  function onNextPage() {
    setPageIdx(pageIdx + 1)
    loadBooks()
  }

  function onPrevPage() {
    setPageIdx(pageIdx - 1)
    loadBooks()
  }

  return (
    <div className="book-index">
      <BookList onNextPage={onNextPage} onPrevPage={onPrevPage} book={book} />
      <WishlistBooks books={books} />
    </div>
  )
}