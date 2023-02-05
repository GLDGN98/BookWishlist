import React from "react";

export const BookPreview = ({book}) => {
  return <div className="book-preview">
    <h3>{book.title}</h3>
    <hr />
    <p>{book.author}</p>
    <p>{book.description}</p>
    <p>Rating: {book.rating}</p>
    <p>Price: ${book.price}</p>
  </div>;
};
