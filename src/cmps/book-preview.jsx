import React from "react";

export const BookPreview = ({book}) => {
  return <div className="book-preview">
    <div>
    <h3>{book.title}</h3>
    <input type="checkbox" name="" id="" />
    </div>
    <hr />
    <p>{book.author}</p>
    <p>{book.description}</p>
    <p>Rating: {book.rating}</p>
    <p>Price: ${book.price}</p>
  </div>;
};
