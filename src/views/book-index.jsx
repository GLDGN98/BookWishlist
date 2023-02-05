import React, { useEffect, useState } from "react";
import { BookList } from "../cmps/book-list";
import { WishlistBooks } from "../cmps/wishlist-books";
import { bookService } from "../services/book.service";

export const BookIndex = () => {
var PAGE_SIZE = 1
var PAGE_IDX = 0

  const [book, setBook] = useState({})

  useEffect(() => {
    loadBook()
  }, [])


  async function loadBook() {
    const books = await bookService.query()
    const currBook = books.slice(PAGE_IDX * PAGE_SIZE, (PAGE_IDX + 1) * PAGE_SIZE)
    setBook(...currBook)
  }

  function onNextPage() {
      
  }

 function onPrevPage() {

  }

  console.log(book)


  return <div className="book-index">
    <BookList onNextPage={onNextPage} onPrevPage={onPrevPage} book={book}  />
    <WishlistBooks />
  </div>;
};
