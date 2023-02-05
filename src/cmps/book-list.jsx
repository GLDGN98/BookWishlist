import React from "react";
import { BookPreview } from "./book-preview";


export const BookList = ({ books }) => {
  return <ul className="book-list">
    {books?.map((book, idx) => {
      return (
        <li key={idx}>
          <BookPreview book={book} />
        </li>
      )
    })}
  </ul>;
};
