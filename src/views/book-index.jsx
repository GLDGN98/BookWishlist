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

  useEffect(() => {
    bookPaging(1)

  }, [books])

  async function loadBooks() {
    const books = await bookService.query();

    setBooks(books)
  }

  function bookPaging(diff) {
    const currBook = books.slice(pageIdx * PAGE_SIZE, (pageIdx + 1) * PAGE_SIZE)
    setBook(...currBook)
    setPageIdx(pageIdx + diff || 0)
  }

  function onChangePage(diff) {
    setPageIdx(pageIdx + (diff))
    bookPaging(diff)
  }

  return (
    <div className="book-index">
      <BookList pageIdx={pageIdx} setBook={setBook} books={books} setBooks={setBooks} onChangePage={onChangePage} book={book} />
      <WishlistBooks books={books} />
    </div>
  )
}