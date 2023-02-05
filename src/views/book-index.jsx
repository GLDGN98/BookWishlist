import React from "react";
import { BookList } from "../cmps/book-list";
import { BookService } from "../services/book.service";

export const BookIndex = () => {
  return <div className="book-index">
    <BookList />
  </div>;
};
