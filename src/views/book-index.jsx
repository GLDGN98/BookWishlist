import React, { useEffect, useState } from "react";
import { BookList } from "../cmps/book-list";
import { WishlistBooks } from "../cmps/wishlist-books";
import { bookService } from "../services/book.service";

export const BookIndex = () => {
  const PAGE_SIZE = 1;
  const [pageIdx, setPageIdx] = useState(0);
  const [book, setBook] = useState({});

  useEffect(() => {
    loadBook();
  }, []);

  async function loadBook() {
    const books = await bookService.query();
    const currBook = books.slice(pageIdx * PAGE_SIZE, (pageIdx + 1) * PAGE_SIZE);
    setBook(...currBook);
  }

  function onNextPage() {
    setPageIdx(pageIdx + 1);
    loadBook();
  }

  function onPrevPage() {
    setPageIdx(pageIdx - 1);
    loadBook();
  }

  return (
    <div className="book-index">
      <BookList onNextPage={onNextPage} onPrevPage={onPrevPage} book={book} />
      <WishlistBooks />
    </div>
  );
};